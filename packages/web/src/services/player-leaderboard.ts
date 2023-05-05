import { PlayerLeaderboard } from '@hubi/types'

import { api } from './api'

export interface PlayerLeaderboardParams {
  leaderboardId?: string
  nickname: string
}

export async function getPlayerLeaderboard({
  leaderboardId = '644d5fd23681f160a09897b8',
  nickname,
}: PlayerLeaderboardParams): Promise<PlayerLeaderboard> {
  const response = await api.get<PlayerLeaderboard>('/leaderboard/player', {
    params: {
      leaderboardId,
      nickname,
    },
  })
  return response.data
}
