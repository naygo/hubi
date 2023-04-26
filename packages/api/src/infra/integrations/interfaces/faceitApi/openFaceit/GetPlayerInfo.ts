export interface GetPLayerInfo {
  getPlayerInfo(params: GetPlayerInfoParams): Promise<GetPlayerInfoResponse>
}

export interface GetPlayerInfoParams {
  nickname: string
}

export interface GetPlayerInfoResponse {
  player_id: string
  nickname: string
  avatar: string
  country: string
  cover_image: string
  memberships: string[]
  faceit_url: string
}
