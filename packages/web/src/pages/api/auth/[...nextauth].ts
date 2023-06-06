import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log('credentials', credentials)
        // const res = await fetch('/api/auth/signin', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(credentials),
        // })

        // const user = await res.json()
        const user = {
          id: '12345',
          name: 'Admin',
          email: 'admin@email',
          password: '123',
          isAdmin: true,
        }

        if (
          credentials?.email === 'admin@email' &&
          credentials?.password === '123'
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },
    async session({ session, token }) {
      session.user = token.user as any // TODO TIPAR ISSO
      return session
    },
  },
})
