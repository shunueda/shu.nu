import '@fontsource/inter'
import '@fontsource/lato'
import '@fontsource/open-sans'
import '@fontsource/roboto'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import 'styles/font.scss'
import 'styles/global.scss'
import 'styles/lib/effect.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
