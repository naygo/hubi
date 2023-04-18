import { Button } from '@/shared/components/Button'
import Image from 'next/image'

import styles from './styles.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.header}></div>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="text-center max-w-lg">
          <h1 className={styles.title}>OLÁ!</h1>
          <p className="mt-4">
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
      </div>
      <footer></footer>
    </div>
  )
}
