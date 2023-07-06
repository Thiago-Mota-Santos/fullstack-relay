// ** @type {import('next').NextConfig} */

// module.exports = {
//   reactStrictMode: true,
// }

const nextConfig = {
  reactStrictMode: true,
  swcMinity: true,
  compiler: {
    relay: {
      src: './',
      language: 'typescript',
      artifactDirectory: '__generated__',
    },
  },
  experimental: { appDir: true },
}

module.exports = nextConfig
