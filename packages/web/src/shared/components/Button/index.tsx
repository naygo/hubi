import styles from './styles.module.scss'

interface ButtonProps {
  label: string
  outline?: boolean
  onClick?: () => void
}

export const Button = ({ label, outline = false, onClick }: ButtonProps) => {
  return (
    <main>
      <button
        onClick={onClick}
        className={`
          ${outline ? styles.outlineButton : styles.defaultButton}
          rounded-full 
          py-2
          px-4 
          font-semibold 
          text-lg 
          relative
        `}
      >
        {outline && <span className={styles.buttonHoleLeft}></span>}
        {outline && <span className={styles.buttonHoleRight}></span>}
        {label.toUpperCase()}
      </button>
    </main>
  )
}
