import clsx from 'clsx'
import Head from 'next/head'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/shared/components/form/input'
import { NavbarFooterLayout } from '@/shared/components/layout/navbar-footer'
import { HeaderTitlePage } from '@/shared/components/ui/header-title-page'

const filterBadges: BadgeType[] = ['Aprovada', 'Pendente', 'Recusada']

export default function Admin() {
  const [statusFilter, setStatusFilter] = useState('')
  const { control } = useForm<any>({
    mode: 'onChange',
  })
  return (
    <NavbarFooterLayout>
      <Head>
        <title>Administração | HUBI</title>
      </Head>
      <HeaderTitlePage
        title="Administração"
        description="Gerenciamento de membros e de cadastros em andamento."
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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-lg">
                <TableRow name="Mulher bonita" status="Aprovada" />
                <TableRow name="Mulher bonita" status="Pendente" />
                <TableRow name="Mulher bonita" status="Recusada" />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </NavbarFooterLayout>
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
}

function TableRow({ name, status }: TableRowProps) {
  return (
    <tr className="bg-white border-b hover:bg-gray-light hover:cursor-pointer">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-black whitespace-nowrap"
      >
        {name}
      </th>
      <td className="px-6 py-4 text-center">
        <Badge type={status} />
      </td>
    </tr>
  )
}
