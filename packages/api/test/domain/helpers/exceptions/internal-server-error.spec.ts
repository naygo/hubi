import { InternalServerError } from '@/domain/helpers/exceptions'

describe('InternalServerError', () => {
  it('should create an InternalServerError', () => {
    const error = new InternalServerError()

    expect(error).toBeInstanceOf(InternalServerError)
    expect(error.getStatus()).toBe(500)
    expect(error.getResponse()).toEqual({
      status: 500,
      error: 'Ocorreu um erro inesperado ao executar operação',
    })
  })
})
