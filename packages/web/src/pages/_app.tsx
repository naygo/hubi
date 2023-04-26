import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { Footer } from '@/shared/components/footer'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div style={{ height: '89vh' }}>
        <Component {...pageProps} />
      </div>
      <div style={{ height: '11vh' }}>
        <Footer />
      </div>
    </>
  )
}
