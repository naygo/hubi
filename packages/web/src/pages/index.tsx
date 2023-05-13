import Head from 'next/head'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/button'
import { Dropdown } from '@/shared/components/dropdown'
import { InputText } from '@/shared/components/inputText'
import { requiredMessage } from '@/shared/utils/validationMessages'

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
      <div className="w-screen flex flex-col items-center mt-10">
        <div className="w-1/2 flex flex-col items-center gap-y-3">
          <h1 className="font-bold">HUBI</h1>

          <form
            className="w-full flex flex-col gap-y-5"
            onSubmit={handleSubmit((data) => handleLogin(data))}
          >
            <div>
              <label htmlFor="inputText">InputText:</label>
              <InputText
                control={control}
                name="inputText"
                placeholder="Placeholder"
                rules={{
                  required: {
                    value: true,
                    message: requiredMessage,
                  },
                }}
              />
            </div>

            <div>
              <label htmlFor="dropdown">Dropdown:</label>
              <Dropdown
                options={options}
                control={control}
                name="dropdown"
                placeholder="Placeholder"
                rules={{
                  required: {
                    value: true,
                    message: requiredMessage,
                  },
                }}
              />
            </div>

            <div className="flex gap-x-5">
              <Button label="Limpar" type="secondary" />
              <Button label="Enviar" type="primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
