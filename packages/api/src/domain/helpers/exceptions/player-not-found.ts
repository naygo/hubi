import { BadRequestException } from '@nestjs/common'

export class PlayerNotFound extends BadRequestException {
  constructor(nickname: string) {
    super(`A jogadora '${nickname}' não está no HUBI`)
  }
}
