import { HttpStatus } from '@nestjs/common'

import { PlayerNotFound } from '@/domain/helpers/exceptions'

describe('PlayerNotFound', () => {
  it('should create a PlayerNotFound', () => {
    const error = new PlayerNotFound('nickname')

    expect(error).toBeInstanceOf(PlayerNotFound)
    expect(error.getStatus()).toBe(HttpStatus.NOT_FOUND)
    expect(error.getResponse()).toEqual({
      error: 'Not Found',
      message: `A jogadora 'nickname' não está no HUBI`,
      statusCode: HttpStatus.NOT_FOUND,
    })
  })
})
