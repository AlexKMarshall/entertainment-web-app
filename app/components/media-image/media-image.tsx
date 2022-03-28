import { LinksFunction } from 'remix'
import styles from './media-image.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

type Props = {
  imageSlug: string
  isTrending: boolean
}
export function MediaImage({ imageSlug, isTrending }: Props): JSX.Element {
  const imageRoot = '/assets/thumbnails'
  const imageBasePath = `${imageRoot}/${imageSlug}/${
    isTrending ? 'trending' : 'regular'
  }`

  const trendingSrcSet = `
    ${imageBasePath}/small.jpg 480w,
    ${imageBasePath}/large.jpg 940w
  `
  const regularSrcSet = `
    ${imageBasePath}/small.jpg 328w,
    ${imageBasePath}/medium.jpg 440w,
    ${imageBasePath}/large.jpg 560w
  `
  const srcSet = isTrending ? trendingSrcSet : regularSrcSet

  const trendingSizes = `
    (max-width: 375px) 240px,
    470px
  `
  const regularSizes = `
    (max-width: 375px) 164px,
    (max-width: 768px) 220px,
    280px
  `
  const sizes = isTrending ? trendingSizes : regularSizes
  const width = isTrending ? 240 : 164
  const height = isTrending ? 140 : 110

  return (
    <img
      className="media-image"
      srcSet={srcSet}
      sizes={sizes}
      src={`${imageBasePath}/small.jpg`}
      alt=""
      width={width}
      height={height}
      {...(isTrending ? { 'data-trending': true } : {})}
    />
  )
}
