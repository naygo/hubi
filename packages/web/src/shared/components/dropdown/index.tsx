import { Listbox } from '@headlessui/react'
import { useController, RegisterOptions, Control } from 'react-hook-form'

import { IoCaretDownSharp, IoAlertCircleOutline } from 'react-icons/io5'

import { generateStyleButton } from './dropdown.styles'

interface DropDownProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  name: string
  placeholder: string
  options: {
    label: string
    value: unknown
  }[]
  rules: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
}

export function DropDown({
  name,
  control,
  rules,
  options,
  placeholder,
}: DropDownProps) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  })

  const styleButton = generateStyleButton(fieldState)

  return (
    <>
      <Listbox as="div" {...field}>
        <Listbox.Button className={styleButton}>
          {field.value ? field.value : placeholder}
          <IoCaretDownSharp className="bg-black-light" />
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
      {fieldState.error?.message && (
        <span className="text-red-500 text-xs flex items-center">
          <IoAlertCircleOutline size={16} className="mr-1" />
          {fieldState.error?.message}
        </span>
      )}
    </>
  )
}
