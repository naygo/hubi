import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import request from 'supertest'

import { FindGenders } from '@/domain/usecases/db/genders/find-genders'
import { GendersController } from '@/presentation/controllers/genders.controller'

describe('GendersController', () => {
  let app: INestApplication

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GendersController],
      providers: [
        {
          provide: FindGenders,
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

  describe('GET /genders', () => {
    it('should return status 200 and a list of genders', async () => {
      const response = await request(app.getHttpServer()).get('/genders')
      expect(response.status).toBe(200)
    })
  })
})
