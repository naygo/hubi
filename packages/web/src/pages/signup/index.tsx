// icone de triangulo para a direita
import { AiFillCaretRight } from 'react-icons/ai'
export default function SignUp() {
  return (
    <main className="flex flex-col h-screen w-screen">
      <div className="flex items-center gap-5">
        <div className="">
          <p>Etapa 1</p>
          <div className="bg-gray-darker h-1 rounded"></div>
        </div>
        <AiFillCaretRight size={10} fill="gray" />
        <div className="">
          <p>Etapa 2</p>
          <div className="bg-gray-darker h-1 rounded"></div>
        </div>
        <AiFillCaretRight size={10} fill="gray" />
        <div className="">
          <p>Etapa 3</p>
          <div className="bg-gray-darker h-1 rounded"></div>
        </div>
      </div>

      <section className="w-full">
        <h1>Crie sua conta na HUBI</h1>
        <p className="text-gray text-sm">
          O seu cadastro irá passar por um processo de verificação e pode
          demorar alguns instantes para ser aprovado.
        </p>
      </section>
      <section className="hidden md:block w-full">logo</section>
    </main>
  )
}
