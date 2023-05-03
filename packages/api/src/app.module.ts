import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { FaceitController } from './controllers/leaderboard.controller'
import { LeaderboardService } from './domain/services/faceit/leaderboard.service'
import { PlayerService } from './domain/services/faceit/player.service'
import { ApiFaceitClientService } from './infra/services/faceit/api-faceit-client'
import { OpenFaceitClientService } from './infra/services/faceit/open-faceit-client'
import { ApplicationController } from '@/controllers/application.controller'

@Module({
  controllers: [ApplicationController, FaceitController],
  providers: [
    // --- Services --- //
    // Faceit
    LeaderboardService,
    PlayerService,

    // --- Usecases --- //

    // --- Infra --- //
    // Faceit
    ApiFaceitClientService,
    OpenFaceitClientService,
  ],
  imports: [ConfigModule.forRoot(), HttpModule],
})
export class AppModule {}
