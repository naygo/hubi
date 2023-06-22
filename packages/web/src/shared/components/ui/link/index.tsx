import clsx from 'clsx'
import ReactLink from 'next/link'

import styles from '@/styles/classes'

interface Props {
  text: string
  href: string
  buttonStyle?: 'primary' | 'secondary'
  className?: string
}

export function Link({ text, href, buttonStyle, className }: Props) {
  return (
    <ReactLink href={href}>
      <span
        className={clsx(className, {
          [styles.link]: Boolean(!buttonStyle),
          [styles.button]: Boolean(buttonStyle),
          [styles.buttonPrimary]: buttonStyle === 'primary',
          [styles.buttonSecondary]: buttonStyle === 'secondary',
        })}
      >
        {text}
      </span>
    </ReactLink>
  )
}