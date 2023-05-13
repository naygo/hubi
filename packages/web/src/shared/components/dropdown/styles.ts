import clsx from 'clsx'
import { ControllerFieldState } from 'react-hook-form'

export const generateStyleButton = (
  fieldState: ControllerFieldState,
  value: unknown,
) =>
  clsx(
    `
      flex items-center justify-between
      w-full 
      
      bg-black
      
      font-light
      text-start 
      
      rounded-lg 
      px-2 py-1 
      
      border
      border-black-light 

      focus:ring-2
      focus:ring-opacity-20
    `,
    {
      'border-red-500 focus:ring-red-500': fieldState.error?.type,
    },
    {
      'hover:border-yellow focus:border-yellow focus:ring-yellow':
        !fieldState.error?.type,
    },
    {
      'text-gray-400': !value,
    },
  )
