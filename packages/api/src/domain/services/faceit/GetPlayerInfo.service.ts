import { Injectable } from '@nestjs/common'

import { ok, serverError } from '@/domain/helpers'
import { HttpResponse, Service } from '@/domain/interfaces/protocols'
import { GetPlayerInfoUsecase } from '@/domain/usecases'

@Injectable()
export class GetPlayerInfoService implements Service {
  constructor(private readonly getPlayerInfoUsecase: GetPlayerInfoUsecase) {}

  async execute(params: GetPlayerInfoRequest): Promise<HttpResponse> {
    try {
      const player = await this.getPlayerInfoUsecase.execute(params)

      // TODO: Format player data

      return ok({ player })
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

interface GetPlayerInfoRequest {
  nickname: string
}
