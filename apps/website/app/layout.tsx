import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Metadata } from 'next'
import { resume } from 'shared'
import Footer from './components/footer'
import { Navbar } from './components/nav'
import './global.scss'

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

const baseUrl = `https://${resume.website}`

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Shun Ueda',
    template: 'Shun Ueda | %s'
  },
  description: `Shun Ueda - ${resume}`,
  openGraph: {
    title: 'Shun Ueda',
    description: `Shun Ueda`,
    url: resume.website,
    siteName: 'Shun Ueda',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
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
