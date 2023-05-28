import * as yup from 'yup'

// TODO ADD VALIDATION MESSAGES HELPER

export const validationSchema = yup.object({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .required('Campo obrigatório'),
})
