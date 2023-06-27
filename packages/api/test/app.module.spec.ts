import { Test } from '@nestjs/testing'

import { AppModule } from '@/app.module'

describe('AppModule', () => {
  it('should be defined', async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    const app = moduleRef.createNestApplication()
    await app.init()

    expect(app).toBeDefined()
  })
})
