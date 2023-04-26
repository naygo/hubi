import { GetLeaderboard } from './GetLeaderboard'
import { GetPLayerInfo } from './GetPlayerInfo'

export interface OpenFaceitApiClient extends GetLeaderboard, GetPLayerInfo {}
