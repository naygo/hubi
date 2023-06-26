import { MessageValidator } from '@/presentation/utils'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginDTO {
  @IsEmail({}, { message: MessageValidator.email('email') })
  email: string

  @IsString({ message: MessageValidator.string('password') })
  @IsNotEmpty({ message: MessageValidator.empty('password') })
  password: string
}
