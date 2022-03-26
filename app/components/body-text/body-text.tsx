import { ElementType, ReactNode } from 'react'
import clsx, { ClassValue } from 'clsx'

type Props = {
  children: ReactNode
  size: 'm' | 's'
  component?: ElementType
  color?: 'default' | 'error'
}

const sizeClassMap: Record<Props['size'], ClassValue> = {
  m: 'font-size-200',
  s: ['font-size-100', 'color-gray-400-75pc'],
}

const colorClassMap = {
  error: 'color-red-300',
  default: '',
}

export function BodyText({
  size,
  component: Component = 'p',
  children,
  color = 'default',
}: Props): JSX.Element {
  const sizeClasses = sizeClassMap[size]
  const colorClasses = colorClassMap[color]
  const classNames = clsx(sizeClasses, colorClasses)
  return <Component className={classNames}>{children}</Component>
}
