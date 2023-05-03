import { useState } from 'react'
import { toast } from 'react-toastify'

import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import { getLeaderboard } from '@/services/leaderboard'

import seasons from '../../shared/assets/img/seasons.svg'
import styles from './styles.module.scss'

import TrophyTOP1 from '../../shared/assets/img/trophies/trophy-top1.svg'
import TrophyTOP2 from '../../shared/assets/img/trophies/trophy-top2.svg'
import TrophyTOP3 from '../../shared/assets/img/trophies/trophy-top3.svg'
import Head from 'next/head'
import { getPlayerLeaderboard } from '@/services/player-leaderboard'
import { PlayerLeaderboard } from '@hubi/types'

interface LeaderboardProps {
  leaderboard: PlayerLeaderboard[]
}

export default function Leaderboard({ leaderboard }: LeaderboardProps) {
  const [player, setPlayer] = useState<PlayerLeaderboard | null>(null)
  const [nickname, setNickname] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)

  const handleSearch = async (key: string) => {
    if (isSearching) return

    if (key == 'Enter' && nickname !== '') {
      try {
        setIsSearching(true)

        const player = await toast.promise(
          getPlayerLeaderboard({ nickname }),
          {
            pending: 'Buscando player...',
            error: 'Nenhuma player encontrada com este nickname!',
          },
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          },
        )

        setIsSearching(false)
        setPlayer(player)
      } catch (err) {
        setIsSearching(false)
        setPlayer(null)
      }
    } else if (nickname === '') setPlayer(null)
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
            <h1 className={`text-6xl sm:text-8xl`}>LEADERBOARD</h1>

            <div className="flex flex-col sm:flex-row w-full justify-center items-center">
              <Image
                src={seasons}
                alt="Season atual"
                className="block sm:hidden mt-2"
              />
              <input
                className={`${styles.input} my-5 sm:m-10 w-10/12 sm:max-w-lg focus:outline-none`}
                name="player"
                placeholder="Digite o nick de uma jogadora e aperte enter para pesquisar..."
                onChange={(event) => setNickname(event.target.value)}
                onKeyDown={(event) => handleSearch(event.key)}
              />
              <Image
                src={seasons}
                alt="Season atual"
                className="hidden sm:block"
              />
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
              {player ? (
                <div
                  w-full
                  key={player.userId}
                  className={`${styles.tableContent} h-20 rounded-b-3xl ${styles.tableFirstRow} mt-3 text-center grid grid-cols-12 gap-6 items-center`}
                >
                  <p className="col-span-3 md:col-span-2">{player.position}</p>
                  <p className="col-span-3 md:col-span-3">{player.points}</p>
                  <p className="col-span-6 md:col-span-4 ">{player.nickname}</p>
                  <p className="md:col-span-3 hidden md:block">
                    {player.played}{' '}
                    {player.played == 1 ? 'Partida' : 'Partidas'}{' '}
                  </p>
                </div>
              ) : (
                leaderboard.length > 0 &&
                leaderboard.map((player, index) => (
                  <div
                    w-full
                    key={player.userId}
                    className={`${styles.tableContent} ${
                      index == 0
                        ? `h-20 rounded-b-3xl ${styles.tableFirstRow}`
                        : 'h-10 rounded-full'
                    } mt-3 text-center grid grid-cols-12 gap-6 items-center`}
                  >
                    <div className="col-span-3 md:col-span-2 flex gap-5 w-full justify-center">
                      <p
                        className={`${
                          (index === 0 || index === 1 || index === 2) && 'pl-10'
                        }`}
                      >
                        {index + 1}
                      </p>
                      {index == 0 ? (
                        <Image
                          src={TrophyTOP1}
                          alt="TOP 1"
                          width={30}
                          height={30}
                        />
                      ) : index == 1 ? (
                        <Image
                          src={TrophyTOP2}
                          alt="TOP 2"
                          width={20}
                          height={20}
                        />
                      ) : index == 2 ? (
                        <Image
                          src={TrophyTOP3}
                          alt="TOP 3"
                          width={20}
                          height={20}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                    <p className="col-span-3 md:col-span-3">{player.points}</p>
                    <p className="col-span-6 md:col-span-4 ">
                      {player.nickname}
                    </p>
                    <p className="md:col-span-3 hidden md:block">
                      {player.played}{' '}
                      {player.played == 1 ? 'Partida' : 'Partidas'}{' '}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const leaderboard = await getLeaderboard()

  return {
    props: { leaderboard },
    revalidate: 60 * 60 * 24, // 24hours
  }
}
