// src/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Top Footer Section */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary border-b border-secondary/30 pb-2">Ghana BlueFins</h3>
            <p className="text-white/80 mb-6">
              Ghana&apos;s premier swim club dedicated to developing swimmers of all ages and abilities. We offer comprehensive swimming programs in a supportive community environment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/ghanabluefins" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/ghanabluefins" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com/ghanabluefins" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/ghanabluefins" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary border-b border-secondary/30 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/about-us" className="hover:text-secondary transition-colors hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-secondary transition-colors hover:underline">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="hover:text-secondary transition-colors hover:underline">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-secondary transition-colors hover:underline">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-secondary transition-colors hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-secondary transition-colors hover:underline">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary border-b border-secondary/30 pb-2">Our Programs</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/lessons/kids" className="hover:text-secondary transition-colors hover:underline">
                  Kids Swimming Lessons
                </Link>
              </li>
              <li>
                <Link href="/lessons/adults" className="hover:text-secondary transition-colors hover:underline">
                  Adult Swimming Lessons
                </Link>
              </li>
              <li>
                <Link href="/competitive" className="hover:text-secondary transition-colors hover:underline">
                  Competitive Swimming
                </Link>
              </li>
              <li>
                <Link href="/high-performance" className="hover:text-secondary transition-colors hover:underline">
                  High Performance
                </Link>
              </li>
              <li>
                <Link href="/private-lessons" className="hover:text-secondary transition-colors hover:underline">
                  Private Coaching
                </Link>
              </li>
              <li>
                <Link href="/holiday-camps" className="hover:text-secondary transition-colors hover:underline">
                  Holiday Camps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary border-b border-secondary/30 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex space-x-3 items-start">
                <svg className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">
                  Multiple Locations Across Accra<br/>
                  <Link href="/locations" className="text-secondary hover:underline">
                    View All Locations
                  </Link>
                </span>
              </li>
              <li className="flex space-x-3 items-start">
                <svg className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ghanabluefins.com" className="text-white/80 hover:text-secondary">
                  info@ghanabluefins.com
                </a>
              </li>
              <li className="flex space-x-3 items-start">
                <svg className="h-6 w-6 text-secondary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+233302123456" className="text-white/80 hover:text-secondary">
                  +233 30 212 3456
                </a>
              </li>
              <li className="pt-3">
                <Link 
                  href="/register" 
                  className="inline-flex items-center px-4 py-2 bg-secondary hover:bg-secondary-dark text-primary-dark font-medium rounded-md transition-colors"
                >
                  Join BlueFins Today
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10 py-6 bg-primary-dark/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left text-white/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ghana BlueFins Swim Club. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60">
              <Link href="/privacy-policy" className="hover:text-secondary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary">
                Terms of Service
              </Link>
              <Link href="/team-policies" className="hover:text-secondary">
                Team Policies
              </Link>
              <div>
                Designed with <span className="text-secondary">♥</span> in Ghana
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;