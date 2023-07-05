import Head from 'next/head'

import { LoginForm } from '@/screens/login/form'
import { CenteredLayout } from '@/shared/components/layout/centered'
import { AuthCard } from '@/shared/components/ui/auth-card'

export default function Login() {
  return (
    <CenteredLayout>
      <Head>
        <title>Login | HUBI</title>
      </Head>

      <AuthCard>
        <LoginForm />
      </AuthCard>
    </CenteredLayout>
  )
}
