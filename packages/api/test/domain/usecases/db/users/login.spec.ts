import { InvalidFieldException } from '@/domain/helpers/exceptions'
import { Login } from '@/domain/usecases/db/users/login'
import { Encrypter, Hasher } from '@/infra/cryptography'
import { UsersRepository } from '@/infra/db/prisma/repositories'

describe('Login', () => {
  let login: Login

  const usersRepositoryMock = {
    loadByEmail: jest.fn(),
  }
  const hasherMock = {
    compare: jest.fn(),
  }
  const encrypterMock = {
    encrypt: jest.fn(),
  }

  beforeAll(() => {
    login = new Login(
      usersRepositoryMock as unknown as UsersRepository,
      hasherMock as unknown as Hasher,
      encrypterMock as unknown as Encrypter,
    )
  })

  it('should be defined', () => {
    expect(login).toBeDefined()
  })

  describe('execute', () => {
    it('should return a token', async () => {
      const parameters = {
        email: 'any@email.com',
        password: 'strong_password',
      }

      const user = {
        id: 1,
        email: parameters.email,
        password: 'hashed_password',
      }

      usersRepositoryMock.loadByEmail.mockResolvedValue(user)
      hasherMock.compare.mockResolvedValue(true)
      encrypterMock.encrypt.mockResolvedValue('any_token')

      const result = await login.execute(parameters)

      expect(result).toEqual({ token: 'any_token' })
      expect(usersRepositoryMock.loadByEmail).toHaveBeenCalledWith({
        email: parameters.email,
      })
      expect(hasherMock.compare).toHaveBeenCalledWith(
        parameters.password,
        user.password,
      )
    })

    it('should throw if user is not found', async () => {
      const parameters = {
        email: 'any_email',
        password: 'any_password',
      }

      usersRepositoryMock.loadByEmail.mockResolvedValue(null)

      await expect(login.execute(parameters)).rejects.toThrow(
        new InvalidFieldException('Email e/ou Senha Inválidos'),
      )
    })

    it('should throw if password is invalid', async () => {
      const parameters = {
        email: 'any_email',
        password: 'any_password',
      }

      const user = {
        id: 1,
        email: parameters.email,
        password: 'hashed_password',
      }

      usersRepositoryMock.loadByEmail.mockResolvedValue(user)
      hasherMock.compare.mockResolvedValue(false)

      await expect(login.execute(parameters)).rejects.toThrow(
        new InvalidFieldException('Email e/ou Senha Inválidos'),
      )
    })
  })
})
