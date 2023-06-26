export interface UserData {
  id: string
  name: string
  email: string
  isAdmin: boolean
}

declare module 'next-auth' {
  interface Session {
    // what ever properties added, add type here
    user: UserData
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id_token?: string
    provider?: string
    accessToken?: string
    user: UserData
  }
}
