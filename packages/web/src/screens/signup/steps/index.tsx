import clsx from 'clsx'

import { AiFillCaretRight } from 'react-icons/ai'

import colors from '@/styles/colors'

interface Props {
  currentStep: number
}

export function Steps({ currentStep }: Props) {
  const steps = ['Etapa 1', 'Etapa 2', 'Etapa 3']
  return (
    <div className="flex gap-5 justify-center mb-4 lg:justify-start lg:ml-8">
      {steps.map((step, index) => (
        <div key={step} className="flex gap-5">
          <div>
            <p className="text-xs md:text-sm">{step}</p>
            <div
              className={clsx('bg-gray-darker h-1 mt-1 rounded', {
                'bg-yellow': currentStep === index,
              })}
            ></div>
          </div>
          {index !== steps.length - 1 && (
            <AiFillCaretRight size={10} fill={colors.grayDarker} />
          )}
        </div>
      ))}
    </div>
  )
}
