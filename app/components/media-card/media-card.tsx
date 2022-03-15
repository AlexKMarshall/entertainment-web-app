import { BodyText } from '~/components/body-text'
import { Heading } from '~/components/heading'
import { LinksFunction } from 'remix'
import { ReactNode } from 'react'
import styles from './media-card.css'

type Props = {
  title: string
  year: number
  category: string
  rating: string
  isTrending?: boolean
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
]

export function MediaCard({
  title,
  year,
  category,
  rating,
  isTrending = false,
}: Props): JSX.Element {
  return (
    <article className="media-card">
      <MediaMeta
        year={year}
        category={category}
        rating={rating}
        size={isTrending ? 'm' : 's'}
      />
      <Heading level={3} size={isTrending ? 'm' : 's'}>
        {title}
      </Heading>
    </article>
  )
}

type MediaMetaProps = {
  year: number
  category: string | ReactNode
  rating: string
  size: 'm' | 's'
}
function MediaMeta({
  year,
  category,
  rating,
  size,
}: MediaMetaProps): JSX.Element {
  return (
    <dl>
      <dt className="visually-hidden">Year released</dt>
      <BodyText component="dd" size={size}>
        {year}
      </BodyText>
      <dt className="visually-hidden">Category</dt>
      <BodyText component="dd" size={size}>
        {category}
      </BodyText>
      <dt className="visually-hidden">Age rating</dt>
      <BodyText component="dd" size={size}>
        {rating}
      </BodyText>
    </dl>
  )
}
