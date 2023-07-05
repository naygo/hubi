import * as dotenv from 'dotenv'
import path from 'path'

import { Encrypter } from '@/infra/cryptography'

dotenv.config({ path: path.resolve(__dirname, '../../../.env.test') })

describe('Encrypter', () => {
  const sut = new Encrypter()

  describe('encrypt()', () => {
    it('should return a token on success', async () => {
      const token = await sut.encrypt({ id: 1, email: 'luke@skywalker.com' })

      expect(token).toBeTruthy()
      expect(typeof token).toBe('string')
      expect(token.split('.').length).toBe(3)
    })

    it('should decrypt a token', async () => {
      const tokenData = { id: 1, email: 'luke@skywalker.com' }

      const token = await sut.encrypt(tokenData)

      const decoded = await sut.decrypt(token)

      expect(decoded).toBeTruthy()
      expect(decoded.id).toBe(tokenData.id)
      expect(decoded.email).toBe(tokenData.email)
    })

    it('should throw if decrypt throws', async () => {
      const token = 'invalidToken'
      await expect(sut.decrypt(token)).rejects.toThrow()
    })
  })
})
