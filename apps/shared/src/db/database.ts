import type { ColumnType, Generated } from 'kysely'
import type { LinkedInProfile } from '../models/LinkedInProfile'

export interface Database {
  linkedin_profile: LinkedInProfileTable
}

export interface LinkedInProfileTable {
  id: Generated<number>
  created_at: ColumnType<Date>
  data: ColumnType<LinkedInProfile>
}
