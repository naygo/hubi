import { Test } from '@nestjs/testing'

import { FindPronouns } from '@/domain/usecases/db/pronouns/find-pronouns'
import { prismaProvider } from '@/infra/db/prisma/provider'
import { PronounsRepository } from '@/infra/db/prisma/repositories/pronouns.repository'

describe('FindPronouns', () => {
  let findPronouns: FindPronouns

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindPronouns, PronounsRepository, prismaProvider],
    }).compile()

    findPronouns = moduleRef.get<FindPronouns>(FindPronouns)
  })

  it('should be defined', () => {
    expect(findPronouns).toBeDefined()
  })

  it('should return an array of pronouns', async () => {
    const pronouns = await findPronouns.execute()

    expect(pronouns).toBeDefined()
    expect(pronouns).toBeInstanceOf(Array)
    expect(pronouns.length).toBeGreaterThan(0)

    expect(pronouns[0]).toHaveProperty('id')
    expect(pronouns[0]).toHaveProperty('name')
    expect(pronouns[0]).toHaveProperty('status')
  })
})
