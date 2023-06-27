/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'cdn.discordapp.com', 'media.discordapp.net'],
  },
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
}

module.exports = nextConfig
