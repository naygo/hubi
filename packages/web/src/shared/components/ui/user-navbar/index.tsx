import { Popover, Transition } from '@headlessui/react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'

import { FaCog, FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import { FaShieldAlt } from 'react-icons/fa'

import { Button } from '../button'

import ProfilePhoto from '@public/img/bruce.png'

interface Props {
  session: Session
}

export function UserNavbar({ session }: Props) {
  return (
    <div className="hidden lg:flex items-center gap-4">
      <Button label="DAR FILA" color="primary" disabled />
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

      {session.user.isAdmin && <AdminButton />}
      <ConfigButton />
    </div>
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

function ConfigButton() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`bg-black-lighter p-2 rounded hover:bg-yellow cursor-pointer ${
              open && 'bg-yellow'
            }`}
          >
            <FaCog className="text-lg" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-2">
              <div className="bg-black-lighter py-2 rounded flex flex-col">
                <div className="hover:bg-yellow font-medium py-2 px-12 text-left flex items-center gap-4 cursor-pointer">
                  <FaUserAlt /> Perfil
                </div>
                <div
                  onClick={() => signOut()}
                  className="hover:bg-yellow w-full font-medium py-2 px-12 text-left flex items-center gap-4 cursor-pointer"
                >
                  <FaSignOutAlt /> Sair
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
