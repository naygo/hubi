import axios, { AxiosInstance } from 'axios'
import { Injectable } from '@nestjs/common'
import { HubLeaderboard } from '@hubi/types/faceit'

@Injectable()
export class OpenFaceitClientService {
  private readonly httpService: AxiosInstance

  constructor() {
    this.httpService = axios.create({
      baseURL: 'https://open.faceit.com/data/v4',
      headers: {
        Authorization: `Bearer ${process.env.FACEIT_API_KEY}`,
      },
    })
  }

  async getHubLeaderboards(): Promise<HubLeaderboard[]> {
    const leaderboards = await this.httpService.get<GetHubLeaderboardsResponse>(
      `/leaderboards/hubs/${process.env.HUB_ID}`,
    )

    return leaderboards.data.items
  }

  async getLeaderboard({
    limit,
    offset,
  }: GetLeaderboardParams): Promise<GetLeaderboardResponse[]> {
    const leaderboard = await this.httpService.get<{
      items: GetLeaderboardResponse[]
    }>(`/leaderboards/hubs/${process.env.HUB_ID}/general`, {
      params: {
        offset,
        limit,
      },
    })

    return leaderboard.data.items
  }

  async getSeasonalLeaderboard({
    limit,
    offset,
    season,
  }: GetLeaderboardSeasonalParams) {
    const leaderboard = await this.httpService.get<{
      items: GetLeaderboardResponse[]
    }>(`/leaderboards/hubs/${process.env.HUB_ID}/seasons/${season}`, {
      params: {
        offset,
        limit,
      },
    })

    return leaderboard.data.items
  }

  async getPlayerHubs({
    playerId,
  }: GetPlayerHubsParams): Promise<GetPlayerHubsResponse> {
    const playerHubs = await this.httpService.get<GetPlayerHubsResponse>(
      `/players/${playerId}/hubs`,
    )
    return playerHubs.data
  }

  async getPlayerInfo({
    nickname,
  }: GetPlayerInfoParams): Promise<GetPlayerInfoResponse> {
    const playerInfo = await this.httpService.get<GetPlayerInfoResponse>(
      `/players?nickname=${nickname}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.FACEIT_API_KEY}`,
        },
        validateStatus: (status) => status < 500,
      },
    )

    return playerInfo.data
  }
}

interface GetHubLeaderboardsResponse {
  items: HubLeaderboard[]
}

interface GetLeaderboardParams {
  limit: number
  offset: number
}

interface GetLeaderboardSeasonalParams {
  limit: number
  offset: number
  season: number
}

interface GetLeaderboardResponse {
  player: {
    user_id: string
    nickname: string
    avatar: string
    country: string
    skill_level: number
    faceit_url: string
  }
  played: number
  won: number
  lost: number
  draw: number
  points: number
  win_rate: number
  current_streak: number
  position: number
}

interface GetPlayerInfoParams {
  nickname: string
}

interface GetPlayerInfoResponse {
  player_id: string
  nickname: string
  avatar: string
  country: string
  cover_image: string
  memberships: string[]
  faceit_url: string
}

interface GetPlayerHubsParams {
  playerId: string
}

interface GetPlayerHubsResponse {
  items: {
    hub_id: string
    name: string
    avatar: string
    game_id: string
    organizer_id: string
    faceit_url: string[]
  }[]
}
