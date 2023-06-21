import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import cors from 'cors'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const corsOptions = {
    origin: process.env.ORIGIN,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }

  app.use(cors(corsOptions))

  await app.listen(process.env.PORT || 3030)
}

bootstrap()
