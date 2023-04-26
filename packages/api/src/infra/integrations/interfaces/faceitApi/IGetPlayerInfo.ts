export interface IGetPLayerInfo {
  getPlayerInfo(playerId: string): Promise<unknown>
}
