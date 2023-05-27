import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '@/shared/components/ui/footer'
import { Navbar } from '@/shared/components/ui/navbar'

import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const hideNavFooter = ['/signup']
  const shouldHideNavFooter = hideNavFooter.includes(router.pathname)
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        {!shouldHideNavFooter && <Navbar />}
        <Component {...pageProps} />
        {!shouldHideNavFooter && (
          <div className="flex justify-center">
            <Footer />
          </div>
        )}
      </div>
    </>
  )
}
