import { Heading, links as headingLinks } from '~/components/heading'
import { LinksFunction, LoaderFunction, json, useLoaderData } from 'remix'

import { Media } from '~/media'
import { MediaCard } from '~/components/media-card'
import { db } from '~/utils/db.server'

type LoaderData = {
  trending: Media[]
  recommended: Media[]
}

export const links: LinksFunction = () => [...headingLinks()]

export const loader: LoaderFunction = async () => {
  const selectMedia = {
    id: true,
    title: true,
    year: true,
    rating: true,
    category: {
      select: { display: true },
    },
  }

  const recommendedQuery = db.media.findMany({
    take: 20,
    select: selectMedia,
  })
  const trendingQuery = db.media.findMany({
    take: 20,
    where: { isTrending: true },
    select: selectMedia,
  })

  const [recommended, trending] = await Promise.all([
    recommendedQuery,
    trendingQuery,
  ])

  const data: LoaderData = {
    trending: trending.map((item) => ({
      ...item,
      category: item.category.display,
    })),
    recommended: recommended.map((item) => ({
      ...item,
      category: item.category.display,
    })),
  }
  return json(data)
}

export default function Recommended(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <main>
      <Heading level={2}>Trending</Heading>

      {data.trending.map((mediaItem) => (
        <MediaCard
          key={mediaItem.id}
          title={mediaItem.title}
          year={mediaItem.year}
          category={mediaItem.category}
          rating={mediaItem.rating}
        />
      ))}

      <h2>Recommended for you</h2>
      {data.recommended.map((mediaItem) => (
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
