import clsx from 'clsx'
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from 'react'

import styles from '@/styles/classes'

type NativeProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ExtraProps = {
  color: 'primary' | 'secondary'
  label: string
}
type Props = NativeProps & ExtraProps

function ButtonGenerate(
  { id, name, placeholder, type, color, label, ...props }: Props,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      {...props}
      className={clsx(
        [styles.button],
        {
          'bg-yellow hover:bg-yellow-dark': color === 'primary',
          'border border-transparent bg-black-lighter hover:bg-black-light hover:border-yellow':
            color === 'secondary',
        },
        props.className,
      )}
    >
      {label}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, Props>(ButtonGenerate)
