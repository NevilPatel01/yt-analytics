/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push(
        "crawlee",
        "puppeteer",
        "playwright",
        "puppeteer-core",
        "playwright-core"
      );
    }
    return config;
  },
};

export default nextConfig;
