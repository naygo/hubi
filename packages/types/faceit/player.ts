export interface GetPlayerInfoRequest {
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
