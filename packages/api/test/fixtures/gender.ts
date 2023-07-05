import { PrismaClient } from '@prisma/client'

export const testGenderData = {
  name: 'Male',
  status: 'ativo',
}

export async function createTestGender(prismaClient: PrismaClient) {
  const genre = await prismaClient.gender.create({
    data: testGenderData,
  })

  return genre
}
