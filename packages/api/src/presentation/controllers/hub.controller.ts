import { HubLeaderboards } from '@hubi/types/faceit'
import { Controller, Get, Query } from '@nestjs/common'

import { LeaderboardService } from '@/domain/services/faceit/leaderboard.service'

@Controller('/hub')
export class HubController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get('/leaderboards')
  async getLeaderboard(): Promise<HubLeaderboards[]> {
    return await this.leaderboardService.getHubLeaderboards()
  }
}
