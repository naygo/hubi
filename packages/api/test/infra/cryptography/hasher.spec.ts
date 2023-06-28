import { Hasher } from '@/infra/cryptography'

describe('Hasher', () => {
  const sut = new Hasher()

  describe('hash()', () => {
    it('should return a valid hash on hash success', async () => {
      const raw = 'any_value'
      const hash = await sut.hash(raw)

      expect(hash).toBeTruthy()
      expect(hash.length).toBe(60)
      expect(hash).not.toBe(raw)
      expect(typeof hash).toBe('string')
    })
  })

  describe('compare()', () => {
    it('should return true when compare succeeds', async () => {
      const raw = 'any_value'
      const hash = await sut.hash(raw)
      const isValid = await sut.compare(raw, hash)

      expect(isValid).toBe(true)
    })

    it('should return false when compare fails', async () => {
      const hash = await sut.hash('any_value')
      const isValid = await sut.compare('other_value', hash)

      expect(isValid).toBe(false)
    })
  })
})
