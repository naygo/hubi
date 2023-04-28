export interface GetLeaderboardPlayerInfo {
  getLeaderboarPlayerInfo(
    params: GetLeaderboardPlayerInfoParams,
  ): Promise<GetLeaderboardPlayerInfoResponse>
}

export interface GetLeaderboardPlayerInfoParams {
  playerId: string
  leaderboardId: string
}

export interface GetLeaderboardPlayerInfoResponse {
  payload: {
    played: number
    won: number
    lost: number
    draw: number
    points: number
    win_rate: number
    current_streak: number
    position: number
    placement: {
      entity_id: string
      entity_name: string
      entity_avatar: string
      entity_skill_level: number
      entity_country: string
      entity_memberships: string[]
    }
  }
}
