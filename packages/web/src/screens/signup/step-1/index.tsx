import clsx from 'clsx'
import { FieldPath, UseFormReturn } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'
import {
  SignUpFormFields,
  StepOneFormFields,
} from '@/shared/types/signup-forms'

interface Props {
  form: UseFormReturn<SignUpFormFields>
  hidden: boolean
}

export const stepOneFields: FieldPath<StepOneFormFields>[] = [
  'firstName',
  'lastName',
  'email',
  'password',
  'passwordConfirmation',
  'birthDate',
  'gender',
]

export function StepOne({ form, hidden }: Props) {
  const { control } = form

  return (
    <div
      className={clsx('flex flex-col gap-2', {
        hidden: hidden,
      })}
    >
      <div className="sm:flex gap-4 align-middle">
        <Input
          name="firstName"
          label="Nome:"
          control={control}
          error={form.formState.errors.firstName}
          rules={{ required: true }}
        />

        <Input
          name="lastName"
          label="Sobrenome:"
          control={control}
          error={form.formState.errors.firstName}
          rules={{ required: true }}
        />
      </div>

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

      <Input
        name="passwordConfirmation"
        label="Confirme sua senha:"
        type="password"
        control={control}
        rules={{ required: true }}
      />

      <Input
        name="birthDate"
        label="Data de nascimento:"
        placeholder="Ex.: 04/05/2001"
        mask="99/99/9999"
        control={control}
        rules={{ required: true }}
      />

      <Dropdown
        name="gender"
        label="Gênero:"
        control={control}
        options={[]}
        rules={{ required: true }}
      />
    </div>
  )
}
