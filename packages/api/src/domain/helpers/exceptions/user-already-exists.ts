import { HttpException, HttpStatus } from '@nestjs/common'

export class UserAlreadyExists extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Já existe um usuário com esse email.',
      },
      HttpStatus.BAD_REQUEST,
    )
  }
}
