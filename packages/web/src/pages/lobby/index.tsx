import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

export default function Lobby() {
  return <h1>Lobby</h1>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  console.log('------------ Lobby ---------------')
  console.log(session)
  console.log('------------------------------')
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
