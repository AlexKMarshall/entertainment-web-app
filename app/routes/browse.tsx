import { Avatar, links as avatarLinks } from '~/components/avatar'
import { LinksFunction, Outlet } from 'remix'
import { Masthead, links as mastheadLinks } from '~/components/masthead'
import {
  PrimaryNavigation,
  links as primaryNavigationLinks,
} from '~/components/primary-navigation'

import styles from '~/styles/routes/browse.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  ...mastheadLinks(),
  ...primaryNavigationLinks(),
  ...avatarLinks(),
]

export default function Catalog() {
  return (
    <div className="browse">
      <header>
        <Masthead
          navigation={<PrimaryNavigation />}
          avatar={<Avatar src="/assets/image-avatar.png" />}
        />
      </header>
      <main className="container stack">
        <Outlet />
      </main>
    </div>
  )
}
