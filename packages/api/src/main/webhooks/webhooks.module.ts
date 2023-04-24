import { Module } from '@nestjs/common'

import { WebhooksController } from './webhooks.controller'
import { HandleMatchEndedService } from '@/presentation/services/webhooks/handleMatchEnded.service'

@Module({
  controllers: [WebhooksController],
  providers: [HandleMatchEndedService],
})
export class WebhooksModule {}
