import Head from 'next/head'

import { SignUpForm } from '@/screens/signup/form'
import { AuthCard } from '@/shared/components/ui/auth-card'

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Cadastro | HUBI</title>
      </Head>

      <AuthCard>
        <SignUpForm />
      </AuthCard>
    </>
  )
}
