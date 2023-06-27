import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Args {
  name: string
  data: unknown[]
}

export async function filterMissing({ data, name }: Args) {
  const objKeys = Object.keys(data[0])

  const whereConditions = data.map((item) => {
    const where = {}

    for (const key of objKeys) {
      where[key] = item[key]
    }

    return where
  })

  const existingData = await prisma[name].findMany({
    where: {
      OR: whereConditions,
    },
  })

  const missingData = data.filter((item) => {
    return !existingData.find(
      (existentItem) => existentItem[objKeys[0]] === item[objKeys[0]],
    )
  })

  return missingData
}
