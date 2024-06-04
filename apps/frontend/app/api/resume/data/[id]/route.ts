import cors from '@/api/cors'
import database from '@/lib/postgres/database'
import { NextRequest, NextResponse } from 'next/server'

interface Params {
  id: string
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const id = parseInt(params.id, 10)
  const result = await database
    .selectFrom('linkedin_profile')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()
  return cors(req, NextResponse.json(result.data))
}
