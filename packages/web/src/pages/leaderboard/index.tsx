import { GetStaticProps } from 'next'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import { Leaderboard, getLeaderboard } from '@/services/leaderboard'
import { IGetPlayerResponse, getPlayer } from '@/services/player'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import seasons from '../../shared/assets/img/seasons.svg'
import styles from './styles.module.scss'

interface LeaderboardProps {
  leaderboard: Leaderboard[]
}

export default function Leaderboard({ leaderboard }: LeaderboardProps) {
  const [player, setPlayer] = useState<IGetPlayerResponse | null>(null)

  const handleSearch = async (nickname: string) => {
    if (nickname && nickname.length > 3) {
      try {
        const playerResult = await getPlayer({ nickname })
        setPlayer(playerResult)
      } catch (error) {
        setPlayer(null)
        toast.info('Não foi encontrado um player com o nickname informado!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        })
      }
    } else setPlayer(null)
  }

  return (
    <div className="h-full">
      <Link className={`absolute ${styles.arrowBack}`} href="/">
        <BsFillArrowLeftCircleFill className="text-4xl" />
      </Link>
      {/* <div className={`${styles.leftBackground}`}></div>
      <div className={`${styles.rightBackground}`}></div> */}

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
              placeholder="Pesquisar uma jogadora..."
              onChange={(event) => handleSearch(event.target.value)}
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
              <p className="col-span-3 md:col-span-3 text-sm  sm:text-xl">
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
                <p className="col-span-3 md:col-span-2"></p>
                <p className="col-span-3 md:col-span-3">{player.points}</p>
                <p className="col-span-6 md:col-span-4 ">{player.nickname}</p>
                <p className="md:col-span-3 hidden md:block">
                  {player.played} {player.played == 1 ? 'Partida' : 'Partidas'}{' '}
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
                  <p className="col-span-3 md:col-span-2">{index + 1}</p>
                  <p className="col-span-3 md:col-span-3">{player.points}</p>
                  <p className="col-span-6 md:col-span-4 ">{player.nickname}</p>
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const leaderboard = await getLeaderboard()

  return {
    props: { leaderboard },
    revalidate: 60 * 60 * 24, // 24hours
  }
}
