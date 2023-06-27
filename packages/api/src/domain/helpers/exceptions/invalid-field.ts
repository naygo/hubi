import { HttpException, HttpStatus } from '@nestjs/common'

export class InvalidFieldException extends HttpException {
  constructor(message: string) {
    super(
      {
        status: HttpStatus.BAD_REQUEST,
        error: message,
      },
      HttpStatus.BAD_REQUEST,
    )
  }
}
