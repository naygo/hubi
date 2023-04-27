import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

import {
  GetLeaderboardParams,
  GetLeaderboardResponse,
  GetPlayerHubsParams,
  GetPlayerHubsResponse,
  GetPlayerInfoParams,
  GetPlayerInfoResponse,
  OpenFaceitApiClient,
} from '../../interfaces/faceitApi/openFaceit'

@Injectable()
export class OpenFaceitApiClientImpl implements OpenFaceitApiClient {
  constructor(private readonly httpService: HttpService) {
    this.httpService.axiosRef.defaults.baseURL =
      'https://open.faceit.com/data/v4'

    this.httpService.axiosRef.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${process.env.FACEIT_API_KEY}`
  }

  async getLeaderboard({
    limit,
    offset,
  }: GetLeaderboardParams): Promise<GetLeaderboardResponse> {
    const leaderboard = await firstValueFrom(
      this.httpService.get<GetLeaderboardResponse>(
        `/leaderboards/hubs/${process.env.HUB_ID}/general`,
        {
          params: {
            offset,
            limit,
          },
        },
      ),
    )

    return leaderboard.data
  }

  async getPlayerHubs(
    params: GetPlayerHubsParams,
  ): Promise<GetPlayerHubsResponse> {
    const playerHubs = await firstValueFrom(
      this.httpService.get<GetPlayerHubsResponse>(
        `/players/${params.playerId}/hubs`,
      ),
    )

    return playerHubs.data
  }

  async getPlayerInfo(
    params: GetPlayerInfoParams,
  ): Promise<GetPlayerInfoResponse> {
    const playerInfo = await firstValueFrom(
      this.httpService.get<GetPlayerInfoResponse>(
        `/players?nickname=${params.nickname}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.FACEIT_API_KEY}`,
          },
          validateStatus: (status) => status < 500,
        },
      ),
    )

    return playerInfo.data
  }
}
