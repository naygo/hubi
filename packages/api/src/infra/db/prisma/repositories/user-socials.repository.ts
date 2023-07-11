import { UserSocial } from '@hubi/types'
import { Inject, Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

import { PRISMA_PROVIDER } from '@/infra/db/prisma/provider'

@Injectable()
export class UserSocialsRepository {
  private userSocialsRepository: Prisma.UserSocialDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >

  constructor(@Inject(PRISMA_PROVIDER) private readonly prisma: PrismaClient) {
    this.userSocialsRepository = this.prisma.userSocial
  }

  async create(
    parameters: UserSocialsRepository.CreateUserParameters,
  ): Promise<UserSocialsRepository.CreateUserResult> {
    await this.userSocialsRepository.createMany({
      data: parameters,
    })
  }
}

export namespace UserSocialsRepository {
  export type CreateUserParameters = Omit<UserSocial, 'id'>[]
  export type CreateUserResult = void
}
