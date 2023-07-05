import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import request from 'supertest'

import { ApplicationController } from '@/presentation/controllers/application.controller'

describe('ApplicationController', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationController],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('GET /health', () => {
    it('should return status 200 and a message', async () => {
      const response = await request(app.getHttpServer())
        .get('/health')
        .expect(200)

      expect(response.body).toEqual({ message: 'OK OK' })
    })
  })
})
