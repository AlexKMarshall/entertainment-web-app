import { LinksFunction } from 'remix'
import { SearchIcon } from '~/components/icons'
import styles from './search-input.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  label: string
  inputProps: { id: string; name: string }
}
export function SearchInput({ inputProps, label }: Props): JSX.Element {
  return (
    <div className="search-input">
      <SearchIcon />
      <label htmlFor={inputProps.id} className="visually-hidden">
        {label}
      </label>
      <input
        type="search"
        placeholder={label}
        name={inputProps.name}
        id={inputProps.id}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  )
}
