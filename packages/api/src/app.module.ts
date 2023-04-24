import { Module } from '@nestjs/common'

import { WebhooksModule } from '@/main/webhooks/webhooks.module'

@Module({
  imports: [WebhooksModule],
})
export class AppModule {}
