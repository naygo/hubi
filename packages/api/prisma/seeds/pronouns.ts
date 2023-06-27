import { PrismaClient, Pronoun as PronounModel } from '@prisma/client'

import { insert } from './utils/insert'

type Pronoun = Omit<PronounModel, 'id'>

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
    name: 'pronoun',
    prisma,
  })
}
