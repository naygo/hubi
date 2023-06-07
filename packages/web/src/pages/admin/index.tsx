import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@/shared/components/form/input'

export default function Admin() {
  const [statusFilter, setStatusFilter] = useState('')
  const { control } = useForm<any>({
    mode: 'onChange',
  })
  return (
    <main className="flex flex-col justify-center items-center gap-5 py-6 px-4">
      <h1 className="text-2xl font-bold text-yellow">GERENCIAR MEMBROS</h1>
      <div className="flex flex-col justify-start items-center gap-2 text-xs w-full">
        <div>
          <Input
            name="search"
            control={control}
            placeholder="Pesquisar membro"
          />
        </div>

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
          <thead className="text-xs uppercase bg-black-lighter">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nome
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                Mulher linda
              </th>
              <td className="px-6 py-4">
                <Badge type="Aprovada" />
              </td>
            </tr>

            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                Mulher feia
              </th>
              <td className="px-6 py-4">
                <Badge type="Pendente" />
              </td>
            </tr>

            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Macho feio
              </th>
              <td className="px-6 py-4">
                <Badge type="Recusada" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
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
        'inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium',
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
