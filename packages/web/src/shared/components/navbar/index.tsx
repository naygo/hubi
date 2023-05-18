import Image from 'next/image'

import { IoInvertMode } from 'react-icons/io5'

import { LogoNouns } from '@/shared/icons/LogoNouns'

import Logo from '../../../../public/img/logo.svg'
import { Button } from '../button'

export function Navbar() {
  const noundAndDarkModeButtons =
    'bg-black-lighter hover:bg-black-light cursor-pointer rounded p-1'

  return (
    <nav className="w-full flex gap-4 justify-between items-center p-4 border-b border-black-lighter font-normal text-sm">
      <div className="flex items-center">
        <Image src={Logo} width={100} height={100} alt="HUBI Logo" />

        {/* linha vertical */}
        <div className="h-8 w-0.5 bg-black-lighter mx-5"></div>

        {/* links */}
        <div className="flex gap-4 text-gray">
          <a href="" className="hover:text-yellow">
            Página Inicial
          </a>
          <a href="" className="hover:text-yellow">
            Leaderboard
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <div className="flex gap-3">
          <LogoNouns size={30} className={noundAndDarkModeButtons} />
          <IoInvertMode size={37} className={noundAndDarkModeButtons} />
        </div>

        <div className="h-8 w-0.5 bg-black-lighter mx-5"></div>

        <a className="text-gray hover:text-yellow cursor-pointer">Saiba mais</a>

        <Button style="primary" label="Jogar" />
      </div>
    </nav>
  )
}
