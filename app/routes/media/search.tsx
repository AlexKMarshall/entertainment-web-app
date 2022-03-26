import {
  ActionFunction,
  Form,
  LinksFunction,
  LoaderFunction,
  json,
  useLoaderData,
} from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'
import { Media, selectMedia, updateBookmark } from '~/media'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'
import { MediaGrid, links as mediaGridLinks } from '~/components/media-grid'
import {
  SearchInput,
  links as searchInputLinks,
} from '~/components/search-input'

import { db } from '~/utils/db.server'
import { inflect } from '~/utils'
import { requireUserId } from '~/utils/session.server'

type LoaderData = {
  query: string
  categoryName: string
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
  const url = new URL(request.url)
  const query = url.searchParams.get('query') ?? ''
  const categoryName = url.searchParams.get('category') ?? ''

  const media = await db.media.findMany({
    where: {
      ...(categoryName ? { category: { name: categoryName } } : {}),
      title: {
        search: query,
      },
    },
    select: selectMedia,
  })

  const data: LoaderData = {
    query,
    categoryName,
    results: {
      count: media.length,
      media: media.map((item) => ({
        ...item,
        category: item.category.display,
        imageSlug: item.image,
      })),
    },
  }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()

  const getHeadingText = (count: number, query: string) =>
    `Found ${count} ${inflect('result')(count)} for '${query}'`
  return (
    <>
      <Form method="get" action="/media/search">
        <SearchInput
          inputProps={{ id: 'search', name: 'query', defaultValue: data.query }}
          label="Search for movies or TV Series"
        />
        <input type="hidden" name="category" value={data.categoryName} />
      </Form>
      <div className="stack">
        <Heading level={2} size="m">
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
            />
          )}
        />
      </div>
    </>
  )
}
