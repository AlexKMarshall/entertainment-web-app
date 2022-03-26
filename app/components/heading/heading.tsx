import { ElementType, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

import { LinksFunction } from 'remix'

export const links: LinksFunction = () => []

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size: 'l' | 'm' | 's'
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

const sizeClassesMap: Record<Props['size'], ClassValue> = {
  l: ['font-size-500', 'font-weight-light', 'capitalize'],
  m: ['font-size-400', 'font-weight-medium', 'capitalize'],
  s: ['font-size-300', 'font-weight-medium', 'capitalize'],
}

export function Heading({ level, size, children }: Props): JSX.Element {
  const Component = componentMap[level]
  const sizeClasses = sizeClassesMap[size]
  const classNames = clsx(sizeClasses)

  return <Component className={classNames}>{children}</Component>
}
