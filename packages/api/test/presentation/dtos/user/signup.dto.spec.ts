import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

import { SignupDTO } from '@/presentation/dtos/user'

describe('SignupDTO', () => {
  const dtoData = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke@skywalker.com',
    password: 'password123',
    confirmPassword: 'password123',
    dateBirth: '1999-12-31',
    genderId: 1,
    howDidKnowHubi: 'test',
    timeInCommunity: 'test',
    pronounId: 1,
    riotId: 'test',
    rankId: 1,
    socials: [
      {
        socialId: 1,
        url: 'test',
      },
    ],
  }

  it('should validate a valid DTO', async () => {
    const dtoInstance = plainToClass(SignupDTO, dtoData)

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(0)
  })

  it('should not validate a DTO with invalid email', async () => {
    const dtoInstance = plainToClass(SignupDTO, {
      ...dtoData,
      email: 'invalid-email',
    })

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(1)
    expect(validationErrors[0].value).toBe('invalid-email')
    expect(validationErrors[0].property).toBe('email')
  })

  it('should not validate a DTO with password confirmation different from password', async () => {
    const dtoInstance = plainToClass(SignupDTO, {
      ...dtoData,
      confirmPassword: 'different-password',
    })

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(1)
    expect(validationErrors[0].value).toBe('different-password')
    expect(validationErrors[0].property).toBe('confirmPassword')
    expect(validationErrors[0].constraints).toStrictEqual({
      Match: 'Senha deve ser igual a confirmação de senha',
    })
  })

  it('should not validate a DTO with empty fields', async () => {
    const dtoInstance = plainToClass(SignupDTO, {})

    const validationErrors = await validate(dtoInstance)

    expect(validationErrors.length).toBe(13)
  })
})
