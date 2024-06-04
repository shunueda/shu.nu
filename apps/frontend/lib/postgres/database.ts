import withTimestamp from '@/lib/postgres/withTimestamp'
import { createKysely } from '@vercel/postgres-kysely'
import { Database } from 'shared'

const database = createKysely<Database>()

await database.schema
  .createTable('linkedin_profile')
  .ifNotExists()
  .addColumn('id', 'serial', col => col.primaryKey())
  .$call(withTimestamp)
  .addColumn('data', 'json')
  .execute()

export default database
