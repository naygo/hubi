import { HandleMatchEndedService } from '@/presentation/services/webhooks/handleMatchEnded.service'
import { Body, Controller, Post, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('/webhooks')
export class WebhooksController {
  constructor(
    private readonly handleMatchEndedService: HandleMatchEndedService
  ) {}

  @Post('/match-ended')
  async handleMatchEnded(@Body() body: any, @Res() res: Response) {
    const response = await this.handleMatchEndedService.execute(body)

    return res.status(response.statusCode).json(response)
  }
}
