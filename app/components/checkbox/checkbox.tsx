import { LinksFunction } from '@remix-run/vercel/node_modules/@remix-run/server-runtime'
import { ReactNode } from 'react'
import styles from './checkbox.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  name: string
  defaultChecked: boolean
  checkedDisplay: ReactNode
  uncheckedDisplay: ReactNode
  label: string
}
export function Checkbox({
  name,
  defaultChecked,
  checkedDisplay,
  uncheckedDisplay,
  label,
}: Props): JSX.Element {
  return (
    <label className="checkbox">
      <span className="visually-hidden">{label}</span>
      <input
        type="checkbox"
        name={name}
        className="visually-hidden"
        defaultChecked={defaultChecked}
      />
      <span className="layer">
        <span className="checked">{checkedDisplay}</span>
        <span className="unchecked">{uncheckedDisplay}</span>
      </span>
    </label>
  )
}
