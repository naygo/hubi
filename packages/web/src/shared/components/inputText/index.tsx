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
      <span className="text-red text-sm">{fieldState.error?.message}</span>
    </>
  )
}
