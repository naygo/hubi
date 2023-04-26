import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

import {
  GetLeaderboardParams,
  GetLeaderboardResponse,
  IFaceitApiClient,
} from '../../interfaces'

@Injectable()
export class FaceitApiClientImpl implements IFaceitApiClient {
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
}
