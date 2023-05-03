import { NotFoundException } from '@nestjs/common'

export class PlayerNotPlay extends NotFoundException {
  constructor(nickname: string) {
    super(`A jogadora '${nickname}' ainda não jogou nesta temporada.`)
  }
}
