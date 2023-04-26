import { FaceitApiClient } from '@/infra/integrations/implementations'
import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('/faceit')
export class FaceitController {
  constructor(
    // private readonly getLeaderboardService: GetLeaderboardService,
    private readonly faceitApiClient: FaceitApiClient,
  ) {}

  @Get('/leaderboard')
  async getLeaderboard(@Res() res: Response) {
    // const response = await this.getLeaderboardService.execute()
    const leaderboard = await this.faceitApiClient.getLeaderboard()

    return res.status(200).json(leaderboard)
  }
}
