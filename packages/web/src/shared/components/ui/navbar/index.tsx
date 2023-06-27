import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { IoInvertMode } from 'react-icons/io5'

import { useWindowSize } from '@/shared/hooks/useWindowSize'
import { LogoNouns } from '@/shared/icons/LogoNouns'
import { filterRoutesByPermission } from '@/shared/utils/routes'

import { Link } from '../link'
import { MobileNavbar } from '../mobileNavbar'
import { UserNavbar } from '../user-navbar'

import Logo from '@public/img/logo.svg'

const noundAndDarkModeButtons =
  'bg-black-lighter hover:bg-black-light cursor-pointer rounded p-1'
const tailwindLgBreakpointInPx = 1024 // From TailwindCSS default config

export function Navbar() {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false)
  const windowSize = useWindowSize()
  const pathname = usePathname()

  const { data: session, status } = useSession()
  const userLogged = status === 'authenticated'
  console.log({ session }, { status })

  function toggleNavbar() {
    setIsNavbarOpened(!isNavbarOpened)
  }

  useEffect(() => {
    if (windowSize.width && windowSize.width > tailwindLgBreakpointInPx) {
      setIsNavbarOpened(false)
    }
  }, [windowSize])

  return (
    <>
      <header className="relative w-full flex gap-4 justify-between items-center p-4 border-b border-black-lighter font-normal text-sm">
        <div className="flex items-center">
          <Image src={Logo} width={100} height={100} alt="HUBI Logo" />
          <div className="h-8 w-0.5 bg-black-lighter mx-5"></div>

          {/* links */}
          <nav className="hidden lg:flex gap-4 text-gray">
            {filterRoutesByPermission(userLogged).map((routes) => (
              <div key={routes.route}>
                <NextLink
                  href={routes.route}
                  className={clsx('hover:text-yellow', {
                    'font-bold text-white': pathname === routes.route,
                    'pointer-events-none text-gray-darker': routes.disabled,
                  })}
                >
                  {routes.name}
                </NextLink>
              </div>
            ))}
          </nav>
        </div>

        {userLogged && session && <UserNavbar session={session} />}

        {!userLogged && (
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-3">
              <LogoNouns size={30} className={noundAndDarkModeButtons} />
              <IoInvertMode size={37} className={noundAndDarkModeButtons} />
            </div>

            <div className="h-8 w-0.5 bg-black-lighter"></div>

            <a className="text-gray hover:text-yellow cursor-pointer">
              Saiba mais
            </a>

            <Link href="/signup" text="Jogar" buttonStyle="primary" />
          </div>
        )}

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

        <MobileNavbar
          isNavbarOpened={isNavbarOpened}
          routes={filterRoutesByPermission(userLogged)}
          session={session}
        />
      </header>
    </>
  )
}
