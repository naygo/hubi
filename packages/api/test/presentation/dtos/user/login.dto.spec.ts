import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

import { LoginDTO } from '@/presentation/dtos/user'

describe('LoginDTO', () => {
  it('should validate a valid DTO', async () => {
    const dtoData = {
      email: 'test@example.com',
      password: 'password123',
    }
    const dtoInstance = plainToClass(LoginDTO, dtoData)

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(0)
  })

  it('should not validate a DTO with invalid email', async () => {
    const dtoData = {
      email: 'invalid-email',
      password: 'password123',
    }
    const dtoInstance = plainToClass(LoginDTO, dtoData)

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(1)
    expect(validationErrors[0].value).toBe('invalid-email')
    expect(validationErrors[0].property).toBe('email')
  })

  it('should not validate a DTO with empty email', async () => {
    const dtoData = {
      email: '',
      password: 'password123',
    }

    const dtoInstance = plainToClass(LoginDTO, dtoData)

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(1)
    expect(validationErrors[0].value).toBe('')
    expect(validationErrors[0].property).toBe('email')
  })

  it('should not validate a DTO with empty password', async () => {
    const dtoData = {
      email: 'luke@skywalker.com',
      password: '',
    }

    const dtoInstance = plainToClass(LoginDTO, dtoData)

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(1)
    expect(validationErrors[0].value).toBe('')
    expect(validationErrors[0].property).toBe('password')
  })
})
