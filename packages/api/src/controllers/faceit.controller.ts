import { Controller, Get, Query } from '@nestjs/common'

import { GetLeaderboardDto } from '@/dtos/faceit/get-leaderborad.dto'
import { GetPlayerInfoDto } from '@/dtos/faceit/get-playerInfo.dto'

import { LeaderboardService } from '@/domain/services/faceit/leaderboard.service'
import { PlayerService } from '@/domain/services/faceit/player.service'
import { LeadboardPlayer, PlayerLeaderboard } from '@hubi/types/faceit'

@Controller('/faceit')
export class FaceitController {
  constructor(
    private readonly leaderboardService: LeaderboardService,
    private readonly playerService: PlayerService,
  ) {}

  @Get('/leaderboard')
  async getLeaderboard(
    @Query() query: GetLeaderboardDto,
  ): Promise<LeadboardPlayer[]> {
    return await this.leaderboardService.getLeaderboard({ ...query })
  }

  @Get('/player-leaderboard')
  async getPlayerLeaderboard(
    @Query() query: GetPlayerInfoDto,
  ): Promise<PlayerLeaderboard> {
    return await this.playerService.getPlayerLeaderboard({ ...query })
  }
}
