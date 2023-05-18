import clsx from 'clsx'
import Image from 'next/image'

import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

import Logo from '../../../../public/img/logo.svg'

import styles from './styles.module.scss'

export function Footer() {
  const linksBox = 'flex flex-col gap-3'
  const linkTitle = 'text-gray mb-3'
  const link = 'text-gray-light font-bold hover:text-yellow cursor-pointer'

  return (
    <footer
      className="
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
        <div className={linksBox}>
          <p className={linkTitle}>HUBI</p>
          <span className={link}>HUBI</span>
          <span className={link}>Pessoas</span>
          <span className={link}>Assets</span>
        </div>

        <div className={linksBox}>
          <p className={linkTitle}>Sobre</p>
          <span className={link}>Contato</span>
          <span className={link}>NOUNS</span>
          <span className={link}>Direitos Autorais</span>
        </div>

        <div className={linksBox}>
          <p className={linkTitle}>Ferramentas</p>
          <span className={link}>Comunidade</span>
          <span className={link}>Ajuda e Suporte</span>
          <span className={link}>Regras e Condutas</span>
        </div>
      </div>

      {/* in mobiles social media is show below links */}
      <SocialMediaLinks isMobile />
    </footer>
  )
}

function SocialMediaLinks({ isMobile }: { isMobile?: boolean }) {
  return (
    <div
      className={clsx(
        `gap-5 mt-3 ${styles.socialMediaBox}`,
        isMobile ? 'flex md:hidden' : 'hidden md:flex',
      )}
    >
      <span>
        <FaDiscord size={20} />
      </span>
      <span>
        <FaInstagram size={20} />
      </span>
      <span>
        <FaTiktok size={20} />
      </span>
      <span>
        <FaTwitter size={20} />
      </span>
    </div>
  )
}
