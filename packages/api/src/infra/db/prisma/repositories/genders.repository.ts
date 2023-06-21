import { Inject, Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

import { PRISMA_PROVIDER } from '../provider'

@Injectable()
export class GendersRepository {
  private gendersRepository: Prisma.GendersDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >

  constructor(
    @Inject(PRISMA_PROVIDER)
    private readonly prisma: PrismaClient,
  ) {
    this.gendersRepository = this.prisma.genders
  }

  async findMany() {
    return this.gendersRepository.findMany()
  }
}
