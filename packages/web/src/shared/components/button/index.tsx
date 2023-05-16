import { generateButtonStyles } from './styles'

interface ButtonProps {
  label: string
  style: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({ label, type, style, onClick }: ButtonProps) {
  const buttonStyles = generateButtonStyles(style)
  return (
    <button className={buttonStyles} onClick={onClick} type={type}>
      <span>{label}</span>
    </button>
  )
}
