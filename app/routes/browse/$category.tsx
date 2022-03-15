import { LinksFunction, LoaderFunction, json, useLoaderData } from 'remix'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'

import { Media } from '~/media'
import { db } from '~/utils/db.server'

type LoaderData = {
  categoryDisplay: string
  media: Media[]
}

export const links: LinksFunction = () => [...mediaCardLinks()]

export const loader: LoaderFunction = async ({ params }) => {
  const { category } = params

  const dbCategory = await db.category.findUnique({
    where: { name: category },
    select: {
      display: true,
      media: {
        take: 20,
        select: {
          id: true,
          title: true,
          year: true,
          rating: true,
          category: {
            select: { display: true },
          },
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
    media: dbCategory.media.map((item) => ({
      ...item,
      category: item.category.display,
    })),
  }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <main>
      <h1>{data.categoryDisplay}</h1>

      {data.media.map((mediaItem) => (
        <MediaCard
          key={mediaItem.id}
          title={mediaItem.title}
          year={mediaItem.year}
          category={mediaItem.category}
          rating={mediaItem.rating}
        />
      ))}
    </main>
  )
}
