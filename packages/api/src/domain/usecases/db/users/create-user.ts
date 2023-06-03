import { UsersRepository } from '@/infra/db/prisma/repositories/users.repository'
import { User } from '@hubi/types/db'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateUser {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(parameters: CreateUser.Parameters): Promise<CreateUser.Result> {
    let valid = true

    const userToCreate: UsersRepository.CreateUserParameters = {
      ...parameters,
      createdAt: new Date(),
      isAdmin: false,
    }

    const user = await this.usersRepository.create(userToCreate)

    if (!user) {
      valid = false
    }

    return valid
  }
}

export namespace CreateUser {
  export type Parameters = Omit<
    User,
    'id' | 'createdAt' | 'isAdmin' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >
  export type Result = boolean
}
