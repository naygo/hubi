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
    `,
    { 'border-red-500 focus:ring-red-500 ': fieldState.error?.type },
    { 'hover:border-yellow focus:border-yellow': !fieldState.error?.type },
  )
