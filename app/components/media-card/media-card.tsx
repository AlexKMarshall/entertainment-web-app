import { BodyText } from '~/components/body-text'
import { Heading } from '~/components/heading'
import { LinksFunction } from 'remix'
import { ReactNode } from 'react'
import styles from './media-card.css'

type Props = {
  title: string
  year: number
  category: string
  rating: string
  isTrending?: boolean
  imageSlug: string
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
]

export function MediaCard({
  title,
  year,
  category,
  rating,
  imageSlug,
  isTrending = false,
}: Props): JSX.Element {
  return (
    <article
      className="media-card"
      {...(isTrending ? { 'data-trending': true } : {})}
    >
      <MediaImage imageSlug={imageSlug} isTrending={isTrending} />
      <MediaMeta
        year={year}
        category={category}
        rating={rating}
        size={isTrending ? 'm' : 's'}
      />
      <Heading level={3} size={isTrending ? 'm' : 's'}>
        {title}
      </Heading>
    </article>
  )
}

type MediaMetaProps = {
  year: number
  category: string | ReactNode
  rating: string
  size: 'm' | 's'
}
function MediaMeta({
  year,
  category,
  rating,
  size,
}: MediaMetaProps): JSX.Element {
  return (
    <dl>
      <dt className="visually-hidden">Year released</dt>
      <BodyText component="dd" size={size}>
        {year}
      </BodyText>
      <dt className="visually-hidden">Category</dt>
      <BodyText component="dd" size={size}>
        {category}
      </BodyText>
      <dt className="visually-hidden">Age rating</dt>
      <BodyText component="dd" size={size}>
        {rating}
      </BodyText>
    </dl>
  )
}

type MediaImageProps = {
  imageSlug: string
  isTrending: boolean
}
function MediaImage({ imageSlug, isTrending }: MediaImageProps): JSX.Element {
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
    ${imageBasePath}/large.jpg 560w,
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
      srcSet={srcSet}
      sizes={sizes}
      src={`${imageBasePath}/small.jpg`}
      alt=""
      width={width}
      height={height}
    />
  )
}
