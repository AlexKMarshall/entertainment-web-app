import { Form, Link, LinksFunction, useLocation } from 'remix'

import { LogoIcon } from '~/components/icons'
import { ReactNode } from 'react'
import styles from './masthead.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  navigation: ReactNode
  avatar: ReactNode
  isLoggedIn: boolean
}
export function Masthead({
  navigation,
  avatar,
  isLoggedIn,
}: Props): JSX.Element {
  const { pathname } = useLocation()
  return (
    <div className="masthead">
      <Link to="/">
        <LogoIcon className="logo color-red-300" />
        <h1 className="visually-hidden">Entertainment Company</h1>
      </Link>
      {navigation}
      {isLoggedIn ? (
        <Form method="post" action="/logout">
          <button>
            <span className="visually-hidden">Logout</span>
            {avatar}
          </button>
        </Form>
      ) : (
        <Link to={`/login?redirectTo=${pathname}`}>
          <span className="visually-hidden">Login</span>
          {avatar}
        </Link>
      )}
    </div>
  )
}
