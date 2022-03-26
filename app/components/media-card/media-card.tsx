import { BookmarkIcon, BookmarkOutlineIcon, PlayIcon } from '~/components/icons'
import { Checkbox, links as checkboxLinks } from '~/components/checkbox'
import { Form, Link, LinksFunction, useSubmit } from 'remix'
import { MediaMeta, links as mediaMetaLinks } from '~/components/media-meta'

import { Heading } from '~/components/heading'
import styles from './media-card.css'
import { useRef } from 'react'

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
  ...mediaMetaLinks(),
  ...checkboxLinks(),
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
  const linkRef = useRef<HTMLAnchorElement>(null)
  const handleCardClick = () => {
    linkRef.current?.click()
  }
  const playButtonId = `${id}-play`

  return (
    <article
      className="media-card"
      onClick={handleCardClick}
      {...(isTrending ? { 'data-trending': true } : {})}
    >
      <div className="info">
        <Heading level={3} size={isTrending ? 'm' : 's'}>
          <Link to="." ref={linkRef} aria-describedby={playButtonId}>
            {title}
          </Link>
        </Heading>
        <MediaMeta
          year={year}
          category={category}
          rating={rating}
          size={isTrending ? 'm' : 's'}
        />
      </div>
      <Form
        method="post"
        onChange={(e) => submit(e.currentTarget, { replace: true })}
      >
        <input type="hidden" value={id} name="mediaId" />
        <Checkbox
          name="isBookmarked"
          defaultChecked={isBookmarked}
          label={`Bookmark ${title}`}
          checkedDisplay={<BookmarkIcon />}
          uncheckedDisplay={<BookmarkOutlineIcon />}
        />
      </Form>
      <div className="image-wrapper layer">
        <MediaImage imageSlug={imageSlug} isTrending={isTrending} />
        <div className="play-button" id={playButtonId}>
          <PlayIcon />
          Play
        </div>
      </div>
    </article>
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
