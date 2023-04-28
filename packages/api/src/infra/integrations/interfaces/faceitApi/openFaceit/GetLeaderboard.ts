export interface GetLeaderboard {
  getLeaderboard(params: GetLeaderboardParams): Promise<GetLeaderboardResponse>
}

export interface GetLeaderboardParams {
  limit: number
  offset: number
}

export interface GetLeaderboardResponse {
  leaderboard: unknown
  items: FaceitLeaderboardItem[]
}

interface FaceitLeaderboardItem {
  player: {
    user_id: string
    nickname: string
    avatar: string
    country: string
    skill_level: number
    faceit_url: string
  }
  played: number
  won: number
  lost: number
  draw: number
  points: number
  win_rate: number
  current_streak: number
  position: number
}
