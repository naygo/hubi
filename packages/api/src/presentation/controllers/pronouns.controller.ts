import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'

import { FindPronouns } from '@/domain/usecases/db/pronouns/find-pronouns'

@Controller('pronouns')
export class PronounsController {
  constructor(private readonly findPronouns: FindPronouns) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getPronouns() {
    return this.findPronouns.execute()
  }
}
