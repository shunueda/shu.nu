import cors from '@/api/cors'
import triggerWorkflow from '@/lib/github/triggerWorkflow'
import database from '@/lib/postgres/database'
import { NextRequest, NextResponse } from 'next/server'
import { LinkedInProfile } from 'shared'

export async function POST(req: NextRequest) {
  const profile = (await req.json()) as LinkedInProfile
  const result = await database
    .insertInto('linkedin_profile')
    .values({
      data: profile
    })
    .returning('id')
    .executeTakeFirst()
  await triggerWorkflow('latex-to-pdf.yaml', { id: result.id.toString() })
  return cors(req, NextResponse.json(result))
}
