import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Kwame A.',
    text: 'Joining BlueFins competitive team was the best decision for my swimming journey. The coaches push me to be my best every day!',
    role: 'NavyFins Swimmer',
    image: '/images/swimmer-testimonial-1.jpg',
  },
  {
    name: 'Ama B.',
    text: 'The team spirit and support at BlueFins is amazing. My child has grown so much in confidence and skill both in and out of the pool.',
    role: 'Parent of SkyFins Swimmer',
    image: '/images/parent-testimonial.jpg',
  },
  {
    name: 'Coach Linda',
    text: 'We focus on building not just fast swimmers, but great teammates and leaders. Proud to be part of BlueFins! The progress our swimmers make is incredible.',
    role: 'Head Coach',
    image: '/images/coach-testimonial.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-2">What Our Team Says</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700">Hear from our swimmers, parents, and coaches</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:translate-y-[-10px] transition-all duration-300">
              <div className="h-[200px] relative">
                <Image 
                  src={t.image}
                  alt={`${t.name}'s photo`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
              </div>
              
              <div className="p-8 relative">
                <svg className="absolute top-0 -mt-8 left-6 w-16 h-16 text-[var(--color-secondary)] opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4zm12 0c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4z"/>
                </svg>
                
                <div className="text-lg text-gray-700 mb-6 relative z-10">&ldquo;{t.text}&rdquo;</div>
                
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-[var(--color-primary-dark)]">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/testimonials" className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-semibold transition-colors duration-300">
            Read more testimonials
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}