import { Leaderboard, PlayerLeaderboard } from '@hubi/types'

import { api } from './api'

interface GetLeaderboardParams {
  leaderboardId: string
  limit?: number
}

export async function getLeaderboard({
  leaderboardId,
  limit = 50,
}: GetLeaderboardParams): Promise<PlayerLeaderboard[]> {
  const response = await api.get<PlayerLeaderboard[]>(
    `/leaderboard/${leaderboardId}`,
    {
      params: {
        limit,
      },
    },
  )
  return response.data
}

export async function getListLeaderboards(): Promise<Leaderboard[]> {
  const response = await api.get<Leaderboard[]>('/hub/leaderboards')
  return response.data
}
