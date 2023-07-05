import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

import { FindPronouns } from '@/domain/usecases/db/pronouns/find-pronouns'
import { PronounsController } from '@/presentation/controllers/pronouns.controller'

describe('PronounsController', () => {
  let app: INestApplication

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [PronounsController],
      providers: [
        {
          provide: FindPronouns,
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

  describe('GET /pronouns', () => {
    it('should return status 200 and a list of pronouns', async () => {
      const response = await request(app.getHttpServer()).get('/pronouns')
      expect(response.status).toBe(200)
    })
  })
})
