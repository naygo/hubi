import { Controller, Get } from '@nestjs/common'

import { FindGenders } from '@/domain/usecases/db/genders/find-genders'

@Controller('/genders')
export class GendersController {
  constructor(private readonly findGenders: FindGenders) {}

  @Get('/')
  async getGenders() {
    return this.findGenders.execute()
  }
}
