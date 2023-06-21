import { Genders, PrismaClient } from '@prisma/client'

import { insert } from './utils/insert'

type Gender = Omit<Genders, 'id'>

const GENDERS: Gender[] = [
  {
    name: 'Mulher CIS',
    status: 'ativo',
  },
  {
    name: 'Mulher Trans',
    status: 'ativo',
  },
  {
    name: 'Homem CIS',
    status: 'ativo',
  },
  {
    name: 'Homem Trans',
    status: 'ativo',
  },
  {
    name: 'Não-binário',
    status: 'ativo',
  },
  {
    name: 'Outro',
    status: 'ativo',
  },
]

export async function seedGenders(prisma: PrismaClient) {
  await insert({
    data: GENDERS,
    name: 'genders',
    prisma,
  })
}
