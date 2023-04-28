import { Footer } from '@/shared/components/footer'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.scss'
import styles from './styles.module.scss'

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
      <div
        className={`${styles.leftBackground} opacity-40 lg:opacity-70 xl:opacity-100 max-w-full sm:max-w-none `}
      ></div>
      <div
        className={`${styles.rightBackground} hidden sm:block opacity-20 lg:opacity-70 xl:opacity-100`}
      ></div>
      <div style={{ minHeight: '89vh' }}>
        <Component {...pageProps} />
      </div>
      <div style={{ height: '11vh' }}>
        <Footer />
      </div>
    </>
  )
}
