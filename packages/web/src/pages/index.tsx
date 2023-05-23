import Head from 'next/head'
import Image from 'next/image'

import { TiArrowSortedDown } from 'react-icons/ti'

import { Link } from '@/shared/components/link'
import { yellowDefault } from '@/styles/colors'

import NounsLogo from '@public/img/initial-page/nouns-logo.svg'
// import TOP1 from '@public/img/initial-page/top-1.svg'
// import TOP2 from '@public/img/initial-page/top-2.svg'
// import TOP3 from '@public/img/initial-page/top-3.svg'

const heightFirstSection = 'calc(100vh - 71px)'
const linkStyle = 'text-sm md:text-lg'
const titleStyle = 'text-4xl font-bold md:text-6xl'
const paragraphStyle =
  'mb-5 w-96 font-light text-gray-light md:text-3xl md:w-full'
const sectionStyle =
  'min-h-screen flex flex-col justify-center items-center text-center gap-10 md:flex-row md:justify-between'

export default function Home() {
  return (
    <main className="grow flex justify-center">
      <Head>
        <title>HUBI</title>
      </Head>
      <div className="container">
        <section
          className="p-4 flex items-center justify-center w-full"
          style={{
            height: heightFirstSection,
          }}
        >
          <div className="flex flex-col items-center justify-between h-64 md:h-1/2">
            <h1 className="text-5xl md:text-8xl md:w-2/4 font-bold text-center">
              Mais do que ranqueadas
            </h1>

            <div>
              <TiArrowSortedDown
                className="text-2xl animate-bounce"
                fill={yellowDefault}
                size={80}
              />
            </div>
          </div>
        </section>

        <section className={`${sectionStyle} md:text-left`}>
          <div className="md:w-3/4">
            <h1 className={titleStyle}>Local de aprendizado</h1>
            <div className="mt-10">
              <p className={`${paragraphStyle}`}>
                Aprenda, evolua e melhore o seu potencial dentro de uma
                comunidade dedicada e acolhedora.
              </p>
              <Link
                text="Veja o que dizer as jogadoras &gt;"
                link="/playground"
                className="text-sm md:text-lg"
              />
            </div>
          </div>

          <div className="w-full">
            <Image
              src={'https://picsum.photos/800/400?random=1'}
              alt="Random Image"
              width={800}
              height={300}
            />
          </div>
        </section>

        <section
          className={`${sectionStyle} md:flex-row-reverse md:text-right`}
        >
          <div className="">
            <div className="flex items-end justify-end">
              <Image src={NounsLogo} alt="NOUNS Logo" width={500} />
            </div>
            <div className="flex flex-col items-center mt-10 md:items-end">
              <p className={paragraphStyle}>
                Temos parceria com uma das maiores organizações autônomas
                descentralizadas (DAO). Saiba mais sobre a NOUNS e coloca seu
                óclin!
              </p>
              <Link
                text="Seja mais NOUNS &gt;"
                link="/"
                className={linkStyle}
              />
            </div>
          </div>

          <div className="w-full">
            <Image
              src={'https://picsum.photos/800/400?random=2'}
              alt="Random Image"
              width={800}
              height={300}
            />
          </div>
        </section>

        <section className={`${sectionStyle} md:text-left`}>
          <div className="md:w-3/4">
            <h1 className={titleStyle}>Tabela de Prêmios</h1>
            <div className="mt-10">
              <p className={paragraphStyle}>
                Nada melhor do que aprender e ainda{' '}
                <strong className="font-bold">ganhar recompensas</strong> com o
                seu esforço, certo?
              </p>
              <Link
                text="Confira toda a tabela de premiação &gt;"
                link="/"
                className={linkStyle}
              />
            </div>
          </div>

          <div className="w-full">
            <Image
              src={'https://picsum.photos/800/400?random=3'}
              alt="Random Image"
              width={800}
              height={300}
            />
          </div>
        </section>

        <section className="min-h-screen ">
          <div className="flex flex-col">
            <h1 className={titleStyle}>Equipe</h1>
            <p></p>
          </div>
        </section>
      </div>
    </main>
  )
}
