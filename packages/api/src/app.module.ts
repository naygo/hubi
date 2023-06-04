import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { LeaderboardService } from './domain/services/faceit/leaderboard.service'
import { PlayerService } from './domain/services/faceit/player.service'
import { ApiFaceitClientService } from './infra/services/faceit/api-faceit-client'
import { OpenFaceitClientService } from './infra/services/faceit/open-faceit-client'
import { ApplicationController } from './presentation/controllers/application.controller'
import { HubController } from './presentation/controllers/hub.controller'
import { LeaderboardController } from './presentation/controllers/leaderboard.controller'
import { CreateUser } from './domain/usecases/db/users/create-user'
import {
  UsersRepository,
  UserSocialsRepository,
} from '@/infra/db/prisma/repositories'
import { UserController } from './presentation/controllers/users.controller'
import { Hasher } from '@/infra/cryptography'

@Module({
  controllers: [
    ApplicationController,
    LeaderboardController,
    HubController,
    UserController,
  ],
  providers: [
    // --- Services --- //
    // Faceit
    LeaderboardService,
    PlayerService,

    // --- Usecases --- //
    CreateUser,

    // --- Infra --- //
    // Faceit
    ApiFaceitClientService,
    OpenFaceitClientService,

    Hasher,

    // Repositories
    UsersRepository,
    UserSocialsRepository,
  ],
  imports: [ConfigModule.forRoot(), HttpModule],
})
export class AppModule {}
