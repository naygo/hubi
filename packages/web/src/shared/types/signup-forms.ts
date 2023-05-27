export interface StepOneFormFields {
  fullName: string
  email: string
  password: string
  passwordConfirmation: string
  birthDate: string
  gender: string
}

export interface StepTwoFormFields {
  twitter: string
  instagram: string
  gamersclub: string
  discord: string
  otherSocialMedia?: string
  howDidYouKnowHubi: string
  timeInCommunity: string
  pronouns: string
}

export interface StepThreeFormFields {
  nickname: string
  riotId: string
  ingameRank: string
}

export type SignUpFormFields =
  | StepOneFormFields & StepTwoFormFields & StepThreeFormFields
