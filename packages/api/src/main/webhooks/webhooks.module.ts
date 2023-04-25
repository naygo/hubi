import { Module } from '@nestjs/common'

import { WebhooksController } from './webhooks.controller'
import { HandleMatchEndedService } from '@/domain/services/webhooks/handleMatchEnded.service'

@Module({
  controllers: [WebhooksController],
  providers: [HandleMatchEndedService],
})
export class WebhooksModule {}
