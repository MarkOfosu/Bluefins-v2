// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0A1738] text-white">
      {/* Top Footer Section */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Ghana BlueFins</h3>
            <p className="text-white/80 mb-4">
              Ghana's premier swim club dedicated to developing swimmers of all ages and abilities. We offer comprehensive swimming programs in a supportive community environment.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#FFD700] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Pool Location
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/learn-to-swim" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Learn-to-Swim
                </Link>
              </li>
              <li>
                <Link href="/programs/mini-bluefins" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Mini BlueFins
                </Link>
              </li>
              <li>
                <Link href="/programs/competitive-team" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Competitive Team
                </Link>
              </li>
              <li>
                <Link href="/programs/masters-team" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Masters Team
                </Link>
              </li>
              <li>
                <Link href="/programs/private-lessons" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Private Lessons
                </Link>
              </li>
              <li>
                <Link href="/programs/water-safety" className="text-white/80 hover:text-[#FFD700] transition-colors">
                  Water Safety
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">Splash Social Center<br />Burma Camp, Accra</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/80">ghanabluefins@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/80">+233 25 657 2222</span>
              </li>
              <li className="mt-4">
                <Link 
                  href="/register"
                  className="inline-block bg-[#FFD700] text-[#0A1738] font-bold py-2 px-4 rounded-lg transition-colors hover:bg-[#FFD700]/90 shadow-md"
                >
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="bg-[#091327] py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white/70">Stay updated with the latest news, events, and special offers</p>
            </div>
            <div className="w-full md:w-96">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-[#FFD700] text-[#0A1738] font-bold px-4 py-2 rounded-r-lg hover:bg-[#FFD700]/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-[#060d1b] py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Ghana BlueFins Swim Club. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-white/60 text-sm hover:text-[#FFD700] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/60 text-sm hover:text-[#FFD700] transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white/60 text-sm hover:text-[#FFD700] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;