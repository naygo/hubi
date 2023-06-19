import { InvalidField, UserNotFound } from '@/domain/helpers/exceptions'
import { Encrypter, Hasher } from '@/infra/cryptography'
import { UsersRepository } from '@/infra/db/prisma/repositories'
import { Injectable } from '@nestjs/common'

@Injectable()
export class Login {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly hasher: Hasher,
    private readonly encrypter: Encrypter,
  ) {}

  async execute(parameters: Login.Parameters): Promise<Login.Result> {
    const { email, password } = parameters

    const user = await this.usersRepository.loadByEmail({ email })

    if (!user) {
      throw new UserNotFound()
    }

    const passwordIsValid = await this.hasher.compare(password, user.password)

    if (!passwordIsValid) {
      throw new InvalidField('Senha Inválida.')
    }

    const token = await this.encrypter.encrypt({ id: user.id, email })

    return {
      token,
    }
  }
}

export namespace Login {
  export type Parameters = {
    password: string
    email: string
  }
  export type Result = {
    token: string
  }
}
