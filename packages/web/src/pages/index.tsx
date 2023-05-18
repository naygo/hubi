import Head from 'next/head'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/button'
import { Dropdown } from '@/shared/components/dropdown'
import { Footer } from '@/shared/components/footer'
import { Input } from '@/shared/components/input'
import { Navbar } from '@/shared/components/navbar'

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
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
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
                <Button label="Limpar" style="secondary" />
                <Button
                  label="Enviar"
                  type="reset"
                  style="primary"
                  onClick={handleFormReset}
                />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
