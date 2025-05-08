// src/app/components/Hero.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Images for the slideshow
  const slides = [
    {
      id: 1,
      src: '/images/image11.jpg',
      alt: 'Competitive swimmers racing'
    },
    {
      id: 2,
      src: '/images/image9.jpg', 
      alt: 'Swimming lesson with kids'
    },
    {
      id: 3,
      src: '/images/image6.jpg', 
      alt: 'Underwater swimming technique'
    },
    {
      id: 4,
      src: '/images/image2.jpg', 
      alt: 'Professional swimmer in competition'
    }
  ];
  
  useEffect(() => {
    // Start slideshow once video has ended
    if (videoEnded) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      
      return () => clearInterval(slideInterval);
    }
  }, [videoEnded, slides.length]);

  useEffect(() => {
    // Make content visible with animation
    setIsVisible(true);
    
    // Set up video ended event listener
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', () => setVideoEnded(true));
      
      return () => {
        videoElement.removeEventListener('ended', () => setVideoEnded(true));
      };
    }
  }, []);
  
  // Function to handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Create bubbles for animation effect
  const renderBubbles = () => {
    const bubbles: React.ReactElement[] = [];
    
    // Using fixed values to avoid hydration errors
    const bubbleProps = [
      { size: 40, left: 15, duration: 22, delay: 2 },
      { size: 60, left: 35, duration: 18, delay: 1 },
      { size: 50, left: 50, duration: 20, delay: 0.5 },
      { size: 45, left: 65, duration: 23, delay: 3 },
      { size: 55, left: 80, duration: 19, delay: 2.5 },
      { size: 35, left: 25, duration: 21, delay: 1.8 },
      { size: 65, left: 70, duration: 24, delay: 0.8 },
      { size: 48, left: 45, duration: 19, delay: 2.2 },
      { size: 58, left: 90, duration: 20, delay: 1.5 },
      { size: 38, left: 5, duration: 22, delay: 3.2 }
    ];
    
    bubbleProps.forEach((prop, i) => {
      bubbles.push(
        <div 
          key={i}
          className="bubble"
          style={{
            '--size': `${prop.size}px`,
            '--left': `${prop.left}%`,
            '--animDuration': `${prop.duration}s`,
            '--animDelay': `${prop.delay}s`,
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 255, 255, 0.4))',
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.3)'
          } as React.CSSProperties}
        />
      );
    });
    
    return bubbles;
  };
  
  return (
    <div className="relative h-screen overflow-hidden bg-[#0A1738]">
      {/* Video that plays first */}
      {!videoEnded && (
        <div className="absolute inset-0 z-10">
          <video 
            ref={videoRef}
            className="object-cover w-full h-full"
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/herovid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738]/90 via-[#0A1738]/70 to-[#0A1738]/50"></div>
        </div>
      )}
      
      {/* Slideshow that appears after video ends */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${videoEnded ? 'opacity-100' : 'opacity-0'}`}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 slide-transition ${
              currentSlide === index ? 'slide-active' : 'slide-inactive'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738]/90 via-[#0A1738]/80 to-[#0A1738]/70"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
                aria-label={slide.alt}
              ></div>
            </div>
          </div>
        ))}
        
        {/* Bubbles animation for underwater effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {renderBubbles()}
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#FFD700] w-8 border border-white' : 'bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className={`w-full max-w-2xl ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="tracking-tight">
              <span className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl text-white block text-reveal delay-100" style={{textShadow: '0 2px 4px rgba(0,0,0,0.7)'}}>
                Empowering the
              </span>
              <span className="font-serif italic font-normal text-6xl md:text-7xl lg:text-8xl text-[#FFD700] block text-reveal delay-200" style={{textShadow: '0 2px 6px rgba(0,0,0,0.7)'}}>
                Next Generation
              </span>
            </div>
            <p className="mt-6 font-sans text-xl md:text-2xl font-medium leading-7 text-white text-opacity-100 max-w-lg text-reveal delay-300 bg-[#0A1738]/60 p-4 rounded-lg border-l-4 border-[#FFD700] shadow-lg">
              Bubbles don&apos;t lie. Join our club and dive into a world of aquatic excellence, where champions are made and water safety is paramount.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 text-reveal delay-400">
              <Link
                href="/register"
                className="inline-flex items-center justify-center bg-[#FFD700] text-[#0A1738] font-bold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all border-2 border-[#E5B100] hover:bg-[#E5B100]"
              >
                Register Now
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center border-2 border-[#FFD700] text-[#FFD700] rounded-full px-6 py-3 shadow-md hover:shadow-lg hover:bg-[#FFD700]/10 transition-all"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                </svg>
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;