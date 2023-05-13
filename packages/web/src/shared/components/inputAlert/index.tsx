import { ControllerFieldState } from 'react-hook-form'

import { FaExclamationCircle } from 'react-icons/fa'

interface InputProps {
  fieldState: ControllerFieldState
}

export function InputAlert({ fieldState }: InputProps) {
  return (
    <span className="text-red-500 text-xs flex items-center mt-1">
      <FaExclamationCircle
        size={14}
        className="mr-1"
        style={{ fill: 'rgb(239, 68, 68)' }}
      />
      {fieldState.error?.message}
    </span>
  )
}
