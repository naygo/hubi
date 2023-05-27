import { UseFormReturn } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'

interface FormFields {
  fullName: string
  email: string
  password: string
  passwordConfirmation: string
  birthDate: string
  gender: string
}

interface Props {
  form: UseFormReturn<FormFields>
}

export function StepOne({ form }: Props) {
  const {
    control,
    formState: { errors },
    register,
  } = form

  return (
    <form className="flex flex-col gap-2">
      <Input
        label="Nome completo"
        error={errors.fullName}
        {...register('fullName', { required: true })}
      />

      <Input
        label="E-mail"
        type="email"
        error={errors.email}
        {...register('email', { required: true })}
      />

      <Input
        label="Senha"
        type="password"
        error={errors.password}
        {...register('password', { required: true })}
      />

      <Input
        label="Confirme sua senha"
        type="password"
        error={errors.passwordConfirmation}
        {...register('passwordConfirmation', { required: true })}
      />

      {/* TODO: Date mask */}
      <Input
        label="Data de nascimento"
        placeholder="Ex.: 04/05/2001"
        error={errors.birthDate}
        {...register('birthDate', { required: true })}
      />

      <Dropdown
        name="gender"
        label="Gênero"
        control={control}
        options={[
          {
            label: 'Mulher CIS',
            value: 'mulher-cis',
          },
          {
            label: 'Mulher TRANS',
            value: 'mulher-trans',
          },
          {
            label: 'Homem CIS',
            value: 'homem-cis',
          },
          {
            label: 'Homem TRANS',
            value: 'homem-trans',
          },
          {
            label: 'Não-binário',
            value: 'nao-binario',
          },
          {
            label: 'Outros',
            value: 'outros',
          },
        ]}
        rules={{ required: true }}
      />
    </form>
  )
}
