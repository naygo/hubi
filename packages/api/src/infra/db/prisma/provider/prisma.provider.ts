import { Provider } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

export const PRISMA_PROVIDER = 'PRISMA_PROVIDER'

export const prismaProvider: Provider = {
  provide: PRISMA_PROVIDER,
  useFactory: () => new PrismaClient(),
}
