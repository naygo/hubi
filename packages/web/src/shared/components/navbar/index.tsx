import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { IoInvertMode } from 'react-icons/io5'

import { useWindowSize } from '@/shared/hooks/useWindowSize'
import { LogoNouns } from '@/shared/icons/LogoNouns'
import { routes } from '@/shared/utils/routes'

import { Button } from '../button'
import { MobileNavbar } from '../mobileNavbar'

import Logo from '@public/img/logo.svg'

const noundAndDarkModeButtons = 'bg-black-lighter hover:bg-black-light cursor-pointer rounded p-1'
const tailwindLgBreakpointInPx = 1024 // From TailwindCSS default config

const arrayRoutes = [
  { name: 'Página Inicial', route: routes.home },
  { name: 'Leaderboard', route: routes.leaderboard },
  { name: 'Agenda', route: routes.agenda },
  { name: 'FAQ', route: routes.faq },
  { name: 'Contato', route: routes.contato },
]

export function Navbar() {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false)
  const windowSize = useWindowSize()

  const pathname = usePathname()

  function toggleNavbar() {
    setIsNavbarOpened(!isNavbarOpened)
  }

  useEffect(() => {
    if (windowSize.width && windowSize.width > tailwindLgBreakpointInPx) {
      setIsNavbarOpened(false)
    }
  }, [windowSize])

  return (
    <header className="w-full flex gap-4 justify-between items-center p-4 border-b border-black-lighter font-normal text-sm">
      <div className="flex items-center">
        <Image src={Logo} width={100} height={100} alt="HUBI Logo" />
        {/* vertical line */}
        <div className="h-8 w-0.5 bg-black-lighter mx-5"></div>

        {/* links */}
        <nav className="hidden lg:flex gap-4 text-gray">
          {arrayRoutes.map((routes) => (
            <div
              key={routes.route}
              className={clsx({
                'pointer-events-none': pathname === routes.route,
              })}
            >
              <Link
                href={routes.route}
                className={clsx('hover:text-yellow', {
                  'font-bold text-white': pathname === routes.route,
                })}
              >
                {routes.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <div className="flex gap-3">
          <LogoNouns size={30} className={noundAndDarkModeButtons} />
          <IoInvertMode size={37} className={noundAndDarkModeButtons} />
        </div>

        <div className="h-8 w-0.5 bg-black-lighter"></div>

        <a className="text-gray hover:text-yellow cursor-pointer">Saiba mais</a>

        <Button color="primary" label="Jogar" />
      </div>

      {/* burger menu  */}
      <div className="lg:hidden">
        <button className="relative group" onClick={() => toggleNavbar()}>
          <div className="relative flex overflow-hidden items-center justify-center rounded w-[50px] h-[50px] transform transition-all bg-black-lighter ring-0 ring-gray-300 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform overflow-hidden">
              <div className="bg-white h-[2px] w-7"></div>
              <div className="bg-white h-[2px] w-7"></div>
              <div className="bg-white h-[2px] w-3 ml-auto"></div>
            </div>
          </div>
        </button>
      </div>

      {isNavbarOpened && <MobileNavbar isNavbarOpened={isNavbarOpened} routes={arrayRoutes} />}
    </header>
  )
}
