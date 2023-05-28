import clsx from 'clsx'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Footer } from '@/shared/components/ui/footer'
import { Navbar } from '@/shared/components/ui/navbar'
import { routes } from '@/shared/utils/routes'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const hideNavFooter = [routes.signup, routes.login]
  const shouldHideNavFooter = hideNavFooter.includes(router.pathname)
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div
        className={clsx('flex flex-col min-h-screen', {
          'justify-between': !shouldHideNavFooter,
          'justify-center': shouldHideNavFooter,
        })}
      >
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
