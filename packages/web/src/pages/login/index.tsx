import Head from 'next/head'
import Image from 'next/image'

import { LoginForm } from '@/screens/login/form'
import { Link } from '@/shared/components/ui/link'
import SocialMediaLinks from '@/shared/components/ui/social-media-links'
import { routes } from '@/shared/utils/routes'
import styles from '@/styles/classes'

import Logo from '@public/img/logo.svg'

export default function Login() {
  return (
    <main className="flex justify-center items-center">
      <Head>
        <title>Login | HUBI</title>
      </Head>
      <div className="container flex flex-col p-5 lg:flex-row">
        <section className="flex flex-col items-center lg:hidden">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={200}
            className={`${styles.logoBox} w-64`}
          />
          <div className="text-xs md:text-sm text-center mt-2 md:w-96">
            Somos uma plataforma e comunidade de players do cenário inclusivo de
            VALORANT.
          </div>
          <div className="text-xs mt-2 mb-10">
            <Link
              text="Voltar ao início &gt;"
              link=""
              className="font-medium"
            />
          </div>
        </section>

        <section className="md:w-full lg:w-10/12">
          <div className="w-full bg-black-light rounded-3xl p-8">
            <div className="flex gap-1 md:gap-1.5 mb-10">
              <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl align-bottom">
                Faça login na
              </h1>
              <Image src={Logo} alt="HUBI" className="w-12 sm:w-16 lg:w-20" />
            </div>

            <LoginForm />

            <div className="text-center text-xs md:text-sm">
              Ainda não possui uma conta?{'  '}
              <Link
                text="Crie uma aqui &gt;"
                link={routes.signup}
                className="font-medium"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mt-2 w-full lg:items-center lg:justify-center">
          <div className="lg:items-start">
            <div className="hidden lg:block">
              <Image
                src={Logo}
                alt="HUBI"
                className={`${styles.logoBox} w-72 lg:w-80`}
              />
              <div className="lg:w-96 lg:mt-2">
                Somos uma plataforma e comunidade de players do cenário
                inclusivo de VALORANT.
              </div>
            </div>
            <SocialMediaLinks />
            <div className="hidden lg:block mt-4">
              <Link
                text="Voltar ao início &gt;"
                link="/"
                className="font-medium"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
