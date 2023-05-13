import Head from 'next/head'
import { useForm } from 'react-hook-form'

import { InputText } from '@/shared/components/inputText'
import { Dropdown } from '@/shared/components/dropdown'

interface FormFields {
  email: string
  password: string
}

export default function Home() {
  const options = [
    { value: 'Jamal', label: 'Jamalzinho' },
    { value: 'Lucas', label: 'Luquinhas' },
    { value: 'Marcio', label: 'Marcinho' },
  ]

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const handleLogin = (data: FormFields) => {
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>HUBI</title>
      </Head>
      <h1>HUBI</h1>

      <form onSubmit={handleSubmit((data) => handleLogin(data))}>
        <div>
          <Dropdown
            options={options}
            control={control}
            name="email"
            placeholder="Selecione"
            rules={{
              required: {
                value: true,
                message: 'Campo Obrigatório',
              },
            }}
          />
        </div>

        <button className="bg-yellow" type="submit">
          Submit
        </button>
      </form>
    </>
  )
}
