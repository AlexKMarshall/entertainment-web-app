import {
  BookmarkIcon,
  BookmarkOutlineIcon,
  MovieIcon,
  TVSeriesIcon,
} from '../icons'
import { Form, LinksFunction, useSubmit } from 'remix'

import { BodyText } from '~/components/body-text'
import { Heading } from '~/components/heading'
import styles from './media-card.css'

type Props = {
  id: string
  title: string
  year: number
  category: string
  rating: string
  isTrending?: boolean
  imageSlug: string
  isBookmarked?: boolean
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
]

export function MediaCard({
  id,
  title,
  year,
  category,
  rating,
  imageSlug,
  isTrending = false,
  isBookmarked = false,
}: Props): JSX.Element {
  const submit = useSubmit()

  return (
    <article
      className="media-card"
      {...(isTrending ? { 'data-trending': true } : {})}
    >
      <MediaImage imageSlug={imageSlug} isTrending={isTrending} />
      <Form
        method="post"
        onChange={(e) => submit(e.currentTarget, { replace: true })}
      >
        <input type="hidden" value={id} name="mediaId" />
        <label>
          <span className="visually-hidden">Bookmark {title}</span>
          <input
            type="checkbox"
            name="isBookmarked"
            className="visually-hidden"
            defaultChecked={isBookmarked}
          />
          <span>
            <BookmarkIcon className="checked" />
            <BookmarkOutlineIcon className="unchecked" />
          </span>
        </label>
      </Form>
      <div className="info">
        <Heading level={3} size={isTrending ? 'm' : 's'}>
          {title}
        </Heading>
        <MediaMeta
          year={year}
          category={category}
          rating={rating}
          size={isTrending ? 'm' : 's'}
        />
      </div>
    </article>
  )
}

function getCategoryIcon(category: string): JSX.Element {
  switch (category) {
    case 'Movie':
      return <MovieIcon />
    case 'TV Series':
      return <TVSeriesIcon />
    default:
      return <></>
  }
}

type MediaMetaProps = {
  year: number
  category: string
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
        {getCategoryIcon(category)} {category}
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
    <div className="image-wrapper">
      <img
        srcSet={srcSet}
        sizes={sizes}
        src={`${imageBasePath}/small.jpg`}
        alt=""
        width={width}
        height={height}
      />
    </div>
  )
}
