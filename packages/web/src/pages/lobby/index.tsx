import clsx from 'clsx'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

import { NavbarLayout } from '@/shared/components/layout/navbar'
import { UserLeaderboard } from '@/shared/components/ui/user-leaderboard'

import Header from '@public/img/header.png'

export default function Lobby() {
  const [isOngoing, setIsOngoing] = useState(true)

  return (
    <NavbarLayout>
      <div className="flex justify-between mt-3">
        <div className="w-full flex justify-center px-4">
          <section
            className="container"
            style={{ height: 'calc(100vh - 110px) ' }}
          >
            <div className="">
              <Image src={Header} alt="Header" className="w-full" />
            </div>

            <div className="w-full flex justify-center my-4">
              <MatchesStatusButtons
                isOngoing={isOngoing}
                setIsOngoing={setIsOngoing}
              />
            </div>

            <div className="lg:overflow-y-auto max-h-[calc(100vh-400px)] lg:px-4">
              <div className="flex flex-col gap-5">
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </div>
            </div>
          </section>
        </div>
        <section className="hidden lg:block">
          <UserLeaderboard />
        </section>
      </div>
    </NavbarLayout>
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
    <div className="bg-black-dark flex gap-2 p-1 w-fit rounded text-xs lg:text-base">
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

function MatchCard() {
  return (
    <div className="bg-black-dark rounded flex flex-col lg:flex-row cursor-pointer">
      <div className="w-full relative">
        <strong className="absolute m-1 lg:m-4 lg:text-3xl">LOTTUS</strong>
        <Image src={Header} alt="Header" className="w-full h-full" />
      </div>
      <div className="w-full p-2 lg:p-4 text-xs lg:text-base flex justify-between items-center">
        <div className="flex gap-2 lg:gap-4">
          <div className="bg-red-700 h-20 lg:h-32 w-0.5 lg:w-1 rounded"></div>
          <div className="flex flex-col justify-center">
            <span>jogadora 1</span>
            <span>jogadora 2</span>
            <span>jogadora 3</span>
            <span>jogadora 4</span>
            <span>jogadora 5</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center">
          <strong className="hidden lg:block text-5xl bg-black rounded p-2 text-center">
            13
          </strong>
          <div className="flex flex-col items-center">
            <strong className="text-2xl lg:text-3xl">VS</strong>
            <span className="text-gray text-xs">16:32</span>
          </div>
          <strong className="hidden lg:block text-5xl bg-black rounded p-2 text-center">
            10
          </strong>

          <div className="lg:hidden font-bold bg-black rounded p-1 text-center">
            13 - 10
          </div>
        </div>

        <div className="flex gap-2 lg:gap-4">
          <div className="flex flex-col justify-center items-end">
            <span>jogadora 6</span>
            <span>jogadora 7</span>
            <span>jogadora 8</span>
            <span>jogadora 9</span>
            <span>jogadora 10</span>
          </div>
          <div className="bg-sky-600 h-20 lg:h-32 w-0.5 lg:w-1 rounded"></div>
        </div>
      </div>
    </div>
  )
}
