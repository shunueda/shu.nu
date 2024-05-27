import cors from '@/api/cors'
import triggerWorkflow from '@/lib/github/triggerWorkflow'
import getDatabase from '@/lib/postgres/getDatabase'
import { NextRequest, NextResponse } from 'next/server'
import { LinkedInProfile } from 'shared'

export async function POST(req: NextRequest) {
  const profile = (await req.json()) as LinkedInProfile
  const db = await getDatabase()
  const result = await db
    .insertInto('linkedin_profile')
    .values({
      data: profile
    })
    .returning('id')
    .executeTakeFirst()
  await triggerWorkflow('build.yaml', { id: result.id.toString() })
  return cors(req, NextResponse.json(result))
}
