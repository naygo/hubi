import { buttonStyles } from './button.styles'

interface ButtonProps {
  label: string
  onClick?: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={buttonStyles} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}
