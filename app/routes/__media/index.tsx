import {
  ActionFunction,
  Form,
  LinksFunction,
  LoaderFunction,
  json,
  useLoaderData,
} from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'
import { Media, updateBookmark } from '~/media'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'
import { MediaGrid, links as mediaGridLinks } from '~/components/media-grid'
import { MediaReel, links as mediaReelLinks } from '~/components/media-reel'
import {
  SearchInput,
  links as searchInputLinks,
} from '~/components/search-input'
import { getUserId, requireUserId } from '~/utils/session.server'

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
  ...searchInputLinks(),
]

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  const formData = await request.formData()
  const isBookmarked = formData.get('isBookmarked')
  const mediaId = formData.get('mediaId')

  if (typeof mediaId !== 'string') {
    return json({ message: 'Bad form data' }, { status: 400 })
  }

  await updateBookmark(mediaId, userId, Boolean(isBookmarked))

  return null
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request)

  const recommendedQuery = db.media.findMany({
    take: 20,
    select: {
      id: true,
      title: true,
      year: true,
      rating: true,
      category: {
        select: { display: true },
      },
      image: true,
      users: {
        where: { id: userId ?? '' },
        select: { id: true },
      },
    },
  })
  const trendingQuery = db.media.findMany({
    take: 20,
    where: { isTrending: true },
    select: {
      id: true,
      title: true,
      year: true,
      rating: true,
      category: {
        select: { display: true },
      },
      image: true,
      users: {
        where: { id: userId ?? '' },
        select: { id: true },
      },
    },
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
      isBookmarked: item.users.length > 0,
    })),
    recommended: recommended.map((item) => ({
      ...item,
      category: item.category.display,
      imageSlug: item.image,
      isBookmarked: item.users.length > 0,
    })),
  }
  return json(data)
}

export default function Recommended(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <>
      <Form method="get" action="/search">
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
                isBookmarked={mediaItem.isBookmarked}
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
              isBookmarked={mediaItem.isBookmarked}
            />
          )}
        />
      </div>
    </>
  )
}
