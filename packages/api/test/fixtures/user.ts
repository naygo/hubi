import { PrismaClient } from '@prisma/client'

export const testUserData = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  email: 'luke.skywalker@jedi.com',
  password: '',
  dateBirth: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  howDidKnowHubi: '',
  isAdmin: false,
  riotId: '',
  status: 'ativo',
  timeInCommunity: '',
}

export async function createTestUser(prismaClient: PrismaClient) {
  const user = await prismaClient.user.create({
    data: {
      ...testUserData,
      gender: {
        create: {
          name: 'Male',
          status: 'ativo',
        },
      },
      pronoun: {
        create: {
          name: 'He/Him',
          status: 'ativo',
        },
      },
      rank: {
        create: {
          name: 'Iron',
          status: 'ativo',
          order: 1,
        },
      },
    },
  })

  return user
}
