import { LoaderFunction, json, useLoaderData } from 'remix'

type LoaderData = {
  mediaType: string
}

export const loader: LoaderFunction = ({ params }) => {
  const { mediaType } = params

  if (!mediaType) {
    throw new Response('Invalid Parameters', { status: 400 })
  }

  const data: LoaderData = { mediaType }
  return json(data)
}

export default function CatalogType(): JSX.Element {
  const data = useLoaderData<LoaderData>()
  return (
    <main>
      <h1>{data.mediaType}</h1>
    </main>
  )
}
