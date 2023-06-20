import { PrismaClient } from '@prisma/client'

import { filterNonExistent } from './filter-non-existent'

interface Args {
  data: unknown[]
  name: string
  prisma: PrismaClient
}

export async function insert<T>({ data, name, prisma }: Args) {
  const nonExistentData = await filterNonExistent<T>({
    data,
    name,
  })

  return Promise.all(
    nonExistentData.map((data) =>
      prisma[name].create({
        data,
      }),
    ),
  )
}
