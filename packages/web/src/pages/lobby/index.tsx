import clsx from 'clsx'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { useState } from 'react'

import { NavbarFooterLayout } from '@/shared/components/layout/navbar-footer'

export default function Lobby() {
  const [isOngoing, setIsOngoing] = useState(true)

  return (
    <main className="flex justify-center">
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
    </main>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  console.log('------------ Lobby ---------------')
  console.log(session)
  console.log('------------------------------')
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
