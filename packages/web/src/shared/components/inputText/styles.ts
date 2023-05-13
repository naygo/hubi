import clsx from 'clsx'
import { ControllerFieldState } from 'react-hook-form'

export const generateStyleInputText = (fieldState: ControllerFieldState) =>
  clsx(
    `
      w-full 
      bg-black
      
      border
      border-black-light
      
      font-light
      text-white
      
      rounded-lg 
      px-2
      py-1

      focus:ring-2
      focus:ring-opacity-20
    `,
    {
      'border-red-500 focus:ring-red-500 ': fieldState.error?.type,
    },
    {
      'hover:border-yellow focus:border-yellow focus:ring-yellow':
        !fieldState.error?.type,
    },
  )
