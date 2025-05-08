// src/app/components/Testimonials.tsx
'use client';

import { useState, useEffect } from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const Testimonial = ({ quote, name, title, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 relative border-l-4 border-[#FFD700]">
      <div className="absolute -top-5 left-8 text-[#FFD700] text-6xl">&ldquo;</div>
      <div className="pt-4">
        <p className="text-gray-700 mb-6 relative z-10">{quote}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-[#0A1738] rounded-full flex items-center justify-center text-white font-bold mr-4">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div>
            <h4 className="font-bold text-[#0A1738]">{name}</h4>
            <p className="text-gray-600 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Ghana BlueFins has transformed my children's confidence in the water. The coaches are exceptional and create a supportive environment where kids can thrive and develop their swimming skills.",
      name: "Sarah Mensah",
      title: "Parent of 2 swimmers"
    },
    {
      quote: "As a former competitive swimmer, I'm impressed by the technical training at BlueFins. The coaches focus on proper technique first, which is crucial for long-term development and injury prevention.",
      name: "David Agyeman",
      title: "Masters Team Member"
    },
    {
      quote: "Joining the BlueFins Masters program has been one of the best decisions I've made for my health. It's challenging, social, and the coaching is personalized to help me improve.",
      name: "Grace Osei",
      title: "Adult Swimmer"
    },
    {
      quote: "My son couldn't swim at all when we started, and now he's competing! The progress has been amazing, and it's all due to the patient, methodical teaching approach of the BlueFins coaches.",
      name: "Michael Darko",
      title: "Parent of competitive swimmer"
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#FFD700]/5 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#0A1738]/5 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#FFD700] font-bold uppercase tracking-wider mb-2">What Our Swimmers Say</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1738]">Testimonials</h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don&apos;t just take our word for it. Hear from our community of swimmers and parents about their experiences with Ghana BlueFins.
          </p>
        </div>
        
        {/* Mobile Testimonials (Carousel) */}
        <div className="md:hidden">
          <div className="relative px-4 pb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
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
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[#FFD700] w-6' : 'bg-gray-300'
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