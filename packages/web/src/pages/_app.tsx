import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { Footer } from '@/shared/components/footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
