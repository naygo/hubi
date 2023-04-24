import { ok, serverError } from '@/presentation/helpers'
import { Injectable } from '@nestjs/common'

@Injectable()
export class HandleMatchEndedService {
  async execute(body: any) {
    try {
      console.log(body)

      return ok({ msg: 'ok' })
    } catch (err) {
      return serverError()
    }
  }
}
