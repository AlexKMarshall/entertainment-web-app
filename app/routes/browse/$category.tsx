import { LoaderFunction, json, useLoaderData } from 'remix'

import { db } from '~/utils/db.server'

type LoaderData = {
  categoryDisplay: string
  media: { title: string; id: string }[]
}

export const loader: LoaderFunction = async ({ params }) => {
  const { category } = params

  const dbCategory = await db.category.findUnique({
    where: { name: category },
    select: {
      display: true,
      media: {
        take: 20,
        select: {
          title: true,
          id: true,
        },
      },
    },
  })

  if (!dbCategory) {
    throw new Response(`Cannot find category with name ${category}`, {
      status: 404,
    })
  }

  const data: LoaderData = {
    categoryDisplay: dbCategory.display,
    media: dbCategory.media,
  }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <main>
      <h1>{data.categoryDisplay}</h1>
      <ul>
        {data.media.map((mediaItem) => (
          <li key={mediaItem.id}>{mediaItem.title}</li>
        ))}
      </ul>
    </main>
  )
}
