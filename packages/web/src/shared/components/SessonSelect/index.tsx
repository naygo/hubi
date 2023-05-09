import React from 'react'

export interface SeasonSelectProps {
  options: {
    value: string
    label: string
  }[]
  selected: string
  handleSelectChange: (event: any) => void
}

export const SeasonSelect = ({
  options,
  selected,
  handleSelectChange,
}: SeasonSelectProps) => {
  return (
    <>
      <select
        id="seasons"
        className="bg-silver border-4 border-solid border-yellow text-gray-900 h-12h block w-full px-4 py-2 rounded-3xl"
        value={selected}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}
