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
        id={name}
        placeholder={placeholder}
        {...field}
        type="text"
        className="
          w-full 
          bg-black-light
          border
          border-black-light
          font-light
          text-white
          rounded-lg 
          px-2
          py-1
          hover:border-yellow
          focus:border-yellow
          focus:ring-2
          focus:ring-yellow
          focus:ring-opacity-20 
        "
      />
      <span className="text-red text-sm">{fieldState.error?.message}</span>
    </>
  )
}
