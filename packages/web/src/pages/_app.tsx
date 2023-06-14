import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </SkeletonTheme>
        </SessionProvider>
      </QueryClientProvider>
    </>
  )
}
