import React from 'react';
import Image from 'next/image';

const philosophyPillars = [
  {
    title: "Technical Excellence",
    description: "Focus on proper technique across all four competitive strokes",
    icon: "🏊‍♂️",
    image: "/images/technical-training.jpg"
  },
  {
    title: "Mental Toughness",
    description: "Building resilience, focus, and competitive mindset",
    icon: "🧠",
    image: "/images/mental-training.jpg"
  },
  {
    title: "Team Spirit",
    description: "Supporting each other to achieve collective and individual goals",
    icon: "👥",
    image: "/images/team-spirit.jpg"
  }
];

export default function Philosophy() {
  return (
    <section className="my-20 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-4">Our Training Philosophy</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          At BlueFins, we believe in developing the whole athlete. Our training program is designed to foster technical excellence, mental toughness, and a lifelong love for swimming.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {philosophyPillars.map((pillar, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-48 w-full">
              <Image 
                src={pillar.image} 
                alt={pillar.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-3xl mb-2">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-[var(--color-primary-dark)] mb-2">{pillar.title}</h3>
              <p className="text-gray-700">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-xl p-8 shadow-lg text-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-lg mb-4">
              Our comprehensive approach ensures swimmers develop into well-rounded athletes prepared for competition at any level.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Progressive, age-appropriate training for all squads
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Emphasis on technique, efficiency, and race skills
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Balanced focus on endurance, speed, and strength
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-8 md:border-l border-white/30">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Supportive, team-oriented environment
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Goal setting and personal growth
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Fun, challenge, and sportsmanship
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Academic and athletic excellence
              </li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-6 py-2 rounded-lg transition-all duration-300">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 