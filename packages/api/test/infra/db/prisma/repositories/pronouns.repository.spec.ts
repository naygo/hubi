import { Test } from '@nestjs/testing'
import { PrismaClient } from '@prisma/client'

import { prismaProvider } from '@/infra/db/prisma/provider'
import { PronounsRepository } from '@/infra/db/prisma/repositories'

describe('PronounsRepository', () => {
  let pronounsRepository: PronounsRepository
  let prismaClient: PrismaClient

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PronounsRepository, prismaProvider],
    }).compile()

    pronounsRepository = moduleRef.get(PronounsRepository)
    prismaClient = new PrismaClient()
  })

  beforeEach(async () => {
    await prismaClient.pronoun.deleteMany({})
  })

  afterAll(async () => {
    await prismaClient.pronoun.deleteMany({})
    await prismaClient.$disconnect()
  })

  it('should be defined', () => {
    expect(pronounsRepository).toBeDefined()
  })

  it('should retrieve all active pronouns from the database', async () => {
    const data = [
      { name: 'He/Him', status: 'ativo' },
      { name: 'She/Her', status: 'ativo' },
      { name: 'They/Them', status: 'inativo' },
    ]

    await prismaClient.pronoun.createMany({
      data,
    })

    const result = await pronounsRepository.findMany()

    expect(result).toHaveLength(2)
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining(data[0]),
        expect.objectContaining(data[1]),
      ]),
    )
  })
})
