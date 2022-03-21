import { LinksFunction } from 'remix'
import styles from './avatar.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = { src: string; alt?: string }

export function Avatar({ src, alt = '' }: Props): JSX.Element {
  return (
    <img className="avatar" src={src} alt={alt} width={40} height={40}></img>
  )
}
