import ReactLink from 'next/link'

interface Props {
  text: string
  link: string
  className?: string
}

export function Link({ text, link, className }: Props) {
  return (
    <ReactLink href={link}>
      <span className={`text-yellow font-normal hover:underline ${className}`}>
        {text}
      </span>
    </ReactLink>
  )
}
