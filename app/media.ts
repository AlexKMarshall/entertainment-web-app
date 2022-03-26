import { db } from '~/utils/db.server'

export type Media = {
  title: string
  year: number
  category: string
  rating: string
  id: string
  imageSlug: string
  isBookmarked?: boolean
}

export const selectMedia = {
  id: true,
  title: true,
  year: true,
  rating: true,
  category: {
    select: { display: true },
  },
  image: true,
}

export function updateBookmark(
  mediaId: string,
  userId: string,
  isBookmarked: boolean
) {
  return db.media.update({
    where: {
      id: mediaId,
    },
    data: {
      users: isBookmarked
        ? { connect: { id: userId } }
        : { disconnect: { id: userId } },
    },
  })
}

export const getCategoryTitle = (category: string): string => {
  switch (category) {
    case 'movie':
      return 'movies'
    case 'tv-series':
      return 'TV series'
    default:
      return category
  }
}
