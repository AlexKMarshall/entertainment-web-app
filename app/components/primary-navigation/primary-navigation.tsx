/* eslint-disable jsx-a11y/no-redundant-roles */
import { HomeIcon, MovieIcon, TVSeriesIcon } from '../icons'
import { LinksFunction, NavLink } from 'remix'

import styles from './primary-navigation.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {}
export function PrimaryNavigation(props: Props): JSX.Element {
  return (
    <nav className="primary-navigation">
      <ul role="list" className="switcher">
        <li>
          <NavLink to="recommended">
            <HomeIcon className="nav-icon" />
            <span className="visually-hidden">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="movie">
            <MovieIcon className="nav-icon" />
            <span className="visually-hidden">Movies</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="tv-series">
            <TVSeriesIcon className="nav-icon" />
            <span className="visually-hidden">TV Series</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
