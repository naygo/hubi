import * as yup from 'yup'

import {
  invalidDiscordMessage,
  invalidEmailMessage,
  invalidRiotIdMessage,
  minLengthMessage,
  passwordsDontMatchMessage,
  requiredFieldMessage,
} from '@/shared/utils/validationMessages'

const discordRegex = /^(.{2,32}#\d{4})$/
const riotIdRegex = /^(.{3,16}#.{3,5})$/

export const validationSchema = yup.object({
  firstName: yup.string().required(requiredFieldMessage),
  lastName: yup.string().required(requiredFieldMessage),
  email: yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
  password: yup
    .string()
    .min(8, minLengthMessage(8, 'Senha'))
    .required(requiredFieldMessage),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), undefined], passwordsDontMatchMessage)
    .required(requiredFieldMessage),
  birthDate: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Data inválida',
    )
    .required(requiredFieldMessage),
  gender: yup.string().required(requiredFieldMessage),
  twitter: yup.string().required(requiredFieldMessage),
  instagram: yup.string().required(requiredFieldMessage),
  gamersclub: yup.string().when('gender', {
    is: (gender: string) => gender === 'nao-binario',
    then: (schema) => schema.required(requiredFieldMessage),
    otherwise: (schema) => schema.notRequired(),
  }),
  discord: yup
    .string()
    .matches(discordRegex, invalidDiscordMessage)
    .required(requiredFieldMessage),
  otherSocialMedia: yup.string(),
  howDidYouKnowHubi: yup.string().required(requiredFieldMessage),
  timeInCommunity: yup.string().when('gender', {
    is: (gender: string) => gender === 'nao-binario',
    then: (schema) => schema.required(requiredFieldMessage),
    otherwise: (schema) => schema.notRequired(),
  }),
  pronouns: yup.string().required(requiredFieldMessage),
  nickname: yup.string().required(requiredFieldMessage),
  riotId: yup
    .string()
    .matches(riotIdRegex, invalidRiotIdMessage)
    .required(requiredFieldMessage),
  ingameRank: yup.string().required(requiredFieldMessage),
})
