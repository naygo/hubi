import Head from 'next/head'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'
import { Button } from '@/shared/components/ui/button'

interface FormFields {
  inputText: string
  dropdown: string
}

const options = [
  { id: 1, name: 'Jamalzinho' },
  { id: 2, name: 'Luquinhas' },
  { id: 3, name: 'Marcinho' },
]

export default function Playground() {
  const { control, handleSubmit, watch, reset } = useForm<FormFields>({
    defaultValues: {
      inputText: '',
      dropdown: '',
    },
  })

  function handleLogin(data: FormFields) {
    console.log(data)
  }

  function handleFormReset() {
    reset()
  }

  useEffect(() => {
    console.log(watch())
  }, [watch])

  return (
    <>
      <Head>
        <title>Playground</title>
      </Head>
      <div className="w-screen flex flex-col items-center mt-10">
        <div className="w-1/2 flex flex-col items-center gap-y-3">
          <h1 className="font-bold">COMPONENTS PLAYGROUND</h1>

          <form
            className="w-full flex flex-col gap-y-5"
            onSubmit={handleSubmit((data) => handleLogin(data))}
            noValidate
          >
            <div>
              <Input
                name="inputText"
                label="InputText:"
                placeholder="Placeholder input de texto"
                control={control}
                rules={{ required: true }}
              />
            </div>

            <div>
              <Dropdown
                name="dropdown"
                label="Dropdown"
                placeholder="Selecione"
                control={control}
                options={options}
                rules={{ required: true }}
              />
            </div>

            <div className="flex gap-x-5">
              <Button
                label="Limpar"
                color="secondary"
                type="reset"
                className="w-full"
                onClick={handleFormReset}
              />
              <Button label="Enviar" color="primary" className="w-full" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
