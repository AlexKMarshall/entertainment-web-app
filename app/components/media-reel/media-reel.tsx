import { ReactNode, useEffect, useRef } from 'react'

import { LinksFunction } from 'remix'
import { Media } from '~/media'
import styles from './media-reel.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  items: Media[]
  renderItem: (item: Media) => JSX.Element
}
export function MediaReel({ items, renderItem }: Props): JSX.Element {
  const reelRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const toggleOverflowClass = (el: Element) => {
      el.classList.toggle('overflowing', el.scrollWidth > el.clientWidth)
    }

    const reel = reelRef.current
    if (reel) {
      const observer = new ResizeObserver((entries) => {
        const [{ target }] = entries
        toggleOverflowClass(target)
      })

      observer.observe(reel)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul className="media-reel" ref={reelRef} role="list">
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
