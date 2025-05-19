'use client';

import React from 'react';
import Image from 'next/image';

export default function PrivateLessonsTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h3 className="text-2xl font-bold text-[#0A3D73]">Private Swim Lessons</h3>
        <p className="mt-4 text-gray-600">
          Need a little extra help? Improve your skills with private lessons and take your swimming to the next level. We offer both Private and Semi-Private Lessons year-round.
        </p>

        {/* Featured Image */}
        <div className="mt-6 mb-8">
          <div className="relative h-150 rounded-lg overflow-hidden">
            <Image 
              src="/image/learn-to-swim/privateLesson.jpg" 
              alt="One-on-one swimming instruction" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white font-medium text-lg">Personalized instruction for all ages and abilities</p>
            </div>
          </div>
        </div>
        
        {/* Lesson Types */}
        <div className="mt-8 space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0A3D73]">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-[#0A3D73]">Private Lessons (1:1)</h4>
                <p className="mt-2 text-gray-600">
                  Private Lessons are held in a 1 to 1 ratio of instructor to student. Students come in with a stated level and work with the instructor to improve their skills. Private lesson sessions are 30 minutes and cost $75 per session.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0A3D73]">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-[#0A3D73]">Semi-Private Lessons (1:2)</h4>
                <p className="mt-2 text-gray-600">
                  Semi-Private Lessons are held in a 1 to 2 ratio of instructor to students. Lessons are tailored to the specific needs of the students and create a fun learning environment. Semi-Private lesson sessions are 30 minutes and cost $95 per session.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#0A3D73] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="ml-4 text-lg font-medium text-[#0A3D73]">Accelerated Progress</h4>
            </div>
            <p className="mt-2 text-gray-600">Learn at your own pace with focused attention from your instructor.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#0A3D73] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="ml-4 text-lg font-medium text-[#0A3D73]">Personalized Approach</h4>
            </div>
            <p className="mt-2 text-gray-600">Lessons tailored to address specific needs, goals, or challenges.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#0A3D73] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="ml-4 text-lg font-medium text-[#0A3D73]">Overcoming Anxiety</h4>
            </div>
            <p className="mt-2 text-gray-600">Build confidence in a supportive one-on-one environment.</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#0A3D73] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="ml-4 text-lg font-medium text-[#0A3D73]">Flexible Scheduling</h4>
            </div>
            <p className="mt-2 text-gray-600">Book lessons at times that work best for your schedule.</p>
          </div>
        </div>

        {/* Policy Section */}
        <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-[#FFD700]">
          <h4 className="text-lg font-semibold text-[#0A3D73]">Policy</h4>
          <p className="mt-2 text-gray-600">
            Cancellations must be made 24 hours before the first class for a full refund. Lessons are held rain or shine, canceled only in case of thunder and/or lightning.
          </p>
        </div>
        
        {/* Image with Quote */}
        <div className="mt-8 relative rounded-lg overflow-hidden">
          <div className="h-64 relative">
            <Image 
              src="/image/misc/practice4.jpg" 
              alt="Adult swim lesson" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A3D73]/70"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <blockquote className="text-center">
                <p className="text-xl font-medium text-white italic">&ldquo;It&apos;s never too late to learn to swim. Our instructors work with students of all ages, from toddlers to seniors.&rdquo;</p>
                <footer className="mt-2 text-white/80">- BAC Swim Instruction Team</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Details */}
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-[#0A3D73] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Lesson Details
          </h4>
          <ul className="mt-4 space-y-4">
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">Available for all ages (youth & adults)</span>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-gray-600">
                Private: $75 per 30-minute lesson 
                <span className="bg-yellow-200 px-2 ml-1 text-gray-800">Price may change</span>
              </div>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-gray-600">
                Semi-Private: $95 per 30-minute lesson 
                <span className="bg-yellow-200 px-2 ml-1 text-gray-800">Price may change</span>
              </div>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-gray-600">Experienced instructors matched to your needs</span>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600 font-medium text-red-500">Are generally done on Sundays 9am-12:30pm</span>
            </li>
          </ul>
          
          <div className="mt-8">
            <a
              href="https://secure.rec1.com/CA/burlingame-aquatics-ca/catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-[#0A3D73] hover:bg-[#0A3D73]/90 transition-colors duration-200"
            >
              Book Private Lessons
            </a>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="relative h-48">
            <Image 
              src="/image/learn-to-swim/learn-to-swim2.jpg" 
              alt="Child in private swim lesson" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white">
            <h4 className="font-medium text-[#0A3D73]">Focused Instruction</h4>
            <p className="text-sm text-gray-600">Individual attention for faster skill development</p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="relative h-48">
            <Image 
              src="/image/learn-to-swim/learn-to-swim1.jpg" 
              alt="Adult improving swim technique" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white">
            <h4 className="font-medium text-[#0A3D73]">All Ages Welcome</h4>
            <p className="text-sm text-gray-600">From beginners to advanced swimmers</p>
          </div>
        </div>
      </div>
    </div>
  );
}