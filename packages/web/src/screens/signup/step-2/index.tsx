import { UseFormReturn } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'

interface FormFields {
  twitter: string
  instagram: string
  gamersclub: string
  discord: string
  otherSocialMedia?: string
  howDidYouKnowHubi: string
  timeInCommunity: string
  pronouns: string
}

interface Props {
  nonBinaryForm: boolean
  form: UseFormReturn<FormFields>
}

export function StepTwo({ form, nonBinaryForm }: Props) {
  const {
    control,
    formState: { errors },
    register,
  } = form

  return (
    <form className="flex flex-col gap-2">
      <div className="sm:flex gap-4 align-middle">
        <Input
          className="w-full"
          label="Twitter:"
          error={errors.twitter}
          {...register('twitter', { required: true })}
        />

        <Input
          className="w-full"
          label="Instagram:"
          error={errors.instagram}
          {...register('instagram', { required: true })}
        />
      </div>

      <div className="sm:flex gap-4 align-middle">
        {nonBinaryForm && (
          <Input
            label="GamersClub:"
            error={errors.gamersclub}
            className="w-full"
            {...register('gamersclub', { required: true })}
          />
        )}

        {/* TODO: add mask */}
        <Input
          label="Discord:"
          placeholder="Ex.: Jenniffer#0102"
          className="w-full"
          error={errors.discord}
          {...register('discord', { required: true })}
        />
      </div>

      <Input
        label="Outras redes sociais:"
        error={errors.otherSocialMedia}
        {...register('otherSocialMedia')}
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
          label="Tempo na comunidade LGBTQIAP+:"
          error={errors.timeInCommunity}
          {...register('timeInCommunity', { required: true })}
        />
      )}

      <Dropdown
        name="pronouns"
        label="Pronomes:"
        placeholder="Selecione os seus pronomes"
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
    </form>
  )
}
