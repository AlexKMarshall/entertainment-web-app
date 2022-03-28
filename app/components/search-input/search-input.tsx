import { LinksFunction } from 'remix'
import { SearchIcon } from '~/components/icons'
import styles from './search-input.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  label: string
  inputProps: { id: string; name: string; defaultValue?: string }
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
        autoComplete="off"
        autoCapitalize="off"
        className="font-size-400"
        {...inputProps}
      />
    </div>
  )
}
