import Image from 'next/image'
import ReactLink from 'next/link'

import { AiFillCaretRight } from 'react-icons/ai'

import Link from '@/shared/components/link'
import colors from '@/styles/colors'

import Logo from '@public/img/logo.svg'

export default function SignUp() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="container flex flex-col p-5 md:flex-row">
        <section className="w-full">
          <div className="flex items-center gap-5 ml-5 mb-5">
            <ReactLink href={''}>
              <p className="text-sm">Etapa 1</p>
              <div className="bg-yellow h-1 mt-1 rounded"></div>
            </ReactLink>
            <AiFillCaretRight size={10} fill={colors.grayDarker} />
            <ReactLink href={''}>
              <p className="text-sm">Etapa 2</p>
              <div className="bg-gray-darker h-1 mt-1 rounded"></div>
            </ReactLink>
            <AiFillCaretRight size={10} fill={colors.grayDarker} />
            <ReactLink href={''}>
              <p className="text-sm">Etapa 3</p>
              <div className="bg-gray-darker h-1 mt-1 rounded"></div>
            </ReactLink>
          </div>

          <div className="w-full bg-black-lighter rounded-3xl p-8">
            <div className="flex gap-2.5">
              <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl align-bottom">
                Crie sua conta na
              </h1>
              <Image src={Logo} alt="HUBI" className="w-14 sm:w-16 lg:w-20" />
            </div>
            <p className="text-gray text-xs lg:text-sm mt-2 mb-10 text-justify">
              O seu cadastro irá passar por um processo de verificação e pode
              demorar alguns instantes para ser aprovado.
            </p>

            <div>
              <p>campos etapas</p>
            </div>

            <div className="text-center text-xs lg:text-sm mt-5">
              Já possui uma conta? <Link text="Entre agora &gt;" link="" />
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
