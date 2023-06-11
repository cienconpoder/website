/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  api: {
    externalResolver: true,
  },
}

module.exports = nextConfig
