import clsx from 'clsx'
import { forwardRef } from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { NativeProps } from '@/shared/types/native-props'

import { InputAlert } from '../inputAlert'
import { Label } from '../label'

type InputProps = NativeProps & {
  name: string
  label?: string
  error?: FieldError
}

type PropsWithMask = InputProps & {
  mask: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}

type PropsWithoutMask = InputProps & {
  mask?: never
  control?: never
}

function InputGenerate(
  {
    className,
    control,
    defaultValue,
    error,
    label,
    mask,
    name,
    placeholder,
    required = false,
    type,
    ...props
  }: PropsWithMask | PropsWithoutMask,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const inputClassName = clsx(
    `
    w-full 
    bg-black
    
    border
    border-black-lighter
    
    font-light
    text-white text-sm
    placeholder:italic
    
    rounded-lg 
    p-1 md:p-2
  `,
    { 'border-red-500 focus:ring-red-500 ': error },
    { 'hover:border-yellow focus:border-yellow': !error },
  )

  return (
    <div className={className}>
      {label && <Label label={label} name={name} required={required} />}

      {mask && (
        <Controller
          render={({ field }) => (
            <InputMask
              {...field}
              mask={mask}
              placeholder={placeholder}
              className={inputClassName}
            />
          )}
          name={name}
          control={control}
          defaultValue={defaultValue || ''}
        />
      )}

      {!mask && (
        <input
          ref={ref}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          className={inputClassName}
          {...props}
        />
      )}

      {error && <InputAlert error={error} />}
    </div>
  )
}

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithMask | PropsWithoutMask
>(InputGenerate)
