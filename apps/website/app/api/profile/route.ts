import chromium from '@sparticuz/chromium-min'
import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer-core'

async function getBrowser() {
  return puppeteer.launch({
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(
      `https://github.com/Sparticuz/chromium/releases/download/v116.0.0/chromium-v116.0.0-pack.tar`
    ),
    headless: chromium.headless,
    ignoreHTTPSErrors: true
  })
}

export async function GET(_: NextRequest) {
  const browser = await getBrowser()
  const page = await browser.newPage()
  await page.goto('https://www.linkedin.com/in/shunueda/')
  await page.setViewport(chromium.defaultViewport)
  await page.waitForSelector('main')
  const mainContent = await page.evaluate(() => {
    const mainElement = document.querySelector('main')
    return mainElement ? mainElement.innerHTML : null
  })
  console.log(mainContent)
  await browser.close()
  return NextResponse.json({ error: 'Hello' }, { status: 200 })
}
