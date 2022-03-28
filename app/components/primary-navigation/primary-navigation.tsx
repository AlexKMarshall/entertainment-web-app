import { BookmarkIcon, HomeIcon, MovieIcon, TVSeriesIcon } from '../icons'
import { LinksFunction, NavLink } from 'remix'

import styles from './primary-navigation.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  isLoggedIn: boolean
}
export function PrimaryNavigation({ isLoggedIn }: Props): JSX.Element {
  return (
    <nav className="primary-navigation">
      <ul>
        <li>
          <NavLink to="/">
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
        {isLoggedIn ? (
          <li>
            <NavLink to="bookmarked">
              <BookmarkIcon className="nav-icon" />
              <span className="visually-hidden">Bookmarked shows</span>
            </NavLink>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}
