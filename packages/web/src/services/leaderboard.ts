import { Leaderboard, PlayerLeaderboard } from '@hubi/types'
import { api } from './api'

export async function getLeaderboard(
  leaderboardId: string,
): Promise<PlayerLeaderboard[]> {
  const response = await api.get<PlayerLeaderboard[]>('/leaderboard', {
    params: {
      limit: 50,
      id: leaderboardId,
    },
  })
  return response.data
}

export async function getListLeaderboards(): Promise<Leaderboard[]> {
  const response = await api.get<Leaderboard[]>('/hub/leaderboards')
  return response.data
}
