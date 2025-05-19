// RegistrationSection.tsx
import React from 'react';

// Define a prop to indicate which type of lessons we're showing registration info for
export default function RegistrationSection({ lessonType = 'group' }) {
  return (
    <div id="register" className="py-16 bg-[#0A3D73]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Register?</h2>
            <p className="mt-4 text-lg text-white/90">
              Join our swim programs and help develop essential water safety skills in a fun, supportive environment.
            </p>
            
            <div className="mt-8 rounded-lg bg-white/10 p-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Registration Steps
              </h3>
              
              {/* Different registration steps based on lesson type */}
              {lessonType === 'group' ? (
                <ol className="mt-4 space-y-3 text-white/90 list-decimal pl-5">
                  <li>
                    Review the class descriptions to identify the level(s) best for you and your family
                  </li>
                  <li>
                    Select the best dates/times for the level(s) you need
                  </li>
                  <li>
                    Create an account with CivicRec if you need to
                  </li>
                  <li>
                    Use the registration link below to connect to our registration system
                  </li>
                </ol>
              ) : (
                <ol className="mt-4 space-y-3 text-white/90 list-decimal pl-5">
                  <li>
                    Create an account with CivicRec if you need to
                  </li>
                  <li>
                    Use the registration link below to connect to our registration system
                  </li>
                  <li>
                    Contact <a href="mailto:Troy@burlingameaquatics.com" className="text-[#FFD700] hover:text-[#FFD700]/80 underline">Troy@burlingameaquatics.com</a> to secure a time slot
                  </li>
                </ol>
              )}

              <div className="mt-6 bg-white/5 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-[#FFD700]">Policy Information</h4>
                <ul className="mt-3 space-y-2 text-white/90">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFD700] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Lessons take place rain or shine unless conditions become unsafe.</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFD700] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Credits may be issued for unsafe conditions or medical emergencies.</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFD700] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Classes may be canceled or rescheduled with insufficient registration.</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFD700] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Waitlist is available for full classes with potential openings.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#FFD700] px-6 py-4">
                <h3 className="text-xl font-bold text-[#0A3D73]">Ready to Register?</h3>
              </div>
              <div className="px-6 py-8">
                <div className="text-center mb-6">
                  <p className="text-lg text-gray-700 mb-4">
                    {lessonType === 'private' 
                      ? 'Browse available private lessons and contact Troy to secure your spot.'
                      : 'Browse available classes and secure your spot.'}
                  </p>
                  <div className="flex justify-center">
                    <svg className="h-16 w-16 text-[#0A3D73]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <a
                  href="https://secure.rec1.com/CA/burlingame-aquatics-ca/catalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 text-base font-bold rounded-md shadow-sm text-white bg-[#0A3D73] hover:bg-[#0A3D73]/90 transition-colors duration-200"
                >
                  Register Here!
                </a>
                
                <p className="mt-4 text-center text-sm text-gray-500">
                  Need help with registration? Contact our front desk at (650) 558-2881.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}