import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

import { IconType } from 'react-icons'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Input } from '@/shared/components/form/input'
import { NavbarLayout } from '@/shared/components/layout/navbar'
import { Button } from '@/shared/components/ui/button'
import { HeaderTitlePage } from '@/shared/components/ui/header-title-page'

interface Records {
  name: string
  status: BadgeType
  date: string
}

const filterBadges: BadgeType[] = ['Aprovada', 'Pendente', 'Recusada']
const records: Records[] = [
  {
    name: 'Mulher bonita',
    status: 'Aprovada',
    date: '01/01/2001',
  },
  {
    name: 'Mulher bonita',
    status: 'Pendente',
    date: '01/01/2001',
  },
  {
    name: 'Mulher bonita',
    status: 'Recusada',
    date: '01/01/2001',
  },
]

export default function Admin() {
  const [statusFilter, setStatusFilter] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  const { control } = useForm<any>({
    mode: 'onChange',
  })
  return (
    <NavbarLayout>
      <Head>
        <title>Administração | HUBI</title>
      </Head>
      <HeaderTitlePage
        title="Administração"
        description="Gerenciamento de cadastros."
      />

      <main className="flex justify-center items-start">
        <div className="container flex flex-col justify-center items-center gap-5 lg:gap-10 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-start md:justify-center items-center gap-2 text-xs w-full">
            <Input
              name="search"
              control={control}
              placeholder="Pesquisar membro"
            />

            <div className="flex gap-2">
              {filterBadges.map((badge) => (
                <button key={badge} onClick={() => setStatusFilter(badge)}>
                  <Badge type={badge} filter active={statusFilter === badge} />
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-auto w-full rounded">
            <table className="text-md text-left w-full rounded">
              <thead className="text-xs lg:text-base uppercase bg-black-lighter">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nome
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Data de envio
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-lg">
                {records.map((record) => (
                  <TableRow
                    key={record.name}
                    name={record.name}
                    status={record.status}
                    date={record.date}
                    onClick={() => {
                      setIsOpen(true)
                    }}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <RecordDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavbarLayout>
  )
}

type BadgeType = 'Aprovada' | 'Recusada' | 'Pendente'

interface BadgeProps {
  type: BadgeType
  filter?: boolean
  active?: boolean
}

function Badge({ type, filter, active }: BadgeProps) {
  const colors: { [key: string]: string } = {
    aprovada: 'bg-green-500',
    recusada: 'bg-red-500',
    pendente: 'bg-yellow-500',
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs lg:text-sm font-medium',
        {
          [`${colors[type.toLowerCase()]} text-black`]: !filter,
          'text-white border border-yellow': filter && !active,
          'border border-transparent bg-yellow text-black': filter && active,
        },
      )}
    >
      {type}
    </span>
  )
}

interface TableRowProps {
  name: string
  status: BadgeType
  date: string
  onClick: () => void
}

function TableRow({ name, status, date, onClick }: TableRowProps) {
  return (
    <tr
      onClick={() => onClick()}
      className="border-b last:border-b-0 border-black-lighter hover:bg-black-lighter hover:cursor-pointer"
    >
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {name}
      </th>
      <td className="text-center">
        <span className="">{date}</span>
      </td>
      <td className="text-center">
        <Badge type={status} />
      </td>
    </tr>
  )
}

interface DialogProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onClose?: () => void
}

function RecordDialog({ isOpen, setIsOpen }: DialogProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black-dark bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black-light text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold bg-black border-b border-black-lighter text-white p-4"
                  >
                    Naylinha Gomes
                  </Dialog.Title>
                  <div className="px-6 py-4">
                    <div className="flex gap-5">
                      <SocialMediaButton icon={FaTwitter} />
                      <SocialMediaButton icon={FaInstagram} />
                      <SocialMediaButton icon={FaDiscord} />
                    </div>

                    <div className="mt-4">
                      <label className="text-gray">Outras redes sociais:</label>
                      <Link href={'/'} className="">
                        <p className="text-yellow underline">@naylinha</p>
                      </Link>
                    </div>
                  </div>

                  <div className="bg-black p-4 border-t border-black-lighter flex gap-5">
                    <Button
                      onClick={() => setIsOpen(false)}
                      label="Voltar"
                      color="link"
                      className="w-full"
                    />
                    <Button
                      onClick={() => setIsOpen(false)}
                      label="Recusar"
                      color="danger-outline"
                      className="w-full  ml-10"
                    />
                    <Button
                      onClick={() => setIsOpen(false)}
                      label="Aprovar"
                      color="secondary"
                      className="w-full"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

function SocialMediaButton({ icon: Icon }: { icon: IconType }) {
  return (
    <Icon
      className="rounded bg-black-lighter p-2 hover:bg-yellow cursor-pointer"
      size={50}
    />
  )
}
