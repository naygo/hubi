import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import request from 'supertest'

import { FindRanks } from '@/domain/usecases/db/ranks/find-ranks'
import { RanksController } from '@/presentation/controllers/ranks.controller'

describe('RanksController', () => {
  let app: INestApplication

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RanksController],
      providers: [
        {
          provide: FindRanks,
          useValue: {
            execute: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile()

    app = module.createNestApplication()
    await app.init()
  })

  it('should be defined', () => {
    expect(app).toBeDefined()
  })

  describe('GET /ranks', () => {
    it('should return status 200 and a list of ranks', async () => {
      const response = await request(app.getHttpServer()).get('/ranks')
      expect(response.status).toBe(200)
    })
  })
})
