import clsx from 'clsx'

export type ButtonClasses = 'primary' | 'secondary'

export const generateButtonStyles = (type: ButtonClasses) =>
  clsx(
    `
      w-full 
      text-white 
      uppercase 
      font-bold 
      rounded-lg 
      px-4 
      py-2
    `,
    {
      'bg-yellow hover:bg-yellow-dark': type === 'primary',
      'bg-black-lighter hover:bg-black-light': type === 'secondary',
    },
  )
