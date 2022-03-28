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

import React from 'react'
import { db } from '~/utils/db.server'
import { requireUserId } from '~/utils/session.server'

type LoaderData = {
  categoryName: string
  categoryDisplay: string
  media: Media[]
}[]

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

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)

  const results = await db.category.findMany({
    select: {
      name: true,
      display: true,
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
        },
        where: {
          users: {
            some: {
              id: userId,
            },
          },
        },
      },
    },
  })

  const data: LoaderData = results.map((category) => ({
    categoryName: category.name,
    categoryDisplay: category.display,
    media: category.media.map((mediaItem) => ({
      ...mediaItem,
      imageSlug: mediaItem.image,
      category: mediaItem.category.display,
      isBookmarked: true,
    })),
  }))
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()

  const categoryData = data.filter((category) => category.media.length > 0)
  return (
    <>
      <Form method="get" action="/search">
        <SearchInput
          inputProps={{ id: 'search', name: 'query' }}
          label={`Search for bookmarked shows`}
        />
        <input type="hidden" name="bookmarked" value="true" />
      </Form>
      {categoryData.map((category) => (
        <React.Fragment key={category.categoryName}>
          <div className="stack">
            <Heading level={2} size="l">
              {getCategoryTitle(category.categoryName)}
            </Heading>

            <MediaGrid
              items={category.media}
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
        </React.Fragment>
      ))}
      {categoryData.length === 0 ? (
        <Heading level={2} size="s">
          You have no bookmarked items
        </Heading>
      ) : null}
    </>
  )
}
