import { Body, Controller, Post, Res } from '@nestjs/common'
import { CreateUser } from '@/domain/usecases/db/users/create-user'
import { Response } from 'express'
import { SignupDTO } from '@/presentation/dtos/user'

@Controller('/user')
export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post('/signup')
  async signup(@Body() body: SignupDTO, @Res() response: Response) {
    await this.createUser.execute(body)
    response.status(201).end()
  }
}
