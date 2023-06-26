import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Input } from '@/shared/components/form/input'
import { Button } from '@/shared/components/ui/button'
import { Link } from '@/shared/components/ui/link'
import { useYupValidationResolver } from '@/shared/hooks/useYupValidationResolver'
import { LoginFormFields } from '@/shared/types/login-form'
import { routes } from '@/shared/utils/routes'

import { validationSchema } from './validators'

import Logo from '@public/img/logo.svg'

export function LoginForm() {
  const router = useRouter()
  const resolver = useYupValidationResolver(validationSchema)
  const { control, handleSubmit } = useForm<LoginFormFields>({
    resolver,
    mode: 'onChange',
  })

  const handleSendForm = async (data: LoginFormFields) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
    console.log(res)

    if (!res) {
      console.log('res is null')
      return
    }

    if (!res.ok) {
      console.log(res.error)
    } else {
      router.push('/')
    }
  }

  return (
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
            href={routes.signup}
            className="font-medium"
          />
        </div>
      </div>
    </section>
  )
}
