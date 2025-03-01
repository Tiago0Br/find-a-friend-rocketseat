import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
  DB_USER: z.string(),
  DB_PASSWORD: z.string()
})

const { success, error, data } = envSchema.safeParse(process.env)

if (!success) {
  throw new Error('Invalid environment variables: ' + error.message)
}

export const env = data
