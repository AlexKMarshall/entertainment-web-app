import { LinksFunction } from 'remix'
import { Media } from '~/media'
import styles from './media-grid.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = { items: Media[]; renderItem: (item: Media) => JSX.Element }
export function MediaGrid({ items, renderItem }: Props): JSX.Element {
  return (
    <ul className="media-grid">
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
