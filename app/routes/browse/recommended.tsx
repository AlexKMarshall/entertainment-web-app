import { LoaderFunction, json, useLoaderData } from 'remix'

import { db } from '~/utils/db.server'

type LoaderData = {
  trending: { title: string; id: string }[]
  recommended: {
    title: string
    id: string
  }[]
}

export const loader: LoaderFunction = async () => {
  const recommendedQuery = db.media.findMany({
    take: 20,
    select: { id: true, title: true },
  })
  const trendingQuery = db.media.findMany({
    take: 20,
    where: { isTrending: true },
    select: { id: true, title: true },
  })

  const [recommended, trending] = await Promise.all([
    recommendedQuery,
    trendingQuery,
  ])

  const data: LoaderData = {
    trending,
    recommended,
  }
  return json(data)
}

export default function Recommended(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <main>
      <h2>Trending</h2>
      <ul>
        {data.trending.map((mediaItem) => (
          <li key={mediaItem.id}>{mediaItem.title}</li>
        ))}
      </ul>
      <h2>Recommended for you</h2>
      <ul>
        {data.recommended.map((mediaItem) => (
          <li key={mediaItem.id}>{mediaItem.title}</li>
        ))}
      </ul>
    </main>
  )
}
