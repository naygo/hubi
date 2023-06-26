import { PlayerLeaderboard } from '@hubi/types'
import { Injectable } from '@nestjs/common'

import { PlayerNotFound } from '@/domain/helpers/exceptions/player-not-found'
import { PlayerNotPlay } from '@/domain/helpers/exceptions/player-not-play'
import { ApiFaceitClientService } from '@/infra/services/faceit/api-faceit-client'
import { OpenFaceitClientService } from '@/infra/services/faceit/open-faceit-client'

@Injectable()
export class PlayerService {
  constructor(
    private readonly openFaceitClientService: OpenFaceitClientService,
    private readonly apiFaceitClientService: ApiFaceitClientService,
  ) {}

  async getPlayerLeaderboard({
    nickname,
    leaderboardId,
  }: GetPlayerLeaderboardParams): Promise<PlayerLeaderboard> {
    const { player_id } = await this.openFaceitClientService.getPlayerInfo({
      nickname,
    })
    const playerHubs = await this.openFaceitClientService.getPlayerHubs({
      playerId: player_id,
    })

    const isPlayerInHubi = !!playerHubs.items.find(
      (item) => item.hub_id === process.env.HUB_ID,
    )

    if (!isPlayerInHubi) {
      throw new PlayerNotFound(nickname)
    }

    const { payload: playerLeaderboard } =
      await this.apiFaceitClientService.getPlayerLeaderboard({
        playerId: player_id,
        leaderboardId,
      })

    if (!playerLeaderboard) {
      throw new PlayerNotPlay(nickname)
    }

    return {
      userId: playerLeaderboard.placement.entity_id,
      position: playerLeaderboard.position,
      nickname: playerLeaderboard.placement.entity_name,
      played: playerLeaderboard.played,
      points: playerLeaderboard.points,
    }
  }
}

interface GetPlayerLeaderboardParams {
  nickname: string
  leaderboardId: string
}
