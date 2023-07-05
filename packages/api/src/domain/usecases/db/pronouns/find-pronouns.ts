import { Pronoun } from '@hubi/types'
import { Injectable } from '@nestjs/common'

import { PronounsRepository } from '@/infra/db/prisma/repositories/pronouns.repository'

@Injectable()
export class FindPronouns {
  constructor(private readonly pronounsRepository: PronounsRepository) {}

  async execute(): Promise<Pronoun[]> {
    return this.pronounsRepository.findMany()
  }
}
