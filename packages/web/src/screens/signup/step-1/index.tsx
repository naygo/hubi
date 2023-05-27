import { UseFormReturn } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'
import { SignUpFormFields } from '@/shared/types/signup-forms'

interface Props {
  form: UseFormReturn<SignUpFormFields>
}

export function StepOne({ form }: Props) {
  const { control, handleSubmit } = form

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
      noValidate
    >
      <Input
        name="fullName"
        label="Nome completo:"
        control={control}
        error={form.formState.errors.fullName}
        rules={{ required: true }}
      />

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

      {/* TODO: Date mask */}
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
