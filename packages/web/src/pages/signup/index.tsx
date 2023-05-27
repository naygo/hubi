import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AiFillCaretRight } from 'react-icons/ai'

import { StepOne } from '@/screens/signup/step-1'
import { StepTwo } from '@/screens/signup/step-2'
import { StepThree } from '@/screens/signup/step-3'
import { Link } from '@/shared/components/ui/link'
import colors from '@/styles/colors'

import Logo from '@public/img/logo.svg'

export default function SignUp() {
  const form = useForm<any>()

  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = (step: number) => {
    setCurrentStep(step)
  }
  return (
    <main className="flex justify-center items-center">
      <Head>
        <title>Cadastro | HUBI</title>
      </Head>
      <div className="container flex flex-col p-5 md:flex-row">
        <section className="md:w-full lg:w-8/12">
          <Steps currentStep={currentStep} handleNextStep={handleNextStep} />

          <div className="w-full bg-black-light rounded-3xl p-8">
            <div className="flex gap-1 md:gap-1.5">
              <h1 className="font-bold text-lg sm:text-2xl align-bottom">
                Crie sua conta na
              </h1>
              <Image src={Logo} alt="HUBI" className="w-12 sm:w-16" />
            </div>
            <p className="text-gray text-xs lg:text-sm mt-2 mb-10 text-justify">
              O seu cadastro irá passar por um processo de verificação e pode
              demorar para ser analisado.
            </p>

            <div>
              {currentStep === 1 && <StepOne form={form} />}
              {currentStep === 2 && (
                <StepTwo form={form} nonBinaryForm={false} />
              )}
              {currentStep === 3 && <StepThree form={form} />}
            </div>

            <div className="text-gray text-xs italic mt-2">
              Campos com <span className="text-yellow">*</span> são
              obrigatórios.
            </div>

            <div className="text-gray text-xs italic mt-2">
              As redes sociais <span className="text-yellow">Twitter</span> e{' '}
              <span className="text-yellow">Instagram</span> não podem estar
              privadas.
            </div>

            <div className="text-center text-xs  mt-5">
              Já possui uma conta? <Link text="Entre aqui &gt;" link="" />
            </div>
          </div>
        </section>
        <section className="hidden md:block w-full">
          logo and social media buttons
        </section>
      </div>
    </main>
  )
}

interface StepsProps {
  currentStep: number
  handleNextStep: (step: number) => void
}

const steps = ['Etapa 1', 'Etapa 2', 'Etapa 3']

function Steps({ currentStep, handleNextStep }: StepsProps) {
  return (
    <div className="flex items-center justify-center gap-5 md:ml-5 md:justify-start mb-5">
      {steps.map((step, index) => (
        <>
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleNextStep(index + 1)}
          >
            <p className="text-xs md:text-sm">{step}</p>
            <div
              className={clsx('bg-gray-darker h-1 mt-1 rounded', {
                'bg-yellow': currentStep === index + 1,
              })}
            ></div>
          </div>
          {index !== steps.length - 1 && (
            <AiFillCaretRight size={10} fill={colors.grayDarker} />
          )}
        </>
      ))}
    </div>
  )
}
