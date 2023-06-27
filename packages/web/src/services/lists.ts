import { Gender, Pronoun, Rank } from '@hubi/types'

import { api } from './api'

export async function getGenders(): Promise<Gender[]> {
  const response = await api.get<Gender[]>(`/genders`)
  return response.data
}

export async function getRanks(): Promise<Rank[]> {
  return (await api.get<Rank[]>(`/ranks`)).data
}

export async function getPronouns(): Promise<Pronoun[]> {
  return (await api.get<Pronoun[]>('/pronouns')).data
}
