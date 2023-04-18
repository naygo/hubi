import { FaDiscord, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/shared/components/Button'

import logo from '../shared/assets/img/LogoDarkBackground.svg'
// import logoNouns from '../shared/assets/img/LogoNouns.svg'

import styles from './styles.module.scss'

function openLinkTree() {
  window.open('https://linktr.ee/hub.inclusivo', '_blank')
}

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className={styles.leftBackground}></div>
      <div className={styles.rightBackground}></div>

      <div
        className={`flex flex-col justify-center items-center mt-28 gap-y-10`}
      >
        <h1 className={`text-9xl yellow`}>OLÁ!</h1>

        <div
          className="text-center my-8 flex flex-col gap-y-8"
          style={{ maxWidth: '40rem' }}
        >
          <p>
            Bem-vindo(a) a <b>HUB Inclusivo</b> de <b>VALORANT!</b>
          </p>
          <p>
            Somos uma comunidade dedicada a promover a competitividade e
            evolução das jogadoras do cenário inclusivo de VALORANT.
          </p>
          <p>
            Acreditamos na importância de proporcionar um ambiente amigável onde
            as mulheres cis, trans e pessoas não-binárias possam se sentir
            representadas e respeitadas.
          </p>
          <p>
            A missão da HUB é garantir um ambiente altamente competitivo,
            melhorando a descoberta, o desenvolvimento e a promoção de novos
            talentos no cenário inclusivo de VALORANT.
          </p>
        </div>

        <Button label="Saiba mais" outline onClick={openLinkTree} />
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
