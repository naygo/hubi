import { HttpStatus } from '@nestjs/common'

import { UserAlreadyExists } from '@/domain/helpers/exceptions'

describe('UserAlreadyExists', () => {
  it('should create a UserAlreadyExists', () => {
    const error = new UserAlreadyExists()

    expect(error).toBeInstanceOf(UserAlreadyExists)
    expect(error.getStatus()).toBe(HttpStatus.BAD_REQUEST)
    expect(error.getResponse()).toEqual({
      status: HttpStatus.BAD_REQUEST,
      error: 'Já existe um usuário com esse email.',
    })
  })
})
