import { PrismaClient } from '@prisma/client'

import { seedGenders, seedPronouns, seedRanks, seedSocials } from './seeds'

const prisma = new PrismaClient()

async function main() {
  await seedGenders(prisma)
  await seedPronouns(prisma)
  await seedRanks(prisma)
  await seedSocials(prisma)
}

main()
  .catch((err) => {
    console.error('Error running seed:', err)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
