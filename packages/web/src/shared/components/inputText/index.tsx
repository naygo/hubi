interface InputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  name: string
  placeholder: string
  rules: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
}
import { useController, RegisterOptions, Control } from 'react-hook-form'

import { FaExclamationCircle } from 'react-icons/fa'

import { styleInputText } from './inputText.styles'

export function InputText({ control, name, rules, placeholder }: InputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  })
  // TODO: make placeholder italic - problem: placeholder:italic makes the text bold too
  return (
    <>
      <input
        id={name}
        placeholder={placeholder}
        {...field}
        className={styleInputText}
        type="text"
      />
      {fieldState.error?.message && (
        <span className="text-red-500 text-xs flex items-center mt-1">
          <FaExclamationCircle
            size={16}
            className="mr-1"
            style={{ fill: 'rgb(239, 68, 68)' }}
          />
          {fieldState.error?.message}
        </span>
      )}
    </>
  )
}
