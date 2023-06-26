import { Controller, Get } from '@nestjs/common'

import { FindRanks } from '@/domain/usecases/db/ranks/find-ranks'

@Controller('ranks')
export class RanksController {
  constructor(private readonly findRanks: FindRanks) {}

  @Get('/')
  async getRanks() {
    return this.findRanks.execute()
  }
}
