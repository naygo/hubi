import { generateButtonStyles } from './styles'

interface ButtonProps {
  label: string
  type: 'primary' | 'secondary'
  onClick?: () => void
}

export function Button({ label, type, onClick }: ButtonProps) {
  const buttonStyles = generateButtonStyles(type)
  return (
    <button className={buttonStyles} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}
