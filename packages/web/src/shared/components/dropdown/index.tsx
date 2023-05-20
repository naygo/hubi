import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Control, RegisterOptions, useController } from 'react-hook-form'

import { IoCaretDownSharp, IoCloseOutline } from 'react-icons/io5'

import { InputAlert } from '../inputAlert'

export type DropdownOptions = {
  label: string
  value: unknown
}

type Props = {
  name: string
  options: DropdownOptions[]
  placeholder: string
  control: Control<any>
  rules?: RegisterOptions
}

export function Dropdown({
  name,
  placeholder,
  control,
  rules,
  options,
}: Props) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  })

  return (
    <>
      <Listbox as="div" {...field}>
        <Listbox.Button
          className={clsx(
            `
              flex items-center justify-between
              w-full 
              
              bg-black-light
              
              font-light
              text-start 
              
              rounded-lg 
              p-2
              
              border
              border-black-lighter 
            `,
            { italic: !field.value },
            { 'border-red-500': fieldState.error?.type === 'required' },
            {
              'hover:border-yellow focus:border-yellow ': !fieldState.error,
            },
            { 'text-gray-400': !field.value },
          )}
        >
          {field.value
            ? options.find((option) => option.value === field.value)?.label
            : placeholder}

          <div className="flex">
            {field.value && (
              <IoCloseOutline onClick={() => field.onChange('')} />
            )}
            <IoCaretDownSharp className="bg-black-light" />
          </div>
        </Listbox.Button>

        <Listbox.Options className="bg-black-light rounded-lg py-2 mt-1">
          {options.map((option) => (
            <Listbox.Option
              key={option.label}
              value={option.value}
              className="hover:bg-yellow px-2 py-1 cursor-pointer bg-black-light"
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      {fieldState.error && <InputAlert error={fieldState.error} />}
    </>
  )
}
