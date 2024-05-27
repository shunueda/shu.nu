import { createKysely } from '@vercel/postgres-kysely'
import { Database } from 'shared'

const db = createKysely<Database>()

async function init() {
  await db.schema
    .createTable('linkedin_profile')
    .ifNotExists()
    .addColumn('id', 'serial', cb => cb.primaryKey())
    .addColumn('created_at', 'timestamptz', cb =>
      cb.defaultTo(new Date()).notNull()
    )
    .addColumn('data', 'json')
    .execute()
}

export default async function getDatabase() {
  await init()
  return db
}
