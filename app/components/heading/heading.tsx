import { ElementType, ReactNode } from 'react'

import { LinksFunction } from 'remix'
import headingStyles from './heading.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: headingStyles },
]

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

const componentMap: Record<Props['level'], ElementType> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
}

export function Heading({ level, children }: Props): JSX.Element {
  const Component = componentMap[level]
  return <Component className="heading">{children}</Component>
}
