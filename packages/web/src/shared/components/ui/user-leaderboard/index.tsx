import clsx from 'clsx'
import Image from 'next/image'

import User from '@public/img/tmp/dog.jpg'

const players = [
  {
    nickname: 'user1#123',
    score: 100,
  },
  {
    nickname: 'user2#123',
    score: 200,
  },
  {
    nickname: 'user3#123',
    score: 300,
  },
  {
    nickname: 'user4#123',
    score: 400,
  },
  {
    nickname: 'user5#123',
    score: 500,
  },
  {
    nickname: 'user6#123',
    score: 600,
  },
  {
    nickname: 'user7#123',
    score: 700,
  },
  {
    nickname: 'user8#123',
    score: 800,
  },
  {
    nickname: 'user9#123',
    score: 900,
  },
  {
    nickname: 'user10#123',
    score: 1000,
  },
]

export function UserLeaderboard() {
  return (
    <div className="flex flex-col gap-2">
      {players.map((player, index) => (
        <UserCard
          key={player.nickname}
          player={player}
          className={clsx('bg-gradient-to-r to-bg-black', {
            'from-[#e5c97d80]': index === 0,
            'from-[#82828280]': index === 1,
            'from-[#C4947D80]': index === 2,
            'from-black-lighter': index > 2,
          })}
        />
      ))}
    </div>
  )
}

interface UserCardProps {
  player: {
    nickname: string
    score: number
  }
  className?: string
}

function UserCard({ player, className }: UserCardProps) {
  return (
    <div
      className={`${className} w-72 p-2 px-3 rounded flex items-center justify-start gap-2`}
    >
      <div className="opacity-90 rounded">
        <Image src={User.src} width={56} height={56} alt="user" className="" />
      </div>
      <div className="text-sm">
        <div className="font-bold">{player.nickname}</div>
        <div className="text-gray-400">{player.score} pontos</div>
      </div>
    </div>
  )
}
