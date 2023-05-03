import Image from 'next/image'
import Link from 'next/link'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

import logo from '../../assets/img/LogoDarkBackground.svg'
import logoNouns from '../../assets/img/LogoNouns.svg'

import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className="flex justify-between px-4 sm:px-10 h-full items-end">
      <Image src={logo} alt="HUB Inclusivo" />

      <div className="h-full flex justify-center items-end gap-4 pb-4">
        <Link href="https://nouns.gg/" target="__blank">
          <Image
            width={35}
            height={35}
            src={logoNouns}
            alt="HUB Inclusivo"
            className={styles.icon}
          />
        </Link>

        <Link href="https://discord.gg/hubinclusivo" target="__blank">
          <FaDiscord size={30} className={styles.icon} />
        </Link>

        <Link href="https://twitter.com/hubinclusivo" target="__blank">
          <FaTwitter size={30} className={styles.icon} />
        </Link>
      </div>
    </footer>
  )
}
