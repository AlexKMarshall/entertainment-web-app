import { LoaderFunction, json, useLoaderData } from 'remix'

import { db } from '~/utils/db.server'

type LoaderData = {
  recommended: {
    title: string
    id: string
  }[]
}

export const loader: LoaderFunction = async () => {
  const media = await db.media.findMany({
    take: 20,
    select: { id: true, title: true },
  })

  const data: LoaderData = {
    recommended: media,
  }
  return json(data)
}

export default function Recommended(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <main>
      <h1>Recommended for you</h1>
      <ul>
        {data.recommended.map((mediaItem) => (
          <li key={mediaItem.id}>{mediaItem.title}</li>
        ))}
      </ul>
    </main>
  )
}
