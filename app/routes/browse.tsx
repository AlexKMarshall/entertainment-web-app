import { LinksFunction, Outlet } from 'remix'
import { Masthead, links as mastheadLinks } from '~/components/masthead'
import {
  PrimaryNavigation,
  links as primaryNavigationLinks,
} from '~/components/primary-navigation'

export const links: LinksFunction = () => [
  ...mastheadLinks(),
  ...primaryNavigationLinks(),
]

export default function Catalog() {
  return (
    <>
      <Masthead navigation={<PrimaryNavigation />} />
      <Outlet />
    </>
  )
}
