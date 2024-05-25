import { NextRequest, NextResponse } from 'next/server'
import getBrowser from '../util/getBrowser'

export const dynamic = 'force-dynamic'

export async function GET(_: NextRequest) {
  const browser = await getBrowser()
  const page = await browser.newPage()
  await page.goto('https://www.linkedin.com/in/shunueda/')
  await page.waitForSelector('main')
  const mainContent = await page.evaluate(() => {
    const mainElement = document.querySelector('main')
    return mainElement ? mainElement.innerHTML : null
  })
  console.log(mainContent)
  await browser.close()
  return NextResponse.json({ result: mainContent }, { status: 200 })
}
