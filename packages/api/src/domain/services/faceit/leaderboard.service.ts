import { Injectable } from '@nestjs/common'
import { LeadboardPlayer } from '@hubi/types/faceit'
import { OpenFaceitClientService } from '@/infra/services/faceit/open-faceit-client'

@Injectable()
export class LeaderboardService {
  constructor(private openFaceitClientService: OpenFaceitClientService) {}

  async getLeaderboard({
    limit = 10,
    offset = 0,
    season = 0,
  }: GetLeaderboardParams): Promise<LeadboardPlayer[]> {
    let leaderboard = []

    if (season > 0) {
      leaderboard = await this.openFaceitClientService.getSeasonalLeaderboard({
        limit,
        offset,
        season,
      })
    } else {
      leaderboard = await this.openFaceitClientService.getLeaderboard({
        limit,
        offset,
      })
    }

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
  season?: number
}
