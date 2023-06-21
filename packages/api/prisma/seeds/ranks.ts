import { PrismaClient, Ranks } from '@prisma/client'

import { insert } from './utils/insert'

type Rank = Omit<Ranks, 'id'>

const RANKS: Rank[] = [
  {
    name: 'Radiante',
    status: 'ativo',
    order: 1,
  },
  {
    name: 'Imortal 3',
    status: 'ativo',
    order: 2,
  },
  {
    name: 'Imortal 2',
    status: 'ativo',
    order: 3,
  },
  {
    name: 'Imortal 1',
    status: 'ativo',
    order: 4,
  },
  {
    name: 'Ascendente 3',
    status: 'ativo',
    order: 5,
  },
  {
    name: 'Ascendente 2',
    status: 'ativo',
    order: 6,
  },
  {
    name: 'Ascendente 1',
    status: 'ativo',
    order: 7,
  },
  {
    name: 'Diamante 3',
    status: 'ativo',
    order: 8,
  },
  {
    name: 'Diamante 2',
    status: 'ativo',
    order: 9,
  },
  {
    name: 'Diamante 1',
    status: 'ativo',
    order: 10,
  },
  {
    name: 'Platina 3',
    status: 'ativo',
    order: 11,
  },
  {
    name: 'Platina 2',
    status: 'ativo',
    order: 12,
  },
  {
    name: 'Platina 1',
    status: 'ativo',
    order: 13,
  },
  {
    name: 'Ouro 3',
    status: 'ativo',
    order: 14,
  },
  {
    name: 'Ouro 2',
    status: 'ativo',
    order: 15,
  },
  {
    name: 'Ouro 1',
    status: 'ativo',
    order: 16,
  },
  {
    name: 'Prata 3',
    status: 'ativo',
    order: 17,
  },
  {
    name: 'Prata 2',
    status: 'ativo',
    order: 18,
  },
  {
    name: 'Prata 1',
    status: 'ativo',
    order: 19,
  },
  {
    name: 'Bronze 3',
    status: 'ativo',
    order: 20,
  },
  {
    name: 'Bronze 2',
    status: 'ativo',
    order: 21,
  },
  {
    name: 'Bronze 1',
    status: 'ativo',
    order: 22,
  },
  {
    name: 'Ferro 3',
    status: 'ativo',
    order: 23,
  },
  {
    name: 'Ferro 2',
    status: 'ativo',
    order: 24,
  },
  {
    name: 'Ferro 1',
    status: 'ativo',
    order: 25,
  },
]

export async function seedRanks(prisma: PrismaClient) {
  return Promise.all(
    await insert({
      data: RANKS,
      name: 'ranks',
      prisma,
    }),
  )
}
