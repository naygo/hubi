import * as yup from 'yup'

import {
  invalidEmailMessage,
  requiredFieldMessage,
} from '@/shared/utils/validationMessages'

export const validationSchema = yup.object({
  email: yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
  password: yup.string().required(requiredFieldMessage),
})
