import bcrypt from 'bcrypt'

export function generateHash(password: string): String {
  return bcrypt.hashSync(password, 10)
}