import { NextRequest, NextResponse } from 'next/server'
import getBrowser from '../util/getBrowser'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const browser = await getBrowser()
  const page = await browser.newPage()
  await page.goto('https://apple.com')
  const pdf = await page.pdf()
  await browser.close()
  return new NextResponse(pdf, {
    headers: {
      'Content-Type': 'application/pdf'
    }
  })
}
