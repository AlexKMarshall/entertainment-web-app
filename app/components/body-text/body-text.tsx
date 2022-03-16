import { ElementType, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

type Props = { children: ReactNode; size: 'm' | 's'; component?: ElementType }

const sizeClassMap: Record<Props['size'], ClassValue> = {
  m: 'font-size-200',
  s: ['font-size-100', 'color-gray-400-75pc'],
}

export function BodyText({
  size,
  component: Component = 'p',
  children,
}: Props): JSX.Element {
  const sizeClasses = sizeClassMap[size]
  const classNames = clsx(sizeClasses)
  return <Component className={classNames}>{children}</Component>
}
