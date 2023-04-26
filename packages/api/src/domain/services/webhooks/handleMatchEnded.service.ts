import { ok, serverError } from '@/domain/helpers'
import { Service } from '@/domain/interfaces/protocols'
import { Injectable } from '@nestjs/common'

@Injectable()
export class HandleMatchEndedService implements Service {
  async execute(body: any) {
    try {
      console.log(body)

      return ok({ msg: 'ok' })
    } catch (err) {
      return serverError()
    }
  }
}
