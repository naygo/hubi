import { HubLeaderboard, LeadboardPlayer } from '@hubi/types'
import { Injectable } from '@nestjs/common'

import { OpenFaceitClientService } from '@/infra/services/faceit/open-faceit-client'

@Injectable()
export class LeaderboardService {
  constructor(private openFaceitClientService: OpenFaceitClientService) {}

  async getHubLeaderboards(): Promise<HubLeaderboard[]> {
    return await this.openFaceitClientService.getHubLeaderboards()
  }

  async getLeaderboard(
    id: string,
    { limit = 10, offset = 0 }: GetLeaderboardParams,
  ): Promise<LeadboardPlayer[]> {
    const leaderboard = await this.openFaceitClientService.getLeaderboad({
      limit,
      offset,
      id,
    })

    return leaderboard.map((item) => ({
      userId: item.player.user_id,
      nickname: item.player.nickname,
      played: item.played,
      position: item.position,
      points: item.points,
    }))
  }
}

interface GetLeaderboardParams {
  limit?: number
  offset?: number
}
