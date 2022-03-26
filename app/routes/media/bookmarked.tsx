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
import {
  SearchInput,
  links as searchInputLinks,
} from '~/components/search-input'
import { getUserId, requireUserId } from '~/utils/session.server'

import { Media } from '~/media'
import React from 'react'
import { db } from '~/utils/db.server'

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
  return (
    <>
      <Form method="get" action="/media/search">
        <SearchInput
          inputProps={{ id: 'search', name: 'query' }}
          label={`Search for bookmarked shows`}
        />
        <input type="hidden" name="bookmarked" value="true" />
      </Form>
      {data.map((category) => (
        <React.Fragment key={category.categoryName}>
          <div className="stack">
            <Heading level={2} size="m">
              {category.categoryDisplay}
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
    </>
  )
}
