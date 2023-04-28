import { HandleMatchEndedService } from '@/domain/services/webhooks/HandleMatchEnded.service'
import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('/webhooks')
export class WebhooksController {
  constructor(
    private readonly handleMatchEndedService: HandleMatchEndedService,
  ) {}

  @Get('/health')
  async handleHealthCheck(@Res() res: Response) {
    return res.status(200).json({ message: 'OK OK' })
  }

  @Post('/match-ended')
  async handleMatchEnded(@Body() body: any, @Res() res: Response) {
    const response = await this.handleMatchEndedService.execute(body)
    return res.status(response.statusCode).json(response.body)
  }
}
