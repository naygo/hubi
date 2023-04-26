import { ok, serverError } from '@/domain/helpers'
import { HttpResponse, Service } from '@/domain/interfaces/protocols'
import { FaceitApiClientImpl } from '@/infra/integrations/implementations/faceitApi'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GetLeaderboardService implements Service {
  constructor(private readonly faceitApiClient: FaceitApiClientImpl) {}

  async execute({
    limit = 10,
    offset = 0,
  }: GetLeaderboardRequest): Promise<HttpResponse> {
    try {
      const leaderboard = await this.faceitApiClient.getLeaderboard({
        limit,
        offset,
      })

      const formattedLeaderboard: GetLeaderboardResponse[] =
        leaderboard.items.map((item) => ({
          userId: item.player.user_id,
          nickname: item.player.nickname,
          played: item.played,
          points: item.points,
        }))

      return ok({ leaderboard: formattedLeaderboard })
    } catch (err) {
      return serverError()
    }
  }
}

export interface GetLeaderboardRequest {
  limit?: number
  offset?: number
}

export interface GetLeaderboardResponse {
  userId: string
  nickname: string
  played: number
  points: number
}
