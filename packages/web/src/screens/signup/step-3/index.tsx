import { useForm } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'

interface FormFields {
  nickname: string
  riotId: string
  ingameRank: string
}

export function StepThree() {
  const {
    control,
    formState: { errors },
    register,
  } = useForm<FormFields>()

  return (
    <form className="flex flex-col gap-2">
      <Input label="Nick" error={errors.nickname} {...register('nickname')} />

      <Input
        label="Riot ID"
        placeholder="Ex.: Jenniffer#csz"
        error={errors.riotId}
        {...register('riotId')}
      />

      <Dropdown
        label="Elo atual"
        name="ingameRank"
        control={control}
        options={[
          { label: 'Radiante', value: 'radiant' },
          { label: 'Imortal 3', value: 'immortal3' },
          { label: 'Imortal 2', value: 'immortal2' },
          { label: 'Imortal 1', value: 'immortal1' },
          { label: 'Ascendente 3', value: 'ascendant3' },
          { label: 'Ascendente 2', value: 'ascendant2' },
          { label: 'Ascendente 1', value: 'ascendant1' },
          { label: 'Diamante 3', value: 'diamond3' },
          { label: 'Diamante 2', value: 'diamond2' },
          { label: 'Diamante 1', value: 'diamond1' },
          { label: 'Platina 3', value: 'platinum3' },
          { label: 'Platina 2', value: 'platinum2' },
          { label: 'Platina 1', value: 'platinum1' },
          { label: 'Ouro 3', value: 'gold3' },
          { label: 'Ouro 2', value: 'gold2' },
          { label: 'Ouro 1', value: 'gold1' },
          { label: 'Prata 3', value: 'silver3' },
          { label: 'Prata 2', value: 'silver2' },
          { label: 'Prata 1', value: 'silver1' },
          { label: 'Bronze 3', value: 'bronze3' },
          { label: 'Bronze 2', value: 'bronze2' },
          { label: 'Bronze 1', value: 'bronze1' },
          { label: 'Ferro 3', value: 'iron3' },
          { label: 'Ferro 2', value: 'iron2' },
          { label: 'Ferro 1', value: 'iron1' },
        ]}
        rules={{
          required: true,
        }}
      />
    </form>
  )
}
