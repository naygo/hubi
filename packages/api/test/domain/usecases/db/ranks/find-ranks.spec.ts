import { Test } from '@nestjs/testing'

import { FindRanks } from '@/domain/usecases/db/ranks/find-ranks'
import { prismaProvider } from '@/infra/db/prisma/provider'
import { RanksRepository } from '@/infra/db/prisma/repositories'

describe('FindRanks', () => {
  let findRanks: FindRanks

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindRanks, RanksRepository, prismaProvider],
    }).compile()

    findRanks = moduleRef.get<FindRanks>(FindRanks)
  })

  it('should be defined', () => {
    expect(findRanks).toBeDefined()
  })

  it('should return an array of ranks', async () => {
    const ranks = await findRanks.execute()

    expect(ranks).toBeDefined()
    expect(Array.isArray(ranks)).toBeTruthy()
    expect(ranks.length).toBeGreaterThan(0)

    expect(ranks[0]).toHaveProperty('id')
    expect(ranks[0]).toHaveProperty('name')
    expect(ranks[0]).toHaveProperty('status')
  })
})
