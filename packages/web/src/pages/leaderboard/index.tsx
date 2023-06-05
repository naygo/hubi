import { PlayerLeaderboard, Leaderboard } from '@hubi/types'
import { isAxiosError } from 'axios'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { getPlayerLeaderboard } from '@/services/player'
import { Dropdown } from '@/shared/components/form/dropdown'
import { Input } from '@/shared/components/form/input'

import TrophyTOP1 from '../../../public/img/trophies/trophy-top1.svg'
import TrophyTOP2 from '../../../public/img/trophies/trophy-top2.svg'
import TrophyTOP3 from '../../../public/img/trophies/trophy-top3.svg'
import { getLeaderboard, getListLeaderboards } from '../../services/leaderboard'
import { removeAfterHyphen } from '../../shared/utils/string'

import styles from './styles.module.scss'

interface LeaderboardProps {
  leaderboard: PlayerLeaderboard[]
  leaderboardSelect: ILeaderboardSelect[]
  defaultLeaderboardId: string
}

type ImageProps = React.ComponentProps<typeof Image>

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

  // alts are defined0
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} />
}

export default function Leaderboard({
  leaderboard,
  leaderboardSelect,
  defaultLeaderboardId,
}: LeaderboardProps) {
  const toastId = useRef<any>(null)
  const [players, setPlayers] = useState<PlayerLeaderboard[]>(leaderboard || [])
  const [nickname, setNickname] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [selectedLeaderboardId, setSelectedLeaderboardId] =
    useState(defaultLeaderboardId)

  const handleSelectChange = async (event: any) => {
    const leaderboardId = event.target.value
    setSelectedLeaderboardId(leaderboardId)
  }

  const { control, register } = useForm<{ season: string; player: string }>({
    defaultValues: {
      season: '',
      player: '',
    },
  })

  async function handleSearch(key: string) {
    if (isSearching) return

    if (key == 'Enter' && nickname !== '') {
      try {
        setIsSearching(true)

        notify('Buscando player...')
        const player = await getPlayerLeaderboard({
          nickname,
          leaderboardId: selectedLeaderboardId,
        })

        setIsSearching(false)

        setPlayers([player])
        if (toastId.current) toast.dismiss(toastId.current)
      } catch (err) {
        const errorMessage = isAxiosError(err)
          ? err.response?.data.message
          : 'Erro ao buscar player'

        if (toastId.current) {
          toast.update(toastId.current, {
            render: errorMessage,
            type: 'error',
            isLoading: false,
            hideProgressBar: false,
            autoClose: 3000,
            pauseOnHover: true,
          })
        }

        setIsSearching(false)
        setPlayers(leaderboard)
      }
    } else if (nickname === '') setPlayers(leaderboard)
  }

  useEffect(() => {
    const handlePlayer = async () => {
      if (nickname === '') {
        const leaderboard = await getLeaderboard({
          leaderboardId: selectedLeaderboardId,
        })
        setPlayers(leaderboard)
      } else handleSearch('Enter')
    }

    handlePlayer()
  }, [selectedLeaderboardId])

  function notify(loadMessage: string) {
    toastId.current = toast.loading(loadMessage, {
      type: 'default',
      position: 'top-right',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: 'colored',
    })
  }

  const screenHeight = 'calc(100vh - 65px)'

  return (
    <>
      <Head>
        <title>HUBI - Leaderboard</title>
      </Head>
      <div
        className={`flex justify-center py-10`}
        style={{ height: screenHeight }}
      >
        <div className="container flex justify-center">
          <div className="flex flex-col justify-between items-center">
            <h1 className="font-bold text-yellow text-5xl sm:text-8xl">
              LEADERBOARD
            </h1>

            <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center p-10">
              <div className="block sm:hidden w-full">
                <Dropdown
                  name="season"
                  placeholder="Selecione uma season..."
                  control={control}
                  options={leaderboardSelect}
                />
              </div>
              <Input
                name="season"
                placeholder="Busque uma jogadora..."
                control={control}
              />
              {/* <input
                className={`${styles.input} my-5 sm:m-10 w-10/12 sm:max-w-lg focus:outline-none`}
                name="player"
                placeholder="Digite o nick de uma jogadora e aperte enter para pesquisar..."
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                onKeyDown={(event) => handleSearch(event.key)}
              /> */}
              <div className="hidden sm:block w-full">
                <Dropdown
                  name="season"
                  placeholder="Selecione uma season..."
                  control={control}
                  options={leaderboardSelect}
                />
              </div>
            </div>

            <div className={`${styles.table} w-full p-3 overflow-auto`}>
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
              {players.map((player, index) => (
                <div
                  key={player.userId}
                  className={clsx(
                    'bg-black-lighter mt-3 text-center grid grid-cols-12 gap-6 items-center',
                    index === 0
                      ? `${styles.tableFirstRow} first:font-bold h-20 rounded-b-3xl`
                      : 'h-10 rounded-full',
                  )}
                >
                  <div className="col-span-3 md:col-span-2 flex gap-5 w-full justify-center">
                    <p className={clsx({ 'pl-10': player.position <= 3 })}>
                      {player.position}
                    </p>
                    {getImage(player.position)}
                  </div>
                  <p className="col-span-3 md:col-span-3">{player.points}</p>
                  <p className="col-span-6 md:col-span-4 ">{player.nickname}</p>
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
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const getLeaderboardsResponse = await getListLeaderboards()
  const defaultLeaderboardId = getLeaderboardsResponse[0].leaderboard_id
  const leaderboard = await getLeaderboard({
    leaderboardId: defaultLeaderboardId,
  })

  const leaderboardSelect: ILeaderboardSelect[] = getLeaderboardsResponse.map(
    (leaderboard: Leaderboard) => {
      return {
        value: leaderboard.leaderboard_id,
        label: removeAfterHyphen(leaderboard.leaderboard_name),
      }
    },
  )

  return {
    props: { leaderboard, leaderboardSelect, defaultLeaderboardId },
  }
}

interface ILeaderboardSelect {
  value: string
  label: string
}
