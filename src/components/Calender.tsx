// 'use client';

// import React, { useState } from 'react';

// // Simple icon components to replace lucide-react
// const IconCalendar = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//     <line x1="16" y1="2" x2="16" y2="6"></line>
//     <line x1="8" y1="2" x2="8" y2="6"></line>
//     <line x1="3" y1="10" x2="21" y2="10"></line>
//   </svg>
// );

// const IconChevronDown = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="6 9 12 15 18 9"></polyline>
//   </svg>
// );

// const IconFilter = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
//   </svg>
// );

// const IconMenu = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <line x1="3" y1="12" x2="21" y2="12"></line>
//     <line x1="3" y1="6" x2="21" y2="6"></line>
//     <line x1="3" y1="18" x2="21" y2="18"></line>
//   </svg>
// );

// const IconSearch = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="11" cy="11" r="8"></circle>
//     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//   </svg>
// );

// const IconUser = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//     <circle cx="12" cy="7" r="4"></circle>
//   </svg>
// );

// const IconBell = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//     <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//   </svg>
// );

// const IconPlusCircle = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10"></circle>
//     <line x1="12" y1="8" x2="12" y2="16"></line>
//     <line x1="8" y1="12" x2="16" y2="12"></line>
//   </svg>
// );

// const IconMoreHorizontal = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="1"></circle>
//     <circle cx="19" cy="12" r="1"></circle>
//     <circle cx="5" cy="12" r="1"></circle>
//   </svg>
// );

// const IconChevronLeft = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="15 18 9 12 15 6"></polyline>
//   </svg>
// );

// const IconChevronRight = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <polyline points="9 18 15 12 9 6"></polyline>
//   </svg>
// );

// const SFGiantsCalendarApp = () => {
//   const [currentView, setCurrentView] = useState('month');
//   const [currentDate, setCurrentDate] = useState(new Date());
  
//   // Mock data for calendar events
//   const events = [
//     { id: 1, title: 'Giants vs. Dodgers', type: 'game', space: 'Main Field', start: '2025-04-15T13:00', end: '2025-04-15T16:00', status: 'confirmed' },
//     { id: 2, title: 'Corporate Event: Oracle', type: 'event', space: 'Club Level', start: '2025-04-16T18:00', end: '2025-04-16T22:00', status: 'confirmed' },
//     { id: 3, title: 'Field Maintenance', type: 'maintenance', space: 'Main Field', start: '2025-04-17T08:00', end: '2025-04-17T12:00', status: 'confirmed' },
//     { id: 4, title: 'Giants vs. Padres', type: 'game', space: 'Main Field', start: '2025-04-18T13:00', end: '2025-04-18T16:00', status: 'confirmed' },
//     { id: 5, title: 'Wedding Reception', type: 'event', space: 'Triples Alley', start: '2025-04-18T18:00', end: '2025-04-18T23:00', status: 'pending' },
//     { id: 6, title: 'Stadium Tour Group', type: 'event', space: 'Multiple', start: '2025-04-19T10:00', end: '2025-04-19T12:00', status: 'confirmed' },
//     { id: 7, title: 'Suite Equipment Upgrades', type: 'maintenance', space: 'Premium Suites', start: '2025-04-20T09:00', end: '2025-04-22T17:00', status: 'confirmed' },
//     { id: 8, title: 'Private Event: Salesforce', type: 'event', space: 'Club Level', start: '2025-04-21T19:00', end: '2025-04-21T23:00', status: 'pending' },
//   ];

//   // Generate days for the calendar grid
//   const generateCalendarDays = () => {
//     const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
//     const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
//     const days = [];
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       days.push({ day: null, isCurrentMonth: false });
//     }
    
//     for (let i = 1; i <= daysInMonth; i++) {
//       days.push({ day: i, isCurrentMonth: true });
//     }
    
//     return days;
//   };

//   const getMonthName = () => {
//     return currentDate.toLocaleString('default', { month: 'long' });
//   };
  
//   const getEventClass = (type) => {
//     switch(type) {
//       case 'game':
//         return 'bg-orange-100 border-l-4 border-orange-500 text-orange-700';
//       case 'event':
//         return 'bg-blue-100 border-l-4 border-blue-500 text-blue-700';
//       case 'maintenance':
//         return 'bg-gray-100 border-l-4 border-gray-500 text-gray-700';
//       default:
//         return 'bg-purple-100 border-l-4 border-purple-500 text-purple-700';
//     }
//   };
  
//   const getStatusClass = (status) => {
//     switch(status) {
//       case 'confirmed':
//         return 'bg-green-100 text-green-800';
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col bg-gray-50">
//       {/* Top Navigation */}
//       <header className="bg-white border-b border-gray-200">
//         <div className="px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex">
//               <div className="flex-shrink-0 flex items-center">
//                 <img className="h-8 w-auto" src="/api/placeholder/120/40" alt="SF Giants Logo" />
//               </div>
//               <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                 <a href="#" className="border-b-2 border-orange-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                   Calendar
//                 </a>
//                 <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                   Approvals
//                 </a>
//                 <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                   Spaces
//                 </a>
//                 <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
//                   Reports
//                 </a>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
//                   <span className="mr-2 h-4 w-4"><IconPlusCircle /></span>
//                   <span>New Event</span>
//                 </button>
//               </div>
//               <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
//                 <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
//                   <span className="h-6 w-6"><IconBell /></span>
//                 </button>
//                 <div className="ml-3 relative">
//                   <div>
//                     <button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
//                       <span className="sr-only">Open user menu</span>
//                       <span className="h-8 w-8 rounded-full bg-gray-100 p-1"><IconUser /></span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 flex overflow-hidden">
//         {/* Sidebar */}
//         <div className="hidden md:flex md:flex-shrink-0">
//           <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
//             <div className="px-4 pt-4 pb-2 border-b border-gray-200">
//               <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//             </div>

//             {/* Filter Sections */}
//             <div className="h-0 flex-1 flex flex-col overflow-y-auto">
//               <div className="px-4 pt-4 pb-2">
//                 <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Event Type</h3>
//                 <div className="mt-2 space-y-2">
//                   <div className="flex items-center">
//                     <input id="filter-game" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-game" className="ml-2 text-sm text-gray-700">Games</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-event" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-event" className="ml-2 text-sm text-gray-700">Events</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-maintenance" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-maintenance" className="ml-2 text-sm text-gray-700">Maintenance</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="px-4 pt-4 pb-2">
//                 <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Spaces</h3>
//                 <div className="mt-2 space-y-2">
//                   <div className="flex items-center">
//                     <input id="filter-field" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-field" className="ml-2 text-sm text-gray-700">Main Field</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-club" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-club" className="ml-2 text-sm text-gray-700">Club Level</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-suites" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-suites" className="ml-2 text-sm text-gray-700">Premium Suites</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-triples" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-triples" className="ml-2 text-sm text-gray-700">Triples Alley</label>
//                   </div>
//                   <div className="pt-2">
//                     <button className="text-sm text-orange-600 hover:text-orange-500">Show all spaces</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="px-4 pt-4 pb-2">
//                 <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Status</h3>
//                 <div className="mt-2 space-y-2">
//                   <div className="flex items-center">
//                     <input id="filter-confirmed" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-confirmed" className="ml-2 text-sm text-gray-700">Confirmed</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-pending" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-pending" className="ml-2 text-sm text-gray-700">Pending Approval</label>
//                   </div>
//                 </div>
//               </div>

//               <div className="px-4 pt-4 pb-2">
//                 <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Department</h3>
//                 <div className="mt-2 space-y-2">
//                   <div className="flex items-center">
//                     <input id="filter-baseball" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-baseball" className="ml-2 text-sm text-gray-700">Baseball Operations</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-events" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-events" className="ml-2 text-sm text-gray-700">Events</label>
//                   </div>
//                   <div className="flex items-center">
//                     <input id="filter-maintenance-dept" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
//                     <label htmlFor="filter-maintenance-dept" className="ml-2 text-sm text-gray-700">Maintenance</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Calendar Area */}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           {/* Calendar Header */}
//           <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
//             <div className="flex items-center justify-between">
//               <div className="flex-1 flex">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   {getMonthName()} {currentDate.getFullYear()}
//                 </h2>
//                 <div className="ml-6 flex space-x-1">
//                   <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
//                     <span className="h-5 w-5"><IconChevronLeft /></span>
//                   </button>
//                   <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
//                     <span className="h-5 w-5"><IconChevronRight /></span>
//                   </button>
//                 </div>
//                 <button className="ml-3 inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
//                   Today
//                 </button>
//               </div>
//               <div className="hidden sm:ml-6 sm:flex sm:items-center">
//                 <div className="relative">
//                   <div className="flex space-x-2">
//                     <button className={`${currentView === 'month' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('month')}>
//                       Month
//                     </button>
//                     <button className={`${currentView === 'week' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('week')}>
//                       Week
//                     </button>
//                     <button className={`${currentView === 'day' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('day')}>
//                       Day
//                     </button>
//                     <button className={`${currentView === 'list' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('list')}>
//                       List
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="ml-6 flex items-center">
//                 <div className="md:hidden">
//                   <button className="p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
//                     <span className="h-5 w-5"><IconFilter /></span>
//                   </button>
//                 </div>
//                 <div className="ml-3 relative">
//                   <div>
//                     <button className="p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
//                       <span className="h-5 w-5"><IconSearch /></span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Calendar Grid */}
//           <div className="flex-1 overflow-auto bg-white">
//             <div className="grid grid-cols-7 gap-px border-b border-gray-200 bg-gray-200">
//               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
//                 <div key={i} className="bg-white py-2">
//                   <div className="text-center text-sm text-gray-500 font-medium">{day}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-px bg-gray-200">
//               {generateCalendarDays().map((day, index) => (
//                 <div key={index} className={`min-h-32 bg-white ${!day.isCurrentMonth ? 'bg-gray-50' : ''}`}>
//                   {day.day !== null && (
//                     <>
//                       <div className="px-2 py-1 text-right text-sm">
//                         <div className={`font-medium ${day.day === 15 ? 'h-6 w-6 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto' : 'text-gray-900'}`}>
//                           {day.day}
//                         </div>
//                       </div>
                      
//                       {/* Show events for this day */}
//                       {day.day === 15 && (
//                         <div className="px-2 space-y-1">
//                           <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('game')}`}>
//                             1:00 PM - Giants vs. Dodgers
//                           </div>
//                         </div>
//                       )}
                      
//                       {day.day === 16 && (
//                         <div className="px-2 space-y-1">
//                           <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('event')}`}>
//                             6:00 PM - Corporate Event: Oracle
//                           </div>
//                         </div>
//                       )}
                      
//                       {day.day === 17 && (
//                         <div className="px-2 space-y-1">
//                           <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('maintenance')}`}>
//                             8:00 AM - Field Maintenance
//                           </div>
//                         </div>
//                       )}
                      
//                       {day.day === 18 && (
//                         <div className="px-2 space-y-1">
//                           <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('game')}`}>
//                             1:00 PM - Giants vs. Padres
//                           </div>
//                           <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('event')}`}>
//                             6:00 PM - Wedding Reception
//                           </div>
//                         </div>
//                       )}
                      
//                       {day.day === 19 && (
//                         <div className="px-2 space-y-1">
//                           <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('event')}`}>
//                             10:00 AM - Stadium Tour Group
//                           </div>
//                         </div>
//                       )}
                      
//                       {day.day >= 20 && day.day <= 22 && (
//                         <div className="px-2 space-y-1">
//                           {day.day === 20 && (
//                             <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('maintenance')}`}>
//                               9:00 AM - Suite Equipment Upgrades
//                             </div>
//                           )}
//                           {day.day === 21 && (
//                             <>
//                               <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('maintenance')}`}>
//                                 All Day - Suite Equipment Upgrades
//                               </div>
//                               <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('event')}`}>
//                                 7:00 PM - Private Event: Salesforce
//                               </div>
//                             </>
//                           )}
//                           {day.day === 22 && (
//                             <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('maintenance')}`}>
//                               Until 5:00 PM - Suite Equipment Upgrades
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Event Details Sidebar */}
//         <div className="hidden lg:block lg:flex-shrink-0 lg:order-last">
//           <div className="h-full relative flex flex-col w-80 border-l border-gray-200 bg-gray-50 overflow-y-auto">
//             <div className="border-b border-gray-200 px-6 py-4 bg-white">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-lg font-medium text-gray-900">Event Details</h2>
//                 <button className="text-gray-400 hover:text-gray-500">
//                   <span className="h-5 w-5"><IconMoreHorizontal /></span>
//                 </button>
//               </div>
//             </div>
            
//             <div className="px-6 py-4">
//               <div className="mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900">Giants vs. Dodgers</h3>
//                 <div className="text-sm text-gray-500 mt-1">April 15, 2025 • 1:00 PM - 4:00 PM</div>
//               </div>
              
//               <div className="mb-6">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-gray-500">Status</span>
//                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                     Confirmed
//                   </span>
//                 </div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-gray-500">Type</span>
//                   <span className="text-sm text-gray-900">Game</span>
//                 </div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-gray-500">Space</span>
//                   <span className="text-sm text-gray-900">Main Field</span>
//                 </div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-gray-500">Department</span>
//                   <span className="text-sm text-gray-900">Baseball Operations</span>
//                 </div>
//               </div>
              
//               <div className="mb-6">
//                 <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
//                 <p className="text-sm text-gray-700">
//                   Regular season game against the Los Angeles Dodgers. All standard gameday operations and staffing required.
//                 </p>
//               </div>
              
//               <div className="mb-6">
//                 <h4 className="text-sm font-medium text-gray-500 mb-2">Additional Spaces</h4>
//                 <div className="space-y-1">
//                   <div className="text-sm text-gray-700 flex justify-between">
//                     <span>Club Level</span>
//                     <span>1:00 PM - 4:00 PM</span>
//                   </div>
//                   <div className="text-sm text-gray-700 flex justify-between">
//                     <span>Premium Suites</span>
//                     <span>1:00 PM - 4:00 PM</span>
//                   </div>
//                   <div className="text-sm text-gray-700 flex justify-between">
//                     <span>Triples Alley</span>
//                     <span>1:00 PM - 4:00 PM</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="text-sm font-medium text-gray-500 mb-2">Connected Systems</h4>
//                 <div className="space-y-1">
//                   <div className="text-sm text-gray-700 flex justify-between">
//                     <span>Tickets.Com</span>
//                     <span className="text-orange-600">View →</span>
//                   </div>
//                   <div className="text-sm text-gray-700 flex justify-between">
//                     <span>Tripleseat</span>
//                     <span className="text-orange-600">View →</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SFGiantsCalendarApp;


// 5. Space Management Mockup
const SpaceManagementMockup = () => {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="mockup-header text-sm text-gray-500 p-2 bg-gray-100 border-b border-gray-200">
          Space Management Interface
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Space Management</h1>
            <div className="flex">
              <button className="px-4 py-2 bg-orange-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-orange-700">
                Add New Space
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                    <svg className="h-6 w-6 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Spaces
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          24
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Available Today
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          18
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Maintenance Mode
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          6
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col mb-8">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Space Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Capacity
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Department
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Main Field</div>
                          <div className="text-sm text-gray-500">Primary baseball diamond</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Field</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">41,915</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Baseball Operations</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Available
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a href="#" className="text-orange-600 hover:text-orange-900 mr-3">Edit</a>
                          <a href="#" className="text-orange-600 hover:text-orange-900">View</a>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Club Level</div>
                          <div className="text-sm text-gray-500">Premium seating and dining</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Club</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">5,200</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Events</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Available
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a href="#" className="text-orange-600 hover:text-orange-900 mr-3">Edit</a>
                          <a href="#" className="text-orange-600 hover:text-orange-900">View</a>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Premium Suites</div>
                          <div className="text-sm text-gray-500">Luxury box seating</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Suite</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">2,800</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Events</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Maintenance
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a href="#" className="text-orange-600 hover:text-orange-900 mr-3">Edit</a>
                          <a href="#" className="text-orange-600 hover:text-orange-900">View</a>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Triples Alley</div>
                          <div className="text-sm text-gray-500">Event space with field views</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Event Space</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">500</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Events</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Available
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a href="#" className="text-orange-600 hover:text-orange-900 mr-3">Edit</a>
                          <a href="#" className="text-orange-600 hover:text-orange-900">View</a>
                        </td>
                      </tr>
                      
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Bullpen</div>
                          <div className="text-sm text-gray-500">Pitcher warmup area</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Field</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">20</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">Baseball Operations</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Unavailable
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a href="#" className="text-orange-600 hover:text-orange-900 mr-3">Edit</a>
                          <a href="#" className="text-orange-600 hover:text-orange-900">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Space Details - Main Field
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Configuration and approval settings.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Main Baseball Field
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Type
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Field
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Capacity
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    41,915
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Managing Department
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Baseball Operations
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Approval Required From
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divideimport React, { useState } from 'react';
  
  // Simple icon components
  const IconCalendar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
  
  const IconApprovals = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4"></polyline>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
    </svg>
  );
  
  const IconSpaces = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );
  
  const IconReports = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
  
  const IconPlus = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
  
  const IconFilter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );
  
  const IconUser = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
  
  const IconBell = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );
  
  const IconChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
  
  const IconChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
  
  const MockupSelector = () => {
    const [currentMockup, setCurrentMockup] = useState('calendar');
    
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="p-4 max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">SF Giants Calendar System UI Mockups</h1>
          
          <div className="mb-6 bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-3">Select Mockup View:</h2>
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 rounded-md ${currentMockup === 'calendar' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentMockup('calendar')}
              >
                Calendar View
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${currentMockup === 'event-detail' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentMockup('event-detail')}
              >
                Event Detail
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${currentMockup === 'event-creation' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentMockup('event-creation')}
              >
                Event Creation
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${currentMockup === 'approvals' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentMockup('approvals')}
              >
                Approvals Dashboard
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${currentMockup === 'space-management' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentMockup('space-management')}
              >
                Space Management
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${currentMockup === 'reports' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentMockup('reports')}
              >
                Reports & Analytics
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${currentMockup === 'mobile' ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setCurrentMockup('mobile')}
              >
                Mobile View
              </button>
            </div>
          </div>
          
          {currentMockup === 'calendar' && <CalendarViewMockup />}
          {currentMockup === 'event-detail' && <EventDetailMockup />}
          {currentMockup === 'event-creation' && <EventCreationMockup />}
          {currentMockup === 'approvals' && <ApprovalsDashboardMockup />}
          {currentMockup === 'space-management' && <SpaceManagementMockup />}
          {currentMockup === 'reports' && <ReportsMockup />}
          {currentMockup === 'mobile' && <MobileViewMockup />}
        </div>
      </div>
    );
  };
  
  // 1. Calendar View Mockup
  const CalendarViewMockup = () => {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="mockup-header text-sm text-gray-500 p-2 bg-gray-100 border-b border-gray-200">
          Calendar View - Main Interface
        </div>
        
        {/* App Shell */}
        <div className="h-[600px] flex flex-col">
          {/* Top Navigation */}
          <header className="bg-white border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <div className="h-8 w-8 bg-orange-600 rounded-md"></div>
                    <span className="ml-2 text-xl font-bold text-gray-900">SF Giants Calendar</span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a href="#" className="border-b-2 border-orange-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      <span className="mr-1"><IconCalendar /></span>
                      Calendar
                    </a>
                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      <span className="mr-1"><IconApprovals /></span>
                      Approvals
                    </a>
                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      <span className="mr-1"><IconSpaces /></span>
                      Spaces
                    </a>
                    <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                      <span className="mr-1"><IconReports /></span>
                      Reports
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none">
                      <span className="mr-2"><IconPlus /></span>
                      <span>New Event</span>
                    </button>
                  </div>
                  <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                    <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                      <span className="h-6 w-6"><IconBell /></span>
                    </button>
                    <div className="ml-3 relative">
                      <div>
                        <button className="bg-white rounded-full flex text-sm focus:outline-none" id="user-menu">
                          <span className="h-8 w-8 rounded-full bg-gray-200 p-1"><IconUser /></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
  
          {/* Main Content */}
          <main className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:flex md:flex-shrink-0">
              <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
                <div className="px-4 pt-4 pb-2 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                </div>
  
                {/* Filter Sections */}
                <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                  <div className="px-4 pt-4 pb-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Event Type</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input id="filter-game" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-game" className="ml-2 text-sm text-gray-700">Games</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-event" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-event" className="ml-2 text-sm text-gray-700">Events</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-maintenance" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-maintenance" className="ml-2 text-sm text-gray-700">Maintenance</label>
                      </div>
                    </div>
                  </div>
  
                  <div className="px-4 pt-4 pb-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Spaces</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input id="filter-field" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-field" className="ml-2 text-sm text-gray-700">Main Field</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-club" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-club" className="ml-2 text-sm text-gray-700">Club Level</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-suites" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-suites" className="ml-2 text-sm text-gray-700">Premium Suites</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-triples" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-triples" className="ml-2 text-sm text-gray-700">Triples Alley</label>
                      </div>
                      <div className="pt-2">
                        <button className="text-sm text-orange-600 hover:text-orange-500">Show all spaces</button>
                      </div>
                    </div>
                  </div>
  
                  <div className="px-4 pt-4 pb-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Status</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input id="filter-confirmed" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-confirmed" className="ml-2 text-sm text-gray-700">Confirmed</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-pending" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-pending" className="ml-2 text-sm text-gray-700">Pending Approval</label>
                      </div>
                    </div>
                  </div>
  
                  <div className="px-4 pt-4 pb-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Department</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input id="filter-baseball" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-baseball" className="ml-2 text-sm text-gray-700">Baseball Operations</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-events" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-events" className="ml-2 text-sm text-gray-700">Events</label>
                      </div>
                      <div className="flex items-center">
                        <input id="filter-maintenance-dept" type="checkbox" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" defaultChecked />
                        <label htmlFor="filter-maintenance-dept" className="ml-2 text-sm text-gray-700">Maintenance</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Calendar Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 flex">
                    <h2 className="text-xl font-semibold text-gray-900">
                      April 2025
                    </h2>
                    <div className="ml-6 flex space-x-1">
                      <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none">
                        <span className="h-5 w-5"><IconChevronLeft /></span>
                      </button>
                      <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none">
                        <span className="h-5 w-5"><IconChevronRight /></span>
                      </button>
                    </div>
                    <button className="ml-3 inline-flex items-center px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                      Today
                    </button>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <div className="relative">
                      <div className="flex space-x-2">
                        <button className="bg-orange-100 text-orange-800 px-3 py-1 rounded-md text-sm font-medium">
                          Month
                        </button>
                        <button className="bg-white text-gray-600 px-3 py-1 rounded-md text-sm font-medium">
                          Week
                        </button>
                        <button className="bg-white text-gray-600 px-3 py-1 rounded-md text-sm font-medium">
                          Day
                        </button>
                        <button className="bg-white text-gray-600 px-3 py-1 rounded-md text-sm font-medium">
                          List
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center">
                    <div className="md:hidden">
                      <button className="p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                        <span className="h-5 w-5"><IconFilter /></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Calendar Grid */}
              <div className="flex-1 overflow-auto bg-white">
                <div className="grid grid-cols-7 gap-px border-b border-gray-200 bg-gray-200">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                    <div key={i} className="bg-white py-2">
                      <div className="text-center text-sm text-gray-500 font-medium">{day}</div>
                    </div>
                  ))}
                </div>
  
                <div className="grid grid-cols-7 gap-px bg-gray-200">
                  {Array(35).fill(null).map((_, index) => {
                    const day = index - 2;
                    const isCurrentMonth = day > 0 && day <= 30;
                    const dayNumber = isCurrentMonth ? day : null;
                    
                    return (
                      <div key={index} className={`min-h-32 bg-white ${!isCurrentMonth ? 'bg-gray-50' : ''}`}>
                        {dayNumber !== null && (
                          <>
                            <div className="px-2 py-1 text-right text-sm">
                              <div className={`font-medium ${dayNumber === 15 ? 'h-6 w-6 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto' : 'text-gray-900'}`}>
                                {dayNumber}
                              </div>
                            </div>
                            
                            {/* Example events */}
                            {dayNumber === 15 && (
                              <div className="px-2 space-y-1">
                                <div className="px-2 py-1 text-xs rounded-sm truncate bg-orange-100 border-l-4 border-orange-500 text-orange-700">
                                  1:00 PM - Giants vs. Dodgers
                                </div>
                              </div>
                            )}
                            
                            {dayNumber === 16 && (
                              <div className="px-2 space-y-1">
                                <div className="px-2 py-1 text-xs rounded-sm truncate bg-blue-100 border-l-4 border-blue-500 text-blue-700">
                                  6:00 PM - Corporate Event
                                </div>
                              </div>
                            )}
                            
                            {dayNumber === 17 && (
                              <div className="px-2 space-y-1">
                                <div className="px-2 py-1 text-xs rounded-sm truncate bg-gray-100 border-l-4 border-gray-500 text-gray-700">
                                  8:00 AM - Field Maintenance
                                </div>
                              </div>
                            )}
                            
                            {dayNumber === 18 && (
                              <div className="px-2 space-y-1">
                                <div className="px-2 py-1 text-xs rounded-sm truncate bg-orange-100 border-l-4 border-orange-500 text-orange-700">
                                  1:00 PM - Giants vs. Padres
                                </div>
                                <div className="px-2 py-1 text-xs rounded-sm truncate bg-blue-100 border-l-4 border-blue-500 text-blue-700">
                                  6:00 PM - Wedding Reception
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  };
  
  // 2. Event Detail Mockup
  const EventDetailMockup = () => {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="mockup-header text-sm text-gray-500 p-2 bg-gray-100 border-b border-gray-200">
          Event Detail View
        </div>
        
        <div className="flex min-h-[500px]">
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-2">
                  Game
                </span>
                <h1 className="text-2xl font-bold text-gray-900">Giants vs. Dodgers</h1>
                <p className="text-gray-500">April 15, 2025 • 1:00 PM - 4:00 PM</p>
              </div>
              <div className="flex">
                <button className="mr-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Edit
                </button>
                <button className="px-4 py-2 bg-orange-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-orange-700">
                  Duplicate
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Event Details</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Status</p>
                        <p className="mt-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Confirmed
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Department</p>
                        <p className="mt-1 text-sm text-gray-900">Baseball Operations</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Contact</p>
                        <p className="mt-1 text-sm text-gray-900">John Smith</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Attendance</p>
                        <p className="mt-1 text-sm text-gray-900">40,000 (estimated)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Description</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      Regular season game against the Los Angeles Dodgers. All standard gameday operations and staffing required.
                    </p>
                  </div>
                </div>
                
                                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Approval Status</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Baseball Operations</p>
                          <p className="text-xs text-gray-500">Approved on Apr 10, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Facility Management</p>
                          <p className="text-xs text-gray-500">Approved on Apr 11, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                