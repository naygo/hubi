import clsx from 'clsx'
import { ControllerFieldState } from 'react-hook-form'

export const generateStyleInputText = (fieldState: ControllerFieldState) =>
  clsx(
    `
      w-full 
      bg-black-light
      border
      border-black-light
      font-light
      text-white
      rounded-lg 
      px-2
      py-1
      hover:border-yellow
      focus:border-yellow
      focus:ring-2
      focus:ring-yellow
      focus:ring-opacity-20 
    `,
    {
      'border-red-500 ring-2 ring-red-500 ring-opacity-20':
        fieldState.error?.type,
    },
  )
