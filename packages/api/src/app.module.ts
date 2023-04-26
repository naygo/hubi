import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { HandleMatchEndedService } from './domain/services/webhooks/HandleMatchEnded.service'
import {
  FaceitController,
  WebhooksController,
} from './presentation/controllers'
import { GetLeaderboardService } from './domain/services/faceit/GetLeaderboard.service'
import { FaceitApiClient } from './infra/integrations/implementations/faceitApi'

@Module({
  controllers: [FaceitController, WebhooksController],
  providers: [
    // --- Services --- //
    // Faceit
    GetLeaderboardService,

    // Webhooks
    HandleMatchEndedService,

    // --- Integrations --- //
    FaceitApiClient,
  ],
  imports: [ConfigModule.forRoot(), HttpModule],
})
export class AppModule {}
