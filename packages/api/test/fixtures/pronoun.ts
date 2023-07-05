import { PrismaClient } from '@prisma/client'

export const testPronounData = {
  name: 'He/Him',
  status: 'ativo',
}

export async function createTestPronoun(prismaClient: PrismaClient) {
  const pronoun = await prismaClient.pronoun.create({
    data: testPronounData,
  })

  return pronoun
}
