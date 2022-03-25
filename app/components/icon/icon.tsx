import { ReactNode } from 'react'

type IconBaseProps = {
  path: ReactNode
  className?: string
  viewBox: string
  type: 'fill' | 'stroke'
}
function IconBase({
  path,
  className,
  viewBox,
  type = 'fill',
}: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={type === 'fill' ? 'currentColor' : 'none'}
      stroke={type === 'stroke' ? 'currentColor' : 'none'}
      width="1em"
      className={className}
    >
      {path}
    </svg>
  )
}

type IconProps = Pick<IconBaseProps, 'className'>

export const createIcon = (
  path: ReactNode,
  displayName: string,
  viewBox: string,
  type: IconBaseProps['type'] = 'fill'
) => {
  const Icon = ({ className }: IconProps) => (
    <IconBase path={path} className={className} viewBox={viewBox} type={type} />
  )
  Icon.displayName = displayName
  return Icon
}
