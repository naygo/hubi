import { HttpException, HttpStatus } from '@nestjs/common'

export class UserNotFound extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Usuário com esse email não encontrado.',
      },
      HttpStatus.NOT_FOUND,
    )
  }
}
