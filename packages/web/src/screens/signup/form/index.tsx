import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { SignupFormProvider } from '@/contexts/signup-form-context'
import { Button } from '@/shared/components/ui/button'
import { Link } from '@/shared/components/ui/link'
import { useYupValidationResolver } from '@/shared/hooks/useYupValidationResolver'
import { SignUpFormFields } from '@/shared/types/signup-forms'

import { StepOne, stepOneFields } from '../step-1'
import { StepTwo, stepTwoFields } from '../step-2'
import { StepThree, stepThreeFields } from '../step-3'
import { Steps } from '../steps'
import { validationSchema } from './validators'

import Logo from '@public/img/logo.svg'

export function SignUpForm() {
  const resolver = useYupValidationResolver(validationSchema)
  const form = useForm<SignUpFormFields>({ resolver, mode: 'onChange' })
  const { handleSubmit } = form

  const [currentStep, setCurrentStep] = useState(0)

  const handleStep = async (step: number) => {
    const steps = [stepOneFields, stepTwoFields, stepThreeFields]
    const validStep = await form.trigger(steps[step])

    if (validStep) {
      setCurrentStep(step + 1)
    }
  }

  const handleSendForm = (data: SignUpFormFields) => {
    console.log(data)
  }

  return (
    <SignupFormProvider>
      <section className="md:w-full lg:w-10/12">
        <Steps currentStep={currentStep} />
        <div className="w-full bg-black-light rounded-3xl p-8">
          <div className="flex gap-1 md:gap-1.5">
            <h1 className="font-bold text-lg sm:text-2xl lg:text-3xl align-bottom">
              Crie sua conta na
            </h1>
            <Image src={Logo} alt="HUBI" className="w-12 sm:w-16 lg:w-20" />
          </div>
          <p className="text-gray text-xs lg:text-sm mt-2 mb-10 text-justify">
            O seu cadastro irá passar por um processo de verificação e pode
            demorar para ser analisado.
          </p>
          <form onSubmit={handleSubmit(handleSendForm)} noValidate>
            <div>
              <StepOne form={form} hidden={currentStep !== 0} />
              <StepTwo form={form} hidden={currentStep !== 1} />
              <StepThree form={form} hidden={currentStep !== 2} />
            </div>
            <div className="font-light text-gray text-xs italic mt-2">
              Campos com <span className="text-yellow">*</span> são
              obrigatórios.
            </div>
            <div
              className={clsx('text-gray text-xs italic mt-2', {
                hidden: currentStep !== 2,
              })}
            >
              As redes sociais <span className="text-yellow">Twitter</span> e{' '}
              <span className="text-yellow">Instagram</span> não podem estar
              privadas.
            </div>
            <div className="flex gap-5 my-5">
              {currentStep !== 0 && (
                <Button
                  color="secondary"
                  label="Voltar"
                  className="w-full"
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                />
              )}
              {currentStep !== 2 && (
                <Button
                  color="primary"
                  label="Continuar"
                  className="w-full"
                  type="button"
                  onClick={() => handleStep(currentStep)}
                />
              )}
              {currentStep === 2 && (
                <Button
                  color="primary"
                  label="Salvar"
                  className="w-full"
                  type="submit"
                />
              )}
            </div>
          </form>
          <div className="text-center text-xs md:text-sm">
            Já possui uma conta?{' '}
            <Link text="Entre aqui &gt;" href="" className="font-medium" />
          </div>
        </div>
      </section>
    </SignupFormProvider>
  )
}
