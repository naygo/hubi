import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { Hasher, Encrypter } from '@/infra/cryptography'
import { prismaProvider } from '@/infra/db/prisma/provider'
import {
  UsersRepository,
  UserSocialsRepository,
  GendersRepository,
} from '@/infra/db/prisma/repositories'

import { LeaderboardService } from './domain/services/faceit/leaderboard.service'
import { PlayerService } from './domain/services/faceit/player.service'
import { FindGenders } from './domain/usecases/db/genders/find-genders'
import { FindPronouns } from './domain/usecases/db/pronouns/find-pronouns'
import { CreateUser } from './domain/usecases/db/users/create-user'
import { Login } from './domain/usecases/db/users/login'
import { PronounsRepository } from './infra/db/prisma/repositories/pronouns.repository'
import { ApiFaceitClientService } from './infra/services/faceit/api-faceit-client'
import { OpenFaceitClientService } from './infra/services/faceit/open-faceit-client'
import { ApplicationController } from './presentation/controllers/application.controller'
import { GendersController } from './presentation/controllers/genders.controller'
import { HubController } from './presentation/controllers/hub.controller'
import { LeaderboardController } from './presentation/controllers/leaderboard.controller'
import { PronounsController } from './presentation/controllers/pronouns.controller'
import { UserController } from './presentation/controllers/users.controller'

@Module({
  controllers: [
    ApplicationController,
    GendersController,
    HubController,
    LeaderboardController,
    PronounsController,
    UserController,
  ],
  providers: [
    // --- Services --- //
    // Faceit
    LeaderboardService,
    PlayerService,

    // --- Usecases --- //
    // Gender
    FindGenders,

    // Pronouns
    FindPronouns,

    // User
    CreateUser,
    Login,

    // --- Infra --- //
    // Faceit
    ApiFaceitClientService,
    OpenFaceitClientService,
    // Prisma
    prismaProvider,
    // Cryptography
    Hasher,
    Encrypter,

    // Repositories
    GendersRepository,
    PronounsRepository,
    UsersRepository,
    UserSocialsRepository,
  ],
  imports: [ConfigModule.forRoot(), HttpModule],
})
export class AppModule {}
