import { PrismaClient } from '@prisma/client'

import { FindRanks } from '@/domain/usecases/db/ranks/find-ranks'
import { RanksRepository } from '@/infra/db/prisma/repositories'

const prisma = new PrismaClient()

describe('FindRanks', () => {
  it('should be defined', () => {
    expect(new FindRanks(new RanksRepository(prisma))).toBeDefined()
  })

  it('should return an array of ranks', async () => {
    const findRanks = new FindRanks(new RanksRepository(prisma))

    const ranks = await findRanks.execute()

    expect(ranks).toBeDefined()
    expect(ranks).toBeInstanceOf(Array)
    expect(ranks.length).toBeGreaterThan(0)

    expect(ranks[0]).toHaveProperty('id')
    expect(ranks[0]).toHaveProperty('name')
    expect(ranks[0]).toHaveProperty('status')
  })
})
