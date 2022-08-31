/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/tb',
        destination: 'https://colab.research.google.com/drive/12VqckbknHgDa49ruynSOPZV1p1tCYnDf?usp=sharing',
        permanent: true,
      },
    ]
  },
}