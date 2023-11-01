/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adocaoimg.blob.core.windows.net',
      },
    ],
  },
};

module.exports = nextConfig;
