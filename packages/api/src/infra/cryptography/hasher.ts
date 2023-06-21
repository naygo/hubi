import { Injectable } from '@nestjs/common'
import { hash, compare } from 'bcrypt'

@Injectable()
export class Hasher {
  async hash(value: string): Promise<string> {
    const SALT = 10
    return await hash(value, SALT)
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return await compare(value, hash)
  }
}
