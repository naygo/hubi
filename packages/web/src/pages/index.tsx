import { FaDiscord, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/shared/components/Button'

import header from '../shared/assets/img/header.png'
import logo from '../shared/assets/img/LogoDarkBackground.svg'
// import logoNouns from '../shared/assets/img/LogoNouns.svg'

import styles from './styles.module.scss'

function openLinkTree() {
  window.open('https://linktr.ee/hub.inclusivo', '_blank')
}

export default function Home() {
  return (
    <div className="h-full">
      <header className={styles.header}>
        <Image
          src={header}
          alt="HUB Inclusivo"
          className={styles.headerImage}
        />
      </header>

      <div className={styles.leftBackground}></div>
      <div className={styles.rightBackground}></div>

      <div
        className={`flex flex-col justify-center items-center mt-16 my-16 ${styles.container}`}
      >
        <div className="text-center max-w-xl my-8">
          <h1 className={`text-8xl yellow`}>OLÁ!</h1>
          <p className="my-8">
            Bem-vindo(a) a <b>HUB Inclusivo</b> de <b>VALORANT!</b>
          </p>
          <p className="mt-4">
            Somos uma comunidade dedicada a promover a competitividade e
            evolução das jogadoras do cenário inclusivo de VALORANT.
          </p>
          <p className="mt-4">
            Acreditamos na importância de proporcionar um ambiente amigável onde
            as mulheres cis, trans e pessoas não-binárias possam se sentir
            representadas e respeitadas.
          </p>
          <p className="mt-4">
            A missão da HUB é garantir um ambiente altamente competitivo,
            melhorando a descoberta, o desenvolvimento e a promoção de novos
            talentos no cenário inclusivo de VALORANT.
          </p>
        </div>

        <div>
          <Button label="Saiba mais" outline onClick={openLinkTree} />
        </div>
      </div>

      <footer className="flex justify-between items-center px-10">
        <Image src={logo} alt="HUB Inclusivo" className={styles.footerImage} />

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
    </div>
  )
}
