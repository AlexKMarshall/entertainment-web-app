import { Form, LinksFunction, LoaderFunction, json, useLoaderData } from 'remix'
import { Heading, links as headingLinks } from '~/components/heading'
import { Media, selectMedia } from '~/media'
import { MediaCard, links as mediaCardLinks } from '~/components/media-card'
import { MediaGrid, links as mediaGridLinks } from '~/components/media-grid'
import {
  SearchInput,
  links as searchInputLinks,
} from '~/components/search-input'

import { db } from '~/utils/db.server'
import { inflect } from '~/utils'

type LoaderData = {
  query: string
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
          inputProps={{ id: 'search', name: 'query' }}
          label="Search for movies or TV Series"
        />
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