import React from 'react';

const ApprovalsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Pending Approvals</h1>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-500">Filter:</span>
                <select className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  <option value="all">All Spaces</option>
                  <option value="main-field">Main Field</option>
                  <option value="club-level">Club Level</option>
                  <option value="premium-suites">Premium Suites</option>
                </select>
              </div>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
              <ul className="divide-y divide-gray-200">
                <li>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <span className="text-orange-600 font-medium text-sm">GE</span>
                        </span>
                        <div className="ml-4">
                          <h2 className="text-sm font-medium text-gray-900">
                            Corporate Event: Salesforce
                          </h2>
                          <div className="text-xs text-gray-500 mt-1">
                            <span>May 20, 2025</span>
                            <span className="mx-1">•</span>
                            <span>6:00 PM - 10:00 PM</span>
                            <span className="mx-1">•</span>
                            <span>Requested by Sarah Johnson</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                          Needs Review
                        </span>
                        <span className="text-xs text-gray-500">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Club Level
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm sm:mt-0">
                        <button className="px-3 py-1 bg-white text-xs font-medium text-gray-700 border border-gray-300 rounded-md mr-2 hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-xs font-medium text-red-700 border border-red-200 rounded-md mr-2 hover:bg-red-200">
                          Reject
                        </button>
                        <button className="px-3 py-1 bg-green-600 text-xs font-medium text-white border border-green-600 rounded-md hover:bg-green-700">
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">WE</span>
                        </span>
                        <div className="ml-4">
                          <h2 className="text-sm font-medium text-gray-900">
                            Wedding Reception: Thomas & Garcia
                          </h2>
                          <div className="text-xs text-gray-500 mt-1">
                            <span>May 18, 2025</span>
                            <span className="mx-1">•</span>
                            <span>6:00 PM - 11:00 PM</span>
                            <span className="mx-1">•</span>
                            <span>Requested by Mark Williams</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                          Needs Review
                        </span>
                        <span className="text-xs text-gray-500">
                          1 day ago
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Triples Alley
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm sm:mt-0">
                        <button className="px-3 py-1 bg-white text-xs font-medium text-gray-700 border border-gray-300 rounded-md mr-2 hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-xs font-medium text-red-700 border border-red-200 rounded-md mr-2 hover:bg-red-200">
                          Reject
                        </button>
                        <button className="px-3 py-1 bg-green-600 text-xs font-medium text-white border border-green-600 rounded-md hover:bg-green-700">
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-600 font-medium text-sm">MT</span>
                        </span>
                        <div className="ml-4">
                          <h2 className="text-sm font-medium text-gray-900">
                            Field Maintenance: Turf Replacement
                          </h2>
                          <div className="text-xs text-gray-500 mt-1">
                            <span>May 22-24, 2025</span>
                            <span className="mx-1">•</span>
                            <span>All Day</span>
                            <span className="mx-1">•</span>
                            <span>Requested by Robert Chen</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                          Needs Review
                        </span>
                        <span className="text-xs text-gray-500">
                          5 hours ago
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Main Field
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm sm:mt-0">
                        <button className="px-3 py-1 bg-white text-xs font-medium text-gray-700 border border-gray-300 rounded-md mr-2 hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-xs font-medium text-red-700 border border-red-200 rounded-md mr-2 hover:bg-red-200">
                          Reject
                        </button>
                        <button className="px-3 py-1 bg-green-600 text-xs font-medium text-white border border-green-600 rounded-md hover:bg-green-700">
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">
                View All Activity
              </a>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                <li>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <span className="text-orange-600 font-medium text-sm">GM</span>
                        </span>
                        <div className="ml-4">
                          <h2 className="text-sm font-medium text-gray-900">
                            Giants vs. Cubs
                          </h2>
                          <div className="text-xs text-gray-500 mt-1">
                            <span>May 15, 2025</span>
                            <span className="mx-1">•</span>
                            <span>1:05 PM - 4:30 PM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Approved
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Main Field
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500 sm:mt-0">
                        Approved by you • Today at 9:15 AM
                      </div>
                    </div>
                  </div>
                </li>
                
                <li>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-medium text-sm">CE</span>
                        </span>
                        <div className="ml-4">
                          <h2 className="text-sm font-medium text-gray-900">
                            Annual Charity Gala
                          </h2>
                          <div className="text-xs text-gray-500 mt-1">
                            <span>May 12, 2025</span>
                            <span className="mx-1">•</span>
                            <span>7:00 PM - 11:00 PM</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Rejected
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Club Level
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-500 sm:mt-0">
                        Rejected by Sarah Miller • Yesterday at 3:45 PM
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalsDashboard;