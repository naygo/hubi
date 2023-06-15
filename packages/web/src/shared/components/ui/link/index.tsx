import clsx from 'clsx'
import ReactLink from 'next/link'

interface Props {
  text: string
  link: string
  className?: string
}

export function Link({ text, link, className }: Props) {
  return (
    <ReactLink href={link}>
      <span className={clsx('text-yellow hover:underline', className)}>
        {text}
      </span>
    </ReactLink>
  )
}
