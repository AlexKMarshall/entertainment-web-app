import { Avatar, links as avatarLinks } from '~/components/avatar'
import {
  LinksFunction,
  LoaderFunction,
  Outlet,
  json,
  useLoaderData,
} from 'remix'
import { Masthead, links as mastheadLinks } from '~/components/masthead'
import {
  PrimaryNavigation,
  links as primaryNavigationLinks,
} from '~/components/primary-navigation'

import { getUser } from '~/utils/session.server'
import styles from '~/styles/routes/media.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  ...mastheadLinks(),
  ...primaryNavigationLinks(),
  ...avatarLinks(),
]

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)
  const data: LoaderData = {
    user,
  }
  return json(data)
}

export default function Media() {
  const data = useLoaderData<LoaderData>()
  const isLoggedIn = Boolean(data.user)
  return (
    <div className="browse">
      <header>
        <Masthead
          navigation={<PrimaryNavigation isLoggedIn={isLoggedIn} />}
          avatar={<Avatar src="/assets/image-avatar.png" />}
          isLoggedIn={isLoggedIn}
        />
      </header>
      <main className="container stack stack-large">
        <Outlet />
      </main>
    </div>
  )
}
