import { MessageValidator } from '@/presentation/utils'

describe('MessageValidator', () => {
  const fieldName = 'field'

  it('should return the empty message', () => {
    const message = MessageValidator.empty(fieldName)
    expect(message).toBe(`${fieldName} não pode estar vazio`)
  })

  it('should return the number message', () => {
    const message = MessageValidator.number(fieldName)
    expect(message).toBe(`${fieldName} deve ser um número`)
  })

  it('should return the integer message', () => {
    const message = MessageValidator.integer(fieldName)
    expect(message).toBe(`${fieldName} deve ser um inteiro`)
  })

  it('should return the array message', () => {
    const message = MessageValidator.array(fieldName)
    expect(message).toBe(`${fieldName} deve ser um array`)
  })

  it('should return the string message', () => {
    const message = MessageValidator.string(fieldName)
    expect(message).toBe(`${fieldName} deve ser uma string`)
  })

  it('should return the emptyArray message', () => {
    const message = MessageValidator.emptyArray(fieldName)
    expect(message).toBe(`${fieldName} não pode ser um array vazio`)
  })

  it('should return the maxLength message', () => {
    const length = 10
    const message = MessageValidator.maxLength(fieldName, length)
    expect(message).toBe(`${fieldName} deve ter no máximo ${length} caracteres`)
  })

  it('should return the different message', () => {
    const value = 'value'
    const message = MessageValidator.different(fieldName, value)
    expect(message).toBe(`${fieldName} deve ser diferente de ${value}`)
  })

  it('should return the equals message', () => {
    const value = [1, 2, 3]
    const message = MessageValidator.equals(fieldName, value)
    expect(message).toBe(`${fieldName} deve incluir [${value}]`)
  })

  it('should return the boolean message', () => {
    const message = MessageValidator.boolean(fieldName)
    expect(message).toBe(`${fieldName} deve ser um boolean`)
  })

  it('should return the equalsTo message', () => {
    const length = 5
    const message = MessageValidator.equalsTo(fieldName, length)
    expect(message).toBe(`${fieldName} deve ser igual a ${length}`)
  })

  it('should return the email message', () => {
    const message = MessageValidator.email(fieldName)
    expect(message).toBe(`${fieldName} deve ser um email válido`)
  })

  it('should return the date message', () => {
    const message = MessageValidator.date(fieldName)
    expect(message).toBe(`${fieldName} deve ser uma data`)
  })
})
