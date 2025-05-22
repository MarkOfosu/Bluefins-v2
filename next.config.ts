// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
        'secondary': 'var(--color-secondary)',  
        'secondary-dark': 'var(--color-secondary-dark)',
        'secondary-light': 'var(--color-secondary-light)',
        'navy': 'var(--color-primary-dark)',
        'royal-blue': 'var(--color-primary)',
        'gold': 'var(--color-secondary)',
        'light-gold': 'var(--color-secondary-light)',
      },
    },
  },
  plugins: [],
};

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
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
