import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import { IoCaretDownSharp } from 'react-icons/io5'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

export function DropDown() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className="
      w-full 
      border 
      bg-black-light 
      border-black-light 
      text-white font-light 
      outline-none rounded-lg 
      p-1.5 
      hover:border-yellow 
      focus:border-yellow 
      focus:ring-2 
      focus:ring-yellow 
      focus:ring-opacity-20
      ui-open:ring-2
      ui-open:border-yellow
      ui-open:ring-yellow
      "
    >
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="w-full text-start px-2 py-1 flex items-center justify-between bg-black-light">
          {selectedPerson.name} 
          <IoCaretDownSharp className="bg-black-light" />
        </Listbox.Button>
        <Listbox.Options className="bg-black-light" >
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              onChange={(e) => console.log(e)}
              className="hover:bg-yellow px-2 py-1 rounded cursor-pointer bg-black-light"
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
