import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from '@/shared/components/footer'
import { Navbar } from '@/shared/components/navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  )
}
