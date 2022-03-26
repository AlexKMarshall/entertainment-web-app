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
