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
  { className, name, label, placeholder, type, error, ...props }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={className}>
      {label && (
        <label className="text-gray text-sm md:text-base" htmlFor={name}>
          {label}
        </label>
      )}

      <input
        ref={ref}
        id={name}
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
            text-white text-sm
            placeholder:italic
            
            rounded-lg 
            p-1 md:p-2
          `,
          { 'border-red-500 focus:ring-red-500 ': error },
          { 'hover:border-yellow focus:border-yellow': !error },
        )}
        {...props}
      />
      {error && <InputAlert error={error} />}
    </div>
  )
}

export const Input = forwardRef<HTMLInputElement, Props>(InputGenerate)
