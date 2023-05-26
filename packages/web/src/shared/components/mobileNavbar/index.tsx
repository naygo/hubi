import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { IoInvertMode } from 'react-icons/io5'

import { LogoNouns } from '@/shared/icons/LogoNouns'

import { Button } from '../button'

interface Props {
  isNavbarOpened: boolean
  routes: Route[]
}

interface Route {
  name: string
  route: string
}

const noundAndDarkModeButtons =
  'bg-black-lighter hover:bg-black-light cursor-pointer rounded p-1'

export function MobileNavbar({ isNavbarOpened, routes }: Props) {
  const pathname = usePathname()

  if (!isNavbarOpened) return null

  return (
    <nav className="relative min-h-[calc(100vh-83px)] w-screen z-50 bg-black p-4 flex flex-col gap-4 overflow-auto">
      <div className="flex flex-col gap-8 mt-2 text-gray text-lg">
        {routes.map((routes) => (
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

      <div className="flex items-center gap-4">
        <div className="flex gap-3">
          <LogoNouns size={30} className={noundAndDarkModeButtons} />
          <IoInvertMode size={37} className={noundAndDarkModeButtons} />
        </div>

        <div className="h-8 w-0.5 bg-black-lighter"></div>

        <a className="text-gray hover:text-yellow cursor-pointer">Saiba mais</a>

        <Button color="primary" label="Jogar" />
      </div>
    </nav>
  )
}
