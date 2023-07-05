import { HttpStatus } from '@nestjs/common'

import { InvalidFieldException } from '@/domain/helpers/exceptions'

describe('InvalidFieldException', () => {
  it('should create an InvalidFieldException', () => {
    const error = new InvalidFieldException('Invalid field')

    expect(error).toBeInstanceOf(InvalidFieldException)
    expect(error.getStatus()).toBe(HttpStatus.BAD_REQUEST)
    expect(error.getResponse()).toEqual({
      status: 400,
      error: 'Invalid field',
    })
  })
})
