import Head from 'next/head'

import { LoginForm } from '@/screens/login/form'
import { AuthCard } from '@/shared/components/ui/auth-card'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | HUBI</title>
      </Head>

      <AuthCard>
        <LoginForm />
      </AuthCard>
    </>
  )
}
