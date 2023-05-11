import { LeadboardPlayer, PlayerLeaderboard } from '@hubi/types/faceit'
import { Controller, Get, Param, Query } from '@nestjs/common'

import { LeaderboardService } from '@/domain/services/faceit/leaderboard.service'
import { PlayerService } from '@/domain/services/faceit/player.service'
import { GetLeaderboardDto } from '@/presentation/dtos/faceit/get-leaderboard.dto'
import { GetPlayerInfoDto } from '@/presentation/dtos/faceit/get-player-info.dto'

@Controller('/leaderboard')
export class LeaderboardController {
  constructor(
    private readonly leaderboardService: LeaderboardService,
    private readonly playerService: PlayerService,
  ) {}

  @Get('/:id')
  async getLeaderboard(
    @Param('id') id: string,
    @Query() query: GetLeaderboardDto,
  ): Promise<LeadboardPlayer[]> {
    return await this.leaderboardService.getLeaderboard(id, query)
  }

  @Get('/player/:nickname')
  async getPlayerLeaderboard(
    @Query() query: GetPlayerInfoDto,
  ): Promise<PlayerLeaderboard> {
    return await this.playerService.getPlayerLeaderboard(query)
  }
}
