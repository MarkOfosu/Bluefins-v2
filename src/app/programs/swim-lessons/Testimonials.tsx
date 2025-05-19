// TestimonialsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  // Sample testimonials data - in a real app, this would come from CMS or database
  const testimonials = [
    {
      name: "Jennifer Reynolds",
      initials: "JR",
      relation: "Parent of Tidepool student",
      quote: "My son was terrified of water before starting at BAC. Within just a few lessons, his instructor had him comfortable and even excited about swimming!"
    },
    {
      name: "Michael Chen",
      initials: "MC",
      relation: "Parent of Mini-Barracuda",
      quote: "The instructors are fantastic - patient, encouraging, and skilled. My daughter has improved tremendously and now loves the water."
    },
    {
      name: "Sarah Thompson",
      initials: "ST",
      relation: "Parent of private lesson student",
      quote: "The private lessons were worth every penny. Our instructor customized each session to address our child&apos;s specific needs and fears. Amazing progress!"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-[#0A3D73] sm:text-4xl text-center">What Parents Are Saying</h2>
        
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#0A3D73]/10 flex items-center justify-center text-[#0A3D73] font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}