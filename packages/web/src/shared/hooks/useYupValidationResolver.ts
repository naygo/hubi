/* eslint-disable indent */
import { useCallback } from 'react'
import { object, ValidationError } from 'yup'

export const useYupValidationResolver = (
  validationSchema: ReturnType<typeof object>,
) =>
  useCallback(
    async (data: unknown) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors) {
        if (errors instanceof ValidationError)
          return {
            values: {},
            errors: errors.inner.reduce((allErrors, currentError) => {
              return {
                ...allErrors,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                [currentError.path!]: {
                  type: currentError.type ?? 'validation',
                  message: currentError.message,
                },
              }
            }, {}),
          }

        throw new Error('Error trying to validate form schema')
      }
    },
    [validationSchema],
  )

export default useYupValidationResolver
