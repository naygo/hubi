export interface GetPlayerHubs {
  getPlayerHubs(params: GetPlayerHubsParams): Promise<GetPlayerHubsResponse>
}

export interface GetPlayerHubsParams {
  playerId: string
}

export interface GetPlayerHubsResponse {
  items: HubItem[]
}

interface HubItem {
  hub_id: string
  name: string
  avatar: string
  game_id: string
  organizer_id: string
  faceit_url: string
}
