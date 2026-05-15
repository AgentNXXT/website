/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Agent-Site',
  assetPrefix: '/Agent-Site/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
