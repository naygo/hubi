import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

import {
  GetLeaderboardParams,
  GetLeaderboardResponse,
  GetPlayerInfoParams,
  GetPlayerInfoResponse,
  OpenFaceitApiClient,
} from '../../interfaces/faceitApi/openFaceit'

@Injectable()
export class FaceitApiClientImpl implements OpenFaceitApiClient {
  constructor(private readonly httpService: HttpService) {
    this.httpService.axiosRef.defaults.baseURL =
      'https://open.faceit.com/data/v4'
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
          headers: {
            Authorization: `Bearer ${process.env.FACEIT_API_KEY}`,
          },
        },
      ),
    )

    return leaderboard.data
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
        },
      ),
    )

    return playerInfo.data
  }
}
