import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import request from 'supertest'

import { CreateUser } from '@/domain/usecases/db/users/create-user'
import { Login } from '@/domain/usecases/db/users/login'
import { UsersController } from '@/presentation/controllers/users.controller'

describe('UsersController', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: CreateUser,
          useValue: {
            execute: jest.fn().mockResolvedValue({}),
          },
        },
        {
          provide: Login,
          useValue: {
            execute: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('POST /user/signup', () => {
    it('should return status 201', async () => {
      const response = await request(app.getHttpServer())
        .post('/user/signup')
        .send({
          name: 'any_name',
          email: 'any_email',
          password: 'any_password',
        })

      expect(response.status).toBe(201)
    })
  })

  describe('POST /user/login', () => {
    it('should return status 200', async () => {
      const response = await request(app.getHttpServer())
        .post('/user/login')
        .send({
          email: 'any_email',
          password: 'any_password',
        })

      expect(response.status).toBe(200)
    })
  })
})
