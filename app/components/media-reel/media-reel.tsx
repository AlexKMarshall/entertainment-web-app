import { ReactNode, useEffect, useRef, useState } from 'react'

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
  const [intersectionObserver, setIntersectionObserver] =
    useState<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = {
      root: reelRef.current,
      threshold: 0.5,
    }

    const toggleInert: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.remove('faded')
        } else {
          entry.target.classList.add('faded')
        }
      })
    }

    setIntersectionObserver(new IntersectionObserver(toggleInert, options))
  }, [])

  return (
    <ul className="media-reel" ref={reelRef}>
      {items.map((item) => (
        <MediaReelItem
          key={item.id}
          intersectionObserver={intersectionObserver}
        >
          {renderItem(item)}
        </MediaReelItem>
      ))}
    </ul>
  )
}

type MediaReelItemProps = {
  children: ReactNode
  intersectionObserver: IntersectionObserver | null
}
function MediaReelItem({
  children,
  intersectionObserver,
}: MediaReelItemProps): JSX.Element {
  const liRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const liElement = liRef.current

    if (liElement) {
      intersectionObserver?.observe(liElement)

      return () => {
        intersectionObserver?.unobserve(liElement)
      }
    }
  }, [intersectionObserver])

  return <li ref={liRef}>{children}</li>
}
