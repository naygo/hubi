import { Social as SocialModel, PrismaClient } from '@prisma/client'

import { insert } from './utils/insert'

type Social = Omit<SocialModel, 'id'>

const SOCIALS: Social[] = [
  {
    name: 'Twitter',
    status: 'ativo',
  },
  {
    name: 'Instagram',
    status: 'ativo',
  },
  {
    name: 'Discord',
    status: 'ativo',
  },
  {
    name: 'Facebook',
    status: 'ativo',
  },
  {
    name: 'Twitch',
    status: 'ativo',
  },
  {
    name: 'Youtube',
    status: 'ativo',
  },
  {
    name: 'TikTok',
    status: 'ativo',
  },
  {
    name: 'Reddit',
    status: 'ativo',
  },
  {
    name: 'Steam',
    status: 'ativo',
  },
]

export async function seedSocials(prisma: PrismaClient) {
  await insert({
    data: SOCIALS,
    name: 'social',
    prisma,
  })
}
