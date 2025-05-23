// filepath: /Users/mark/Desktop/bluefins-new/bluefins-v2/src/app/competitive/team/page.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './gallery.css';

// Helper functions to fix linting errors
const getCategoryTitle = (category: string): string => {
  if (category === 'teamBuilding') return 'Team Building';
  if (category === 'all') return 'All Photos';
  return category.charAt(0).toUpperCase() + category.slice(1);
};

const getPhotoTitle = (index: number): string => {
  if (index === 0) return 'Championship Meet';
  if (index === 1) return 'Training Day';
  if (index === 2) return 'Team Spirit';
  return 'Group Photo';
};

const getSizeClass = (index: number): string => {
  if (index % 3 === 0) return 'w-64 h-48';
  if (index % 3 === 1) return 'w-80 h-60';
  return 'w-72 h-52';
};

// Metadata is now defined in a separate metadata.ts file due to 'use client' directive

const TeamGroup = ({ 
  name, 
  color, 
  ageRange, 
  coaches, 
  philosophy, 
  requirements, 
  training, 
  equipment 
}: {
  name: string;
  color: string;
  ageRange: string;
  coaches: string;
  philosophy: string;
  requirements: string[];
  training?: string; // Make training optional
  equipment: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`border-l-4 ${color} rounded-lg overflow-hidden shadow-md bg-white mb-8 transition-all duration-300 hover:shadow-lg`}>
      <button 
        className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#0A1738] focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`content-${name.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <div>
          <h3 className="text-2xl font-bold text-[#0A1738]">{name}</h3>
          <p className="text-gray-600">{ageRange} | Coach(es): {coaches}</p>
        </div>
        <div className="text-2xl" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </div>
      </button>
      
      {isOpen && (
        <div 
          id={`content-${name.replace(/\s+/g, '-').toLowerCase()}`}
          className="px-6 pb-6 pt-2"
        >
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#0A1738] mb-2">Philosophy</h4>
            <p className="text-gray-700">{philosophy}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-[#0A1738] mb-2">Group Requirements</h4>              <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {requirements.map((req, i) => (
                <li key={`req-${name}-${i}`}>{req}</li>
              ))}
            </ul>
          </div>
          
          {training && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#0A1738] mb-2">Training Methods</h4>
              <p className="text-gray-700">{training}</p>
            </div>
          )}
          
          <div>
            <h4 className="text-lg font-semibold text-[#0A1738] mb-2">Required Equipment</h4>              <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {equipment.map((item, i) => (
                <li key={`equip-${name}-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageGallery = () => {
  // Images with captions for better user experience
  const images: Array<{src: string; caption: string}> = [
    {src: '/images/g1.jpeg', caption: 'Team practice session at the main pool'},
    {src: '/images/g2.jpeg', caption: 'BlueFins swimmers during technique training'},
    {src: '/images/g3.jpg', caption: 'Individual medley preparation with coach'},
    {src: '/images/g4.jpg', caption: 'Young swimmers learning advanced techniques'},
    {src: '/images/g5.jpg', caption: 'Backstroke training session'},
    {src: '/images/g6.jpg', caption: 'Team building activities for junior swimmers'},
    {src: '/images/g7.jpg', caption: 'Coaches demonstrating proper form'},
    {src: '/images/g8.jpeg', caption: 'Warm-up session before competition'},
    {src: '/images/g9.jpg', caption: 'Relay team preparation'},
    {src: '/images/g10.jpg', caption: 'Celebrating achievement after a meet'},
    {src: '/images/g11.jpeg', caption: 'Endurance training for senior swimmers'},
    {src: '/images/g12.jpeg', caption: 'Freestyle technique refinement'},
    {src: '/images/g13.jpeg', caption: 'Team during national competition'},
    {src: '/images/g14.jpeg', caption: 'Team spirit during training camp'},
    {src: '/images/g15.jpeg', caption: 'Focus and determination before a race'},
    {src: '/images/g16.jpeg', caption: 'Coaches providing individual feedback'},
    {src: '/images/g17.jpeg', caption: 'Team photo after winning competition'},
    {src: '/images/g18.jpeg', caption: 'Team building exercise at training camp'},
    {src: '/images/g19.jpeg', caption: 'Swimming analytics and performance review'},
    {src: '/images/g20.jpeg', caption: 'Fun day at the pool after competition season'},
    {src: '/images/g21.jpeg', caption: 'Ghana BlueFins team at championship event'},
  ];
  
  // Categorize images for better organization
  const imageCategories: Record<string, Array<{src: string; caption: string}>> = {
    competition: [
      images.find(img => img.src === '/images/g21.jpeg')!,
      images.find(img => img.src === '/images/g13.jpeg')!,
      images.find(img => img.src === '/images/g3.jpg')!,
      images.find(img => img.src === '/images/g17.jpeg')!
    ],
    training: [
      images.find(img => img.src === '/images/g1.jpeg')!,
      images.find(img => img.src === '/images/g5.jpg')!,
      images.find(img => img.src === '/images/g8.jpeg')!,
      images.find(img => img.src === '/images/g11.jpeg')!
    ],
    teamBuilding: [
      images.find(img => img.src === '/images/g6.jpg')!,
      images.find(img => img.src === '/images/g14.jpeg')!,
      images.find(img => img.src === '/images/g18.jpeg')!,
      images.find(img => img.src === '/images/g20.jpeg')!
    ],
  };

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const featuredScrollRef = useRef<HTMLDivElement | null>(null);
  const [keyPressed, setKeyPressed] = useState<string | null>(null);
  // Use a simple array to track loaded images instead
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [visibleCaption, setVisibleCaption] = useState(true);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
        setKeyPressed('Escape');
      } else if (e.key === 'ArrowLeft') {
        navigateImage(-1);
        setKeyPressed('ArrowLeft');
      } else if (e.key === 'ArrowRight') {
        navigateImage(1);
        setKeyPressed('ArrowRight');
      } else if (e.key === 'c') {
        // Toggle caption visibility with 'c' key
        setVisibleCaption(!visibleCaption);
      }
    };
    
    const handleKeyUp = () => {
      setKeyPressed(null);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedImage, visibleCaption]);

  // Track loading progress percentage
  const loadProgress = loadedImages.length / images.length * 100;

  const handleImageLoad = (src: string) => {
    if (!loadedImages.includes(src)) {
      setLoadedImages(prev => [...prev, src]);
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  const scroll = (direction: number, ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollBy({
        left: direction * 300,
        behavior: 'smooth'
      });
    }
  };

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? images 
    : (imageCategories[activeCategory] || images);

  return (
    <div className="my-12">
      {/* Featured Images - Hero Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 mb-12 h-auto md:h-[500px]">
        <div className="relative col-span-1 md:col-span-2 row-span-1 md:row-span-2 h-64 md:h-auto rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <p className="text-white text-xl font-bold px-4 py-2 bg-[#0A1738]/60 rounded-lg">Competition Day</p>
          </div>
          <Image
            src="/images/g21.jpeg"
            alt="Team at competition"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
            priority
          />
        </div>
        <div className="relative h-48 md:h-auto rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <p className="text-white text-sm font-bold px-3 py-1 bg-[#0A1738]/60 rounded-lg">Training Session</p>
          </div>
          <Image
            src="/images/g13.jpeg"
            alt="Training session"
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="relative h-48 md:h-auto rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <p className="text-white text-sm font-bold px-3 py-1 bg-[#0A1738]/60 rounded-lg">Team Building</p>
          </div>
          <Image
            src="/images/g17.jpeg"
            alt="Team building activities"
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="flex justify-center mb-8 overflow-x-auto py-2">
        <div className="inline-flex bg-gray-100 p-1 rounded-full">
          {(['all', 'competition', 'training', 'teamBuilding'] as const).map((category) => {
            const categoryName = getCategoryTitle(category);
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-[#0A1738] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {categoryName}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Featured Scrollable Row */}
      <div className="relative mb-8">
        <h3 className="text-xl font-bold text-[#0A1738] mb-4">Featured Moments</h3>
        <button 
          onClick={() => scroll(-1, featuredScrollRef)} 
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-[#0A1738] hover:bg-gray-100 hidden md:block"
          aria-label="Scroll left"
        >
          ←
        </button>
        
        <div 
          ref={featuredScrollRef}
          className="flex overflow-x-auto py-2 hide-scrollbar"
          style={{ scrollbarWidth: 'none', scrollbarColor: 'transparent transparent' }}
        >
          {imageCategories.competition.map((img, index) => {
            const photoTitle = getPhotoTitle(index);
            
            return (
              <motion.div 
                key={`featured-${img.src}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 h-56 mx-3 cursor-pointer overflow-hidden rounded-lg shadow-md group relative"
                onClick={() => openLightbox(images.findIndex(i => i.src === img.src))}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                  <p className="text-white p-4 font-medium">{photoTitle}</p>
                </div>
                <Image
                  src={img.src}
                  alt={`Featured photo ${index + 1}: ${img.caption}`}
                  width={320}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onLoad={() => handleImageLoad(img.src)}
                />
              </motion.div>
            );
          })}
        </div>
        
        <button 
          onClick={() => scroll(1, featuredScrollRef)} 
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-[#0A1738] hover:bg-gray-100 hidden md:block"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
      
      {/* Main Gallery - Masonry Style Grid */}
      <div className="relative mt-12">
        <h3 className="text-xl font-bold text-[#0A1738] mb-4">Team Gallery</h3>
        <button 
          onClick={() => scroll(-1, scrollRef)} 
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-[#0A1738] hover:bg-gray-100 hidden md:block"
          aria-label="Scroll left"
        >
          ←
        </button>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 hide-scrollbar md:pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex-shrink-0 flex flex-wrap md:flex-nowrap gap-4 px-4">
            {filteredImages.map((img, index) => {
              // Determine the size based on image position
              const sizeClass = getSizeClass(index);
              
              // For mobile, make all items full width
              const mobileClass = 'w-full md:w-auto h-48 md:h-auto';
              
              return (
                <motion.div 
                  key={`gallery-${img.src}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`cursor-pointer overflow-hidden rounded-lg shadow-md ${mobileClass} md:${sizeClass}`}
                  onClick={() => openLightbox(images.findIndex(i => i.src === img.src))}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-full h-full group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-between">
                      <p className="text-white p-3 font-medium text-sm md:text-base">
                        {img.caption.length > 30 
                          ? `${img.caption.substring(0, 30)}...` 
                          : img.caption}
                      </p>
                      <div className="p-3">
                        <span className="text-white bg-black/30 px-2 py-1 rounded-full text-xs">Click to enlarge</span>
                      </div>
                    </div>
                    <Image
                      src={img.src}
                      alt={`Team photo ${index + 1}: ${img.caption}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      onLoad={() => handleImageLoad(img.src)}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        <button 
          onClick={() => scroll(1, scrollRef)} 
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md text-[#0A1738] hover:bg-gray-100 hidden md:block"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>

      {/* Mobile View Gallery */}
      <div className="md:hidden mt-8">
        <h3 className="text-xl font-bold text-[#0A1738] mb-4">Mobile Gallery View</h3>
        <div className="grid grid-cols-2 gap-3">
          {filteredImages.slice(0, 6).map((img, index) => (
            <motion.div
              key={`mobile-${img.src}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="aspect-square relative rounded-lg overflow-hidden shadow-md"
              onClick={() => openLightbox(images.findIndex(i => i.src === img.src))}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
        {filteredImages.length > 6 && (
          <button
            onClick={() => document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full mt-4 py-2 bg-[#0A1738] text-white rounded-full text-sm font-medium"
          >
            View All {filteredImages.length} Photos
          </button>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl z-10 hover:opacity-70 transition-opacity"
            aria-label="Close lightbox"
          >
            ×
          </button>
          
          <button 
            onClick={() => navigateImage(-1)}
            disabled={selectedImage === 0}
            className={`absolute left-6 text-white text-5xl z-10 ${
              selectedImage === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:opacity-70 transition-opacity'
            }`}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <div className="relative w-11/12 h-4/5 max-w-6xl overflow-hidden">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative"
              data-lightbox-open="true"
            >
              <Image
                src={images[selectedImage].src}
                alt={`Team photo ${selectedImage + 1}: ${images[selectedImage].caption}`}
                fill
                className="object-contain"
                priority
                onLoad={() => handleImageLoad(images[selectedImage].src)}
              />
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-4 px-6 transition-opacity duration-300 ${visibleCaption ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white">
                    <span className="font-bold">{selectedImage + 1}</span> of <span className="font-bold">{images.length}</span>
                  </p>
                  <a 
                    href={images[selectedImage].src} 
                    download={`bluefins-team-photo-${selectedImage + 1}.jpg`}
                    className="text-white text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full transition-colors flex items-center gap-1 download-button"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
                <p className="text-white text-sm md:text-base mb-2">{images[selectedImage].caption}</p>                  <div className="flex items-center gap-2">
                  <div className="h-1 flex-grow bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full progress-animation"
                      style={{ width: `${((selectedImage + 1) / images.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-white text-sm">{Math.round(loadProgress)}% loaded</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <button 
            onClick={() => navigateImage(1)}
            disabled={selectedImage === images.length - 1}
            className={`absolute right-6 text-white text-5xl z-10 ${
              selectedImage === images.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:opacity-70 transition-opacity'
            }`}
            aria-label="Next image"
          >
            ›
          </button>
          
          {/* Thumbnail Navigation - Hide on mobile */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-md px-4 py-2 bg-black/50 rounded-full hidden sm:flex">
            {images.slice(Math.max(0, selectedImage - 3), Math.min(images.length, selectedImage + 4)).map((img, idx) => {
              const actualIndex = Math.max(0, selectedImage - 3) + idx;
              return (
                <button
                  key={actualIndex}
                  onClick={() => setSelectedImage(actualIndex)}
                  className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all ${
                    selectedImage === actualIndex ? 'border-white scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={`Thumbnail ${actualIndex + 1}`}
                    fill
                    className="object-cover"
                    onLoad={() => handleImageLoad(img.src)}
                  />
                </button>
              );
            })}
          </div>
          
          {/* Keyboard Navigation Instructions - Hide on mobile */}
          <div className="absolute top-6 left-6 items-center gap-4 text-white/70 text-sm hidden sm:flex">
            <span>
              Press{' '}
              <kbd className={`key mx-1 ${keyPressed === 'ArrowLeft' ? 'active' : ''}`}>←</kbd>{' '}
              <kbd className={`key mx-1 ${keyPressed === 'ArrowRight' ? 'active' : ''}`}>→</kbd>{' '}
              to navigate
            </span>
            <span>
              Press{' '}
              <kbd className={`key mx-1 ${keyPressed === 'Escape' ? 'active' : ''}`}>ESC</kbd>{' '}
              to close
            </span>
            <span>
              Press{' '}
              <kbd className="key mx-1">C</kbd>{' '}
              to toggle caption
            </span>
          </div>
          
          {/* Mobile touch instructions */}
          <div className="absolute top-6 left-0 right-0 text-center text-white/70 text-xs sm:hidden">
            Swipe or tap sides to navigate • Tap center to toggle caption
          </div>
        </motion.div>
      )}
    </div>
  );
};

const TrainingSchedule = () => {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-[#0A1738] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Days</th>
            <th className="py-3 px-4 text-left">SkyFins</th>
            <th className="py-3 px-4 text-left">TurquoiseFins</th>
            <th className="py-3 px-4 text-left">LapisFins</th>
            <th className="py-3 px-4 text-left">NavyFins</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-4 font-medium">Tuesday</td>
            <td className="py-3 px-4">3pm – 4:05pm</td>
            <td className="py-3 px-4">3pm – 4:05pm</td>
            <td className="py-3 px-4">3:45pm – 5pm</td>
            <td className="py-3 px-4">3:45pm – 5pm</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-4 font-medium">Wednesday</td>
            <td className="py-3 px-4">3pm – 4:05pm</td>
            <td className="py-3 px-4">3pm – 4:05pm</td>
            <td className="py-3 px-4">3:45pm – 5pm</td>
            <td className="py-3 px-4">3:45pm – 5pm</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 font-medium">Saturday</td>
            <td className="py-3 px-4">9am – 10:20am</td>
            <td className="py-3 px-4">9:30am – 10:55am</td>
            <td className="py-3 px-4">10:30am – 11:45am</td>
            <td className="py-3 px-4">11:30am – 12:45pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const FeatureVideo = () => {
  return (
    <div className="my-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#0A1738] mb-6">Team in Action</h2>
      <div className="rounded-xl overflow-hidden shadow-xl">
        <video 
          controls 
          className="w-full aspect-video"
          poster="/images/g21.jpeg"
        >
          <source src="/images/gv1.MOV" type="video/quicktime" />
          <track 
            kind="captions" 
            src="" 
            label="English" 
            srcLang="en" 
            default 
          />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-gray-600 mt-2 text-center">
          <i>Note: Video shows Ghana BlueFins swimmers during training and competition. Captions currently unavailable.</i>
        </p>
      </div>
    </div>
  );
};

export default function CompetitiveTeamPage() {
  const teamGroups = [
    {
      name: "SkyFins (Beginners)",
      color: "border-sky-400",
      ageRange: "5-7 years",
      coaches: "Ibrahim Abu, Benjamin Oteng",
      philosophy: "This group aims to expand upon skills learned at the Learn to Swim level. As an introduction to competitive swimming, SkyFins will learn the fundamentals of all the four strokes while mastering water safety skills as well. Swimmers will be encouraged to progress to the TurquoiseFins Group once a legal foundation has been established for all 4 competitive strokes (Freestyle, Backstroke, Breaststroke, Butterfly) with confidence in the water.",
      requirements: [
        "25-meter freestyle (unassisted, without stopping) with demonstration of proper side breathing",
        "25-meter backstroke (unassisted, without stopping)",
        "50-meter breaststroke (unassisted, without stopping)",
        "Legal breaststroke kick",
        "Legal butterfly kick"
      ],
      training: "Practice sessions will be focused on working on only one or two skills in a given practice session. The majority of training at this stage is low intensity and technique-oriented. All four strokes are continually emphasized.",
      equipment: [
        "Appropriate swim wear",
        "A pair of swim goggles",
        "Head cap (mandatory for girls, optional for boys)",
        "Kickboard",
        "Swim Fins",
        "A smile!"
      ]
    },
    {
      name: "TurquoiseFins (Lower Intermediate)",
      color: "border-teal-400",
      ageRange: "8-10 years",
      coaches: "Desmond Amponsah & Joseph Asante Okai",
      philosophy: "Introductory level of competitive swimming. The focus is on emphasizing on fundamentals and improving basic motor learning skills, balance and coordination in the water. Building a strong base in fundamentals is primary; speed is a secondary consideration. Swimmers in this stage are encouraged to participate in other sports to develop their athletic ability and coordination, while keeping a consistent schedule at swim team. Coaches at this level are committed to teaching young people to love the water and to love the sport.",
      requirements: [
        "25-meter butterfly (unassisted, without stopping)",
        "50-meter backstroke (unassisted, without stopping)",
        "100-meter breaststroke (unassisted, without stopping)",
        "100-meter freestyle (unassisted, without stopping)",
        "100-meter IM (unassisted, without stopping)",
        "Ability to execute:",
        "  - Flip turns",
        "  - Streamline with dolphin kicks",
        "  - Breaststroke pull-downs",
        "  - Dives"
      ],
      equipment: [
        "Appropriate swim wear",
        "A pair of swim goggles",
        "Head cap (mandatory for girls, optional for boys)",
        "Long swim fins (no zoomers, split fins, or snorkel/scuba fins)",
        "Kickboard",
        "Snorkel",
        "A smile!"
      ]
    },
    {
      name: "LapisFins (Intermediate)",
      color: "border-blue-500",
      ageRange: "11-14 years",
      coaches: "Desmond Amponsah & Joseph Asante Okai",
      philosophy: "The focus is still on fundamentals and developing a strong foundation in all strokes, but we also begin to seek a balance of technique work and physiological development. Swimmers in the LapisFins Group maintain good technique doing low to medium intensity interval work. Swimmers in this stage are encouraged to participate in other sports to develop their athletic ability and coordination, while keeping a consistent schedule at swim team.",
      requirements: [
        "50-meter butterfly (unassisted, without stopping)",
        "100-meter backstroke (unassisted, without stopping)",
        "200-meter breaststroke (unassisted, without stopping)",
        "200-meter freestyle (unassisted, without stopping)",
        "200-meter IM (unassisted, without stopping)",
        "Ability to execute:",
        "  - Flip turns",
        "  - Streamline with dolphin kicks",
        "  - Breaststroke pull-downs",
        "  - Dives"
      ],
      training: "Low-to-medium aerobic conditioning is emphasized and athletes begin to swim more meters on a weekly basis. Swimmers can expect to swim about 1000-1500 meters at practice. At this level, the training program is geared towards being able to compete, without stopping or assistance, a 200 freestyle and 200 IM. Kicking remains a priority for all four strokes.",
      equipment: [
        "Appropriate swim wear",
        "A pair of swim goggles",
        "Head cap (mandatory for girls, optional for boys)",
        "Kickboard",
        "Pull buoy",
        "Snorkel",
        "Hand paddles",
        "Yoga mat",
        "Bottle of water",
        "A smile!"
      ]
    },
    {
      name: "NavyFins (Advanced)",
      color: "border-indigo-700",
      ageRange: "15 years and above",
      coaches: "Desmond Amponsah, Benjamin Oteng, Joseph Okai",
      philosophy: "Swimmers will continue to develop good habits for all events in the best interest of their long-term development in the sport. Swimmers are encouraged to attend as many practices each week as they can. Swimmers at this stage make choices that demonstrate a stronger commitment to swimming.",
      requirements: [
        "100-meter butterfly (unassisted, without stopping)",
        "200-meter backstroke (unassisted, without stopping)",
        "200-meter breaststroke (unassisted, without stopping)",
        "400-meter freestyle (unassisted, without stopping)",
        "400-meter IM (unassisted, without stopping)",
        "Ability to execute:",
        "  - Flip turns",
        "  - Streamline with dolphin kicks",
        "  - Breaststroke pull-downs",
        "  - Dives",
        "  - Increased hypoxic capacity (limited breathing into/out of walls)",
        "  - A willingness to expand swim meet event choices to include 200s of each stroke, 400 IM, 800 free and 1500 free"
      ],
      training: "The quality and intensity of the training program is increased, with more dedication to physiological conditioning. Although medium-to-high intensity aerobic condition is still the highest priority, workouts include more high intensity anaerobic training. It is critical that technique is not compromised as swimmers swim faster in practice. Fundamentals are still stressed. In this stage, meterage completed each week is an important consideration. Swimmers can expect to swim 2500-3000 meters at practice and will engage in dryland training to enhance their swimming.",
      equipment: [
        "Appropriate swim wear",
        "A pair of swim goggles",
        "Head cap (mandatory for girls, optional for boys)",
        "2 fins (long fins and power fins)",
        "Kickboard",
        "Pull buoy",
        "Snorkel",
        "Hand paddles",
        "Bottle of water",
        "Yoga mat",
        "A smile!"
      ]
    }
  ];

  return (
    <main className="bg-white">
      <div className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">BlueFins Competitive Team</h1>
            <p className="text-xl text-gray-600">
              Excellence through dedication, discipline, and teamwork
            </p>
          </div>

          {/* Hero Section with Background Image */}
          <section className="mb-16 relative">
            <div className="bg-[#0A1738] rounded-lg overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[url('/images/g6.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="relative p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold mb-6">Join Ghana&rsquo;s Premier Swim Team</h2>
                  <p className="text-lg mb-6">
                    The Ghana BlueFins competitive swim team is dedicated to developing swimmers who excel both in and out of the pool. Our program combines technical training, physical conditioning, and mental preparation to help athletes reach their full potential.
                  </p>
                  <p className="text-lg mb-8">
                    With experienced coaches, personalized attention, and a supportive team environment, our swimmers develop the skills, confidence, and character to succeed in competition and in life.
                  </p>
                  <Link 
                    href="/register"
                    className="inline-block bg-[#FFD700] text-[#0A1738] font-bold px-8 py-3 rounded-lg hover:bg-[#e6c200] transition-colors"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Team Structure Overview */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Team Structure</h2>
              <p className="text-gray-700 mb-6">
                As of September 2022, the Ghana BlueFins competitive swim team is structured into four groups based on ability, age, and dedication. Each group has specific requirements, training objectives, and equipment needs to ensure swimmers develop properly and enjoy their swimming journey.
              </p>
              <p className="text-gray-700 mb-6">
                Click on each group below to learn more about their philosophy, requirements, and training methods.
              </p>
            </div>
          </section>

          {/* Team Groups Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#0A1738]">Our Team Groups</h2>
            
            {teamGroups.map((group) => (
              <motion.div
                key={`group-${group.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <TeamGroup {...group} />
              </motion.div>
            ))}
          </section>
          
          {/* Training Schedule */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#0A1738] text-center">Training Schedule</h2>
            <TrainingSchedule />
          </section>

          {/* Photo Gallery */}
          <section id="gallery-section" className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#0A1738] text-center">Team Gallery</h2>
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Explore our interactive gallery showcasing the Ghana BlueFins in action! From training sessions to competitions and team building activities, these images capture the spirit and dedication of our swimmers.
            </p>
            <div className="image-gallery" data-close-lightbox="closeLightbox" data-navigate-image="navigateImage">
              <ImageGallery />
            </div>
          </section>

          {/* Feature Video */}
          <FeatureVideo />

          {/* Call to Action */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-[#0A1738] to-blue-800 rounded-lg p-10 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Join the Team?</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Experience the thrill of competitive swimming with Ghana's premier swim club. Our coaches are ready to help you reach your full potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/register"
                  className="inline-block bg-[#FFD700] text-[#0A1738] font-bold px-8 py-3 rounded-lg hover:bg-[#e6c200] transition-colors"
                >
                  Register Now
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-[#0A1738] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
