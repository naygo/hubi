import { api } from './api'

export interface Leaderboard {
  userId: string
  nickname: string
  played: number
  points: number
}

export async function getLeaderboard(): Promise<Leaderboard[]> {
  const response = await api.get<{ leaderboard: Leaderboard[] }>(
    '/faceit/leaderboard',
    {
      params: {
        limit: 50,
      },
    },
  )
  return response.data.leaderboard
}
