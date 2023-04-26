import { ok, serverError } from '@/domain/helpers'
import { HttpResponse, Service } from '@/domain/interfaces/protocols'
import { FaceitApiClient } from '@/infra/integrations/implementations/faceitApi'
import { Injectable } from '@nestjs/common'

@Injectable()
export class GetLeaderboardService implements Service {
  constructor(private readonly faceitApiClient: FaceitApiClient) {}

  async execute(): Promise<HttpResponse> {
    try {
      const leaderboard = await this.faceitApiClient.getLeaderboard()

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

export interface GetLeaderboardResponse {
  userId: string
  nickname: string
  played: number
  points: number
}
