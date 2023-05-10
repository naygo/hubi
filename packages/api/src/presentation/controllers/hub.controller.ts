import { HubLeaderboard } from '@hubi/types/faceit'
import { Controller, Get } from '@nestjs/common'

import { LeaderboardService } from '@/domain/services/faceit/leaderboard.service'

@Controller('/hub')
export class HubController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Get('/leaderboards')
  async getLeaderboard(): Promise<HubLeaderboard[]> {
    return await this.leaderboardService.getHubLeaderboards()
  }
}
