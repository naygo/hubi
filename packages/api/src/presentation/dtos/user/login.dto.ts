import { MessageValidator } from '@/presentation/utils'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginDTO {
  @IsString({ message: MessageValidator.string('email') })
  @IsEmail({}, { message: MessageValidator.email('email') })
  @IsNotEmpty({ message: MessageValidator.empty('email') })
  email: string

  @IsString({ message: MessageValidator.string('password') })
  @IsNotEmpty({ message: MessageValidator.empty('password') })
  password: string
}
