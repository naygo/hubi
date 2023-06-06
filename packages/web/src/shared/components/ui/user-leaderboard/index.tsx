import { PlayerLeaderboard } from '@hubi/types'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { getCurrentLeaderboard, getLeaderboard } from '@/services/leaderboard'

import User from '@public/img/tmp/dog.jpg'

const CURRENT_USER_MOCK_ID = 'a9402ddc-81b3-46b2-b38d-9f6476f77813'

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
        leaderboard.map((player) => {
          const isCurrentUser = playerMatches(player, CURRENT_USER_MOCK_ID)

          return (
            <UserCard
              key={player.userId}
              player={player}
              className={clsx('bg-gradient-to-r to-bg-black rounded-br-full', {
                'from-[#E5C97D80]': !isCurrentUser && player.position === 1,
                'from-[#82828280]': !isCurrentUser && player.position === 2,
                'from-[#C4947D80]': !isCurrentUser && player.position === 3,
                'from-black-lighter': !isCurrentUser && player.position > 3,
                'from-[#E0960080]': isCurrentUser,
              })}
            />
          )
        })}
    </div>
  )
}

interface UserCardProps {
  player: PlayerLeaderboard
  className?: string
}

function UserCard({ player, className }: UserCardProps) {
  return (
    <div className="relative">
      <div
        className={clsx(
          `${className}
          w-72 p-2 px-3
          rounded
          flex items-center justify-start gap-2
          
          before:content=['']
          before:absolute before:top-0 before:left-0
          before:w-1 before:h-2/4
          before:transform before:translate-y-1/2 before:-translate-x-1/2
        `,
          {
            'before:bg-[#E5C97D]': player.position === 1,
            'before:bg-[#828282]': player.position === 2,
            'before:bg-[#C4947D]': player.position === 3,
            'before:bg-black':
              !playerMatches(player, CURRENT_USER_MOCK_ID) &&
              player.position > 3,
            'before:bg-[#E09600]': playerMatches(player, CURRENT_USER_MOCK_ID),
          },
        )}
      >
        <div className="opacity-90 rounded relative before">
          <Image src={User.src} width={56} height={56} alt="user" />
          <div>
            <div
              className={clsx(
                'absolute top-11 left-1/2 transform -translate-x-1/2 rounded border-2  bg-black w-8 h-4 text-xs text-center leading-[14px]',
                {
                  'border-[#E5C97D]': player.position === 1,
                  'border-[#828282]': player.position === 2,
                  'border-[#C4947D]': player.position === 3,
                  'border-[#BBBCBD]': player.position > 3,
                  'border-[#E09600]': playerMatches(
                    player,
                    CURRENT_USER_MOCK_ID,
                  ),
                },
              )}
            >
              {player.position}
            </div>
          </div>
        </div>
        <div className="text-sm">
          <div>
            <span className="font-bold">{player.nickname}</span>#HASH
          </div>
          <div className="text-gray-400">{player.points} pontos</div>
        </div>
      </div>
    </div>
  )
}
