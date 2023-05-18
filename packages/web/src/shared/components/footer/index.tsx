import Image from 'next/image'

import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

import Logo from '../../../../public/img/logo.svg'

import styles from './styles.module.scss'

export function Footer() {
  const linkTitle = 'text-gray mb-3'
  const link = 'text-gray-light font-bold hover:text-yellow cursor-pointer'

  return (
    <footer
      className="
      w-full
      md:flex
      md:items-center
      md:justify-between
      md:gap-10
      p-10
    "
    >
      <div className="mb-10 md:mb-0">
        {/* logo */}
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Picture of the author"
          className="w-full border border-yellow px-32 py-10 rounded hover:bg-black-dark"
        />
        {/* redes sociais */}
        <div className={`flex gap-5 mt-3 ${styles.socialMediaBox}`}>
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
      </div>

      {/* links */}
      <div className="flex gap-10 md:h-full">
        <div className="flex flex-col gap-3">
          <p className={linkTitle}>HUBI</p>
          <span className={link}>HUBI</span>
          <span className={link}>Pessoas</span>
          <span className={link}>Assets</span>
        </div>

        <div className="flex flex-col gap-3">
          <p className={linkTitle}>Sobre</p>
          <span className={link}>Contato</span>
          <span className={link}>NOUNS</span>
          <span className={link}>Direitos Autorais</span>
        </div>

        <div className="flex flex-col gap-3">
          <p className={linkTitle}>Ferramentas</p>
          <span className={link}>Comunidade</span>
          <span className={link}>Ajuda e Suporte</span>
          <span className={link}>Regras e Condutas</span>
        </div>
      </div>
    </footer>
  )
}
