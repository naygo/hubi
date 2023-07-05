import { FindPronouns } from '@/domain/usecases/db/pronouns/find-pronouns'

describe('FindPronouns', () => {
  let findPronouns: FindPronouns

  const pronounsRepositoryMock = {
    findMany: jest.fn(),
  }

  beforeAll(() => {
    findPronouns = new FindPronouns(pronounsRepositoryMock as any)
  })

  it('should be defined', () => {
    expect(findPronouns).toBeDefined()
  })

  it('should return an array of pronouns', async () => {
    const pronouns = [
      {
        id: 1,
        name: 'any_name',
      },
    ]

    pronounsRepositoryMock.findMany.mockResolvedValue(pronouns)

    const result = await findPronouns.execute()

    expect(result).toEqual(pronouns)
    expect(pronounsRepositoryMock.findMany).toHaveBeenCalledWith()
  })
})
