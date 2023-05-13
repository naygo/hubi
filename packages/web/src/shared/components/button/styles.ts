import clsx from 'clsx'

export type ButtonClasses = 'primary' | 'secondary'

export const generateButtonStyles = (type: ButtonClasses) =>
  clsx(
    `
      w-full 
      text-white 
      uppercase 
      font-bold 
      focus:ring-4 
      focus:ring-opacity-30 
      rounded-lg 
      px-4 
      py-2
    `,
    {
      'bg-yellow focus:ring-yellow hover:bg-yellow-dark': type === 'primary',
      'bg-black-lighter focus:ring-black-lighter hover:bg-black-light':
        type === 'secondary',
    },
  )
