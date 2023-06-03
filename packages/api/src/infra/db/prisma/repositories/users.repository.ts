import { Prisma, PrismaClient } from '@prisma/client'
import { User } from '@hubi/types/db'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersRepository {
  private userRepository: Prisma.UsersDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >

  constructor() {
    const prisma = new PrismaClient()
    this.userRepository = prisma.users
  }

  async create(
    parameters: UsersRepository.CreateUserParameters,
  ): Promise<UsersRepository.CreateUserResult> {
    const createdUser = await this.userRepository.create({
      data: parameters,
    })

    const { password, ...user } = createdUser
    return user
  }
}

export namespace UsersRepository {
  export type CreateUserParameters = Omit<
    User,
    'id' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >
  export type CreateUserResult = Omit<
    User,
    'id' | 'password' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >
}
