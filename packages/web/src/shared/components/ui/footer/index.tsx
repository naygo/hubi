import Image from 'next/image'

import styles from '@/styles/classes'

import SocialMediaLinks from '../social-media-links'

import Logo from '@public/img/logo.svg'

export function Footer() {
  return (
    <footer
      className="
      container
      w-full
      flex
      flex-col
      gap-4
      p-10
      md:flex-row
      md:items-center
      md:justify-between
    "
    >
      <div className="flex flex-col justify-between h-full">
        {/* logo */}
        <Image
          src={Logo}
          alt="HUBI"
          height={400}
          width={400}
          className={styles.logoBox}
        />
        {/* redes sociais */}
        <div className="hidden md:block">
          <SocialMediaLinks />
        </div>
      </div>

      {/* links */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:h-full">
        <LinksBox>
          <Title title="HUBI" />
          <Link text="HUBI" />
          <Link text="Pessoas" />
          <Link text="Assets" />
        </LinksBox>

        <LinksBox>
          <Title title="Sobre" />
          <Link text="Contato" />
          <Link text="NOUNS" />
          <Link text="Direitos Autorais" />
        </LinksBox>

        <LinksBox className="col-span-2 md:col-span-1">
          <Title title="Ferramentas" />
          <Link text="Comunidade" />
          <Link text="Ajuda e Suporte" />
          <Link text="Regras e Condutas" />
        </LinksBox>
      </div>

      {/* in mobiles social media is show below links */}
      <div className="md:hidden">
        <SocialMediaLinks />
      </div>
    </footer>
  )
}

function Title({ title }: { title: string }) {
  return <p className="text-gray text-xs md:text-sm">{title}</p>
}

function Link({ text }: { text: string }) {
  return (
    <span className="text-gray-light text-xs md:text-sm font-bold hover:text-yellow cursor-pointer">
      {text}
    </span>
  )
}

function LinksBox({
  className,
  children,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>
}
