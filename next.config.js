/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables next export
  basePath: '/website', // replace with your repo name if deploying under username.github.io/website
  trailingSlash: true, // recommended for GitHub Pages
};

module.exports = nextConfig;