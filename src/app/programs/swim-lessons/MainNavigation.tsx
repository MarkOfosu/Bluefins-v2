// MainNavigation.tsx for Swim Lessons - Updated with Private and Group Lessons
import React from 'react';
import Link from 'next/link';

// Accepting an activeTab prop to know which tab is currently active
const MainNavigation: React.FC<{ activeTab?: string }> = ({ activeTab = 'group' }) => {
  return (
    <div className="bg-white py-6 -mt-16 relative z-30 shadow-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Link 
            href="#programs"
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="w-14 h-14 bg-[#0A3D73] rounded-full flex items-center justify-center text-white mb-2 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-sm font-medium">Programs</span>
          </Link>
          
          <Link 
            href="#programs"
            onClick={() => (document.querySelector('button[aria-label="Group Lessons"]') as HTMLButtonElement)?.click()}
            className={`flex flex-col items-center justify-center text-center ${activeTab === 'group' ? 'font-bold text-[#0A3D73]' : ''}`}
          >
            <div className={`w-14 h-14 ${activeTab === 'group' ? 'bg-[#FFD700]' : 'bg-[#0A3D73]'} rounded-full flex items-center justify-center ${activeTab === 'group' ? 'text-[#0A3D73]' : 'text-white'} mb-2 transition-transform hover:scale-110`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Group Lessons</span>
          </Link>
          
          <Link 
            href="#programs"
            onClick={() => (document.querySelector('button[aria-label="Private Lessons"]') as HTMLButtonElement)?.click()}
            className={`flex flex-col items-center justify-center text-center ${activeTab === 'private' ? 'font-bold text-[#0A3D73]' : ''}`}
          >
            <div className={`w-14 h-14 ${activeTab === 'private' ? 'bg-[#FFD700]' : 'bg-[#0A3D73]'} rounded-full flex items-center justify-center ${activeTab === 'private' ? 'text-[#0A3D73]' : 'text-white'} mb-2 transition-transform hover:scale-110`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Private Lessons</span>
          </Link>
          
          <Link 
            href="#register"
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="w-14 h-14 bg-[#FFD700] rounded-full flex items-center justify-center text-[#0A3D73] mb-2 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Registration Info</span>
          </Link>
          
          <Link 
            href="https://secure.rec1.com/CA/burlingame-aquatics-ca/catalog"
            target="_blank"
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="w-14 h-14 bg-[#0A3D73] rounded-full flex items-center justify-center text-white mb-2 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="text-sm font-medium">Book Now</span>
          </Link>
          
          <Link 
            href="#faq"
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="w-14 h-14 bg-[#0A3D73] rounded-full flex items-center justify-center text-white mb-2 transition-transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium">FAQ</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;