import { testUserData } from '@test/fixtures/user'

import {
  InternalServerError,
  UserAlreadyExists,
} from '@/domain/helpers/exceptions'
import { CreateUser } from '@/domain/usecases/db/users/create-user'
import { Hasher } from '@/infra/cryptography'
import {
  UserSocialsRepository,
  UsersRepository,
} from '@/infra/db/prisma/repositories'

describe('CreateUser', () => {
  let createUser: CreateUser

  const usersRepositoryMock = {
    loadByEmail: jest.fn(),
    create: jest.fn(),
  }
  const userSocialsRepositoryMock = {
    create: jest.fn(),
  }
  const hasherMock = {
    hash: jest.fn(),
  }

  beforeEach(() => {
    createUser = new CreateUser(
      usersRepositoryMock as unknown as UsersRepository,
      userSocialsRepositoryMock as unknown as UserSocialsRepository,
      hasherMock as unknown as Hasher,
    )

    usersRepositoryMock.loadByEmail.mockClear()
    hasherMock.hash.mockClear()
    usersRepositoryMock.create.mockClear()
    userSocialsRepositoryMock.create.mockClear()
  })

  it('should be defined', () => {
    expect(createUser).toBeDefined()
  })

  describe('execute', () => {
    it('should create a user', async () => {
      const parameters: CreateUser.Parameters = {
        ...testUserData,
        confirmPassword: '',
        socials: [{ socialId: 1, url: '' }],
        genderId: 1,
        pronounId: 1,
        rankId: 1,
      }

      usersRepositoryMock.loadByEmail.mockResolvedValue(null)
      hasherMock.hash.mockResolvedValue('hashedPassword')
      usersRepositoryMock.create.mockResolvedValue({ id: 1 })

      await createUser.execute(parameters)

      expect.assertions(4)

      expect(usersRepositoryMock.loadByEmail).toHaveBeenCalledWith({
        email: parameters.email,
      })
      expect(hasherMock.hash).toHaveBeenCalledWith(parameters.password)
      expect(usersRepositoryMock.create).toHaveBeenCalledWith({
        firstName: parameters.firstName,
        lastName: parameters.lastName,
        email: parameters.email,
        password: 'hashedPassword',
        dateBirth: parameters.dateBirth,
        genderId: parameters.genderId,
        howDidKnowHubi: parameters.howDidKnowHubi,
        timeInCommunity: parameters.timeInCommunity,
        pronounId: parameters.pronounId,
        rankId: parameters.rankId,
        riotId: parameters.riotId,
        createdAt: expect.any(Date),
        isAdmin: false,
        status: 'CREATED',
      })
      expect(userSocialsRepositoryMock.create).toHaveBeenCalledWith([
        {
          socialId: 1,
          url: '',
          userId: 1,
          createdAt: expect.any(Date),
          status: 'ACTIVE',
        },
      ])
    })

    it('should throw an error if the user already exists', async () => {
      const parameters: CreateUser.Parameters = {
        ...testUserData,
        confirmPassword: '',
        socials: [{ socialId: 1, url: '' }],
        genderId: 1,
        pronounId: 1,
        rankId: 1,
      }

      usersRepositoryMock.loadByEmail.mockResolvedValue({ id: 1 })

      await expect(createUser.execute(parameters)).rejects.toThrow(
        UserAlreadyExists,
      )
    })

    it('should throw an error if the user could not be created', async () => {
      const parameters: CreateUser.Parameters = {
        ...testUserData,
        confirmPassword: '',
        socials: [{ socialId: 1, url: '' }],
        genderId: 1,
        pronounId: 1,
        rankId: 1,
      }

      usersRepositoryMock.loadByEmail.mockResolvedValue(null)
      hasherMock.hash.mockResolvedValue('hashedPassword')
      usersRepositoryMock.create.mockResolvedValue(null)

      await expect(createUser.execute(parameters)).rejects.toThrow(
        InternalServerError,
      )
    })
  })
})
