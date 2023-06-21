import { Gender } from '@hubi/types'
import { Injectable } from '@nestjs/common'

import { GendersRepository } from '@/infra/db/prisma/repositories'

@Injectable()
export class FindGenders {
  constructor(private readonly gendersRepository: GendersRepository) {}

  async execute(): Promise<FindGenders.Result> {
    return this.gendersRepository.findMany()
  }
}

export namespace FindGenders {
  export type Result = Gender[]
}
