import { Avatar, links as avatarLinks } from '~/components/avatar'
import { LinksFunction, Outlet } from 'remix'
import { Masthead, links as mastheadLinks } from '~/components/masthead'
import {
  PrimaryNavigation,
  links as primaryNavigationLinks,
} from '~/components/primary-navigation'

export const links: LinksFunction = () => [
  ...mastheadLinks(),
  ...primaryNavigationLinks(),
  ...avatarLinks(),
]

export default function Catalog() {
  return (
    <>
      <Masthead
        navigation={<PrimaryNavigation />}
        avatar={<Avatar src="/assets/image-avatar.png" />}
      />
      <Outlet />
    </>
  )
}
