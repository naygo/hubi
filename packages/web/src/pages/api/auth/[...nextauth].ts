import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
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
          name: 'Nayla',
          email: 'aaaa@email',
          password: '123',
        }

        if (
          credentials?.email === 'nayla@email' &&
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
