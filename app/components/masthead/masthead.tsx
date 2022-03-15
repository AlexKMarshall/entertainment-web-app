import { LinksFunction } from 'remix'
import { Logo } from '~/components/icons'
import styles from './masthead.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {}
export function Masthead(props: Props): JSX.Element {
  return (
    <header className="masthead">
      <Logo className="logo color-red-300" />
    </header>
  )
}
