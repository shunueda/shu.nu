import { readFileSync } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { Config } from 'shared'
import { parse } from 'yaml'

export async function GET(_: NextRequest) {
  try {
    const content = readFileSync(`../../${Config.RESUME_FILE}`).toString()
    return NextResponse.json(parse(content), { status: 200 })
  } catch (_) {
    return NextResponse.json(
      { message: 'Error fetching resume' },
      { status: 500 }
    )
  }
}
