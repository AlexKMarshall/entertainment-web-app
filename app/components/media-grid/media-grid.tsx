import { LinksFunction } from 'remix'
import { Media } from '~/media'
import styles from './media-grid.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = { items: Media[]; renderItem: (item: Media) => JSX.Element }
export function MediaGrid({ items, renderItem }: Props): JSX.Element {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul className="media-grid" role="list">
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
