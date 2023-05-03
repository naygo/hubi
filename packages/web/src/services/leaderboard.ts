import { PlayerLeaderboard } from '@hubi/types'
import { api } from './api'

export async function getLeaderboard(): Promise<PlayerLeaderboard[]> {
  const response = await api.get<PlayerLeaderboard[]>('/leaderboard', {
    params: {
      limit: 50,
    },
  })
  return response.data
}
