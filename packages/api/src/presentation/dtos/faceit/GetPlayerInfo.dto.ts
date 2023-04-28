import { IsNotEmpty } from 'class-validator'

export class GetPlayerInfoDto {
  @IsNotEmpty()
  nickname: string

  @IsNotEmpty()
  leaderboardId: string
}
