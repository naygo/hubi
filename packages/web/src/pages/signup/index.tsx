import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { AiFillCaretRight } from 'react-icons/ai'

import colors from '@/styles/colors'

import Logo from '@public/img/logo.svg'
import styles from '@/styles/classes'

export default function SignUp() {
  return (
    <main className="flex flex-col h-screen w-screen p-5">
      <div className="flex items-center gap-5 ml-5 mb-5">
        <Link href={''}>
          <p>Etapa 1</p>
          <div className="bg-yellow h-1 mt-1 rounded"></div>
        </Link>
        <AiFillCaretRight size={10} fill={colors.grayDarker} />
        <Link href={''}>
          <p>Etapa 2</p>
          <div className="bg-gray-darker h-1 mt-1 rounded"></div>
        </Link>
        <AiFillCaretRight size={10} fill={colors.grayDarker} />
        <Link href={''}>
          <p>Etapa 3</p>
          <div className="bg-gray-darker h-1 mt-1 rounded"></div>
        </Link>
      </div>
      <section className="w-full bg-black-lighter rounded-3xl p-8">
        <div className="flex gap-2">
          <h1 className="font-bold text-2xl align-bottom">Crie sua conta na</h1>
          <Image src={Logo} alt="HUBI" width={70} />
        </div>
        <p className="text-gray text-sm mt-2 mb-10 text-justify">
          O seu cadastro irá passar por um processo de verificação e pode
          demorar alguns instantes para ser aprovado.
        </p>

        <div>
          <p>campos etapas</p>
        </div>

        <div className="text-center text-sm mt-5">
          Já possui uma conta?{' '}
          <span className={styles.link}>Entre agora &gt;</span>
        </div>
      </section>
      <section className="hidden md:block w-full">logo</section>
    </main>
  )
}
