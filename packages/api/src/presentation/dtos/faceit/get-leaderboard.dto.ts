import { IsOptional } from 'class-validator'

export class GetLeaderboardDto {
  @IsOptional()
  limit?: number

  @IsOptional()
  offset?: number
}
