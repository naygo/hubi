import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { IoInvertMode } from 'react-icons/io5'

import { Button } from '@/shared/components/ui/button'
import { LogoNouns } from '@/shared/icons/LogoNouns'
import { routes } from '@/shared/utils/routes'

import Logo from '@public/img/logo.svg'

const noundAndDarkModeButtons =
  'bg-black-lighter hover:bg-black-light cursor-pointer rounded p-1'

const arrayRoutes = [
  { name: 'Página Inicial', route: routes.home },
  { name: 'Leaderboard', route: routes.leaderboard },
  { name: 'Playground', route: routes.playground },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full flex gap-4 justify-between items-center p-4 border-b border-black-lighter font-normal text-sm">
      <div className="flex items-center">
        <Image src={Logo} width={100} height={100} alt="HUBI Logo" />
        {/* linha vertical */}
        <div className="h-8 w-0.5 bg-black-lighter mx-5"></div>

        {/* links */}
        <div className="flex gap-4 text-gray">
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
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <div className="flex gap-3">
          <LogoNouns size={30} className={noundAndDarkModeButtons} />
          <IoInvertMode size={37} className={noundAndDarkModeButtons} />
        </div>

        <div className="h-8 w-0.5 bg-black-lighter"></div>

        <a className="text-gray hover:text-yellow cursor-pointer">Saiba mais</a>

        <Button classStyle="primary" label="Jogar" />
      </div>
    </nav>
  )
}
