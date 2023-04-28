/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: 'http://localhost:3030/',
  },
}

module.exports = nextConfig
