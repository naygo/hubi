import { PlayerLeaderboard } from '@hubi/types'

import { api } from './api'

export interface PlayerLeaderboardParams {
  leaderboardId?: string
  nickname: string
}

export async function getPlayerLeaderboard({
  leaderboardId,
  nickname,
}: PlayerLeaderboardParams): Promise<PlayerLeaderboard> {
  const response = await api.get<PlayerLeaderboard>(
    `/leaderboard/${leaderboardId}/player`,
    {
      params: {
        nickname,
      },
    },
  )
  return response.data
}
