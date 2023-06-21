import { PrismaClient, Pronouns } from '@prisma/client'

import { insert } from './utils/insert'

type Pronoun = Omit<Pronouns, 'id'>

const PRONOUNS: Pronoun[] = [
  {
    name: 'Ela/Dela',
    status: 'ativo',
  },
  {
    name: 'Ele/Dele',
    status: 'ativo',
  },
  {
    name: 'Qualquer pronome',
    status: 'ativo',
  },
]

export async function seedPronouns(prisma: PrismaClient) {
  await insert({
    data: PRONOUNS,
    name: 'pronouns',
    prisma,
  })
}
