import { User } from '@hubi/types'
import { Test } from '@nestjs/testing'
import { PrismaClient } from '@prisma/client'
import { createTestGender } from '@test/fixtures/gender'
import { createTestPronoun } from '@test/fixtures/pronoun'
import { createTestRank } from '@test/fixtures/rank'
import { createTestUser, testUserData } from '@test/fixtures/user'

import { prismaProvider } from '@/infra/db/prisma/provider'
import { UsersRepository } from '@/infra/db/prisma/repositories'

describe('UsersRepository', () => {
  let usersRepository: UsersRepository
  let prismaClient: PrismaClient

  let userCreationData: Omit<
    User,
    'id' | 'gender' | 'pronoun' | 'rank' | 'socials'
  >

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [UsersRepository, prismaProvider],
    }).compile()

    usersRepository = moduleRef.get(UsersRepository)
    prismaClient = new PrismaClient()

    const genderId = (await createTestGender(prismaClient)).id
    const pronounId = (await createTestPronoun(prismaClient)).id
    const rankId = (await createTestRank(prismaClient)).id

    userCreationData = {
      ...testUserData,
      genderId,
      pronounId,
      rankId,
    }
  })

  beforeEach(async () => {
    await prismaClient.user.deleteMany()
  })

  afterAll(async () => {
    await prismaClient.user.deleteMany()
    await prismaClient.$disconnect()
  })

  it('should be defined', () => {
    expect(usersRepository).toBeDefined()
  })

  describe('create()', () => {
    it('should create a user', async () => {
      const createdUser = await usersRepository.create(userCreationData)

      expect(createdUser).toBeTruthy()
      expect(createdUser).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          firstName: testUserData.firstName,
          lastName: testUserData.lastName,
          email: testUserData.email,
        }),
      )
    })

    it('should not create a user if email already exists', async () => {
      await createTestUser(prismaClient)
      await expect(usersRepository.create(userCreationData)).rejects.toThrow()
    })
  })

  describe('loadByEmail()', () => {
    it('should load a user by email', async () => {
      const createdUser = await createTestUser(prismaClient)

      const loadedUser = await usersRepository.loadByEmail({
        email: createdUser.email,
      })

      expect(loadedUser).toBeDefined()
      expect(loadedUser).toMatchObject(createdUser)
    })
  })
})
