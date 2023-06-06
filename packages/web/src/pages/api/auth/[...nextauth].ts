import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
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
        }

        if (
          credentials?.email === 'admin@email' &&
          credentials?.password === '123'
        ) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      return session
    },
  },
})
