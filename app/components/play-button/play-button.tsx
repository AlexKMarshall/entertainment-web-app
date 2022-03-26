import { LinksFunction } from 'remix'
import { PlayIcon } from '~/components/icons'
import styles from './play-button.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = { id?: string }
export function PlayButton({ id }: Props): JSX.Element {
  return (
    <div className="play-button" id={id}>
      <PlayIcon />
      Play
    </div>
  )
}
