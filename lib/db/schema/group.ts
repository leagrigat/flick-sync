import { pgTable, varchar } from 'drizzle-orm/pg-core'
import { nanoid } from 'nanoid'


export const group = pgTable('group', {
    id: varchar('id', { length: 21 }).notNull().primaryKey().$defaultFn(nanoid),
    name: varchar('name', { length: 100 }).notNull(),
})