import clsx from 'clsx'
import {
  Control,
  FieldError,
  RegisterOptions,
  useController,
} from 'react-hook-form'
import InputMask from 'react-input-mask'

import { NativeProps } from '@/shared/types/native-props'

import { InputAlert } from '../inputAlert'
import { Label } from '../label'

type Props = NativeProps & {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  label?: string
  error?: FieldError
  rules?: RegisterOptions
  mask?: string
}

export function Input({
  className,
  control,
  defaultValue,
  label,
  mask,
  name,
  placeholder,
  rules,
  type,
  ...props
}: Props) {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules,
  })

  const inputClassName = clsx(
    `
      w-full rounded-lg 
      p-1 md:p-2
      bg-black 
      
      border border-black-lighter
      
      font-light text-white text-sm
      placeholder:italic
    `,
    {
      italic: !field.value,
      'border-red-500': fieldState.error?.type === 'required',
      'hover:border-yellow focus:border-yellow ': !fieldState.error,
      'text-gray-400': !field.value,
    },
  )

  const required = !!rules?.required

  return (
    <div className={className}>
      {label && <Label label={label} name={name} required={required} />}

      {mask && (
        <InputMask
          mask={mask}
          placeholder={placeholder}
          className={inputClassName}
          {...props}
          {...field}
        />
      )}

      {!mask && (
        <input
          id={name}
          placeholder={placeholder}
          type={type}
          className={inputClassName}
          required={required}
          {...props}
          {...field}
        />
      )}

      {fieldState.error && <InputAlert error={fieldState.error} />}
    </div>
  )
}
