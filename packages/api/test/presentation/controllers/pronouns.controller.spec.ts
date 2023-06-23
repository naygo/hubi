import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import request from 'supertest'

import { AppModule } from '@/app.module'
import { FindPronouns } from '@/domain/usecases/db/pronouns/find-pronouns'
import { prismaProvider } from '@/infra/db/prisma/provider'
import { PronounsRepository } from '@/infra/db/prisma/repositories/pronouns.repository'
import { PronounsController } from '@/presentation/controllers/pronouns.controller'

describe('PronounsController', () => {
  let app: INestApplication
  let controller: PronounsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PronounsController],
      providers: [FindPronouns, PronounsRepository, prismaProvider],
    }).compile()

    controller = module.get<PronounsController>(PronounsController)

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return an array of pronouns', async () => {
    const response = await request(app.getHttpServer()).get('/pronouns')
    expect(response.status).toBe(200)
  })
})
