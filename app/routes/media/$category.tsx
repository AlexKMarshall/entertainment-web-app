import { Form, LinksFunction, LoaderFunction, json, useLoaderData } from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'
import { MediaGrid, links as mediaGridLinks } from '~/components/media-grid'
import {
  SearchInput,
  links as searchInputLinks,
} from '~/components/search-input'

import { Media } from '~/media'
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

export const loader: LoaderFunction = async ({ params }) => {
  const { category } = params

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
          category: {
            select: { display: true },
          },
          image: true,
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
    })),
  }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <>
      <Form method="get" action="/media/search">
        <SearchInput
          inputProps={{ id: 'search', name: 'query' }}
          label={`Search for ${data.categoryDisplay}`}
        />
        <input type="hidden" name="category" value={data.categoryName} />
      </Form>
      <div className="stack">
        <Heading level={2} size="m">
          {data.categoryDisplay}
        </Heading>

        <MediaGrid
          items={data.media}
          renderItem={(mediaItem) => (
            <MediaCard
              key={mediaItem.id}
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
