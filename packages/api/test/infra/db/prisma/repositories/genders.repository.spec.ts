import { Test } from '@nestjs/testing'
import { PrismaClient } from '@prisma/client'

import { prismaProvider } from '@/infra/db/prisma/provider'
import { GendersRepository } from '@/infra/db/prisma/repositories'

describe('GendersRepository', () => {
  let gendersRepository: GendersRepository
  let prismaClient: PrismaClient

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [GendersRepository, prismaProvider],
    }).compile()

    gendersRepository = moduleRef.get(GendersRepository)
    prismaClient = new PrismaClient()
  })

  beforeEach(async () => {
    await prismaClient.gender.deleteMany({})
  })

  afterAll(async () => {
    await prismaClient.gender.deleteMany({})
    await prismaClient.$disconnect()
  })

  it('should be defined', () => {
    expect(gendersRepository).toBeDefined()
  })

  describe('findMany()', () => {
    it('should retrieve all active genders from the database', async () => {
      const data = [
        { name: 'Male', status: 'ativo' },
        { name: 'Female', status: 'ativo' },
        { name: 'Non-binary', status: 'inativo' },
      ]

      await prismaClient.gender.createMany({
        data,
      })

      const result = await gendersRepository.findMany()

      expect(result).toHaveLength(2)
      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining(data[0]),
          expect.objectContaining(data[1]),
        ]),
      )
    })
  })
})
