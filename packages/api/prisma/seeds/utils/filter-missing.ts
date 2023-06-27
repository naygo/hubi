import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Args {
  name: string
  data: unknown[]
}

export async function filterMissing<T>({ data, name }: Args) {
  const existent = await checkExistent(data, name)
  const objKeys = Object.keys(data[0])

  const filtered = data.filter(
    (item) =>
      !existent.find((existentItem: unknown) => {
        if (existentItem) {
          return existentItem[objKeys[0]] === item[objKeys[0]]
        }
      }),
  )

  return filtered as T[]
}

async function checkExistent(data: unknown[], name: string) {
  return Promise.all(
    data.map((item) => {
      const objKeys = Object.keys(item)

      if (objKeys.length > 1) {
        const where = objKeys.reduce((acc, key) => {
          acc[key] = item[key]

          return acc
        }, {})

        return prisma[name].findFirst({
          where,
        })
      }

      return Promise.resolve(null)
    }),
  )
}
