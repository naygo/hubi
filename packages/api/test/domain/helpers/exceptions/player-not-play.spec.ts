import { HttpStatus } from '@nestjs/common'

import { PlayerNotPlay } from '@/domain/helpers/exceptions'

describe('PlayerNotPlay', () => {
  it('should create a PlayerNotPlay', () => {
    const error = new PlayerNotPlay('nickname')

    expect(error).toBeInstanceOf(PlayerNotPlay)
    expect(error.getStatus()).toBe(HttpStatus.NOT_FOUND)
    expect(error.getResponse()).toEqual({
      statusCode: HttpStatus.NOT_FOUND,
      error: 'Not Found',
      message: `A jogadora 'nickname' ainda não jogou nesta temporada.`,
    })
  })
})
