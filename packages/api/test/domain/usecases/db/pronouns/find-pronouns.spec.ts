import { PrismaClient } from '@prisma/client'

import { FindPronouns } from '@/domain/usecases/db/pronouns/find-pronouns'
import { PronounsRepository } from '@/infra/db/prisma/repositories/pronouns.repository'

const prisma = new PrismaClient()

describe('FindPronouns', () => {
  it('should be defined', () => {
    expect(new FindPronouns(new PronounsRepository(prisma))).toBeDefined()
  })

  it('should return an array of pronouns', async () => {
    const findPronouns = new FindPronouns(new PronounsRepository(prisma))

    const pronouns = await findPronouns.execute()

    expect(pronouns).toBeDefined()
    expect(pronouns).toBeInstanceOf(Array)
    expect(pronouns.length).toBeGreaterThan(0)

    expect(pronouns[0]).toHaveProperty('id')
    expect(pronouns[0]).toHaveProperty('name')
    expect(pronouns[0]).toHaveProperty('status')
  })
})
