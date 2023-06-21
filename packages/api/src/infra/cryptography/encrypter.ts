import { Injectable } from '@nestjs/common'
import { sign, verify } from 'jsonwebtoken'

export interface InfoToken {
  id: number
  email: string
}

@Injectable()
export class Encrypter {
  private readonly secret = process.env.JWT_SECRET

  async encrypt(value: InfoToken): Promise<string> {
    const accessToken = await sign({ info: value }, this.secret)
    return accessToken
  }

  async decrypt(token: string): Promise<InfoToken> {
    const decoded = new Promise<InfoToken>(async (resolve) => {
      await verify(
        token,
        this.secret,
        async (error, encoded: { info: InfoToken }) => {
          if (error) {
            resolve(null)
          }

          resolve(encoded.info)
        },
      )
    })

    return decoded
  }
}
