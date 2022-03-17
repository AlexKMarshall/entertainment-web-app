import { LinksFunction } from 'remix'
import { LogoIcon } from '~/components/icons'
import { ReactNode } from 'react'
import styles from './masthead.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  navigation: ReactNode
  avatar: ReactNode
}
export function Masthead({ navigation, avatar }: Props): JSX.Element {
  return (
    <header className="masthead">
      <LogoIcon className="logo color-red-300" />
      {navigation}
      {avatar}
    </header>
  )
}
