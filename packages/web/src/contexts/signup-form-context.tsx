import axios from 'axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface Option {
  id: number
  name: string
}

export interface SignupFormContextOptions {
  genders: Option[]
  pronouns: Option[]
  ranks: Option[]
}

export const SignupFormContext = createContext<SignupFormContextOptions>(
  {} as SignupFormContextOptions,
)

interface Props {
  children: ReactNode
}

export function SignupFormProvider({ children }: Props) {
  const [genders, setGenders] = useState([])
  const [pronouns, setPronouns] = useState([])
  const [ranks, setRanks] = useState([])

  useEffect(() => {
    async function fetchDropdownOptions() {
      const [gendersResponse, pronounsResponse, ranksResponse] =
        await Promise.all([
          axios.get(`${process.env.API_URL}/genders`),
          axios.get(`${process.env.API_URL}/pronouns`),
          axios.get(`${process.env.API_URL}/ranks`),
        ])

      setGenders(gendersResponse.data)
      setPronouns(pronounsResponse.data)
      setRanks(ranksResponse.data)
    }

    fetchDropdownOptions()
  }, [])

  return (
    <SignupFormContext.Provider value={{ genders, pronouns, ranks }}>
      {children}
    </SignupFormContext.Provider>
  )
}
