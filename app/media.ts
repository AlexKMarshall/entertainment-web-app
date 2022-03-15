export type Media = {
  title: string
  year: number
  category: string
  rating: string
  id: string
  imageBase: string
}

export const getImageBase = (imageSlug: string) =>
  `/assets/thumbnails/${imageSlug}`
