import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { ReactNode } from 'react'
import Footer from './components/footer'
import { Navbar } from './components/nav'
import './global.scss'
import { cx } from './util'

export const runtime = 'edge'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className='antialiased max-w-xl mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
