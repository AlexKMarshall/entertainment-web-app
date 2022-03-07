import { PrismaClient } from '@prisma/client'
import mediaData from './data.json'

const db = new PrismaClient()

async function seed() {
  await Promise.all(
    getMedia().map((media) => {
      return db.media.create({ data: media })
    })
  )
}

seed()

function getMedia() {
  return mediaData.map(({ title, year, category, rating }) => ({
    title,
    year,
    category,
    rating,
  }))
}
