import { User, UserSocial, UserStatusEnum } from '@hubi/types'
import { Hasher } from '@/infra/cryptography'
import { UserSocialsRepository } from '@/infra/db/prisma/repositories/user-socials.repository'
import { UsersRepository } from '@/infra/db/prisma/repositories/users.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateUser {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userSocialsRepository: UserSocialsRepository,
    private readonly hasher: Hasher,
  ) {}

  async execute(parameters: CreateUser.Parameters): Promise<CreateUser.Result> {
    const result: CreateUser.Result = {
      valid: true,
      message: null,
    }

    if (parameters.password !== parameters.confirmPassword) {
      Object.assign(result, {
        message: 'Senha Inválida',
        valid: false,
      })

      return result
    }

    const userInDb = await this.usersRepository.loadByEmail({
      email: parameters.email,
    })

    if (userInDb) {
      Object.assign(result, {
        message: 'Já existe um usuário com esse email',
        valid: false,
      })

      return result
    }

    const { socials, confirmPassword, ...user } = parameters
    const hashedPassword = await this.hasher.hash(user.password)

    const userToCreate: UsersRepository.CreateUserParameters = {
      ...user,
      createdAt: new Date(),
      isAdmin: false,
      password: hashedPassword,
      status: UserStatusEnum.CREATED,
    }

    const createdUser = await this.usersRepository.create(userToCreate)

    if (!createdUser) {
      Object.assign(result, {
        message: 'Não foi possível criar esse usuário',
        valid: false,
      })

      return result
    }

    const socialsToCreate: UserSocialsRepository.CreateUserParameters =
      socials.map((social) => ({
        socialId: social.socialId,
        url: social.url,
        userId: createdUser.id,
        createdAt: new Date(),
        status: 1,
      }))

    await this.userSocialsRepository.create(socialsToCreate)

    return result
  }
}

export namespace CreateUser {
  export type Parameters = Omit<
    User,
    'id' | 'createdAt' | 'isAdmin' | 'gender' | 'pronoun' | 'rank' | 'socials'
  > & { socials: Omit<UserSocial, 'id' | 'userId'>[]; confirmPassword: string }
  export type Result = {
    valid: boolean
    message?: string
  }
}
