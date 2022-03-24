import { LoaderFunction, json, useLoaderData } from 'remix'

import { Heading } from '~/components/heading'
import { inflect } from '~/utils'

type LoaderData = {
  query: string
  results: {
    count: number
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') ?? ''

  const data: LoaderData = {
    query,
    results: {
      count: 0,
    },
  }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()

  const getHeadingText = (count: number, query: string) =>
    `Found ${count} ${inflect('result')(count)} for '${query}'`
  return (
    <div className="stack">
      <Heading level={2} size="m">
        {getHeadingText(data.results.count, data.query)}
      </Heading>
    </div>
  )
}
