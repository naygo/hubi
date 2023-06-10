import { ReactNode } from 'react'

import { Footer } from '../../ui/footer'
import { Navbar } from '../../ui/navbar'

interface Props {
  children: ReactNode
}

export function NavbarFooterLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-stretch">{children}</div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  )
}
