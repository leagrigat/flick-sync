import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as groupSchema from './schema/group'

const client = postgres(process.env.DATABASE_URL || '', { prepare: false })
export const db = drizzle(client, {
  schema: {
    ...groupSchema,
  },
})
