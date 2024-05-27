import withTimestamp from '@/lib/postgres/withTimestamp'
import { createKysely } from '@vercel/postgres-kysely'
import { Database } from 'shared'

const db = createKysely<Database>()

async function init() {
  await db.schema
    .createTable('linkedin_profile')
    .ifNotExists()
    .addColumn('id', 'serial', col => col.primaryKey())
    .$call(withTimestamp)
    .addColumn('data', 'json')
    .execute()
}

export default async function getDatabase() {
  await init()
  return db
}
