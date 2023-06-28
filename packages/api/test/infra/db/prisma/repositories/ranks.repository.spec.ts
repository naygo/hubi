import { Test } from '@nestjs/testing'
import { PrismaClient } from '@prisma/client'

import { prismaProvider } from '@/infra/db/prisma/provider'
import { RanksRepository } from '@/infra/db/prisma/repositories'

describe('RanksRepository', () => {
  let ranksRepository: RanksRepository
  let prismaClient: PrismaClient

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [RanksRepository, prismaProvider],
    }).compile()

    ranksRepository = moduleRef.get(RanksRepository)
    prismaClient = new PrismaClient()
  })

  afterEach(async () => {
    await prismaClient.rank.deleteMany({})
  })

  afterAll(async () => {
    await prismaClient.$disconnect()
  })

  it('should be defined', () => {
    expect(ranksRepository).toBeDefined()
  })

  it('should retrieve all active ranks from the database', async () => {
    const data = [
      { id: 1, name: 'Padawan', status: 'ativo', order: 1 },
      { id: 2, name: 'Knight', status: 'ativo', order: 2 },
      { id: 3, name: 'Master', status: 'inativo', order: 3 },
    ]

    await prismaClient.rank.createMany({
      data,
    })

    const result = await ranksRepository.findMany()

    expect(result).toHaveLength(2)
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining(data[0]),
        expect.objectContaining(data[1]),
      ]),
    )
  })

  it('should retrieve all active ranks from the database ordered by order', async () => {
    const data = [
      { id: 1, name: 'Padawan', status: 'ativo', order: 2 },
      { id: 2, name: 'Master', status: 'ativo', order: 3 },
      { id: 3, name: 'Knight', status: 'ativo', order: 1 },
    ]

    await prismaClient.rank.createMany({
      data,
    })

    const result = await ranksRepository.findMany()

    expect(result).toHaveLength(3)
    expect(result[0].order).toBe(1)
    expect(result[1].order).toBe(2)
    expect(result[2].order).toBe(3)
  })
})
