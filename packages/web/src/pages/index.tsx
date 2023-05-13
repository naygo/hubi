import Head from 'next/head'
import { useForm } from 'react-hook-form'

import { InputText } from '@/shared/components/inputText'
import { Dropdown } from '@/shared/components/dropdown'

export default function Home() {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  return (
    <>
      <Head>
        <title>HUBI</title>
      </Head>

      <div className="mt-5 w-screen flex flex-col justify-center items-center">
        <h1>HUBI</h1>

        <div className="flex flex-col gap-y-5">
          <div>
            <label htmlFor="inputText">InputText:</label>
            <InputText
              placeholder="Placeholder do inputText"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: '',
                },
              }}
              name="inputText"
            />
          </div>

          <div>
            <label htmlFor="dropdown">Dropdown:</label>
            <Dropdown
              {...{
                control,
                name: 'dropdown',
                placeholder: 'Placeholder do Dropdown',
                options: [
                  {
                    label: 'Label 1',
                    value: 1,
                  },
                  {
                    label: 'Label 2',
                    value: 2,
                  },
                ],
                rules: {
                  required: {
                    value: true,
                    message: '',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
