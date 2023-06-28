import { Test } from '@nestjs/testing'
import { PrismaClient, UserSocial, User, Social } from '@prisma/client'

import { prismaProvider } from '@/infra/db/prisma/provider'
import { UserSocialsRepository } from '@/infra/db/prisma/repositories'

describe('UserSocialsRepository', () => {
  let userSocialsRepository: UserSocialsRepository
  let prismaClient: PrismaClient
  let user: User
  let socials: Social[]

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [UserSocialsRepository, prismaProvider],
    }).compile()

    userSocialsRepository = moduleRef.get(UserSocialsRepository)
    prismaClient = new PrismaClient()

    // Create User and Socials
    user = await prismaClient.user.create({
      data: {
        firstName: 'Yoda',
        lastName: 'Master',
        email: '',
        password: '',
        dateBirth: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        howDidKnowHubi: '',
        isAdmin: false,
        riotId: '',
        status: 'ativo',
        timeInCommunity: '',
        gender: {
          create: {
            name: 'Yoda',
            status: 'ativo',
          },
        },
        pronoun: {
          create: {
            name: 'Yoda',
            status: 'ativo',
          },
        },
        rank: {
          create: {
            name: 'Yoda',
            status: 'ativo',
            order: 1,
          },
        },
      },
    })

    await prismaClient.social.createMany({
      data: [
        {
          name: 'Twitch',
          status: 'ativo',
        },
        {
          name: 'Discord',
          status: 'ativo',
        },
      ],
    })

    socials = await prismaClient.social.findMany({})
  })

  beforeEach(async () => {
    await prismaClient.userSocial.deleteMany({})
  })

  afterAll(async () => {
    await prismaClient.userSocial.deleteMany({})
    await prismaClient.user.deleteMany({})
    await prismaClient.social.deleteMany({})

    await prismaClient.$disconnect()
  })

  it('should be defined', () => {
    expect(userSocialsRepository).toBeDefined()
  })

  it('should create new user socials', async () => {
    const data: UserSocial[] = [
      {
        socialId: socials[0].id,
        url: 'https://twitch.tv/yoda',
        createdAt: new Date(),
        userId: user.id,
      },
      {
        socialId: socials[1].id,
        url: 'https://discord.gg/yoda',
        createdAt: new Date(),
        userId: user.id,
      },
    ]

    await userSocialsRepository.create(data)

    const result = await prismaClient.userSocial.findMany()

    expect(result).toHaveLength(2)
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining(data[0]),
        expect.objectContaining(data[1]),
      ]),
    )
  })
})
