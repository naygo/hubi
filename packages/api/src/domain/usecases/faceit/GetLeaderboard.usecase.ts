import { Injectable } from '@nestjs/common'

import { Usecase } from '@/domain/interfaces/protocols'
import { FaceitApiClientImpl } from '@/infra/integrations/implementations'
import {
  GetLeaderboardParams,
  GetLeaderboardResponse,
} from '@/infra/integrations/interfaces'

@Injectable()
export class GetLeaderboardUsecase
  implements Usecase<GetLeaderboardParams, GetLeaderboardResponse>
{
  constructor(private readonly faceitApiClient: FaceitApiClientImpl) {}

  async execute(params: GetLeaderboardParams): Promise<GetLeaderboardResponse> {
    return this.faceitApiClient.getLeaderboard(params)
  }
}
