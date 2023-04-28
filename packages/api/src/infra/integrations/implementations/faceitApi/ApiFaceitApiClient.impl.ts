import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'

import {
  ApiFaceitApiClient,
  GetLeaderboardPlayerInfoParams,
  GetLeaderboardPlayerInfoResponse,
} from '../../interfaces/faceitApi/apiFaceit'

@Injectable()
export class ApiFaceitApiClientImpl implements ApiFaceitApiClient {
  private readonly httpService: AxiosInstance

  constructor() {
    this.httpService = axios.create({
      baseURL: 'https://api.faceit.com',
    })
  }

  async getLeaderboarPlayerInfo(
    params: GetLeaderboardPlayerInfoParams,
  ): Promise<GetLeaderboardPlayerInfoResponse> {
    const playerInfo =
      await this.httpService.get<GetLeaderboardPlayerInfoResponse>(
        `/leaderboard/v1/ranking/hub/${process.env.HUB_ID}/${params.playerId}?leaderboardId=${params.leaderboardId}`,
      )

    return playerInfo.data
  }
}
