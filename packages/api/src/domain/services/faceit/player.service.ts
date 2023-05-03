import { ApiFaceitClientService } from '@/infra/services/faceit/apiFaceitClient'
import { OpenFaceitClientService } from '@/infra/services/faceit/openFaceitClient'
import { PlayerLeaderboard } from '@hubi/types/faceit'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PlayerService {
  constructor(
    private readonly openFaceitClientService: OpenFaceitClientService,
    private readonly apiFaceitClientService: ApiFaceitClientService,
  ) {}

  async getPlayerLeaderboard({
    nickname,
    leaderboardId,
  }: Params): Promise<PlayerLeaderboard> {
    const { player_id } = await this.openFaceitClientService.getPlayerInfo({
      nickname,
    })
    const playerHubs = await this.openFaceitClientService.getPlayerHubs({
      playerId: player_id,
    })

    const playerInHubi = !!playerHubs.items.find(
      (item) => item.hub_id === process.env.HUB_ID,
    )

    if (!playerInHubi) {
      // return notFound(`A jogadora ${params.nickname} não está no HUBI`)
      throw new Error(`A jogadora ${nickname} não está no HUBI`)
    }

    const { payload: playerLeaderboard } =
      await this.apiFaceitClientService.getPlayerLeaderboard({
        playerId: player_id,
        leaderboardId,
      })

    return {
      userId: playerLeaderboard.placement.entity_id,
      position: playerLeaderboard.position,
      nickname: playerLeaderboard.placement.entity_name,
      played: playerLeaderboard.played,
      points: playerLeaderboard.points,
    }
  }
}

interface Params {
  nickname: string
  leaderboardId: string
}
