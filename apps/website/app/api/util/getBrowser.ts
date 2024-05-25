import chromium from '@sparticuz/chromium-min'
import puppeteer from 'puppeteer'
import puppeteerCore from 'puppeteer-core'

export default async function getBrowser() {
  if (process.env.VERCEL_ENV === 'production') {
    const executablePath = await chromium.executablePath(
      'https://vomrghiulbmrfvmhlflk.supabase.co/storage/v1/object/public/chromium-pack/chromium-v123.0.0-pack.tar'
    )
    return await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless
    })
  } else {
    return await puppeteer.launch()
  }
}
