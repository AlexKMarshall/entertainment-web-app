import { LoaderFunction, json, useLoaderData } from 'remix'

import { db } from '~/utils/db.server'

type LoaderData = {
  categoryDisplay: string
}

export const loader: LoaderFunction = async ({ params }) => {
  const { category } = params

  // if (typeof category !== 'string') {
  //   throw new Response('Invalid category parameter', {status: 400})
  // }

  const dbCategory = await db.category.findUnique({
    where: { name: category },
    select: { display: true },
  })

  if (!dbCategory) {
    throw new Response(`Cannot find category with name ${category}`, {
      status: 404,
    })
  }

  const data: LoaderData = { categoryDisplay: dbCategory.display }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <main>
      <h1>{data.categoryDisplay}</h1>
    </main>
  )
}
