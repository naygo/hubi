import clsx from 'clsx'
import { FieldPath, UseFormReturn } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'
import {
  SignUpFormFields,
  StepTwoFormFields,
} from '@/shared/types/signup-forms'

interface Props {
  form: UseFormReturn<SignUpFormFields>
  hidden: boolean
}

export const stepTwoFields: FieldPath<StepTwoFormFields>[] = [
  'twitter',
  'instagram',
  'gamersclub',
  'discord',
  'otherSocialMedia',
  'howDidYouKnowHubi',
  'timeInCommunity',
  'pronouns',
]

export function StepTwo({ form, hidden }: Props) {
  const { control, getValues } = form

  const nonBinaryForm = getValues('gender') === 'nao-binario'

  return (
    <div
      className={clsx('flex flex-col gap-2', {
        hidden: hidden,
      })}
    >
      <div className="sm:flex gap-4 align-middle">
        <Input
          className="w-full"
          name="twitter"
          label="Twitter:"
          rules={{ required: true }}
          control={control}
        />

        <Input
          className="w-full"
          name="instagram"
          label="Instagram:"
          rules={{ required: true }}
          control={control}
        />
      </div>

      <div className="sm:flex gap-4 align-middle">
        {nonBinaryForm && (
          <Input
            className="w-full"
            name="gamersclub"
            label="GamersClub:"
            rules={{ required: true }}
            control={control}
          />
        )}

        {/* TODO: add mask */}
        <Input
          className="w-full"
          name="discord"
          label="Discord:"
          placeholder="Ex.: Jenniffer#0102"
          rules={{ required: true }}
          control={control}
        />
      </div>

      <Input
        name="otherSocialMedia"
        label="Outras redes sociais:"
        control={control}
      />

      {/* TODO: add values */}
      <Dropdown
        name="howDidYouKnowHubi"
        label="Como você conheceu a HUBI?"
        control={control}
        options={[
          {
            label: 'Redes sociais',
            value: 'socialMedia',
          },
        ]}
        rules={{ required: true }}
      />

      {nonBinaryForm && (
        <Input
          name="timeInCommunity"
          label="Tempo na comunidade LGBTQIAP+:"
          rules={{ required: true }}
          control={control}
        />
      )}

      <Dropdown
        name="pronouns"
        label="Pronomes:"
        control={control}
        options={[
          {
            label: 'Ela/Dela',
            value: 'she/her',
          },
          {
            label: 'Ele/Dele',
            value: 'he/him',
          },
          {
            label: 'Qualquer pronome',
            value: 'any',
          },
        ]}
        rules={{ required: true }}
      />
    </div>
  )
}
