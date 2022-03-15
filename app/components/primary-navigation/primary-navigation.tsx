/* eslint-disable jsx-a11y/no-redundant-roles */
import { HomeIcon, MovieIcon, TVSeriesIcon } from '../icons'
import { Link, LinksFunction } from 'remix'

import styles from './primary-navigation.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {}
export function PrimaryNavigation(props: Props): JSX.Element {
  return (
    <nav className="primary-navigation">
      <ul role="list">
        <li>
          <Link to="recommended" className="nav-link">
            <HomeIcon className="nav-icon" />
            <span className="visually-hidden">Home</span>
          </Link>
        </li>
        <li>
          <Link to="movie" className="nav-link">
            <MovieIcon className="nav-icon" />
            <span className="visually-hidden">Movies</span>
          </Link>
        </li>
        <li>
          <Link to="tv-series" className="nav-link">
            <TVSeriesIcon className="nav-icon" />
            <span className="visually-hidden">TV Series</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
