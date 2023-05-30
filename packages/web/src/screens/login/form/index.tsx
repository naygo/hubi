import { useForm } from 'react-hook-form'

import { Input } from '@/shared/components/form/input'
import { Button } from '@/shared/components/ui/button'
import { useYupValidationResolver } from '@/shared/hooks/useYupValidationResolver'
import { LoginFormFields } from '@/shared/types/login-form'

import { validationSchema } from './validators'

export function LoginForm() {
  const resolver = useYupValidationResolver(validationSchema)
  const { control, handleSubmit } = useForm<LoginFormFields>({
    resolver,
    mode: 'onChange',
  })

  const handleSendForm = (data: LoginFormFields) => {
    console.log(data)
  }

  return (
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
  )
}
