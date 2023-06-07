import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function CenteredLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {children}
    </div>
  )
}
