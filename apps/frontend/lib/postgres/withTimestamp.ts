import { CreateTableBuilder, sql } from 'kysely'

export default function withTimestamp<T extends string>(
  qb: CreateTableBuilder<T>
): CreateTableBuilder<T> {
  return qb.addColumn('created_at', 'timestamptz', col =>
    col.defaultTo(sql`CURRENT_TIMESTAMP`).notNull()
  )
}
