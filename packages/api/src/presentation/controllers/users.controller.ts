import { Body, Controller, Post, Res } from '@nestjs/common'
import { CreateUser } from '@/domain/usecases/db/users/create-user'
import { Response } from 'express'

@Controller('/user')
export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post('/signup')
  async signup(@Body() body, @Res() response: Response) {
    const valid = await this.createUser.execute(body)
    const result = {
      statusCode: 204,
      message: 'User created was successfuly',
    }

    if (!valid) {
      result.statusCode = 400
      result.message = 'Cannot create user'
    }

    response.status(result.statusCode).json(result)
  }
}
