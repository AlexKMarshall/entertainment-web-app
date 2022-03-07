import { Link, Outlet } from 'remix'

export default function Catalog() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="recommended">Recommended</Link>
          </li>
          <li>
            <Link to="movie">Movies</Link>
          </li>
          <li>
            <Link to="tv-series">TV Series</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
