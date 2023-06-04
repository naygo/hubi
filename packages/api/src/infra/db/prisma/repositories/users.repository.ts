import { Prisma, PrismaClient } from '@prisma/client'
import { User } from '@hubi/types'
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

  async loadByEmail(
    parameters: UsersRepository.LoadByEmailParameters,
  ): Promise<UsersRepository.LoadByEmailResult> {
    const user = await this.userRepository.findFirst({
      where: { email: parameters.email },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        dateBirth: true,
        genderId: true,
        createdAt: true,
        updatedAt: true,
        howDidKnowHubi: true,
        timeInCommunity: true,
        pronounId: true,
        riotId: true,
        rankId: true,
        isAdmin: true,
        gender: true,
        pronoun: true,
        rank: true,
        socials: true,
      },
    })

    return user as unknown as UsersRepository.LoadByEmailResult
  }
}

export namespace UsersRepository {
  export type CreateUserParameters = Omit<
    User,
    'id' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >
  export type CreateUserResult = Omit<
    User,
    'password' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >

  export type LoadByEmailParameters = {
    email: string
  }
  export type LoadByEmailResult = Omit<User, 'password'>
}
