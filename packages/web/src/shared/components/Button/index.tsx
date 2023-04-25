import styles from './styles.module.scss'

interface ButtonProps {
  label: string
  outline?: boolean
  bigButton?: boolean
  onClick?: () => void
}

export const Button = ({
  label,
  bigButton,
  outline = false,
  onClick,
}: ButtonProps) => {
  return (
    <main>
      <button
        onClick={onClick}
        className={`
          ${outline ? styles.outlineButton : styles.defaultButton}
          ${bigButton ? styles.bigButton : 'py-2 px-4 text-2xl'}
          rounded-full 
          relative
        `}
      >
        {outline && <div className={styles.buttonHoleLeft}></div>}
        {outline && <div className={styles.buttonHoleRight}></div>}
        <span>{label.toUpperCase()}</span>
      </button>
    </main>
  )
}
