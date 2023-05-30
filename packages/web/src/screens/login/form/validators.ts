import * as yup from 'yup'

import {
  invalidEmailMessage,
  minLengthMessage,
  requiredFieldMessage,
} from '@/shared/utils/validationMessages'

export const validationSchema = yup.object({
  email: yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
  password: yup
    .string()
    .min(8, minLengthMessage(8, 'Senha'))
    .required(requiredFieldMessage),
})
