import { Inject, Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

import { PRISMA_PROVIDER } from '../provider'

@Injectable()
export class RanksRepository {
  private ranksRepository: Prisma.RankDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >

  constructor(
    @Inject(PRISMA_PROVIDER)
    private readonly prisma: PrismaClient,
  ) {
    this.ranksRepository = this.prisma.rank
  }

  async findMany() {
    return this.ranksRepository.findMany()
  }
}
