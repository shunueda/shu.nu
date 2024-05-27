import cors from '@/api/cors'
import getDatabase from '@/lib/postgres/getDatabase'
import { NextRequest } from 'next/server'
import { LinkedInProfile } from 'shared'

export async function POST(req: NextRequest) {
  const profile = (await req.json()) as LinkedInProfile
  const db = await getDatabase()
  await db
    .insertInto('linkedin_profile')
    .values({
      data: profile
    })
    .execute()
  return cors(req, Response.json({}))
}
