import { useForm } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'

interface Props {
  nonBinaryForm: boolean
}

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

export function StepTwo({ nonBinaryForm }: Props) {
  const {
    control,
    formState: { errors },
    register,
  } = useForm<FormFields>()

  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-4 align-middle">
        <Input
          className="w-full"
          label="Twitter"
          error={errors.twitter}
          {...register('twitter', {
            required: true,
          })}
        />

        <Input
          className="w-full"
          label="Instagram"
          error={errors.instagram}
          {...register('instagram', {
            required: true,
          })}
        />
      </div>

      <div className="flex gap-4 align-middle">
        {nonBinaryForm && (
          <Input
            label="GamersClub"
            error={errors.gamersclub}
            className="w-full"
            {...register('gamersclub', {
              required: true,
            })}
          />
        )}

        <Input
          label="Discord"
          placeholder="Ex.: Jenniffer#0102"
          className="w-full"
          error={errors.discord}
          {...register('discord', {
            required: true,
          })}
        />
      </div>

      <Input
        label="Outras redes sociais"
        error={errors.otherSocialMedia}
        {...register('otherSocialMedia')}
      />

      <Dropdown
        name="howDidYouKnowHubi"
        label="Como você conheceu a HUBI?"
        control={control}
        options={[
          {
            label: 'Instagram',
            value: 'instagram',
          },
        ]}
        rules={{
          required: true,
        }}
      />

      {nonBinaryForm && (
        <Input
          label="Tempo na comunidade LGBTQIAP+"
          error={errors.timeInCommunity}
          {...register('timeInCommunity', {
            required: true,
          })}
        />
      )}

      <Dropdown
        name="pronouns"
        label="Pronomes"
        placeholder="Selecione os seus pronomes"
        control={control}
        options={[
          {
            label: 'Instagram',
            value: 'instagram',
          },
        ]}
        rules={{
          required: true,
        }}
      />
    </form>
  )
}
