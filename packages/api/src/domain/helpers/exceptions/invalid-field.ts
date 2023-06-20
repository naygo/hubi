import { HttpException, HttpStatus } from '@nestjs/common'

export class InvalidField extends HttpException {
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
