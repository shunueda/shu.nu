import cors from '@/api/cors'
import getDatabase from '@/lib/postgres/getDatabase'
import { NextRequest, NextResponse } from 'next/server'

interface Params {
  id: string
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const id = parseInt(params.id, 10)
  const db = await getDatabase()
  const result = await db
    .selectFrom('linkedin_profile')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()
  return cors(req, NextResponse.json(result.data))
}
