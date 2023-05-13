import clsx from 'clsx'
import { ControllerFieldState } from 'react-hook-form'

export const generateStyleButton = (fieldState: ControllerFieldState) =>
  clsx(
    `
    w-full 
    bg-black-light
      rounded-lg 
      text-start 
      px-2 py-1 
      flex items-center justify-between
      border
      border-black-light 
      hover:border-yellow
      focus:border-yellow
      focus:ring-2
      focus:ring-yellow
      focus:ring-opacity-20 
      ui-open:border
      ui-open:border-yellow
    `,
    {
      'border-red-500 ring-2 ring-red-500 ring-opacity-20':
        fieldState.error?.type,
    },
  )
