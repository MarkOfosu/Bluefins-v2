// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Ghana BlueFins Swim Club | Premier Swimming Excellence',
  description: 'Ghana BlueFins is the leading swim club in Ghana offering world-class coaching, competitive swimming, and learn-to-swim programs for all ages and abilities.',
  keywords: ['swimming', 'Ghana', 'swim club', 'swim lessons', 'competitive swimming', 'swim team', 'Accra'],
  authors: [{ name: 'Ghana BlueFins Swim Club' }],
  creator: 'Ghana BlueFins',
  publisher: 'Ghana BlueFins',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ghanabluefins.com',
    title: 'Ghana BlueFins Swim Club | Premier Swimming Excellence',
    description: 'Ghana BlueFins is the leading swim club in Ghana offering world-class coaching, competitive swimming, and learn-to-swim programs for all ages and abilities.',
    siteName: 'Ghana BlueFins Swim Club',
    images: [
      {
        url: '/hero16.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ghana BlueFins Swim Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghana BlueFins Swim Club | Premier Swimming Excellence',
    description: 'Ghana BlueFins is the leading swim club in Ghana offering world-class coaching, competitive swimming, and learn-to-swim programs for all ages and abilities.',
    images: ['/hero16.jpeg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      {
        rel: 'mask-icon',
        url: '/android-chrome-192x192.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {/** Main content */}
        {/** Add padding to account for the fixed navbar */}
        <div className="pt-24">

        {children}
        <Toaster position="top-center" richColors closeButton />
        <Script 
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Footer />
        </div>
        <Script id="theme-toggle" strategy="lazyOnload">
          {`
            const themeToggle = document.getElementById('theme-toggle');
            const currentTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeToggle.addEventListener('click', () => {
              const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
              document.documentElement.setAttribute('data-theme', newTheme);
              localStorage.setItem('theme', newTheme);
            });
          `}
        </Script>
      </body>
    </html>
  );
}