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

import { InputAlert } from '../inputAlert'

import { generateStyleInputText } from './styles'

export function InputText({ control, name, rules, placeholder }: InputProps) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  })

  const styleInputText = generateStyleInputText(fieldState)

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
      {fieldState.error?.message && <InputAlert fieldState={fieldState} />}
    </>
  )
}
