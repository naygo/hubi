import { IsNotEmpty } from 'class-validator'

export class GetPlayerInfoDto {
  @IsNotEmpty()
  leaderboardId: string

  @IsNotEmpty()
  nickname: string
}
