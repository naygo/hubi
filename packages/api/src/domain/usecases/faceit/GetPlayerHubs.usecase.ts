import { Usecase } from '@/domain/interfaces/protocols'
import { OpenFaceitApiClientImpl } from '@/infra/integrations/implementations'
import {
  GetPlayerHubsParams,
  GetPlayerHubsResponse,
} from '@/infra/integrations/interfaces'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GetPlayerHubsUsecase
  implements Usecase<GetPlayerHubsParams, GetPlayerHubsResponse>
{
  constructor(private readonly faceitApiClient: OpenFaceitApiClientImpl) {}

  execute(params: GetPlayerHubsParams): Promise<GetPlayerHubsResponse> {
    return this.faceitApiClient.getPlayerHubs(params)
  }
}
