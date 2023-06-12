import { Leaderboard } from '@hubi/types'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

import { getLeaderboard, getListLeaderboards } from '@/services/leaderboard'
import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'
import { NavbarFooterLayout } from '@/shared/components/layout/navbar-footer'
import { HeaderTitlePage } from '@/shared/components/ui/header-title-page'
import { removeAfterHyphen } from '@/shared/utils/string'

import TrophyTOP1 from '@public/img/trophies/trophy-top1.svg'
import TrophyTOP2 from '@public/img/trophies/trophy-top2.svg'
import TrophyTOP3 from '@public/img/trophies/trophy-top3.svg'

interface LeaderboardProps {
  leaderboardSelect: ILeaderboardSelect[]
  defaultLeaderboardId: string
}

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

const imageProps: ImageProps[] = [
  { src: TrophyTOP1, alt: 'TOP 1', width: 30, height: 30 },
  { src: TrophyTOP2, alt: 'TOP 2', width: 20, height: 20 },
  { src: TrophyTOP3, alt: 'TOP 3', width: 20, height: 20 },
]

function getImage(position: number) {
  const props = imageProps[position - 1]

  if (!props) {
    return null
  }

  // alts are defined
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} />
}

interface FormValues {
  season: string
  player: string
}

export default function Leaderboard({
  leaderboardSelect,
  defaultLeaderboardId,
}: LeaderboardProps) {
  const { control, getValues } = useForm<FormValues>({
    defaultValues: {
      season: defaultLeaderboardId,
    },
  })

  const {
    data: players,
    isLoading,
    isFetching,
  } = useQuery(['leaderboard'], async () => {
    const leaderboardId = getValues('season')

    const response = await getLeaderboard({
      leaderboardId,
    })

    return response
  })

  const screenHeight = 'calc(100vh - 65px)'

  return (
    <NavbarFooterLayout>
      <Head>
        <title>HUBI - Leaderboard</title>
      </Head>
      <HeaderTitlePage
        title="Leaderboard"
        description="Aqui mostramos as melhores jogadoras que se destacam. Junte-se a nós
        e deixe a sua marca nessa emocionante competição!"
      />
      <div
        className="flex justify-center mt-5"
        style={{ height: screenHeight }}
      >
        <div className="container flex justify-center">
          <div className="flex flex-col gap-5 lg:gap-10 justify-between items-center w-full">
            <form className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="block sm:hidden w-full">
                <Dropdown
                  name="season"
                  placeholder="Selecione uma season..."
                  control={control}
                  options={leaderboardSelect}
                />
              </div>

              <Input
                name="player"
                placeholder="Busque uma jogadora..."
                control={control}
              />

              <div className="hidden sm:block w-full">
                <Dropdown
                  name="season"
                  placeholder="Selecione uma season..."
                  control={control}
                  options={leaderboardSelect}
                />
              </div>
            </form>

            <div className="w-full p-5 lg:p-0 overflow-auto">
              <div className="grid grid-cols-12 text-center">
                <p className="col-span-3 md:col-span-2 text-sm sm:text-xl">
                  CLASSIFICAÇÃO
                </p>
                <p className="col-span-3 md:col-span-3 text-sm  sm:text-xl text-green-500">
                  PONTUAÇÃO
                </p>
                <p className="col-span-6 md:col-span-4 text-sm sm:text-xl"></p>
                <p className="md:col-span-3 text-xs hidden md:block sm:text-xl">
                  PARTIDAS
                </p>
              </div>

              {!(isLoading || isFetching) &&
                players?.map((player, index) => (
                  <div
                    key={player.userId}
                    className={clsx(
                      'bg-black-lighter mt-3 text-center grid grid-cols-12 gap-6 items-center',
                      {
                        'text-3xl font-semibold h-20 rounded-b-3xl':
                          index === 0,
                        'h-10 rounded-full': index > 0,
                      },
                    )}
                  >
                    <div className="col-span-3 md:col-span-2 flex gap-5 w-full justify-center">
                      <p
                        className={clsx({
                          'text-5xl font-bold': player.position === 1,
                          'pl-10': player.position <= 3,
                        })}
                      >
                        {player.position}
                      </p>
                      {getImage(player.position)}
                    </div>
                    <p className="col-span-3 md:col-span-3">{player.points}</p>
                    <p className="col-span-6 md:col-span-4 ">
                      {player.nickname}
                    </p>
                    <p className="md:col-span-3 hidden md:block">
                      {player.played}{' '}
                      {player.played === 1 ? 'Partida' : 'Partidas'}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </NavbarFooterLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getLeaderboardsResponse = await getListLeaderboards()
  const defaultLeaderboardId = getLeaderboardsResponse[0].leaderboard_id

  const leaderboardSelect: ILeaderboardSelect[] = getLeaderboardsResponse.map(
    (leaderboard: Leaderboard) => {
      return {
        value: leaderboard.leaderboard_id,
        label: removeAfterHyphen(leaderboard.leaderboard_name),
      }
    },
  )

  return {
    props: { leaderboardSelect, defaultLeaderboardId },
  }
}

interface ILeaderboardSelect {
  value: string
  label: string
}
