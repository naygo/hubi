import clsx from 'clsx'
import Image from 'next/image'
import ReactLink from 'next/link'

import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

import Logo from '@public/img/logo.svg'

const socialMediaButtonStyle =
  'border fill-gray border-gray p-2 rounded cursor-pointer hover:fill-yellow hover:border-yellow hover:bg-black-dark'

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
          alt="Picture of the author"
          height={400}
          width={400}
          className="w-full border border-yellow px-20 py-5 rounded hover:bg-black-dark"
        />
        {/* redes sociais */}
        <SocialMediaLinks />
      </div>

      {/* links */}
      <div className="flex gap-10 md:h-full">
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

        <LinksBox>
          <Title title="Ferramentas" />
          <Link text="Comunidade" />
          <Link text="Ajuda e Suporte" />
          <Link text="Regras e Condutas" />
        </LinksBox>
      </div>

      {/* in mobiles social media is show below links */}
      <SocialMediaLinks isMobile />
    </footer>
  )
}

function Title({ title }: { title: string }) {
  return <p className="text-gray mb-3">{title}</p>
}

function Link({ text }: { text: string }) {
  return (
    <span className="text-gray-light font-bold hover:text-yellow cursor-pointer">
      {text}
    </span>
  )
}

function LinksBox({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3">{children}</div>
}

function SocialMediaLinks({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      className={clsx(
        'gap-5 mt-3',
        isMobile ? 'flex md:hidden' : 'hidden md:flex',
      )}
    >
      <ReactLink
        href="https://discord.com/invite/hubinclusivo"
        target="__blank"
      >
        <FaDiscord size={40} className={socialMediaButtonStyle} />
      </ReactLink>
      <ReactLink
        href="https://www.instagram.com/hub_inclusivo/"
        target="__blank"
      >
        <FaInstagram size={40} className={socialMediaButtonStyle} />
      </ReactLink>
      <ReactLink href="https://www.tiktok.com/@hubinclusivo" target="__blank">
        <FaTiktok size={40} className={socialMediaButtonStyle} />
      </ReactLink>
      <ReactLink href="https://twitter.com/hubinclusivo" target="__blank">
        <FaTwitter size={40} className={socialMediaButtonStyle} />
      </ReactLink>
    </div>
  )
}
