// src/components/AboutSection.tsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about-section" className="bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-2">
              About Ghana <span className="text-secondary">BlueFins</span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Ghana&apos;s premier swimming club dedicated to excellence in water safety, competitive swimming, and athlete development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={isVisible ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <Image 
              src="/hero16.jpeg" 
              alt="BlueFins Swim Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-secondary rounded-lg -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={isVisible ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center mb-6">
              <div className="w-8 h-1 bg-secondary rounded-full"></div>
              <h2 className="text-3xl font-bold text-primary-dark ml-3">Our Mission</h2>
            </div>
            <p className="text-gray-700 mb-6">
              At Ghana BlueFins, our mission is to provide high-quality swimming instruction and competitive opportunities for swimmers of all ages and abilities. We are committed to developing not just swimmers, but well-rounded individuals who carry the values of discipline, teamwork, and perseverance into all aspects of their lives.
            </p>
            <p className="text-gray-700 mb-8">
              We strive to make swimming accessible to all Ghanaians by offering programs at multiple locations and providing scholarships to talented swimmers who might not otherwise have access to professional coaching.
            </p>
            <div className="flex justify-start">
              <a href="/programs" className="inline-flex items-center px-6 py-3 bg-primary-dark hover:bg-primary text-white font-medium rounded-md transition-colors duration-300 shadow-md hover:shadow-lg group">
                Our Programs
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {['Excellence', 'Community', 'Development'].map((value, i) => (
            <motion.div 
              key={value}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInVariants}
              className="bg-primary-dark rounded-lg p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full -mr-10 -mt-10 transform group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-2xl font-bold mb-4 text-secondary relative">{value}</h3>
              <p className="relative">
                {value === 'Excellence' && (
                  "We pursue excellence in all aspects of our programs, from the quality of our coaching to the standards we expect from our swimmers. We believe in setting high goals and working diligently to achieve them."
                )}
                {value === 'Community' && (
                  "The BlueFins family extends beyond the pool. We foster a supportive community where swimmers encourage each other, parents are engaged, and everyone contributes to a positive environment."
                )}
                {value === 'Development' && (
                  "We focus on the holistic development of our swimmers, emphasizing not just technical skills and physical fitness, but also mental toughness, sportsmanship, and leadership qualities."
                )}
              </p>
              <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-white rounded-lg p-10 md:p-16 shadow-xl border-t-4 border-secondary max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-10 relative">
            <span className="relative z-10">By the Numbers</span>
            <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-5xl text-secondary/10 font-bold">BLUEFINS</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { number: '250+', label: 'Active Swimmers' },
              { number: '12', label: 'Professional Coaches' },
              { number: '2', label: 'Training Locations' },
              { number: '8', label: 'Years of Excellence' }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                custom={i}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInVariants}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-primary text-5xl font-bold mb-2">{item.number}</div>
                <div className="text-gray-700 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;