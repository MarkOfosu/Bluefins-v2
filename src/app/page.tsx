import { Metadata } from 'next';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Programs from '../components/Programs';
import FacilitiesSection from '../components/FacilitiesSection';
import CoachesOverview from '../components/CoachesOverview';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Ghana BlueFins Swim Club | World-Class Swimming Excellence',
  description: 'Ghana BlueFins is the premier swim club in Accra, offering world-class competitive swimming, learn-to-swim programs, and elite coaching for swimmers of all ages and abilities.',
};

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <AboutSection />
      <Programs />
      <FacilitiesSection />
      <CoachesOverview />
      <Contact />
    </main>
  );
}


// 'use client'
// import React, { useState } from 'react';
// import CalendarView from '@/components/CalendarView';
// import EventDetailView from '@/components/EventDetailView';
// import EventCreationForm from '@/components/EventCreationForm';
// import ApprovalsDashboard from '@/components/ApprovalsDashboard';
// import { SpaceManagement, ReportsDashboard } from '@/components/SpaceManagement';

// export default function Home() {
//   const [activeView, setActiveView] = useState('calendar');

//   // Navigation handler
//   const handleNavigation = (view) => {
//     setActiveView(view);
//   };

//   // Render the appropriate component based on activeView
//   const renderView = () => {
//     switch (activeView) {
//       case 'calendar':
//         return <CalendarView />;
//       case 'event-detail':
//         return <EventDetailView />;
//       case 'event-creation':
//         return <EventCreationForm />;
//       case 'approvals':
//         return <ApprovalsDashboard />;
//       case 'space-management':
//         return <SpaceManagement />;
//       case 'reports':
//         return <ReportsDashboard />;
//       default:
//         return <CalendarView />;
//     }
//   };

//   return (
//     <main className="bg-white min-h-screen">
//       {/* Navigation tabs */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex space-x-8">
//               <div className="flex items-center">
//                 <img 
//                   src="/logo-placeholder.png" 
//                   alt="SF Giants" 
//                   className="h-8 w-auto"
//                   onError={(e) => e.target.src = 'https://via.placeholder.com/32x32'} 
//                 />
//                 <span className="ml-2 text-xl font-bold text-gray-900">Oracle Park Calendar</span>
//               </div>
//               <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
//                 <button
//                   onClick={() => handleNavigation('calendar')}
//                   className={`${
//                     activeView === 'calendar'
//                       ? 'border-orange-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
//                 >
//                   Calendar
//                 </button>
//                 <button
//                   onClick={() => handleNavigation('approvals')}
//                   className={`${
//                     activeView === 'approvals'
//                       ? 'border-orange-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
//                 >
//                   Approvals
//                 </button>
//                 <button
//                   onClick={() => handleNavigation('space-management')}
//                   className={`${
//                     activeView === 'space-management'
//                       ? 'border-orange-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
//                 >
//                   Spaces
//                 </button>
//                 <button
//                   onClick={() => handleNavigation('reports')}
//                   className={`${
//                     activeView === 'reports'
//                       ? 'border-orange-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
//                 >
//                   Reports
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button 
//                 onClick={() => handleNavigation('event-creation')}
//                 className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//               >
//                 New Event
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className="flex-1">
//         {renderView()}
//       </div>
      
//       {/* Demo panel - remove in production */}
//       <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
//         <div className="text-sm font-medium text-gray-900 mb-2">Demo Navigation</div>
//         <div className="flex flex-wrap gap-2">
//           <button 
//             onClick={() => handleNavigation('calendar')}
//             className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
//           >
//             Calendar
//           </button>
//           <button 
//             onClick={() => handleNavigation('event-detail')}
//             className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
//           >
//             Event Detail
//           </button>
//           <button 
//             onClick={() => handleNavigation('event-creation')}
//             className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
//           >
//             New Event
//           </button>
//           <button 
//             onClick={() => handleNavigation('approvals')}
//             className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
//           >
//             Approvals
//           </button>
//           <button 
//             onClick={() => handleNavigation('space-management')}
//             className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
//           >
//             Spaces
//           </button>
//           <button 
//             onClick={() => handleNavigation('reports')}
//             className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
//           >
//             Reports
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }