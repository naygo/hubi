import clsx from 'clsx'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

import { FaShieldAlt, FaSignOutAlt } from 'react-icons/fa'
import { IoInvertMode } from 'react-icons/io5'

import { LogoNouns } from '@/shared/icons/LogoNouns'
import { Route } from '@/shared/utils/routes'

import { Button } from '../button'

import ProfilePhoto from '@public/img/bruce.png'

interface Props {
  isNavbarOpened: boolean
  session: Session | null
  routes: Route[]
}

const noundAndDarkModeButtons =
  'bg-black-lighter hover:bg-black-light cursor-pointer rounded p-1'

export function MobileNavbar({ isNavbarOpened, routes, session }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  const riotId = session?.user.riotId
  const nick = riotId?.split('#')[0]
  const tag = riotId?.split('#')[1]

  if (!isNavbarOpened) return null

  return (
    <nav
      className={clsx(
        'absolute h-[calc(100vh-83px)] top-full left-0 w-screen z-50 bg-black p-4 flex flex-col gap-4',
        {
          hidden: !isNavbarOpened,
        },
      )}
    >
      {session && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <div className="relative border-2 border-yellow rounded-sm">
              <Image
                src={ProfilePhoto}
                width={50}
                height={50}
                alt="Bruce Wayne"
              />
              <div className="absolute left-2.5 top-10 border-2 border-yellow px-2 bg-black rounded">
                <span className="font-bold">15</span>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center">
              <div>
                <span className="font-bold">{nick}</span>
                <span className="text-gray">#{tag}</span>
              </div>
              <span className="text-gray">12345 pontos</span>
            </div>
          </div>

          <div className="flex gap-2">
            {session.user.isAdmin && <AdminButton />}
          </div>
        </div>
      )}

      <ul className="flex flex-col gap-8 mt-2 text-gray text-lg mb-20">
        {routes.map((routes) => (
          <li key={routes.route}>
            <Link
              href={routes.route}
              className={clsx('hover:text-yellow', {
                'font-bold text-white': pathname === routes.route,
                'pointer-events-none text-gray-darker': routes.disabled,
              })}
            >
              {routes.name}
            </Link>
          </li>
        ))}
      </ul>

      {session && (
        <span
          onClick={() => signOut()}
          className="hover:text-yellow font-bold text-white text-lg"
        >
          <FaSignOutAlt className="inline-block mr-2 hover:fill-yellow" />
          Sair
        </span>
      )}

      {!session && (
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <LogoNouns size={30} className={noundAndDarkModeButtons} />
            <IoInvertMode size={37} className={noundAndDarkModeButtons} />
          </div>

          <div className="h-8 w-0.5 bg-black-lighter"></div>

          <a className="text-gray hover:text-yellow cursor-pointer">
            Saiba mais
          </a>

          <Button
            color="primary"
            label="Jogar"
            onClick={() => router.push('/login')}
          />
        </div>
      )}
    </nav>
  )
}

function AdminButton() {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push('/admin')}
      className="p-2 cursor-pointer bg-red-700 rounded hover:bg-red-900"
    >
      <FaShieldAlt className="text-lg" />
    </div>
  )
}
