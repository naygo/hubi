import { Injectable } from '@nestjs/common'

import { Usecase } from '@/domain/interfaces/protocols'
import { FaceitApiClientImpl } from '@/infra/integrations/implementations'
import {
  GetPlayerInfoParams,
  GetPlayerInfoResponse,
} from '@/infra/integrations/interfaces'

@Injectable()
export class GetPlayerInfoUsecase
  implements Usecase<GetPlayerInfoParams, GetPlayerInfoResponse>
{
  constructor(private readonly faceitApiClient: FaceitApiClientImpl) {}

  async execute(params: GetPlayerInfoParams): Promise<GetPlayerInfoResponse> {
    return this.faceitApiClient.getPlayerInfo(params)
  }
}
