import { GetLeaderboardService } from '@/domain/services/faceit/GetLeaderboard.service'
import { Controller, Get, Query, Res } from '@nestjs/common'
import { Response } from 'express'

import { GetLeaderboardDto } from '../dtos'

@Controller('/faceit')
export class FaceitController {
  constructor(private readonly getLeaderboardService: GetLeaderboardService) {}

  @Get('/leaderboard')
  async getLeaderboard(
    @Query() query: GetLeaderboardDto,
    @Res() res: Response,
  ) {
    const response = await this.getLeaderboardService.execute({ ...query })
    return res.status(response.statusCode).json(response.body)
  }
}
