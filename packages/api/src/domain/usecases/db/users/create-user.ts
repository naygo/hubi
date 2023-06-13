import {
  InternalServerError,
  UserAlreadyExists,
} from '@/domain/helpers/exceptions'
import {
  StatusEnum,
  User,
  UserSocial,
  UserStatusEnum,
} from '../../../../../../types/'
import { Hasher } from '@/infra/cryptography'
import { UserSocialsRepository } from '@/infra/db/prisma/repositories/user-socials.repository'
import { UsersRepository } from '@/infra/db/prisma/repositories/users.repository'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class CreateUser {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly userSocialsRepository: UserSocialsRepository,
    private readonly hasher: Hasher,
  ) {}

  async execute(parameters: CreateUser.Parameters): Promise<CreateUser.Result> {
    const userInDb = await this.usersRepository.loadByEmail({
      email: parameters.email,
    })

    if (userInDb) {
      throw new UserAlreadyExists()
    }

    const { socials, ...user } = parameters
    const hashedPassword = await this.hasher.hash(user.password)

    const userToCreate: UsersRepository.CreateUserParameters = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashedPassword,
      dateBirth: user.dateBirth,
      genderId: user.genderId,
      howDidKnowHubi: user.howDidKnowHubi,
      timeInCommunity: user.timeInCommunity,
      pronounId: user.pronounId,
      rankId: user.rankId,
      riotId: user.riotId,
      createdAt: new Date(),
      isAdmin: false,
      status: UserStatusEnum.CREATED,
    }

    const createdUser = await this.usersRepository.create(userToCreate)

    if (!createdUser) {
      throw new InternalServerError()
    }

    const socialsToCreate: UserSocialsRepository.CreateUserParameters =
      socials.map((social) => ({
        socialId: social.socialId,
        url: social.url,
        userId: createdUser.id,
        createdAt: new Date(),
        status: StatusEnum.ACTIVE,
      }))

    await this.userSocialsRepository.create(socialsToCreate)
  }
}

export namespace CreateUser {
  export type Parameters = Omit<
    User,
    | 'id'
    | 'updatedAt'
    | 'status'
    | 'createdAt'
    | 'isAdmin'
    | 'gender'
    | 'pronoun'
    | 'rank'
    | 'socials'
  > & {
    socials: Pick<UserSocial, 'socialId' | 'url'>[]
    confirmPassword: string
  }
  export type Result = void
}
