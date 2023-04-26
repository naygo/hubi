import { Controller, Get, Query, Res } from '@nestjs/common'
import { Response } from 'express'

import { GetLeaderboardDto, GetPlayerInfoDto } from '../dtos'
import { GetLeaderboardService, GetPlayerInfoService } from '@/domain/services'

@Controller('/faceit')
export class FaceitController {
  constructor(
    private readonly getLeaderboardService: GetLeaderboardService,
    private readonly getPlayerInfoService: GetPlayerInfoService,
  ) {}

  @Get('/leaderboard')
  async getLeaderboard(
    @Query() query: GetLeaderboardDto,
    @Res() res: Response,
  ) {
    const response = await this.getLeaderboardService.execute({ ...query })
    return res.status(response.statusCode).json(response.body)
  }

  @Get('/player')
  async getPlayerInfo(@Query() query: GetPlayerInfoDto, @Res() res: Response) {
    const response = await this.getPlayerInfoService.execute({ ...query })
    return res.status(response.statusCode).json(response.body)
  }
}
