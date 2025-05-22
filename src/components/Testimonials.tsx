// src/app/components/Testimonials.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const Testimonial = ({ quote, name, title, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 relative border-l-4 border-secondary hover:border-l-8 transition-all duration-300 group">
      <div className="absolute -top-6 left-8 text-secondary text-7xl opacity-50 group-hover:opacity-70 transition-opacity">&ldquo;</div>
      <div className="pt-4 relative">
        <span className="absolute top-0 right-0 text-primary-dark/5 text-9xl font-serif">&rdquo;</span>
        <p className="text-gray-700 mb-8 relative z-10 italic">{quote}</p>
        <div className="flex items-center">
          <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 border-2 border-secondary shadow-md overflow-hidden">
            {image ? (
              <Image 
                src={image} 
                alt={`Photo of ${name}`}
                fill
                sizes="56px"
                className="object-cover rounded-full"
              />
            ) : (
              <span className="text-xl">{name.charAt(0)}</span>
            )}
          </div>
          <div>
            <h4 className="font-bold text-primary-dark text-lg">{name}</h4>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-700"></div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials = [
    {
      id: "t1",
      quote: "Ghana BlueFins has transformed my children&apos;s confidence in the water. The coaches are exceptional and create a supportive environment where kids can thrive and develop their swimming skills.",
      name: "Sarah Mensah",
      title: "Parent of 2 swimmers"
    },
    {
      id: "t2",
      quote: "As a former competitive swimmer, I&apos;m impressed by the technical training at BlueFins. The coaches focus on proper technique first, which is crucial for long-term development and injury prevention.",
      name: "David Agyeman",
      title: "Masters Team Member"
    },
    {
      id: "t3",
      quote: "Joining the BlueFins Masters program has been one of the best decisions I&apos;ve made for my health. It&apos;s challenging, social, and the coaching is personalized to help me improve.",
      name: "Grace Osei",
      title: "Adult Swimmer"
    },
    {
      id: "t4",
      quote: "My son couldn&apos;t swim at all when we started, and now he&apos;s competing! The progress has been amazing, and it&apos;s all due to the patient, methodical teaching approach of the BlueFins coaches.",
      name: "Michael Darko",
      title: "Parent of competitive swimmer"
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary/5 -translate-x-1/3 -translate-y-1/3 backdrop-blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-dark/5 translate-x-1/3 translate-y-1/3 backdrop-blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-secondary font-bold uppercase tracking-wider mb-3">What Our Swimmers Say</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-dark relative inline-block">
            Testimonials
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary transform scale-x-75 mx-auto"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-6">
            Don&apos;t just take our word for it. Hear from our community of swimmers and parents about their experiences with Ghana BlueFins.
          </p>
        </div>
        
        {/* Mobile Testimonials (Carousel) */}
        <div className="md:hidden">
          <div className="relative px-4 pb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <Testimonial
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </div>
            ))}
            
            {/* Carousel indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-secondary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Desktop Testimonials (Grid) */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#0A1738] mb-4">Ready to Join Our Swimming Family?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Experience the benefits of professional swimming instruction in a supportive and encouraging environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/register" 
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1738] font-bold py-3 px-6 rounded-lg transition-colors inline-block shadow-md"
            >
              Register Now
            </a>
            <a 
              href="/contact" 
              className="bg-[#0A1738] hover:bg-[#0A1738]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;