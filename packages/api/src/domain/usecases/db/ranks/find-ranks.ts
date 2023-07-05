import { Injectable } from '@nestjs/common'

import { RanksRepository } from '@/infra/db/prisma/repositories'

@Injectable()
export class FindRanks {
  constructor(private readonly ranksRepository: RanksRepository) {}

  async execute() {
    return this.ranksRepository.findMany()
  }
}
