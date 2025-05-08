import React, { useState } from 'react';

// Simple icon components
const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
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

const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState('month');
  
  // Generate days for the calendar grid
  const generateCalendarDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }
    
    return days;
  };

  const getMonthName = () => {
    return currentDate.toLocaleString('default', { month: 'long' });
  };
  
  const getEventClass = (type) => {
    switch(type) {
      case 'game':
        return 'bg-orange-100 border-l-4 border-orange-500 text-orange-700';
      case 'event':
        return 'bg-blue-100 border-l-4 border-blue-500 text-blue-700';
      case 'maintenance':
        return 'bg-gray-100 border-l-4 border-gray-500 text-gray-700';
      default:
        return 'bg-purple-100 border-l-4 border-purple-500 text-purple-700';
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
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
                  Approvals
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Spaces
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
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
                  {getMonthName()} {currentDate.getFullYear()}
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
                    <button className={`${currentView === 'month' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('month')}>
                      Month
                    </button>
                    <button className={`${currentView === 'week' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('week')}>
                      Week
                    </button>
                    <button className={`${currentView === 'day' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('day')}>
                      Day
                    </button>
                    <button className={`${currentView === 'list' ? 'bg-orange-100 text-orange-800' : 'bg-white text-gray-600'} px-3 py-1 rounded-md text-sm font-medium`} onClick={() => setCurrentView('list')}>
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
              {generateCalendarDays().map((day, index) => (
                <div key={index} className={`min-h-32 bg-white ${!day.isCurrentMonth ? 'bg-gray-50' : ''}`}>
                  {day.day !== null && (
                    <>
                      <div className="px-2 py-1 text-right text-sm">
                        <div className={`font-medium ${day.day === 15 ? 'h-6 w-6 rounded-full bg-orange-600 text-white flex items-center justify-center mx-auto' : 'text-gray-900'}`}>
                          {day.day}
                        </div>
                      </div>
                      
                      {/* Example events */}
                      {day.day === 15 && (
                        <div className="px-2 space-y-1">
                          <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('game')}`}>
                            1:00 PM - Giants vs. Dodgers
                          </div>
                        </div>
                      )}
                      
                      {day.day === 16 && (
                        <div className="px-2 space-y-1">
                          <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('event')}`}>
                            6:00 PM - Corporate Event
                          </div>
                        </div>
                      )}
                      
                      {day.day === 17 && (
                        <div className="px-2 space-y-1">
                          <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('maintenance')}`}>
                            8:00 AM - Field Maintenance
                          </div>
                        </div>
                      )}
                      
                      {day.day === 18 && (
                        <div className="px-2 space-y-1">
                          <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('game')}`}>
                            1:00 PM - Giants vs. Padres
                          </div>
                          <div className={`px-2 py-1 text-xs rounded-sm truncate ${getEventClass('event')}`}>
                            6:00 PM - Wedding Reception
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalendarView;