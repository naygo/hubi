import { PrismaClient } from '@prisma/client'

export const testRankData = {
  name: 'Master',
  status: 'ativo',
  order: 1,
}

export async function createTestRank(prismaClient: PrismaClient) {
  const rank = await prismaClient.rank.create({
    data: testRankData,
  })

  return rank
}
