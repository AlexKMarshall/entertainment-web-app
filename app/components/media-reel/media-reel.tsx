import { LinksFunction } from 'remix'
import { ReactNode } from 'react'
import styles from './media-reel.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = { children: ReactNode }
export function MediaReel({ children }: Props): JSX.Element {
  return <div className="media-reel">{children}</div>
}
