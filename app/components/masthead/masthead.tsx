import { Form, Link, LinksFunction } from 'remix'

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
    <div className="masthead">
      <Link to="/">
        <LogoIcon className="logo color-red-300" />
        <h1 className="visually-hidden">Entertainment Company</h1>
      </Link>
      {navigation}
      <Form method="post" action="/logout">
        <button>
          <span className="visually=hidden">Logout</span>
          {avatar}
        </button>
      </Form>
    </div>
  )
}
