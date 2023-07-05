import { FindGenders } from '@/domain/usecases/db/genders/find-genders'
import { GendersRepository } from '@/infra/db/prisma/repositories'

describe('FindGenders', () => {
  let findGenders: FindGenders

  const gendersRepositoryMock = {
    findMany: jest.fn(),
  }

  beforeAll(() => {
    findGenders = new FindGenders(
      gendersRepositoryMock as unknown as GendersRepository,
    )
  })

  it('should be defined', () => {
    expect(findGenders).toBeDefined()
  })

  it('should return an array of genders', async () => {
    const genders = [
      {
        id: 1,
        name: 'any_name',
      },
    ]

    gendersRepositoryMock.findMany.mockResolvedValue(genders)

    const result = await findGenders.execute()

    expect(result).toEqual(genders)
    expect(gendersRepositoryMock.findMany).toHaveBeenCalledWith()
  })
})
