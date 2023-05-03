import { NotFoundException } from '@nestjs/common'

export class PlayerNotFound extends NotFoundException {
  constructor(nickname: string) {
    super(`A jogadora '${nickname}' não está no HUBI`)
  }
}
