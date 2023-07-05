import { HttpStatus } from '@nestjs/common'

import { UserNotFoundException } from '@/domain/helpers/exceptions'

describe('UserNotFoundException', () => {
  it('should create a UserNotFoundException', () => {
    const error = new UserNotFoundException()

    expect(error).toBeInstanceOf(UserNotFoundException)
    expect(error.getStatus()).toBe(HttpStatus.NOT_FOUND)
    expect(error.getResponse()).toEqual({
      status: HttpStatus.NOT_FOUND,
      error: 'Usuário com esse email não encontrado.',
    })
  })
})
