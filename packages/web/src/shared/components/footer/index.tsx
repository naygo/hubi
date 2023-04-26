import Image from 'next/image'
import Link from 'next/link'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

import logo from '../../assets/img/LogoDarkBackground.svg'
// import logoNouns from '../shared/assets/img/LogoNouns.svg'

import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-4 sm:px-10">
      <Image src={logo} alt="HUB Inclusivo" />

      <div className="h-full flex justify-center align-bottom gap-4">
        <Link href="https://discord.gg/hubinclusivo">
          <FaDiscord size={30} className={styles.icon} />
        </Link>

        <Link href="https://twitter.com/hubinclusivo">
          <FaTwitter size={30} className={styles.icon} />
        </Link>

        {/* <Image src={logoNouns} alt='HUB Inclusivo' className={styles.footerImage} /> */}
      </div>
    </footer>
  )
}
