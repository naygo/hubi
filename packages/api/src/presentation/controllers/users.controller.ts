import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { CreateUser } from '@/domain/usecases/db/users/create-user'
import { Login } from '@/domain/usecases/db/users/login'
import { LoginDTO, SignupDTO } from '@/presentation/dtos/user'

@Controller('/user')
export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly login: Login,
  ) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() body: SignupDTO) {
    await this.createUser.execute(body)
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async loginUser(@Body() body: LoginDTO) {
    const { token } = await this.login.execute(body)
    return {
      token,
    }
  }
}
