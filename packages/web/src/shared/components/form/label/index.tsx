interface Props {
  name: string
  label: string
}

export function Label({ name, label }: Props) {
  return (
    <label className="text-gray text-sm md:text-base" htmlFor={name}>
      {label}
    </label>
  )
}
