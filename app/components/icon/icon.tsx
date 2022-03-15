import { ReactNode } from 'react'

type IconBaseProps = { path: ReactNode; className?: string; viewBox: string }
function IconBase({ path, className, viewBox }: IconBaseProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="currentColor"
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
  viewBox: string
) => {
  const Icon = ({ className }: IconProps) => (
    <IconBase path={path} className={className} viewBox={viewBox} />
  )
  Icon.displayName = displayName
  return Icon
}
