'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Type definitions for better maintainability
type DropdownItem = {
  href: string;
  label: string;
  highlight?: boolean;
};

type NavItem = {
  type: 'link' | 'dropdown';
  label: string;
  href?: string;
  highlight?: boolean;
  children?: DropdownItem[];
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Navigation items defined as a single data structure for better maintainability
  const navItems: NavItem[] = [
    {
      type: 'link',
      label: 'About',
      href: '/about-us',
    },
    {
      type: 'link',
      label: 'Coaches',
      href: '/coaches',
    },
    {
      type: 'dropdown',
      label: 'Swim Lessons',
      highlight: true,
      children: [
        { href: '/lessons/kids', label: 'Kids Lessons', highlight: true },
        { href: '/lessons/adults', label: 'Adult Lessons' },
        { href: '/lessons/private', label: 'Private Lessons' },
      ],
    },
    {
      type: 'link',
      label: 'Competitive',
      href: '/programs/competitive-team',
      highlight: true,
    },
    {
      type: 'link',
      label: 'Events',
      href: '/events',
      highlight: true,
    },
    {
      type: 'link',
      label: 'Locations',
      href: '/locations',
    },
    {
      type: 'link',
      label: 'Pricing',
      href: '/pricing',
    },
    {
      type: 'link',
      label: 'Contact',
      href: '/contact',
    },
  ];

  // Mobile submenu items
  const aboutSubmenuItems = [
    { href: '/about-us/philosophy', label: 'Our Philosophy' },
    { href: '/about-us/coaches', label: 'Meet Our Coaches' },
    { href: '/about-us/testimonials', label: 'Testimonials' },
    { href: '/about-us/faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Helper components for cleaner JSX
  const NavLink = ({ href, label, highlight = false }: 
    { href: string; label: string; highlight?: boolean }) => (
    <Link 
      href={href} 
      className={`${highlight ? 'text-[#E5BD4E] hover:text-white font-semibold' : 'text-white hover:text-[#E5BD4E]'} 
        transition-colors text-lg relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
        ${highlight ? 'after:bg-white' : 'after:bg-[#E5BD4E]'} after:transition-all hover:after:w-full
        transform hover:scale-105 transition-transform duration-200`}
    >
      {label}
    </Link>
  );

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0A22A9] shadow-lg py-2' 
          : 'bg-[#0A22A9] py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="h-12 md:h-14 relative w-auto">
              <Image 
                src="/logo2.jpg" 
                alt="Ghana BlueFins" 
                width={180}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Increased spacing and text size */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              item.type === 'link' ? (
                <NavLink 
                  key={index}
                  href={item.href || '/'}
                  label={item.label}
                  highlight={item.highlight}
                />
              ) : (
                // Dropdown menus with animations
                <div key={index} className="relative group">
                  <button 
                    className={`${item.highlight ? 'text-[#E5BD4E] hover:text-white font-semibold' : 'text-white hover:text-[#E5BD4E]'} 
                      transition-colors flex items-center text-lg py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                      ${item.highlight ? 'after:bg-white' : 'after:bg-[#E5BD4E]'} after:transition-all group-hover:after:w-full
                      transform hover:scale-105 transition-transform duration-200`}
                  >
                    {item.label}
                    <svg 
                      className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-1 bg-white rounded-md shadow-xl border-t-2 border-[#E5BD4E] overflow-hidden">
                      <div className="bg-[#0A22A9] py-2 px-4 mb-1">
                        <h3 className="text-[#E5BD4E] font-semibold">Learn to Swim Programs</h3>
                      </div>
                      
                      {item.children?.map((child, childIndex) => (
                        <Link 
                          key={childIndex}
                          href={child.href} 
                          className={`block px-4 py-3 text-base ${child.highlight ? 'font-semibold text-[#0A22A9]' : 'text-gray-700'} 
                            hover:bg-gray-100 hover:text-[#0A22A9] transition-colors transform hover:translate-x-1 transition-transform duration-200`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
          </nav>

          {/* Register Button - Larger with better animation */}
          <Link 
            href="/register"
            className="hidden md:block bg-[#E5BD4E] text-[#0A22A9] font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:bg-white hover:text-[#0A22A9] relative overflow-hidden group transform hover:scale-105"
          >
            <span className="relative z-10">Register Now</span>
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>

          {/* Mobile menu button - Larger */}
          <button 
            className="md:hidden text-[#E5BD4E] p-2 rounded-md hover:bg-[#0A22A9]/80 transition-colors transform hover:scale-110 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - Improved animation */}
      {isOpen && (
        <div className="md:hidden bg-[#0A22A9] border-t border-[#E5BD4E]/30 animate-slideDown">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {/* Mobile About Section */}
            <div className="border-b border-blue-900">
              <button 
                onClick={() => toggleMobileDropdown('about')}
                className="flex justify-between items-center w-full text-white hover:text-[#E5BD4E] transition-colors py-3 text-lg"
              >
                <span>About</span>
                <svg 
                  className={`ml-1 w-5 h-5 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {activeDropdown === 'about' && (
                <div className="pl-4 mt-1 mb-2 border-l-2 border-[#E5BD4E] space-y-2 animate-fadeIn">
                  {aboutSubmenuItems.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href} 
                      className="block text-white hover:text-[#E5BD4E] transition-colors py-2 text-base transform hover:translate-x-1 transition-transform duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Swim Lessons Section - HIGHLIGHTED */}
            <div className="border-b border-blue-900">
              <button 
                onClick={() => toggleMobileDropdown('swimLessons')}
                className="flex justify-between items-center w-full text-[#E5BD4E] font-semibold hover:text-white transition-colors py-3 text-lg"
              >
                <span>Swim Lessons</span>
                <svg 
                  className={`ml-1 w-5 h-5 transition-transform duration-300 ${activeDropdown === 'swimLessons' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {activeDropdown === 'swimLessons' && (
                <div className="pl-4 mt-1 mb-2 border-l-2 border-[#E5BD4E] space-y-2 animate-fadeIn">
                  <Link 
                    href="/programs/swim-lessons" 
                    className="block text-white font-medium hover:text-[#E5BD4E] transition-colors py-2 text-base transform hover:translate-x-1 transition-transform duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    All Swim Programs
                  </Link>
                  {navItems.find(item => item.label === 'Swim Lessons')?.children?.map((item, index) => (
                    <Link 
                      key={index}
                      href={item.href} 
                      className="block text-white hover:text-[#E5BD4E] transition-colors py-2 text-base transform hover:translate-x-1 transition-transform duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Other mobile links */}
            {navItems.filter(item => 
              item.label !== 'About' && 
              item.label !== 'Swim Lessons' && 
              item.type === 'link'
            ).map((item, index) => (
              <Link 
                key={index}
                href={item.href || '/'}
                className={`block ${item.highlight ? 'text-[#E5BD4E] font-semibold hover:text-white' : 'text-white hover:text-[#E5BD4E]'} 
                  transition-colors py-3 text-lg border-b border-blue-900 transform hover:translate-x-1 transition-transform duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Register button */}
            <Link 
              href="/register"
              className="block bg-[#E5BD4E] text-[#0A22A9] font-bold text-center py-4 rounded-lg transition-all mt-6 hover:bg-white text-lg transform hover:scale-105 transition-transform duration-200"
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

// Add this CSS to your global styles file
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// @keyframes slideDown {
//   from { opacity: 0; max-height: 0; }
//   to { opacity: 1; max-height: 1000px; }
// }
// .animate-fadeIn {
//   animation: fadeIn 0.3s ease-out forwards;
// }
// .animate-slideDown {
//   animation: slideDown 0.4s ease-out forwards;
// }

export default Navbar;