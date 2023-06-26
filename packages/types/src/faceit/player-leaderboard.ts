export interface PlayerLeaderboard {
  userId: string;
  position: number;
  nickname: string;
  played: number;
  points: number;
}

export interface Leaderboard {
  leaderboard_id: string;
  leaderboard_name: string;
  leaderboard_type: string;
  leaderboard_mode: string;
  competition_type: string;
  competition_id: string;
  game_id: string;
  region: string;
  season: number;
  ranking_type: string;
  start_date: number;
  end_date: number;
  min_matches: number;
  points_type: string;
  ranking_boost: number;
  points_per_win: number;
  points_per_loss: number;
  points_per_draw: number;
  starting_points: number;
  status: string;
}
