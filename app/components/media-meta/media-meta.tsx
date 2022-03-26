import { MovieIcon, TVSeriesIcon } from '../icons'

import { BodyText } from '../body-text'
import { LinksFunction } from 'remix'
import styles from './media-meta.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

function getCategoryIcon(category: string): JSX.Element {
  switch (category) {
    case 'Movie':
      return <MovieIcon />
    case 'TV Series':
      return <TVSeriesIcon />
    default:
      return <></>
  }
}

type MediaMetaProps = {
  year: number
  category: string
  rating: string
  size: 'm' | 's'
}
export function MediaMeta({
  year,
  category,
  rating,
  size,
}: MediaMetaProps): JSX.Element {
  return (
    <dl className="media-meta">
      <dt className="visually-hidden">Year released</dt>
      <BodyText component="dd" size={size}>
        {year}
      </BodyText>
      <dt className="visually-hidden">Category</dt>
      <BodyText component="dd" size={size}>
        {getCategoryIcon(category)} {category}
      </BodyText>
      <dt className="visually-hidden">Age rating</dt>
      <BodyText component="dd" size={size}>
        {rating}
      </BodyText>
    </dl>
  )
}
