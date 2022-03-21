import { ReactNode, useEffect, useRef } from 'react'

import { LinksFunction } from 'remix'
import styles from './media-reel.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = { children: ReactNode }
export function MediaReel({ children }: Props): JSX.Element {
  const reelRef = useRef<HTMLDivElement>(null)

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
    <div className="media-reel" ref={reelRef}>
      {children}
    </div>
  )
}
