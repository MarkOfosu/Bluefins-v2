/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['framer-motion', '@heroicons/react'],
  },
  // Ignore TypeScript errors during production build
  typescript: {
    // !! WARN !!
    // Ignoring TypeScript errors can be dangerous in production!
    // Only use this for temporary fixes
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during production build
  eslint: {
    // !! WARN !!
    // Ignoring ESLint errors can lead to code quality issues!
    // Only use this for temporary fixes
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
