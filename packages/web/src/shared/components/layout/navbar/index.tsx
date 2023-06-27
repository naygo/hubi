import { ReactNode } from 'react'

import { Navbar } from '../../ui/navbar'

interface Props {
  children: ReactNode
}

export function NavbarLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-stretch">{children}</div>
    </div>
  )
}
