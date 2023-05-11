import { IsNotEmpty } from 'class-validator'

export class GetPlayerInfoDto {
  @IsNotEmpty()
  nickname: string
}
