import { User } from '@hubi/types'
import { Inject, Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

import { PRISMA_PROVIDER } from '@/infra/db/prisma/provider'

@Injectable()
export class UsersRepository {
  private userRepository: Prisma.UsersDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >

  constructor(@Inject(PRISMA_PROVIDER) private readonly prisma: PrismaClient) {
    this.userRepository = this.prisma.users
  }

  async create(
    parameters: UsersRepository.CreateUserParameters,
  ): Promise<UsersRepository.CreateUserResult> {
    const createdUser = await this.userRepository.create({
      data: parameters,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
        dateBirth: true,
        genderId: true,
        howDidKnowHubi: true,
        isAdmin: true,
        updatedAt: true,
        pronounId: true,
        rankId: true,
        riotId: true,
        status: true,
        timeInCommunity: true,
      },
    })

    return createdUser
  }

  async loadByEmail(
    parameters: UsersRepository.LoadByEmailParameters,
  ): Promise<UsersRepository.LoadByEmailResult> {
    const user = await this.userRepository.findFirst({
      where: { email: parameters.email },
      include: {
        gender: true,
        pronoun: true,
        socials: true,
        rank: true,
      },
    })

    return user
  }
}

export namespace UsersRepository {
  export type CreateUserParameters = Omit<
    User,
    'id' | 'updatedAt' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >
  export type CreateUserResult = Omit<
    User,
    'password' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >

  export type LoadByEmailParameters = {
    email: string
  }
  export type LoadByEmailResult = User
}
