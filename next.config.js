/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['framer-motion', '@heroicons/react'],
  },
};

module.exports = nextConfig;
