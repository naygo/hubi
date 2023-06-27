import { PrismaClient } from '@prisma/client'

import { filterMissing } from './filter-missing'

interface Args {
  data: unknown[]
  name: string
  prisma: PrismaClient
}

export async function insert<T>({ data, name, prisma }: Args) {
  const missingData = await filterMissing<T>({
    data,
    name,
  })

  return prisma[name].createMany({
    data: missingData,
  })
}
