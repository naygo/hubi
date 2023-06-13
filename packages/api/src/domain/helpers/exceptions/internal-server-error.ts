import { HttpException, HttpStatus } from '@nestjs/common'

export class InternalServerError extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Ocorreu um erro inesperado ao executar operação',
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    )
  }
}
