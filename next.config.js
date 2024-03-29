/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // images: {
    //     allowFutureImage: true,
    // },
},
  swcMinify: true,
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
}

module.exports = nextConfig
