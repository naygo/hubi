import { PrismaClient } from '@prisma/client'

import { filterMissing } from './filter-missing'

interface Args {
  data: unknown[]
  name: string
  prisma: PrismaClient
}

export async function insert({ data, name, prisma }: Args) {
  const missingData = await filterMissing({
    data,
    name,
  })

  console.table(missingData)

  return prisma[name].createMany({
    data: missingData,
  })
}
