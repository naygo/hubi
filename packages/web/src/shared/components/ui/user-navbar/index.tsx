import Image from 'next/image'

import { FaCog } from 'react-icons/fa'

import ProfilePhoto from '@public/img/bruce.png'

export function UserNavbar() {
  return (
    <div className="hidden lg:flex flex items-center gap-4">
      <div className="h-8 w-0.5 bg-black-lighter mx-5"></div>

      <div className="relative border-2 border-yellow rounded-sm">
        <Image src={ProfilePhoto} width={50} height={50} alt="Bruce Wayne" />
        <div className="absolute left-2.5 top-10 border-2 border-yellow px-2 bg-black rounded">
          <span className="font-bold">15</span>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center">
        <div>
          <span className="font-bold">Alisa meu pelo</span>
          <span className="text-gray">#vai</span>
        </div>
        <span className="text-gray">12345 pontos</span>
      </div>

      {/* config button */}
      <div className="bg-black-lighter p-2 rounded">
        <FaCog className="text-2xl" />
      </div>
    </div>
  )
}
