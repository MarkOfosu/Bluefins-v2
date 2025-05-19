// HeroSection.tsx - Modified version
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import HeroAlerts from '@/components/HeroAlerts';
// import MainNavigation from './MainNavigation'; 

export default function HeroSection() {
  return (
    <>
      <div className="relative min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/image/learn-to-swim/learn-to-swim1.jpg"
            alt="Children learning to swim" 
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D73]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-[80vh]">
          {/* Alert positioned at the top with minimal padding from the navigation */}
          <div className="pt-8 sm:pt-12 z-10">
            {/* <HeroAlerts variant="dark" /> */}
          </div>
          <div className="max-w-2xl">
            {/* Badge */}
              {/* <div className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-1.5 rounded-md mb-4 text-sm font-medium shadow-lg">
              Community Program
              </div> */}
            </div>

          {/* Hero Content with reduced vertical spacing */}
          <div className="flex-grow flex flex-col justify-center max-w-2xl py-6 sm:py-8">
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Swim Lessons
            </h1>
            
            <p className="mt-4 sm:mt-6 text-xl text-white/90 max-w-xl">
              Learn to swim in a safe, supportive environment with our experienced instructors.
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="#register" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-[#0A3D73] bg-[#FFD700] hover:bg-white transition-colors duration-200"
              >
                Register Now
              </Link>
              
              <Link 
                href="#programs" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-white text-white hover:bg-white/10 transition-colors duration-200"
              >
                View Programs
              </Link>
            </div>
          </div>
          
          {/* Reduced space at the bottom */}
          <div className="h-6"></div>
        </div>
      </div>
    </>
  );
}
// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <div className="relative">
//       {/* Main Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image 
//           src="/image/learn-to-swim/learn-to-swim1.jpg" 
//           alt="Children learning to swim" 
//           fill
//           className="object-cover brightness-75"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D73]/90 via-[#0A3D73]/70 to-transparent"></div>
//       </div>

//       {/* Floating Mascots */}
//       <div className="absolute right-10 top-20 z-10 hidden lg:block">
//         <motion.div
//           initial={{ y: 0 }}
//           animate={{ y: [-10, 10, -10] }}
//           transition={{ repeat: Infinity, duration: 4 }}
//           className="relative h-24 w-24"
//         >
//           <Image 
//             src="/image/mascots/dolphin.jpg" 
//             alt="Dolphin mascot" 
//             fill
//             className="object-contain"
//           />
//         </motion.div>
//       </div>
      
//       <div className="absolute right-40 top-40 z-10 hidden lg:block">
//         <motion.div
//           initial={{ y: 0 }}
//           animate={{ y: [10, -10, 10] }}
//           transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
//           className="relative h-20 w-20"
//         >
//           <Image 
//             src="/image/mascots/starfish.jpg" 
//             alt="Starfish mascot" 
//             fill
//             className="object-contain"
//           />
//         </motion.div>
//       </div>
      
//       <div className="absolute right-20 bottom-20 z-10 hidden lg:block">
//         <motion.div
//           initial={{ y: 0 }}
//           animate={{ y: [-5, 5, -5] }}
//           transition={{ repeat: Infinity, duration: 3, delay: 1 }}
//           className="relative h-16 w-16"
//         >
//           <Image 
//             src="/image/mascots/clownfish.jpg" 
//             alt="Clownfish mascot" 
//             fill
//             className="object-contain"
//           />
//         </motion.div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 lg:py-32 max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-2xl"
//         >
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
//             Swim Lessons
//           </h1>
//           <p className="mt-6 text-xl text-white/90 max-w-xl">
//             Learn to swim in a safe, supportive environment with our experienced instructors.
//           </p>
          
//           {/* Benefit Highlights */}
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
//               <div className="h-10 w-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>
//               <p className="text-white/90 text-sm">Water safety skills for all ages</p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
//               <div className="h-10 w-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <p className="text-white/90 text-sm">Small class sizes, experienced instructors</p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
//               <div className="h-10 w-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                 </svg>
//               </div>
//               <p className="text-white/90 text-sm">State-of-the-art aquatic facility</p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-center">
//               <div className="h-10 w-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <p className="text-white/90 text-sm">Proven program with clear progression</p>
//             </div>
//           </div>
          
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mt-10 flex flex-col sm:flex-row gap-4"
//           >
//             <Link 
//               href="#register" 
//               className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-[#0A3D73] bg-[#FFD700] hover:bg-white transition-colors duration-200"
//             >
//               Register Now
//             </Link>
//             <Link 
//               href="#programs" 
//               className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-white text-white hover:bg-white/10 transition-colors duration-200"
//             >
//               View Programs
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
      
//       {/* Wave Overlay */}
//       <div className="absolute bottom-0 left-0 right-0 z-10">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
//           <path fill="#f7fafc" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

