import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import { getLeaderboard, getListLeaderboards } from '../../services/leaderboard'

import styles from './styles.module.scss'

import TrophyTOP1 from '../../shared/assets/img/trophies/trophy-top1.svg'
import TrophyTOP2 from '../../shared/assets/img/trophies/trophy-top2.svg'
import TrophyTOP3 from '../../shared/assets/img/trophies/trophy-top3.svg'
import Head from 'next/head'
import { getPlayerLeaderboard } from '@/services/player-leaderboard'
import { PlayerLeaderboard, Leaderboard } from '@hubi/types'
import clsx from 'clsx'
import React from 'react'
import { SeasonSelect } from '../../shared/components/SessonSelect'
import { removeAfterHyphen } from '../../shared/utils/stringUtils'

interface LeaderboardProps {
  leaderboard: PlayerLeaderboard[]
  leaderboardSelect: ILeaderboardSelect[]
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
}: LeaderboardProps) {
  const toastId = useRef<any>(null)
  const [players, setPlayers] = useState<PlayerLeaderboard[]>(leaderboard || [])
  const [nickname, setNickname] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [selectedLeaderboardId, setSelectedLeaderboardId] = useState('')

  const handleSelectChange = async (event) => {
    const leaderboardId = event.target.value
    setSelectedLeaderboardId(leaderboardId)
  }

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
        toast.dismiss(toastId.current)
      } catch (err: any) {
        toast.update(toastId.current, {
          render: err.response.data.message,
          type: 'error',
          isLoading: false,
          hideProgressBar: false,
          autoClose: 3000,
        })
        setIsSearching(false)
        setPlayers(leaderboard)
      }
    } else if (nickname === '') setPlayers(leaderboard)
  }

  useEffect(() => {
    const handlePlayer = async () => {
      if (nickname === '') {
        const leaderboard = await getLeaderboard(selectedLeaderboardId)
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
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  return (
    <>
      <Head>
        <title>HUBI - Leaderboard</title>
      </Head>
      <div className="h-full">
        <Link className={`absolute ${styles.arrowBack}`} href="/">
          <BsFillArrowLeftCircleFill className="text-4xl" />
        </Link>

        <div className="flex justify-center h-full items-center">
          <div className="flex flex-col items-center w-full lg:max-w-5xl mt-16">
            <h1 className="text-6xl sm:text-8xl">LEADERBOARD</h1>

            <div className="flex flex-col sm:flex-row w-full justify-center items-center">
              <div className="block sm:hidden mt-2 w-10/12">
                <SeasonSelect
                  options={leaderboardSelect}
                  handleSelectChange={handleSelectChange}
                  selected={selectedLeaderboardId}
                />
              </div>
              <input
                className={`${styles.input} my-5 sm:m-10 w-10/12 sm:max-w-lg focus:outline-none`}
                name="player"
                placeholder="Digite o nick de uma jogadora e aperte enter para pesquisar..."
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                onKeyDown={(event) => handleSearch(event.key)}
              />
              <div className="hidden sm:block">
                <SeasonSelect
                  options={leaderboardSelect}
                  handleSelectChange={handleSelectChange}
                  selected={selectedLeaderboardId}
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
                    `${styles.tableContent} mt-3 text-center grid grid-cols-12 gap-6 items-center`,
                    index === 0
                      ? `${styles.tableFirstRow} h-20 rounded-b-3xl`
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
  const leaderboard = await getLeaderboard(
    getLeaderboardsResponse[0].leaderboard_id,
  )

  const leaderboardSelect: ILeaderboardSelect[] = getLeaderboardsResponse.map(
    (leaderboard: Leaderboard) => {
      return {
        value: leaderboard.leaderboard_id,
        label: removeAfterHyphen(leaderboard.leaderboard_name),
      }
    },
  )

  return {
    props: { leaderboard, leaderboardSelect },
  }
}

interface ILeaderboardSelect {
  value: string
  label: string
}
