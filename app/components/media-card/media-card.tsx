import { BookmarkIcon, BookmarkOutlineIcon } from '~/components/icons'
import { Checkbox, links as checkboxLinks } from '~/components/checkbox'
import { Form, Link, LinksFunction, useSubmit } from 'remix'
import { MediaImage, links as mediaImageLinks } from '~/components/media-image'
import { MediaMeta, links as mediaMetaLinks } from '~/components/media-meta'
import { PlayButton, links as playButtonLinks } from '~/components/play-button'

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
  ...playButtonLinks(),
  ...mediaImageLinks(),
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
  const playButtonId = `${id}-${isTrending ? 'trending' : ''}-play`

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
        <PlayButton id={playButtonId} />
      </div>
    </article>
  )
}
