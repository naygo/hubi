import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import {
  GetLeaderboardService,
  HandleMatchEndedService,
} from './domain/services'
import { GetLeaderboardUsecase } from './domain/usecases'
import { FaceitApiClientImpl } from './infra/integrations/implementations'
import {
  FaceitController,
  WebhooksController,
} from './presentation/controllers'

@Module({
  controllers: [FaceitController, WebhooksController],
  providers: [
    // --- Services --- //
    // Faceit
    GetLeaderboardService,

    // Webhooks
    HandleMatchEndedService,

    // --- Usecases --- //
    // Faceit
    GetLeaderboardUsecase,

    // --- Integrations --- //
    FaceitApiClientImpl,
  ],
  imports: [ConfigModule.forRoot(), HttpModule],
})
export class AppModule {}
