import { GetLeaderboard } from './GetLeaderboard'
import { GetPlayerHubs } from './GetPlayerHubs'
import { GetPLayerInfo } from './GetPlayerInfo'

export interface OpenFaceitApiClient
  extends GetLeaderboard,
    GetPlayerHubs,
    GetPLayerInfo {}
