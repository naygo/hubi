import { Injectable } from '@nestjs/common'
import { Genders } from '@prisma/client'

import { GendersRepository } from '@/infra/db/prisma/repositories'

@Injectable()
export class FindGenders {
  constructor(private readonly gendersRepository: GendersRepository) {}

  async execute(): Promise<Genders[]> {
    return this.gendersRepository.findMany()
  }
}
