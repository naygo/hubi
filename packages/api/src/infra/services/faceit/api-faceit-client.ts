import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'

@Injectable()
export class ApiFaceitClientService {
  private readonly httpService: AxiosInstance

  constructor() {
    this.httpService = axios.create({
      baseURL: 'https://api.faceit.com',
    })
  }

  async getPlayerLeaderboard({
    leaderboardId,
    playerId,
  }: GetPlayerLeaderboardParams): Promise<GetPlayerLeaderboardResponse> {
    const playerInfo = await this.httpService.get<GetPlayerLeaderboardResponse>(
      `/leaderboard/v1/ranking/hub/${process.env.HUB_ID}/${playerId}?leaderboardId=${leaderboardId}`,
    )

    return playerInfo.data
  }
}

interface GetPlayerLeaderboardParams {
  playerId: string
  leaderboardId: string
}

interface GetPlayerLeaderboardResponse {
  payload: {
    played: number
    won: number
    lost: number
    draw: number
    points: number
    win_rate: number
    current_streak: number
    position: number
    placement: {
      entity_id: string
      entity_name: string
      entity_avatar: string
      entity_skill_level: number
      entity_country: string
      entity_memberships: string[]
    }
  }
}
