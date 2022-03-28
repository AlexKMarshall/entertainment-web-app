import { LinksFunction, Outlet } from 'remix'

import { LogoIcon } from '~/components/icons'
import styles from '~/styles/routes/auth.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function AuthPage(): JSX.Element {
  return (
    <main>
      <LogoIcon className="logo" />
      <Outlet />
    </main>
  )
}
