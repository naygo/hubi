interface InputProps {
  control: Control<any>
  name: string
  placeholder: string
  rules: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
}
import { useController, RegisterOptions, Control } from 'react-hook-form'

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
        type="text"
        className="
          w-full 
          bg-black-light
          border
          border-black-light
          font-light
          text-white
          outline-none 
          rounded-lg 
          p-1.5
          hover:border-yellow
          focus:border-yellow
          focus:ring-2
          focus:ring-yellow
          focus:ring-opacity-20
        "
        placeholder={placeholder}
        id={name}
        {...field}
      />
      <span className="text-red text-sm">{fieldState.error?.message}</span>
    </>
  )
}
