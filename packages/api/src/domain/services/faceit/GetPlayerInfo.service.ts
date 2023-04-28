import { Injectable } from '@nestjs/common'

import { notFound, ok, serverError } from '@/domain/helpers'
import { HttpResponse, Service } from '@/domain/interfaces/protocols'
import {
  GetLeaderboardPlayerInfoUsecase,
  GetPlayerHubsUsecase,
  GetPlayerInfoUsecase,
} from '@/domain/usecases'

@Injectable()
export class GetPlayerInfoService implements Service {
  constructor(
    private readonly getPlayerInfoUsecase: GetPlayerInfoUsecase,
    private readonly getPlayerHubsUseCase: GetPlayerHubsUsecase,
    private readonly getLeaderboardPlayerInfoUsecase: GetLeaderboardPlayerInfoUsecase,
  ) {}

  async execute(params: GetPlayerInfoRequest): Promise<HttpResponse> {
    try {
      const { player_id } = await this.getPlayerInfoUsecase.execute(params)
      const playerHubs = await this.getPlayerHubsUseCase.execute({
        playerId: player_id,
      })

      const playerInHubi = !!playerHubs.items.find(
        (item) => item.hub_id === process.env.HUB_ID,
      )

      if (!playerInHubi) {
        return notFound(`A jogadora ${params.nickname} não está no HUBI`)
      }

      const { payload: playerInfo } =
        await this.getLeaderboardPlayerInfoUsecase.execute({
          playerId: player_id,
          leaderboardId: params.leaderboardId,
        })

      const formattedPlayerInfo = {
        userId: playerInfo.placement.entity_id,
        nickname: playerInfo.placement.entity_name,
        played: playerInfo.played,
        points: playerInfo.points,
      }

      return ok({ player: formattedPlayerInfo })
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

interface GetPlayerInfoRequest {
  nickname: string
  leaderboardId: string
}
