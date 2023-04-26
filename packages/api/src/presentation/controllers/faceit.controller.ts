import { GetLeaderboardService } from '@/domain/services/faceit/GetLeaderboard.service'
import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('/faceit')
export class FaceitController {
  constructor(private readonly getLeaderboardService: GetLeaderboardService) {}

  @Get('/leaderboard')
  async getLeaderboard(@Res() res: Response) {
    const response = await this.getLeaderboardService.execute()

    return res.status(response.statusCode).json(response.body)
  }
}
