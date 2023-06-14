import clsx from 'clsx'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

import { NavbarFooterLayout } from '@/shared/components/layout/navbar-footer'
import { UserLeaderboard } from '@/shared/components/ui/user-leaderboard'

import Header from '@public/img/header.png'

export default function Lobby() {
  const [isOngoing, setIsOngoing] = useState(true)

  return (
    <NavbarFooterLayout>
      <div className="flex justify-between mt-4">
        <div className="w-full flex justify-center">
          <section className="container">
            <div className="mb-4">
              <Image src={Header} alt="Header" className="w-full" />
            </div>
            <div className="w-full flex justify-center">
              <MatchesStatusButtons
                isOngoing={isOngoing}
                setIsOngoing={setIsOngoing}
              />
            </div>
          </section>
        </div>
        <section className="">
          <UserLeaderboard />
        </section>
      </div>
    </NavbarFooterLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

function MatchesStatusButtons({
  isOngoing,
  setIsOngoing,
}: {
  isOngoing: boolean
  setIsOngoing: (value: boolean) => void
}) {
  return (
    <div className="bg-black-dark flex gap-2 p-1 w-fit rounded">
      <div
        onClick={() => setIsOngoing(true)}
        className={clsx(
          'font-medium bg-black-lighter p-2 rounded cursor-pointer transition-all duration-200',
          {
            'bg-black-lighter text-white': isOngoing,
            'bg-transparent text-gray': !isOngoing,
          },
        )}
      >
        Em andamento
      </div>
      <div
        onClick={() => setIsOngoing(false)}
        className={clsx(
          'font-medium bg-black-lighter p-2 rounded cursor-pointer',
          {
            'bg-black-lighter text-white': !isOngoing,
            'bg-transparent text-gray': isOngoing,
          },
        )}
      >
        Finalizadas
      </div>
    </div>
  )
}
