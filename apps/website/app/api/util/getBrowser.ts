export default async function getBrowser() {
  if (process.env.VERCEL_ENV === 'production') {
    const chromium = await import('@sparticuz/chromium-min').then(
      it => it.default
    )
    const puppeteerCore = await import('puppeteer-core').then(it => it.default)
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
    const puppeteer = await import('puppeteer').then(it => it.default)
    return await puppeteer.launch()
  }
}
