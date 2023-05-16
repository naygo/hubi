import clsx from 'clsx'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import { InputAlert } from '@/shared/components/inputAlert'
import { NativeProps } from '@/shared/types/native-props'

type ExtraProps = {
  error?: FieldError
}
type Props = NativeProps & ExtraProps

function InputGenerate(
  { id, name, placeholder, type, error, ...props }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  // TODO: make placeholder italic - problem: placeholder:italic makes the text bold too
  return (
    <>
      <input
        ref={ref}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={clsx(
          `
            w-full 
            bg-black
            
            border
            border-black-light
            
            font-light
            text-white
            
            rounded-lg 
            px-2
            py-1
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
