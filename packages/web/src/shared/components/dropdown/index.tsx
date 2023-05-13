import { Listbox } from '@headlessui/react'
import { useController, RegisterOptions, Control } from 'react-hook-form'

import { IoCaretDownSharp, IoCloseOutline } from 'react-icons/io5'

import { InputAlert } from '../inputAlert'

import { generateStyleButton } from './styles'

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

export function Dropdown({
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

  const styleButton = generateStyleButton(fieldState, field.value)

  return (
    <>
      <Listbox as="div" {...field}>
        <Listbox.Button className={styleButton}>
          {field.value ? field.value : placeholder}
          <div className="flex">
            {field.value && (
              <IoCloseOutline onClick={() => field.onChange('')} />
            )}
            <IoCaretDownSharp className="bg-black" />
          </div>
        </Listbox.Button>

        <Listbox.Options className="bg-black rounded-lg py-2 mt-1">
          {options.map((option) => (
            <Listbox.Option
              key={option.label}
              value={option.value}
              className="hover:bg-yellow px-2 py-1 cursor-pointer bg-black"
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>

      {fieldState.error?.message && <InputAlert fieldState={fieldState} />}
    </>
  )
}
