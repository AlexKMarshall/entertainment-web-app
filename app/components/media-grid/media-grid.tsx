import { LinksFunction } from 'remix'
import { ReactNode } from 'react'
import styles from './media-grid.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = { children: ReactNode }
export function MediaGrid({ children }: Props): JSX.Element {
  return <div className="media-grid">{children}</div>
}
