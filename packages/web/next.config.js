/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig
