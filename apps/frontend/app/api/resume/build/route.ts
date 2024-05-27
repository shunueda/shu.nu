import cors from '@/api/cors'
import parseProfile from '@/api/resume/build/parseProfile'
import { NextRequest } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const html = await req.text()
  const profile = parseProfile(html)
  console.log(JSON.stringify(profile, null, 2))
  return cors(req, Response.json(profile))
}
