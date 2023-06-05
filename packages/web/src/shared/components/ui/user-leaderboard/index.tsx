import { PlayerLeaderboard } from '@hubi/types'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { getCurrentLeaderboard, getLeaderboard } from '@/services/leaderboard'

import User from '@public/img/tmp/dog.jpg'

const playerMatches = (player: PlayerLeaderboard, userId: string) =>
  player.userId === userId

export function UserLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<PlayerLeaderboard[] | null>(
    null,
  )

  useEffect(() => {
    async function loadLeaderboards() {
      const { leaderboard_id: leaderboardId } = await getCurrentLeaderboard()

      const leaderboard = await getLeaderboard({
        leaderboardId,
        limit: 10,
      })

      setLeaderboard(leaderboard)
    }

    loadLeaderboards()
  }, [])

  return (
    <div className="flex flex-col gap-2">
      {leaderboard &&
        leaderboard.map((player, index) => (
          <UserCard
            key={player.nickname}
            player={player}
            className={clsx('bg-gradient-to-r to-bg-black', {
              'from-[#e5c97d80]': index === 0,
              'from-[#82828280]': index === 1,
              'from-[#C4947D80]': index === 2,
              'from-black-lighter':
                index > 2 &&
                !playerMatches(player, '72293acc-8eea-4186-bc2c-ace441428dec'),
              'from-[#E0960080]': playerMatches(
                player,
                '72293acc-8eea-4186-bc2c-ace441428dec',
              ),
            })}
          />
        ))}
    </div>
  )
}

interface UserCardProps {
  player: PlayerLeaderboard
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
        <div>
          <span className="font-bold">{player.nickname}</span>#HASH
        </div>
        <div className="text-gray-400">{player.points} pontos</div>
      </div>
    </div>
  )
}
