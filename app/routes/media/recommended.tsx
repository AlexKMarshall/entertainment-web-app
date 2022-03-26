import {
  ActionFunction,
  Form,
  LinksFunction,
  LoaderFunction,
  json,
  useLoaderData,
} from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'
import { MediaGrid, links as mediaGridLinks } from '~/components/media-grid'
import { MediaReel, links as mediaReelLinks } from '~/components/media-reel'
import {
  SearchInput,
  links as searchInputLinks,
} from '~/components/search-input'

import { Media } from '~/media'
import { db } from '~/utils/db.server'
import { requireUserId } from '~/utils/session.server'

type LoaderData = {
  trending: Media[]
  recommended: Media[]
}

export const links: LinksFunction = () => [
  ...headingLinks(),
  ...mediaCardLinks(),
  ...mediaGridLinks(),
  ...mediaReelLinks(),
  ...searchInputLinks(),
]

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  const formData = await request.formData()
  const isBookmarked = formData.get('isBookmarked')
  const mediaId = formData.get('mediaId')

  if (isBookmarked && typeof mediaId === 'string') {
    await db.media.update({
      where: { id: mediaId },
      data: {
        users: { connect: { id: userId } },
      },
    })
  }

  if (!isBookmarked && typeof mediaId === 'string') {
    await db.media.update({
      where: { id: mediaId },
      data: {
        users: {
          disconnect: { id: userId },
        },
      },
    })
  }
  return null
}

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
    <>
      <Form method="get" action="/media/search">
        <SearchInput
          inputProps={{ id: 'search', name: 'query' }}
          label="Search for movies or TV Series"
        />
      </Form>
      <div className="stack">
        <Heading level={2} size="l">
          Trending
        </Heading>
        <div className="full-bleed">
          <MediaReel
            items={data.trending}
            renderItem={(mediaItem) => (
              <MediaCard
                key={mediaItem.id}
                id={mediaItem.id}
                title={mediaItem.title}
                year={mediaItem.year}
                category={mediaItem.category}
                rating={mediaItem.rating}
                imageSlug={mediaItem.imageSlug}
                isTrending={true}
              />
            )}
          />
        </div>
      </div>

      <div className="stack">
        <Heading level={2} size="l">
          Recommended for you
        </Heading>
        <MediaGrid
          items={data.recommended}
          renderItem={(mediaItem) => (
            <MediaCard
              key={mediaItem.id}
              id={mediaItem.id}
              title={mediaItem.title}
              year={mediaItem.year}
              category={mediaItem.category}
              rating={mediaItem.rating}
              imageSlug={mediaItem.imageSlug}
            />
          )}
        />
      </div>
    </>
  )
}
