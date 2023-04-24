import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('/webhooks')
export class WebhooksController {
  @Post('/match-ended')
  async handleMatchEnded(@Body() body: any, @Res() res: Response) {
    console.log(body)

    return res.status(HttpStatus.OK).send({ msg: 'ok' })
  }
}
