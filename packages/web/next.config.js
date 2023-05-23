/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: 'http://localhost:3030',
  },
}

module.exports = nextConfig
