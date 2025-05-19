import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative text-white min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with animation */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/competitive-team-hero.jpg"
            alt="BlueFins Competitive Swimmers"
            fill
            className="object-cover animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,120,212,0.85)] to-[rgba(0,90,158,0.7)]"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          BlueFins <span className="text-[var(--color-secondary)]">Competitive</span> Swim Team
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow font-medium">
          Excellence through dedication, discipline, and teamwork. Join Ghana&apos;s premier swim team and reach your full potential in and out of the pool.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
          <a 
            href="#schedule" 
            className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-8 py-4 rounded-lg shadow-lg transform transition-all hover:scale-105 duration-300"
          >
            View Schedule
          </a>
          <a 
            href="/register" 
            className="bg-white hover:bg-gray-100 text-[var(--color-primary-dark)] font-bold px-8 py-4 rounded-lg shadow-lg transform transition-all hover:scale-105 duration-300 border-2 border-white"
          >
            Join the Team
          </a>
        </div>
      </div>
    </section>
  );
} 