import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import {
  GetLeaderboardService,
  GetPlayerInfoService,
  HandleMatchEndedService,
} from './domain/services'
import { GetLeaderboardUsecase, GetPlayerInfoUsecase } from './domain/usecases'
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
    GetPlayerInfoService,

    // Webhooks
    HandleMatchEndedService,

    // --- Usecases --- //
    // Faceit
    GetLeaderboardUsecase,
    GetPlayerInfoUsecase,

    // --- Integrations --- //
    // Faceit
    FaceitApiClientImpl,
  ],
  imports: [ConfigModule.forRoot(), HttpModule],
})
export class AppModule {}
