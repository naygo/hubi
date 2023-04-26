import { IGetLeaderboard } from './IGetLeaderboard'
import { IGetPLayerInfo } from './IGetPlayerInfo'

export interface IFaceitApiClient extends IGetLeaderboard, IGetPLayerInfo {}
