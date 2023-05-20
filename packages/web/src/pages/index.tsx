import Link from 'next/link'

import { TiArrowSortedDown } from 'react-icons/ti'

import { styles } from '@/styles/classes'
import { yellowDefault } from '@/styles/colors'

export default function Home() {
  const heightFirstSection = 'calc(100vh - 71px)'

  return (
    <main className="grow flex justify-center">
      <div className="container">
        <section
          className="p-4 flex items-center justify-center w-full"
          style={{
            height: heightFirstSection,
          }}
        >
          <div className="flex flex-col items-center justify-between h-64 md:h-1/2">
            <h1 className="text-5xl md:text-8xl md:w-2/4 font-bold text-center">
              Mais do que ranqueadas
            </h1>

            <div>
              <TiArrowSortedDown
                className="text-2xl animate-bounce"
                fill={yellowDefault}
                size={80}
              />
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center p-4 md:px-10">
          <div className="flex flex-col items-center md:items-start gap-5 mb-10 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold md:w-96">
              Local de aprendizado
            </h1>
            <p className="text-base w-96 md:text-2xl md:w-7/12 text-gray-light">
              Aprenda, evolua e melhore o seu potencial dentro de uma comunidade
              dedicada e acolhedora.
            </p>
            <Link href="/playground">
              <span className={`${styles.link} text-sm md:text-lg`}>
                Veja o que dizer as jogadoras &gt;
              </span>
            </Link>
          </div>

          <div>
            <p>imagem</p>
          </div>
        </section>

        {/* section 3 */}
        <section className="min-h-screen ">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Premiações</h1>
            <p></p>
          </div>
        </section>

        <section>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">HUBI x NOUNS</h1>
            <p></p>
          </div>
        </section>

        <section className="min-h-screen ">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Equipe</h1>
            <p></p>
          </div>
        </section>
      </div>
    </main>
  )
}
