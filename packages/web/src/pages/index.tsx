import Head from 'next/head'
import Image from 'next/image'

import { IconType } from 'react-icons'
import {
  FaDiscord,
  FaTwitch,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'

import { Link } from '@/shared/components/ui/link'
import colors from '@/styles/colors'

import NounsLogo from '@public/img/initial-page/nouns-logo.svg'
import Prizes from '@public/img/initial-page/prizes.png'

interface Team {
  name: string
  photo: string
  links?: {
    name: Links
    url: string
  }[]
}

const LinksIcons = {
  ['github']: FaGithub,
  ['twitter']: FaTwitter,
  ['linkedin']: FaLinkedin,
  ['instagram']: FaInstagram,
  ['youtube']: FaYoutube,
  ['twitch']: FaTwitch,
  ['discord']: FaDiscord,
  ['email']: FaEnvelope,
}
type Links = keyof typeof LinksIcons

const heightFirstSection = 'calc(100vh - 71px)'
const linkStyle = 'text-sm md:text-lg'
const titleStyle = 'text-4xl font-bold md:text-6xl'
const paragraphStyle =
  'text-xl mb-5 font-light text-gray-light md:text-3xl md:w-full'
const sectionStyle =
  'min-h-screen flex flex-col justify-center items-center text-center gap-10 p-4 md:flex-row md:justify-between'

const team: Team[] = [
  {
    name: 'Hugo Geleia',
    photo: 'https://picsum.photos/200?random=8',
    links: [
      {
        name: 'github',
        url: 'https://github.com/HugoJF',
      },
    ],
  },
  {
    name: 'Ivete Piriguete',
    photo: 'https://picsum.photos/200?random=7',
    links: [
      {
        name: 'github',
        url: 'https://github.com/mwives',
      },
    ],
  },
  {
    name: 'Jenniffer Aysha',
    photo: 'https://picsum.photos/200?random=9',
  },
  {
    name: 'Madu',
    photo: 'https://picsum.photos/200?random=7',
  },
  {
    name: 'Nayla Gomes',
    photo: 'https://picsum.photos/200?random=7',
    links: [
      {
        name: 'github',
        url: 'https://github.com/naygo',
      },
      {
        name: 'email',
        url: '',
      },
    ],
  },
  {
    name: 'Rubão',
    photo: 'https://picsum.photos/200?random=10',
  },
  {
    name: 'Thiago Berenguer',
    photo: 'https://picsum.photos/200?random=6',
  },
]

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
            <h1 className="text-5xl w-full md:text-8xl md:w-2/4 font-bold text-center">
              Mais do que ranqueadas
            </h1>

            <div>
              <TiArrowSortedDown
                className="text-2xl animate-bounce"
                fill={colors.yellowDefault}
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
          <div>
            <div className="flex items-end justify-center md:justify-end">
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

          <div className="w-full flex justify-center">
            <Image src={Prizes} alt="Prizes Image" />
          </div>
        </section>

        <section className="min-h-screen text-center p-4">
          <h1 className={titleStyle}>Equipe</h1>
          <p className="text-xl font-light text-gray-light md:text-3xl mt-4 md:mt-14">
            Conheça o time dedicado por trás do HUB Inclusivo!
          </p>

          {YellowDivider()}

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {team.map((member) => TeamMemberInfo(member))}
          </div>

          {YellowDivider()}
        </section>
      </div>
    </main>
  )
}

function TeamMemberInfo({ photo, name, links }: Team) {
  return (
    <div
      key={name}
      className="flex flex-col gap-2 justify-between items-center p-5 rounded bg-black-light"
    >
      <Image
        src={photo}
        alt="Random Image"
        width={150}
        height={150}
        className="rounded-full"
      />

      <div className="flex justify-center gap-2">
        {links?.map((link) => {
          const Icon = LinksIcons[link.name] as IconType

          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              className="bg-black-lighter p-2 rounded hover:bg-yellow"
            >
              <Icon size={15} />
            </a>
          )
        })}
      </div>

      <p className="text-base font-bold flex items-center md:text-lg">{name}</p>
    </div>
  )
}

function YellowDivider() {
  return <div className="w-1/4 h-1 bg-yellow rounded-full mx-auto my-10"></div>
}
