import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

import { FaCogs, FaCopy } from 'react-icons/fa'

import { NavbarLayout } from '@/shared/components/layout/navbar'
import { Button } from '@/shared/components/ui/button'

import ProfileImage from '@public/img/bruce.png'
import Header from '@public/img/header.png'

export default function Match() {
  return (
    <NavbarLayout>
      <header className="flex justify-center gap-4 lg:gap-10 border-b border-black-lighter p-4 bg-black-light">
        <TeamTitleAndPhoto title="Team Tea" image={ProfileImage} />

        <div className="flex flex-col gap-2 text-center justify-center items-center">
          <span className="font-bold lg:text-xl whitespace-nowrap">
            EM ANDAMENTO
          </span>
          <div className="flex gap-2 lg:gap-4 items-center bg-black rounded-lg p-2 lg:p-4">
            <Scoreboard score={13} winner />
            <strong>-</strong>
            <Scoreboard score={10} />
          </div>
        </div>

        <TeamTitleAndPhoto title="Team Nayla" image={ProfileImage} reverse />
      </header>

      <div className="flex justify-between mt-4 lg:m-0">
        <div className="w-full flex justify-center px-4">
          <div className="container">
            <div className="flex">
              <section>
                <div className="lg:hidden text-center">
                  <Map map="LOTUS" />

                  <Button
                    label="Dar Resultado"
                    color="primary"
                    className="mt-3"
                  />

                  <FaCogs size={30} className="fill-gray-dark mt-5" />
                </div>

                <section className="my-5 flex justify-between gap-5 lg:gap-10">
                  <div className="flex flex-col gap-2 w-full">
                    <MemberCard riotId="Bruce#123" image={ProfileImage} />
                    <MemberCard riotId="Bruce#123" image={ProfileImage} />
                    <MemberCard riotId="Bruce#123" image={ProfileImage} />
                    <MemberCard riotId="Bruce#123" image={ProfileImage} />
                    <MemberCard riotId="Bruce#123" image={ProfileImage} />
                  </div>

                  <div className="hidden lg:block text-center">
                    <Map map="LOTUS" />
                    <Button
                      label="Dar Resultado"
                      color="primary"
                      className="mt-5"
                    />
                    {/* <div className="flex justify-center">
                      <FaCogs
                        size={40}
                        className="fill-white mt-5 bg-red-700 p-2 rounded-full cursor-pointer hover:bg-red-900"
                      />
                    </div> */}
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <MemberCard
                      riotId="Bruce#123"
                      image={ProfileImage}
                      reverse
                    />
                    <MemberCard
                      riotId="Bruce#123"
                      image={ProfileImage}
                      reverse
                    />
                    <MemberCard
                      riotId="Bruce#123"
                      image={ProfileImage}
                      reverse
                    />
                    <MemberCard
                      riotId="Bruce#123"
                      image={ProfileImage}
                      reverse
                    />
                    <MemberCard
                      riotId="Bruce#123"
                      image={ProfileImage}
                      reverse
                    />
                  </div>
                </section>
              </section>
            </div>
            <section className="">
              <Image src={Header} alt="Header" className="w-full" />
            </section>
          </div>
        </div>
      </div>
    </NavbarLayout>
  )
}

function Scoreboard({ score, winner }: { score: number; winner?: boolean }) {
  return (
    <strong
      className={clsx('text-yellow text-2xl lg:text-4xl', {
        'text-green-600': winner,
      })}
    >
      {score}
    </strong>
  )
}

function TeamTitleAndPhoto({
  title,
  image,
  reverse,
}: {
  title: string
  image: StaticImageData
  reverse?: boolean
}) {
  return (
    <div
      className={clsx('flex flex-col text-center items-center gap-2 lg:gap-4', {
        'lg:flex-row ': !reverse,
        'lg:flex-row-reverse': reverse,
      })}
    >
      <Image src={image} alt="Profile" className="rounded-full lg:w-20" />
      <span className="text-sm lg:text-2xl text-gray">{title}</span>
    </div>
  )
}

function MemberCard({
  riotId,
  image,
  reverse,
}: {
  riotId: string
  image: StaticImageData
  reverse?: boolean
}) {
  const nickname = riotId.split('#')[0]
  const tag = riotId.split('#')[1]
  return (
    <div
      className={clsx(
        'bg-black-light rounded p-2 lg:p-4 cursor-pointer lg:flex lg:items-center lg:justify-between',
        {
          'lg:flex-row': !reverse,
          'lg:flex-row-reverse': reverse,
        },
      )}
    >
      <div
        className={clsx('flex flex-col gap-1 lg:gap-4 items-center', {
          'lg:flex-row': !reverse,
          'lg:flex-row-reverse': reverse,
        })}
      >
        <Image src={image} alt={riotId} className="rounded-full w-10" />
        <span className="text-sm lg:text-lg">
          {nickname}
          <span className="text-gray">#{tag}</span>
        </span>
      </div>

      <FaCopy
        size={30}
        className={clsx(
          'hidden lg:block text-xs cursor-pointer fill-gray-dark hover:fill-white hover:bg-yellow bg-black-lighter rounded-full p-2',
          { 'ml-16': !reverse, 'mr-16': reverse },
        )}
      />
    </div>
  )
}

function Map({ map }: { map: string }) {
  return (
    <section className="text-center font-bold">
      <Image src={Header} alt="Header" className="w-[3000px] h-[150px]" />
      <span className="text-gray">
        MAPA: <span>{map}</span>
      </span>
    </section>
  )
}
