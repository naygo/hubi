import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { CreateUser } from '@/domain/usecases/db/users/create-user'
import { SignupDTO } from '@/presentation/dtos/user'

@Controller('/user')
export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() body: SignupDTO) {
    await this.createUser.execute(body)
  }
}
