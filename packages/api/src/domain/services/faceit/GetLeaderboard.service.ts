import { ok, serverError } from '@/domain/helpers'
import { HttpResponse, Service } from '@/domain/interfaces/protocols'
import { FaceitApiClient } from '@/infra/integrations/implementations'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GetLeaderboardService implements Service {
  constructor(private readonly faceitApiClient: FaceitApiClient) {}

  async execute(): Promise<HttpResponse> {
    try {
      const leaderboard = await this.faceitApiClient.getLeaderboard()

      return ok(leaderboard)
    } catch (err) {
      return serverError()
    }
  }
}
