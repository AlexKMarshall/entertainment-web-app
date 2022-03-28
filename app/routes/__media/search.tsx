import {
  ActionFunction,
  Form,
  LinksFunction,
  LoaderFunction,
  json,
  useLoaderData,
} from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'
import { Media, getCategoryTitle, updateBookmark } from '~/media'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'
import { MediaGrid, links as mediaGridLinks } from '~/components/media-grid'
import {
  SearchInput,
  links as searchInputLinks,
} from '~/components/search-input'
import { getUserId, requireUserId } from '~/utils/session.server'

import { db } from '~/utils/db.server'
import { inflect } from '~/utils'

type LoaderData = {
  query: string
  categoryName: string
  bookmarked: string
  results: {
    count: number
    media: Media[]
  }
}

export const links: LinksFunction = () => [
  ...headingLinks(),
  ...mediaGridLinks(),
  ...mediaCardLinks(),
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
  const url = new URL(request.url)
  const query = url.searchParams.get('query') ?? ''
  const categoryName = url.searchParams.get('category') ?? ''
  const bookmarked = url.searchParams.get('bookmarked') ?? ''

  const media = await db.media.findMany({
    where: {
      ...(bookmarked === 'true' && userId
        ? {
            users: {
              some: { id: userId },
            },
          }
        : {}),
      ...(categoryName ? { category: { name: categoryName } } : {}),
      title: {
        search: query,
      },
    },
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
        where: {
          id: userId ?? '',
        },
        select: {
          id: true,
        },
      },
    },
  })

  const data: LoaderData = {
    query,
    categoryName,
    bookmarked,
    results: {
      count: media.length,
      media: media.map((item) => ({
        ...item,
        category: item.category.display,
        imageSlug: item.image,
        isBookmarked: item.users.length > 0,
      })),
    },
  }
  return json(data)
}

const getSearchLabel = (bookmarked: string, category: string): string => {
  if (bookmarked == 'true') {
    return 'Search for bookmarked shows'
  }
  if (category) {
    return `Search for ${getCategoryTitle(category)}`
  }
  return `Search for movies or TV Series`
}
const getHeadingText = (count: number, query: string) =>
  `Found ${count} ${inflect('result')(count)} for '${query}'`

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  const searchLabel = getSearchLabel(data.bookmarked, data.categoryName)

  return (
    <>
      <Form method="get" action="/search">
        <SearchInput
          inputProps={{ id: 'search', name: 'query', defaultValue: data.query }}
          label={searchLabel}
        />
        <input type="hidden" name="category" value={data.categoryName} />
        <input type="hidden" name="bookmarked" value={data.bookmarked} />
      </Form>
      <div className="stack">
        <Heading level={2} size="l">
          {getHeadingText(data.results.count, data.query)}
        </Heading>
        <MediaGrid
          items={data.results.media}
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
