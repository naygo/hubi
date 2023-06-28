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
    return await sign({ info: value }, this.secret)
  }

  async decrypt(token: string): Promise<InfoToken> {
    const decoded = new Promise<InfoToken>(async (resolve, reject) => {
      await verify(
        token,
        this.secret,
        async (error, encoded: { info: InfoToken }) => {
          if (error) {
            return reject(error)
          }

          return resolve(encoded.info)
        },
      )
    })

    return decoded
  }
}
