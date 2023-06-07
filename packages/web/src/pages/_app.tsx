import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

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
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
