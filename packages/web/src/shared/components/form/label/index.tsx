import clsx from 'clsx'

interface Props {
  name: string
  label: string
  required: boolean
}

export function Label({ name, label, required }: Props) {
  return (
    <label
      className={clsx('text-gray text-sm md:text-base', {
        'after:content-["*"] after:text-yellow after:ml-1': required,
      })}
      htmlFor={name}
    >
      {label}
    </label>
  )
}
