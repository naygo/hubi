import { api } from './api'

export interface IGetPlayerResponse {
  userId: string
  nickname: string
  played: number
  points: number
}

export interface IGetPlayerRequest {
  leaderboardId?: string
  nickname: string
}

export async function getPlayer({
  leaderboardId = '6420b7e5d1aeaa605ab3058b',
  nickname,
}: IGetPlayerRequest): Promise<IGetPlayerResponse> {
  const response = await api.get<{ player: IGetPlayerResponse }>(
    '/faceit/player',
    {
      params: {
        leaderboardId,
        nickname,
      },
    },
  )
  return response.data.player
}
