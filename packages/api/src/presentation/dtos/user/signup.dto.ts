import { Match } from '@/presentation/custom-validators'
import { MessageValidator } from '@/presentation/utils'
import { Type } from 'class-transformer'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator'

export class SignupDTO {
  @IsString({ message: MessageValidator.string('firstName') })
  @IsNotEmpty({ message: MessageValidator.empty('firstName') })
  firstName: string

  @IsString({ message: MessageValidator.string('lastName') })
  @IsNotEmpty({ message: MessageValidator.empty('lastName') })
  lastName: string

  @IsString({ message: MessageValidator.string('email') })
  @IsEmail({}, { message: MessageValidator.email('email') })
  @IsNotEmpty({ message: MessageValidator.empty('email') })
  email: string

  @IsString({ message: MessageValidator.string('password') })
  @IsNotEmpty({ message: MessageValidator.empty('password') })
  password: string

  @IsString({ message: MessageValidator.string('confirmPassword') })
  @IsNotEmpty({ message: MessageValidator.empty('confirmPassword') })
  @Match('password', { message: 'Senha deve ser igual a confirmação de senha' })
  confirmPassword: string

  @IsNotEmpty({ message: MessageValidator.empty('dateBirth') })
  @IsDateString({}, { message: MessageValidator.date('dateBirth') })
  dateBirth: Date

  @IsNotEmpty({ message: MessageValidator.empty('genderId') })
  @IsInt({ message: MessageValidator.integer('genderId') })
  genderId: number

  @IsString({ message: MessageValidator.string('howDidKnowHubi') })
  @IsNotEmpty({ message: MessageValidator.empty('howDidKnowHubi') })
  howDidKnowHubi: string

  @IsString({ message: MessageValidator.string('timeInCommunity') })
  @IsNotEmpty({ message: MessageValidator.empty('timeInCommunity') })
  timeInCommunity: string

  @IsNotEmpty({ message: MessageValidator.empty('pronounId') })
  @IsInt({ message: MessageValidator.integer('pronounId') })
  pronounId: number

  @IsString({ message: MessageValidator.string('riotId') })
  @IsNotEmpty({ message: MessageValidator.empty('riotId') })
  riotId: string

  @IsNotEmpty({ message: MessageValidator.empty('rankId') })
  @IsInt({ message: MessageValidator.integer('rankId') })
  rankId: number

  @IsArray({ message: MessageValidator.array('socials') })
  @ValidateNested({ each: true })
  @ArrayMinSize(1, { message: MessageValidator.emptyArray('socials') })
  @Type(() => Social)
  socials: Social[]
}

class Social {
  @IsNotEmpty({ message: MessageValidator.empty('socialId') })
  @IsInt({ message: MessageValidator.integer('socialId') })
  socialId: number

  @IsString({ message: MessageValidator.string('url') })
  @IsNotEmpty({ message: MessageValidator.empty('url') })
  url: string
}
