import { Inject, Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

import { PRISMA_PROVIDER } from '../provider'

@Injectable()
export class PronounsRepository {
  private pronounsRepository: Prisma.PronounDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >

  constructor(
    @Inject(PRISMA_PROVIDER)
    private readonly prisma: PrismaClient,
  ) {
    this.pronounsRepository = this.prisma.pronoun
  }

  async findMany() {
    return this.pronounsRepository.findMany({
      where: {
        status: 'ativo',
      },
    })
  }
}
