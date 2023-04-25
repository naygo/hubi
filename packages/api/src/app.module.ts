import { Module } from '@nestjs/common'

import { WebhooksController } from './presentation/controllers'
import { HandleMatchEndedService } from './domain/services/webhooks/handleMatchEnded.service'

@Module({
  controllers: [WebhooksController],
  providers: [HandleMatchEndedService],
})
export class AppModule {}
