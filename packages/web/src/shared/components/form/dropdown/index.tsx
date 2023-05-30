import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { Control, RegisterOptions, useController } from 'react-hook-form'

import { IoCaretDownSharp, IoCloseOutline } from 'react-icons/io5'

import { InputAlert } from '../inputAlert'
import { Label } from '../label'

export type DropdownOptions = {
  label: string
  value: unknown
}

type Props = {
  name: string
  options: { label: string; value: unknown }[]
  label?: string
  placeholder?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  rules?: RegisterOptions
}

export function Dropdown({
  name,
  label,
  placeholder = 'Selecione',
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
    <div>
      {label && (
        <Label label={label} name={name} required={!!rules?.required} />
      )}

      <Listbox as="div" {...field} className="relative">
        <Listbox.Button
          className={clsx(
            `
              flex items-center justify-between

              w-full rounded-lg
              p-1 md:p-2
              bg-black
              
              font-light text-start text-sm md:text-base

              border border-black-lighter 
            `,
            {
              italic: !field.value,
              'border-red-500': fieldState.error,
              'hover:border-yellow focus:border-yellow ': !fieldState.error,
              'text-gray-400': !field.value,
            },
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

        <Listbox.Options className="bg-black-lighter rounded-lg py-1 md:py-2 mt-1 absolute w-full z-10 max-h-44 overflow-y-auto">
          {options.map((option) => (
            <Listbox.Option
              key={option.label}
              value={option.value}
              className="hover:bg-yellow px-1 py-1 cursor-pointer bg-black-lighter text-sm md:text-base"
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      {fieldState.error && <InputAlert error={fieldState.error} />}
    </div>
  )
}
