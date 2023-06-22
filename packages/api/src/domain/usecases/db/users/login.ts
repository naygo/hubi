import { Injectable } from '@nestjs/common'

import { InvalidFieldException } from '@/domain/helpers/exceptions'
import { Encrypter, Hasher } from '@/infra/cryptography'
import { UsersRepository } from '@/infra/db/prisma/repositories'

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

    const message = 'Email e/ou Senha Inválidos'

    if (!user) {
      throw new InvalidFieldException(message)
    }

    const passwordIsValid = await this.hasher.compare(password, user.password)

    if (!passwordIsValid) {
      throw new InvalidFieldException(message)
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
