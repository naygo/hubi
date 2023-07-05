import clsx from 'clsx'
import { FieldPath, UseFormReturn } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'
import {
  SignUpFormFields,
  StepThreeFormFields,
} from '@/shared/types/signup-forms'

interface Props {
  form: UseFormReturn<SignUpFormFields>
  hidden: boolean
}

export const stepThreeFields: FieldPath<StepThreeFormFields>[] = [
  'nickname',
  'riotId',
  'ingameRank',
]

export function StepThree({ form, hidden }: Props) {
  const { control } = form

  return (
    <div
      className={clsx('flex flex-col gap-2', {
        hidden: hidden,
      })}
    >
      <Input
        name="nickname"
        label="Nick:"
        control={control}
        rules={{ required: true }}
      />

      <Input
        name="riotId"
        label="Riot ID:"
        placeholder="Ex.: Jenniffer#csz"
        control={control}
        rules={{ required: true }}
      />

      <Dropdown
        label="Elo atual:"
        name="ingameRank"
        control={control}
        options={[{ name: 'Radiante', id: 0 }]}
        rules={{ required: true }}
      />
    </div>
  )
}
