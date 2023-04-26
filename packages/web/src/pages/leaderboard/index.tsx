import { GetStaticProps } from 'next'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import styles from './styles.module.scss'
import { Leaderboard, getLeaderboard } from '@/services/leaderboard'
import Link from 'next/link'

interface LeaderboardProps {
  leaderboard: Leaderboard[]
}

export default function Leaderboard({ leaderboard }: LeaderboardProps) {
  return (
    <div className="h-full">
      <Link className={`absolute ${styles.arrowBack}`} href="/">
        <BsFillArrowLeftCircleFill className="text-4xl" />
      </Link>
      {/* <div className={`${styles.leftBackground}`}></div>
      <div className={`${styles.rightBackground}`}></div> */}

      <div className="flex justify-center h-full items-center">
        <div className="flex flex-col items-center w-full lg:max-w-5xl">
          <div>
            <h1 className={`text-6xl sm:text-8xl`}>LEADERBOARD</h1>
          </div>

          <input
            className={`${styles.input} my-5 sm:m-10 w-10/12 sm:max-w-lg focus:outline-none`}
            name="player"
            placeholder="Pesquisar uma jogadora..."
          />

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
            {leaderboard.map((player, index) => (
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
                  {player.played} {player.played == 1 ? 'Partida' : 'Partidas'}{' '}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const leaderboard = await getLeaderboard()
  console.log(leaderboard)
  return {
    props: { leaderboard },
    revalidate: 60 * 60 * 24, // 24hours
  }
}

const rank = [
  {
    id: 1,
    pontuacao: 1213,
    nickname: 'azureesz',
    partidas: 1,
  },
  {
    id: 2,
    pontuacao: 234,
    nickname: 'lyssaz',
    partidas: 1,
  },
  {
    id: 3,
    pontuacao: 1213,
    nickname: 'ilorde',
    partidas: 1,
  },
  {
    id: 4,
    pontuacao: 1213,
    nickname: 'erinvlr',
    partidas: 1,
  },
  {
    id: 5,
    pontuacao: 1213,
    nickname: 'aurayse',
    partidas: 1,
  },
  {
    id: 6,
    pontuacao: 1213,
    nickname: 'Rapunzel_f',
    partidas: 1,
  },
  {
    id: 7,
    pontuacao: 1213,
    nickname: 'patomac',
    partidas: 1,
  },
  {
    id: 8,
    pontuacao: 1213,
    nickname: '1srN',
    partidas: 1,
  },
]
