import { PrismaClient } from '@prisma/client'
import mediaData from './data.json'

const db = new PrismaClient()

async function seed() {
  const [movie, tv] = await Promise.all(
    getCategories().map((category) => {
      return db.category.create({ data: category })
    })
  )
  await Promise.all(
    getMedia().map(({ category, ...media }) => {
      return db.media.create({
        data: {
          ...media,
          categoryId: category === 'Movie' ? movie.id : tv.id,
        },
      })
    })
  )
}

seed()

function getCategories() {
  return [
    { name: 'movie', display: 'Movie' },
    { name: 'tv-series', display: 'TV Series' },
  ]
}

function getMedia() {
  return mediaData.map(
    ({
      title,
      year,
      category,
      rating,
      isTrending,
      thumbnail: {
        regular: { small },
      },
    }) => {
      const image = small.split('/')[3]
      return {
        title,
        year,
        category,
        rating,
        isTrending,
        image,
      }
    }
  )
}
