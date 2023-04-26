import { api } from './api'

export interface Leaderboard {
  userId: string
  nickname: string
  played: number
  points: number
}

export async function getLeaderboard(): Promise<Leaderboard[]> {
  const response = await api.get('/faceit/leaderboard')
  // TODO - enviar formatado do backend
  return response.data.items.map((item: any) => ({
    points: item.points,
    played: item.played,
    userId: item.player.user_id,
    nickname: item.player.nickname,
  }))
}
