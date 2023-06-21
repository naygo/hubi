import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import ReactLink from 'next/link'

import { TiArrowSortedDown } from 'react-icons/ti'

import { Link } from '@/shared/components/ui/link'
import linksIcons from '@/shared/utils/icons'
import team from '@/shared/utils/team'

import NounsLogo from '@public/img/initial-page/nouns-logo.svg'
import Prizes from '@public/img/initial-page/prizes.png'

export default function Home() {
  return (
    <main>
      <Head>
        <title>HUBI</title>
      </Head>

      <section
        className="flex items-center justify-center"
        style={{
          height: 'calc(100vh - 71px)',
        }}
      >
        <div className="w-52 flex flex-col items-center justify-between gap-20">
          <h1 className="text-4xl text-center font-bold md:text-6xl lg:text-8xl">
            Mais do que ranqueadas
          </h1>

          <TiArrowSortedDown className="animate-bounce fill-yellow" size={60} />
        </div>
      </section>

      <Section>
        <div className="w-full">
          <Title text="Local de aprendizado" />
          <div className="mt-10">
            <Description>
              Aprenda, evolua e melhore o seu{' '}
              <span className="text-yellow font-medium">potencial</span> dentro
              de uma <strong>comunidade</strong> dedicada e acolhedora.
            </Description>

            <Link
              text="Veja o que dizem as jogadoras &gt;"
              href="/playground"
              className="font-medium text-xs md:text-sm lg:text-lg"
            />
          </div>
        </div>

        <div className="w-full mt-20 lg:m-0 flex justify-center items-center">
          <Image
            src={'https://picsum.photos/800/400?random=1'}
            alt="Random Image"
            width={800}
            height={300}
          />
        </div>
      </Section>

      <Section inverse>
        <div className="w-full lg:ml-10">
          <Image src={NounsLogo} alt="NOUNS Logo" width={500} />
          <div className="mt-10">
            <Description>
              Temos parceria com uma das maiores organizações autônomas
              descentralizadas{' '}
              <span className="text-yellow font-medium">(DAO)</span>. Saiba mais
              sobre a <strong>NOUNS</strong> e coloca seu óclin!
            </Description>

            <Link
              text="Seja mais NOUNS &gt;"
              href="/"
              className="font-medium text-xs md:text-sm lg:text-lg"
            />
          </div>
        </div>

        <div className="w-full mt-20 lg:m-0 flex justify-center items-center">
          <Image
            src={'https://picsum.photos/800/400?random=2'}
            alt="Random Image"
            width={800}
            height={300}
          />
        </div>
      </Section>

      <Section>
        <div className="w-full">
          <Title text="Tabela de Prêmios" />
          <div className="mt-10">
            <Description>
              Nada melhor do que aprender e ainda{' '}
              <strong className="font-bold">ganhar recompensas</strong> com o
              seu esforço, certo?
            </Description>
            <Link
              text="Confira toda a tabela de premiação &gt;"
              href="/"
              className="font-medium text-xs md:text-sm lg:text-lg"
            />
          </div>
        </div>

        <div className="w-full mt-20 lg:m-0 flex justify-center items-center">
          <Image src={Prizes} width={400} alt="Prizes Image" />
        </div>
      </Section>

      <section className="py-20 px-10 lg:py-10 flex justify-center">
        <div className="container lg:p-20">
          <Title text="Equipe" />
          <div className="mt-10">
            <Description>
              Conheça o time dedicado por trás do{' '}
              <strong className="text-yellow">HUB Inclusivo</strong>!
            </Description>
          </div>

          <div className="overflow-x-auto max-w-full">
            <div className="flex flex-row gap-5">
              <TeamMemberInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Section({
  children,
  inverse,
}: {
  children: React.ReactNode
  inverse?: boolean
}) {
  return (
    <section
      className={clsx(
        'py-20 px-10 lg:py-10 flex justify-center',
        inverse ? 'bg-black-light' : 'bg-black',
      )}
    >
      <div
        className={clsx(
          'container lg:flex lg:p-20 lg:items-center lg:justify-center',
          { 'flex-row-reverse': inverse },
        )}
      >
        {children}
      </div>
    </section>
  )
}

function Title({ text }: { text: string }) {
  return <h1 className="text-4xl font-bold">{text}</h1>
}

function Description({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg mb-5 text-gray-light md:text-1xl lg:text-2xl">
      {children}
    </p>
  )
}

function TeamMemberInfo() {
  return (
    <>
      {team.map(({ name, roles, nick, photo, links }) => (
        <div key={name} className="bg-black-dark rounded mb-4">
          <Image
            src={photo}
            alt={name}
            className="w-full h-36 rounded-t"
            width={150}
            height={150}
          />

          <div className="flex w-44 flex-col justify-between items-center p-2 mt-4">
            <p className="font-medium text-center">{name}</p>
            <span className="text-yellow text-xs">({nick})</span>
            <div className="mt-2">
              {roles?.map((role) => (
                <div
                  key={role}
                  className="font-light text-gray text-xs text-center"
                >
                  {role}
                </div>
              ))}
            </div>

            <div className="mt-4 mb-2 flex gap-3 justify-center">
              {links?.map((link) => {
                const Icon = linksIcons[link.name]

                return (
                  <ReactLink
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className="bg-black p-1.5 rounded hover:bg-black-lighter"
                  >
                    <Icon size={16} className="fill-yellow" />
                  </ReactLink>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
