import bcrypt from 'bcryptjs'
import { db } from './db.server'

type LoginForm = {
  email: string
  password: string
}

export async function login({ email, password }: LoginForm) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  })
  if (!user) return null

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash)
  if (!isCorrectPassword) return null

  return { id: user.id, email }
}
