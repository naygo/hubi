import { Usecase } from '@/domain/interfaces/protocols'
import { ApiFaceitApiClientImpl } from '@/infra/integrations/implementations'
import {
  GetLeaderboardPlayerInfoParams,
  GetLeaderboardPlayerInfoResponse,
} from '@/infra/integrations/interfaces/faceitApi/apiFaceit'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GetLeaderboardPlayerInfoUsecase
  implements
    Usecase<GetLeaderboardPlayerInfoParams, GetLeaderboardPlayerInfoResponse>
{
  constructor(private readonly apiFaceitApiClient: ApiFaceitApiClientImpl) {}

  async execute(
    params: GetLeaderboardPlayerInfoParams,
  ): Promise<GetLeaderboardPlayerInfoResponse> {
    return this.apiFaceitApiClient.getLeaderboarPlayerInfo(params)
  }
}
