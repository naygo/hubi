import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AiFillCaretRight } from 'react-icons/ai'

import { StepOne, stepOneFields } from '@/screens/signup/step-1'
import { StepTwo, stepTwoFields } from '@/screens/signup/step-2'
import { StepThree, stepThreeFields } from '@/screens/signup/step-3'
import { Button } from '@/shared/components/ui/button'
import { Link } from '@/shared/components/ui/link'
import SocialMediaLinks from '@/shared/components/ui/social-media-links'
import { useYupValidationResolver } from '@/shared/hooks/useYupValidationResolver'
import { SignUpFormFields } from '@/shared/types/signup-forms'
import { routes } from '@/shared/utils/routes'
import styles from '@/styles/classes'
import colors from '@/styles/colors'

import { validationSchema } from './validators'

import Logo from '@public/img/logo.svg'

export default function SignUp() {
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
    <main className="flex justify-center items-center">
      <Head>
        <title>Cadastro | HUBI</title>
      </Head>
      <div className="container flex flex-col p-5 lg:flex-row">
        <section className="flex flex-col items-center lg:hidden">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={200}
            className={`${styles.logoBox} w-64`}
          />
          <div className="text-xs md:text-sm text-center mt-2 md:w-96">
            Somos uma plataforma e comunidade de players do cenário inclusivo de
            VALORANT.
          </div>
          <div className="text-xs mt-2 mb-10">
            <Link
              text="Voltar ao início &gt;"
              link=""
              className="font-medium"
            />
          </div>
        </section>

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

              <div className="flex gap-5">
                {currentStep !== 0 && (
                  <Button
                    color="secondary"
                    label="Voltar"
                    className="w-full my-5"
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  />
                )}
                {currentStep !== 2 && (
                  <Button
                    color="primary"
                    label="Continuar"
                    className="w-full my-5"
                    type="button"
                    onClick={() => handleStep(currentStep)}
                  />
                )}
                {currentStep === 2 && (
                  <Button
                    color="primary"
                    label="Salvar"
                    className="w-full my-5"
                    type="submit"
                  />
                )}
              </div>
            </form>

            <div className="text-center text-xs md:text-sm">
              Já possui uma conta?{' '}
              <Link
                text="Entre aqui &gt;"
                link={routes.login}
                className="font-medium"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center mt-2 w-full lg:items-center lg:justify-center">
          <div className="lg:items-start">
            <div className="hidden lg:block">
              <Image
                src={Logo}
                alt="HUBI"
                className={`${styles.logoBox} w-72 lg:w-80`}
              />
              <div className="lg:w-96 lg:mt-2">
                Somos uma plataforma e comunidade de players do cenário
                inclusivo de VALORANT.
              </div>
            </div>
            <SocialMediaLinks />
            <div className="hidden lg:block mt-4">
              <Link
                text="Voltar ao início &gt;"
                link="/"
                className="font-medium"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

interface StepsProps {
  currentStep: number
}

function Steps({ currentStep }: StepsProps) {
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
