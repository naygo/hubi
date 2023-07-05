import { FindRanks } from '@/domain/usecases/db/ranks/find-ranks'

describe('FindRanks', () => {
  let findRanks: FindRanks

  const ranksRepositoryMock = {
    findMany: jest.fn(),
  }

  beforeAll(() => {
    findRanks = new FindRanks(ranksRepositoryMock as any)
  })

  it('should be defined', () => {
    expect(findRanks).toBeDefined()
  })

  it('should return an array of ranks', async () => {
    const ranks = [
      {
        id: 1,
        name: 'any_name',
        image: 'any_image',
      },
    ]

    ranksRepositoryMock.findMany.mockResolvedValue(ranks)

    const result = await findRanks.execute()

    expect(result).toEqual(ranks)
    expect(ranksRepositoryMock.findMany).toHaveBeenCalledWith()
  })
})
