import { AppProps } from 'next/app'
import '../styles/global.scss'
import '../styles/font.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
