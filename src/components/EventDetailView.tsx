import React from 'react';

const EventDetailView = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
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
              </div>
              
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Spaces</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="divide-y divide-gray-200">
                      <li className="py-3 flex justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Main Field</p>
                          <p className="text-xs text-gray-500">Primary</p>
                        </div>
                        <p className="text-sm text-gray-500">1:00 PM - 4:00 PM</p>
                      </li>
                      <li className="py-3 flex justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Club Level</p>
                          <p className="text-xs text-gray-500">All sections</p>
                        </div>
                        <p className="text-sm text-gray-500">1:00 PM - 4:00 PM</p>
                      </li>
                      <li className="py-3 flex justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Premium Suites</p>
                          <p className="text-xs text-gray-500">All suites</p>
                        </div>
                        <p className="text-sm text-gray-500">1:00 PM - 4:00 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">External Systems</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Tickets.Com</span>
                        <a href="#" className="text-sm text-orange-600 hover:text-orange-500">
                          View Details →
                        </a>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Salesforce</span>
                        <a href="#" className="text-sm text-orange-600 hover:text-orange-500">
                          View Details →
                        </a>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Tripleseat</span>
                        <a href="#" className="text-sm text-orange-600 hover:text-orange-500">
                          View Details →
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Activity Log</h2>
                  <div className="bg-gray-50 rounded-lg p-4 max-h-36 overflow-y-auto">
                    <ul className="space-y-3">
                      <li className="text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Kevin Johnson</span> approved this event
                        <span className="block mt-1">Apr 11, 2025 at 9:15 AM</span>
                      </li>
                      <li className="text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Sarah Miller</span> approved this event
                        <span className="block mt-1">Apr 10, 2025 at 3:45 PM</span>
                      </li>
                      <li className="text-xs text-gray-500">
                        <span className="font-medium text-gray-700">James Wilson</span> created this event
                        <span className="block mt-1">Apr 8, 2025 at 11:30 AM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailView;