import { Heading, links as headingLinks } from '~/components/heading'
import { LinksFunction, LoaderFunction, json, useLoaderData } from 'remix'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'
import { MediaGrid, links as mediaGridLinks } from '~/components/media-grid'
import { MediaReel, links as mediaReelLinks } from '~/components/media-reel'

import { Media } from '~/media'
import { db } from '~/utils/db.server'

type LoaderData = {
  trending: Media[]
  recommended: Media[]
}

export const links: LinksFunction = () => [
  ...headingLinks(),
  ...mediaCardLinks(),
  ...mediaGridLinks(),
  ...mediaReelLinks(),
]

export const loader: LoaderFunction = async () => {
  const selectMedia = {
    id: true,
    title: true,
    year: true,
    rating: true,
    category: {
      select: { display: true },
    },
    image: true,
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
      imageSlug: item.image,
    })),
    recommended: recommended.map((item) => ({
      ...item,
      category: item.category.display,
      imageSlug: item.image,
    })),
  }
  return json(data)
}

export default function Recommended(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <div>
      <Heading level={2} size="l">
        Trending
      </Heading>

      <MediaReel>
        {data.trending.map((mediaItem) => (
          <MediaCard
            key={mediaItem.id}
            title={mediaItem.title}
            year={mediaItem.year}
            category={mediaItem.category}
            rating={mediaItem.rating}
            imageSlug={mediaItem.imageSlug}
            isTrending={true}
          />
        ))}
      </MediaReel>

      <Heading level={2} size="l">
        Recommended for you
      </Heading>
      <MediaGrid>
        {data.recommended.map((mediaItem) => (
          <MediaCard
            key={mediaItem.id}
            title={mediaItem.title}
            year={mediaItem.year}
            category={mediaItem.category}
            rating={mediaItem.rating}
            imageSlug={mediaItem.imageSlug}
          />
        ))}
      </MediaGrid>
    </div>
  )
}
