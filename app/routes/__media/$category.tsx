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

type LoaderData = {
  categoryName: string
  categoryDisplay: string
  media: Media[]
}

export const links: LinksFunction = () => [
  ...mediaCardLinks(),
  ...headingLinks(),
  ...mediaGridLinks(),
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

export const loader: LoaderFunction = async ({ request, params }) => {
  const { category } = params
  const userId = await getUserId(request)

  const dbCategory = await db.category.findUnique({
    where: { name: category },
    select: {
      display: true,
      name: true,
      media: {
        take: 20,
        select: {
          id: true,
          title: true,
          year: true,
          rating: true,
          image: true,
          category: {
            select: {
              display: true,
            },
          },
          users: {
            select: {
              id: true,
            },
            where: {
              id: userId ?? undefined,
            },
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
    categoryName: dbCategory.name,
    categoryDisplay: dbCategory.display,
    media: dbCategory.media.map((item) => ({
      ...item,
      category: item.category.display,
      imageSlug: item.image,
      isBookmarked: item.users.length > 0,
    })),
  }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  const searchLabel = `Search for ${getCategoryTitle(data.categoryName)}`
  return (
    <>
      <Form method="get" action="/search">
        <SearchInput
          inputProps={{ id: 'search', name: 'query' }}
          label={searchLabel}
        />
        <input type="hidden" name="category" value={data.categoryName} />
      </Form>
      <div className="stack">
        <Heading level={2} size="l">
          {getCategoryTitle(data.categoryName)}
        </Heading>

        <MediaGrid
          items={data.media}
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
