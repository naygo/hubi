import { Test } from '@nestjs/testing'

import { FindGenders } from '@/domain/usecases/db/genders/find-genders'
import { prismaProvider } from '@/infra/db/prisma/provider'
import { GendersRepository } from '@/infra/db/prisma/repositories'

describe('FindGenders', () => {
  let findGenders: FindGenders

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FindGenders, GendersRepository, prismaProvider],
    }).compile()

    findGenders = moduleRef.get<FindGenders>(FindGenders)
  })

  it('should be defined', () => {
    expect(findGenders).toBeDefined()
  })

  it('should return an array of genders', async () => {
    const genders = await findGenders.execute()

    expect(genders).toBeDefined()
    expect(genders).toBeInstanceOf(Array)
    expect(genders.length).toBeGreaterThan(0)

    expect(genders[0]).toHaveProperty('id')
    expect(genders[0]).toHaveProperty('name')
    expect(genders[0]).toHaveProperty('status')
  })
})
