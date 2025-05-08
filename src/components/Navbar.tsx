// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [competitiveDropdownOpen, setCompetitiveDropdownOpen] = useState(false);
  const [lessonsDropdownOpen, setLessonsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllDropdowns = () => {
    setCompetitiveDropdownOpen(false);
    setLessonsDropdownOpen(false);
  };

  const toggleCompetitiveDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setLessonsDropdownOpen(false);
    setCompetitiveDropdownOpen(!competitiveDropdownOpen);
  };

  const toggleLessonsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setCompetitiveDropdownOpen(false);
    setLessonsDropdownOpen(!lessonsDropdownOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A1738] shadow-lg py-2' 
          : 'bg-[#0A1738] py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span 
              className="text-2xl font-bold text-[#FFD700] transition-colors duration-300"
            >
              GHANA BLUEFINS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/about-us" 
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              About Us
            </Link>
            
            {/* Competitive Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleCompetitiveDropdown}
                className="text-white hover:text-[#FFD700] transition-colors flex items-center"
              >
                Competitive
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${competitiveDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {competitiveDropdownOpen && (
                <div className="absolute left-0 mt-2 py-2 w-56 bg-white rounded-md shadow-xl z-10">
                  <Link 
                    href="/competitive/programs" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Competitive Programs
                  </Link>
                  <Link 
                    href="/competitive/schedule" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Training Schedule
                  </Link>
                  <Link 
                    href="/competitive/team" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Meet the Team
                  </Link>
                  <Link 
                    href="/competitive/achievements" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Achievements
                  </Link>
                  <Link 
                    href="/team-policies" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Team Policies
                  </Link>
                </div>
              )}
            </div>
            
            {/* Lessons Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleLessonsDropdown}
                className="text-white hover:text-[#FFD700] transition-colors flex items-center"
              >
                Lessons
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${lessonsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {lessonsDropdownOpen && (
                <div className="absolute left-0 mt-2 py-2 w-56 bg-white rounded-md shadow-xl z-10">
                  <Link 
                    href="/lessons/kids" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Kids Learn-to-Swim
                  </Link>
                  <Link 
                    href="/lessons/adults" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Adults Learn-to-Swim
                  </Link>
                  <Link 
                    href="/lessons/private" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Private Lessons
                  </Link>
                  <Link 
                    href="/schedule" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => closeAllDropdowns()}
                  >
                    Lesson Schedule
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/location" 
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Locations/Schedules
            </Link>
            <Link 
              href="/pricing" 
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/info" 
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Info
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Register Button */}
          <Link 
            href="/register"
            className="hidden md:block bg-[#FFD700] text-[#0A1738] font-bold px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border-2 border-[#E5B100] hover:bg-[#E5B100]"
          >
            Register Now
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#FFD700]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1738] border-t-2 border-[#FFD700] slide-in-bottom">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/about-us" 
              className="block text-white hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            {/* Mobile Competitive Section */}
            <div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setCompetitiveDropdownOpen(!competitiveDropdownOpen);
                  setLessonsDropdownOpen(false);
                }}
                className="flex justify-between items-center w-full text-white hover:text-[#FFD700] transition-colors"
              >
                <span>Competitive</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${competitiveDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {competitiveDropdownOpen && (
                <div className="pl-4 mt-2 border-l-2 border-[#FFD700] space-y-2">
                  <Link 
                    href="/competitive/programs" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Competitive Programs
                  </Link>
                  <Link 
                    href="/competitive/schedule" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Training Schedule
                  </Link>
                  <Link 
                    href="/competitive/team" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Meet the Team
                  </Link>
                  <Link 
                    href="/competitive/achievements" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Achievements
                  </Link>
                  <Link 
                    href="/team-policies" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Team Policies
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile Lessons Section */}
            <div>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setLessonsDropdownOpen(!lessonsDropdownOpen);
                  setCompetitiveDropdownOpen(false);
                }}
                className="flex justify-between items-center w-full text-white hover:text-[#FFD700] transition-colors"
              >
                <span>Lessons</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${lessonsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {lessonsDropdownOpen && (
                <div className="pl-4 mt-2 border-l-2 border-[#FFD700] space-y-2">
                  <Link 
                    href="/lessons/kids" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Kids Learn-to-Swim
                  </Link>
                  <Link 
                    href="/lessons/adults" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Adults Learn-to-Swim
                  </Link>
                  <Link 
                    href="/lessons/private" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Private Lessons
                  </Link>
                  <Link 
                    href="/schedule" 
                    className="block text-white hover:text-[#FFD700] transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Lesson Schedule
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/location" 
              className="block text-white hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Locations/Schedules
            </Link>
            <Link 
              href="/pricing" 
              className="block text-white hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/info" 
              className="block text-white hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Info
            </Link>
            <Link 
              href="/contact" 
              className="block text-white hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/register"
              className="block bg-[#FFD700] text-[#0A1738] font-bold text-center py-2 rounded-lg transition-all border-2 border-[#E5B100] hover:bg-[#E5B100]"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;