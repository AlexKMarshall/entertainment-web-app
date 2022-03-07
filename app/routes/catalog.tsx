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
            <Link to="movies">Movies</Link>
          </li>
          <li>
            <Link to="tv">TV Shows</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
