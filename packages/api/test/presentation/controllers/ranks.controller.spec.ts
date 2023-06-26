import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import request from 'supertest'

import { FindRanks } from '@/domain/usecases/db/ranks/find-ranks'
import { prismaProvider } from '@/infra/db/prisma/provider'
import { RanksRepository } from '@/infra/db/prisma/repositories'
import { RanksController } from '@/presentation/controllers/ranks.controller'

describe('RanksController', () => {
  let app: INestApplication
  let controller: RanksController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RanksController],
      providers: [FindRanks, RanksRepository, prismaProvider],
    }).compile()

    controller = module.get<RanksController>(RanksController)
    app = module.createNestApplication()

    await app.init()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return an array of ranks', async () => {
    const response = await request(app.getHttpServer()).get('/ranks')
    expect(response.status).toBe(200)
  })
})
