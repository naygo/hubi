import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/shared/components/form/input'
import { NavbarFooterLayout } from '@/shared/components/layout/navbar-footer'

export default function Admin() {
  const [statusFilter, setStatusFilter] = useState('')
  const { control } = useForm<any>({
    mode: 'onChange',
  })
  return (
    <NavbarFooterLayout>
      <header className="border-b bg-black-light border-black-lighter py-10 px-5">
        <h1 className="text-2xl lg:text-5xl font-bold text-yellow text-center">
          GERENCIAR MEMBROS
        </h1>
      </header>

      <main className="flex justify-center items-start">
        <div className="container flex flex-col justify-center items-center gap-5 lg:gap-10 py-6 px-4">
          <div className="flex flex-col md:flex-row justify-start md:justify-center items-center gap-2 text-xs w-full">
            <Input
              name="search"
              control={control}
              placeholder="Pesquisar membro"
            />

            <div className="flex gap-2">
              <button onClick={() => setStatusFilter('Aprovada')}>
                <Badge
                  type="Aprovada"
                  filter
                  active={statusFilter === 'Aprovada'}
                />
              </button>
              <button onClick={() => setStatusFilter('Pendente')}>
                <Badge
                  type="Pendente"
                  filter
                  active={statusFilter === 'Pendente'}
                />
              </button>
              <button onClick={() => setStatusFilter('Recusada')}>
                <Badge
                  type="Recusada"
                  filter
                  active={statusFilter === 'Recusada'}
                />
              </button>
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
                <tr className="bg-white border-b hover:bg-gray-light hover:cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    Mulher linda
                  </th>
                  <td className="px-6 py-4 text-center">
                    <Badge type="Aprovada" />
                  </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-light hover:cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    Mulher feia
                  </th>
                  <td className="px-6 py-4 text-center">
                    <Badge type="Pendente" />
                  </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-light hover:cursor-pointer">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Macho feio
                  </th>
                  <td className="px-6 py-4 text-center">
                    <Badge type="Recusada" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </NavbarFooterLayout>
  )
}

interface BadgeProps {
  type: 'Aprovada' | 'Recusada' | 'Pendente'
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
