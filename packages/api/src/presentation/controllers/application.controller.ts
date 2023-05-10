import { Controller, Get, Res } from '@nestjs/common'

import { Response } from 'express'

@Controller('/')
export class ApplicationController {
  @Get('/health')
  async handleHealthCheck(@Res() res: Response) {
    return res.status(200).json({ message: 'OK OK' })
  }
}
