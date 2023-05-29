import * as yup from 'yup'

// TODO ADD VALIDATION MESSAGES HELPER

const discordRegex = /^(.{2,32}#\d{4})$/
const riotIdRegex = /^(.{3,16}#.{3,5})$/

export const validationSchema = yup.object({
  firstName: yup.string().required('Campo obrigatório'),
  lastName: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .required('Campo obrigatório'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Senhas não coincidem')
    .required('Campo obrigatório'),
  birthDate: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Data inválida',
    )
    .required('Campo obrigatório'),
  gender: yup.string().required('Campo obrigatório'),
  twitter: yup.string().required('Campo obrigatório'),
  instagram: yup.string().required('Campo obrigatório'),
  gamersclub: yup.string().when('gender', {
    is: (gender: string) => gender === 'nao-binario',
    then: (schema) => schema.required('Campo obrigatório'),
    otherwise: (schema) => schema.notRequired(),
  }),
  discord: yup
    .string()
    .matches(discordRegex, 'Nick do Discord inválido')
    .required('Campo obrigatório'),
  otherSocialMedia: yup.string(),
  howDidYouKnowHubi: yup.string().required('Campo obrigatório'),
  timeInCommunity: yup.string().when('gender', {
    is: (gender: string) => gender === 'nao-binario',
    then: (schema) => schema.required('Campo obrigatório'),
    otherwise: (schema) => schema.notRequired(),
  }),
  pronouns: yup.string().required('Campo obrigatório'),
  nickname: yup.string().required('Campo obrigatório'),
  riotId: yup
    .string()
    .matches(riotIdRegex, 'Riot ID inválido')
    .required('Campo obrigatório'),
  ingameRank: yup.string().required('Campo obrigatório'),
})
