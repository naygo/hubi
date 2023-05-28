import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Input } from '@/shared/components/form/input'
import { Button } from '@/shared/components/ui/button'
import { Link } from '@/shared/components/ui/link'
import SocialMediaLinks from '@/shared/components/ui/social-media-links'
import { useYupValidationResolver } from '@/shared/hooks/useYupValidationResolver'
import { LoginFormFields } from '@/shared/types/login-forms'
import { routes } from '@/shared/utils/routes'
import styles from '@/styles/classes'

import { validationSchema } from './validators'

import Logo from '@public/img/logo.svg'

export default function Login() {
  const resolver = useYupValidationResolver(validationSchema)
  const { control, handleSubmit } = useForm<LoginFormFields>({
    resolver,
    mode: 'onChange',
  })

  const handleSendForm = (data: LoginFormFields) => {
    console.log(data)
  }

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

            <form onSubmit={handleSubmit(handleSendForm)} noValidate>
              <div className="flex flex-col gap-2">
                <Input
                  name="email"
                  label="E-mail:"
                  type="email"
                  control={control}
                  rules={{ required: true }}
                />

                <Input
                  name="password"
                  label="Senha:"
                  type="password"
                  control={control}
                  rules={{ required: true }}
                />
              </div>

              <div className="flex gap-5">
                <Button
                  color="primary"
                  label="Entrar"
                  className="w-full my-5"
                  type="submit"
                />
              </div>
            </form>

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
