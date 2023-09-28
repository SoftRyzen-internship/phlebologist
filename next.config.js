/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    deviceSizes: [480, 768, 1024, 1280, 1366, 1440, 1920, 2048],
    formats: ['image/webp'],
    domains: ['assets.tina.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
