import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

import { FaceitGetLeaderboardResponse } from '../../interfaces/faceitApi/IGetLeaderboard'
import { IFaceitApiClient } from '../../interfaces/faceitApi'

@Injectable()
export class FaceitApiClient implements IFaceitApiClient {
  constructor(private readonly httpService: HttpService) {
    this.httpService.axiosRef.defaults.baseURL =
      'https://open.faceit.com/data/v4'
  }

  async getLeaderboard(): Promise<FaceitGetLeaderboardResponse> {
    const leaderboard = await firstValueFrom(
      this.httpService.get<FaceitGetLeaderboardResponse>(
        `/leaderboards/hubs/${process.env.HUB_ID}/general`,
        {
          params: {
            offset: 0,
            limit: 50,
          },
          headers: {
            Authorization: `Bearer ${process.env.FACEIT_API_KEY}`,
          },
        },
      ),
    )

    return leaderboard.data
  }
}
