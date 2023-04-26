import { Injectable } from '@nestjs/common'

import { Usecase } from '@/domain/interfaces/protocols'
import { OpenFaceitApiClientImpl } from '@/infra/integrations/implementations'
import {
  GetPlayerInfoParams,
  GetPlayerInfoResponse,
} from '@/infra/integrations/interfaces'

@Injectable()
export class GetPlayerInfoUsecase
  implements Usecase<GetPlayerInfoParams, GetPlayerInfoResponse>
{
  constructor(private readonly faceitApiClient: OpenFaceitApiClientImpl) {}

  async execute(params: GetPlayerInfoParams): Promise<GetPlayerInfoResponse> {
    return this.faceitApiClient.getPlayerInfo(params)
  }
}
