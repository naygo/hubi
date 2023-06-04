import { Body, Controller, Post, Res } from '@nestjs/common'
import { CreateUser } from '@/domain/usecases/db/users/create-user'
import { Response } from 'express'

@Controller('/user')
export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post('/signup')
  async signup(@Body() body, @Res() response: Response) {
    const result = await this.createUser.execute(body)

    const responseResult = {
      statusCode: 204,
      message: result.message,
    }

    if (!result.valid) {
      responseResult.statusCode = 401
    }

    response.status(responseResult.statusCode).json(responseResult)
  }
}
