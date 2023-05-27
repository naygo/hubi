import clsx from 'clsx'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import { NativeProps } from '@/shared/types/native-props'

import { InputAlert } from '../inputAlert'

type ExtraProps = {
  label?: string
  error?: FieldError
}

type Props = NativeProps & ExtraProps

function InputGenerate(
  { id, name, label, placeholder, type, error, ...props }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        ref={ref}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={clsx(
          `
            w-full 
            bg-black-light
            
            border
            border-black-lighter
            
            font-light
            text-white
            placeholder:italic
            
            rounded-lg 
            p-2
          `,
          { 'border-red-500 focus:ring-red-500 ': error },
          { 'hover:border-yellow focus:border-yellow': !error },
        )}
        {...props}
      />
      {error && <InputAlert error={error} />}
    </>
  )
}

export const Input = forwardRef<HTMLInputElement, Props>(InputGenerate)
