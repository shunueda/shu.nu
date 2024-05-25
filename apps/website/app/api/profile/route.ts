import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

async function getBrowser() {
  return puppeteer.launch()
}

export async function GET(_: NextRequest) {
  const browser = await getBrowser()
  const page = await browser.newPage()
  await page.goto('https://www.linkedin.com/in/shunueda/')
  await page.setViewport({
    height: 1080,
    width: 1920
  })
  await page.waitForSelector('main')
  const mainContent = await page.evaluate(() => {
    const mainElement = document.querySelector('main')
    return mainElement ? mainElement.innerHTML : null
  })
  console.log(mainContent)
  await browser.close()
  return NextResponse.json({ result: mainContent }, { status: 200 })
}
