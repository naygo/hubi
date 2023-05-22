import Head from 'next/head'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/button'
import { Dropdown } from '@/shared/components/dropdown'
import { Input } from '@/shared/components/input'

interface FormFields {
  inputText: string
  dropdown: string
}

const options = [
  { value: 1, label: 'Jamalzinho' },
  { value: 2, label: 'Luquinhas' },
  { value: 3, label: 'Marcinho' },
]

export default function Home() {
  const { control, handleSubmit, register, watch, formState, reset } =
    useForm<FormFields>({
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
  }, [watch()])

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
              <Input
                {...register('inputText', { required: true })}
                placeholder="Placeholder input de texto"
                error={formState.errors.inputText}
              />
            </div>

            <div>
              <label htmlFor="dropdown">Dropdown:</label>
              <Dropdown
                name="dropdown"
                placeholder="Selecione"
                control={control}
                options={options}
                rules={{ required: true }}
              />
            </div>

            <div className="flex gap-x-5">
              <Button
                label="Limpar"
                classStyle="secondary"
                type="reset"
                className="w-full"
                onClick={handleFormReset}
              />
              <Button label="Enviar" classStyle="primary" className="w-full" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
