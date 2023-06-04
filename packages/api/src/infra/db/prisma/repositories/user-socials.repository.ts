import { Prisma, PrismaClient } from '@prisma/client'
import { UserSocial } from '@hubi/types'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserSocialsRepository {
  private userSocialsRepository: Prisma.UsersSocialsDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >

  constructor() {
    const prisma = new PrismaClient()
    this.userSocialsRepository = prisma.usersSocials
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
