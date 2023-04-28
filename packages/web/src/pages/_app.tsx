import { Footer } from '@/shared/components/footer'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <ToastContainer />
      <div style={{ height: '89vh' }}>
        <Component {...pageProps} />
      </div>
      <div style={{ height: '11vh' }}>
        <Footer />
      </div>
    </>
  )
}
