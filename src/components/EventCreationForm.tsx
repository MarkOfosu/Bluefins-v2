import React from 'react';

const EventCreationForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Create New Event</h1>
              <div className="flex">
                <button className="mr-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-orange-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-orange-700">
                  Create Event
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Event Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 mb-1">
                        Event Title
                      </label>
                      <input
                        type="text"
                        id="event-title"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter event title"
                        defaultValue="Giants vs. Athletics"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Event Type
                      </label>
                      <select
                        id="event-type"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue="game"
                      >
                        <option value="game">Game</option>
                        <option value="event">Corporate Event</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="start-date"
                          className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          defaultValue="2025-05-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-1">
                          Start Time
                        </label>
                        <input
                          type="time"
                          id="start-time"
                          className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          defaultValue="13:05"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">
                          End Date
                        </label>
                        <input
                          type="date"
                          id="end-date"
                          className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          defaultValue="2025-05-10"
                        />
                      </div>
                      <div>
                        <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 mb-1">
                          End Time
                        </label>
                        <input
                          type="time"
                          id="end-time"
                          className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          defaultValue="16:30"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department
                      </label>
                      <select
                        id="department"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue="baseball_ops"
                      >
                        <option value="baseball_ops">Baseball Operations</option>
                        <option value="events">Events</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows={3}
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter event description"
                        defaultValue="Regular season game against the Oakland Athletics."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Space Selection</h2>
                  
                  <div className="border border-gray-300 rounded-md overflow-hidden">
                    <div className="max-h-64 overflow-y-auto">
                      <ul className="divide-y divide-gray-200">
                        <li className="p-4 hover:bg-gray-50">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <input
                                id="space-main-field"
                                name="spaces"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                defaultChecked
                              />
                            </div>
                            <div className="ml-3 flex-1">
                              <label htmlFor="space-main-field" className="font-medium text-gray-700 block text-sm">Main Field</label>
                              <p className="text-gray-500 text-xs">Primary baseball diamond and seating</p>
                            </div>
                            <div className="ml-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Available
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="p-4 hover:bg-gray-50">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <input
                                id="space-club-level"
                                name="spaces"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                defaultChecked
                              />
                            </div>
                            <div className="ml-3 flex-1">
                              <label htmlFor="space-club-level" className="font-medium text-gray-700 block text-sm">Club Level</label>
                              <p className="text-gray-500 text-xs">Premium seating and dining area</p>
                            </div>
                            <div className="ml-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Available
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="p-4 hover:bg-gray-50">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <input
                                id="space-premium-suites"
                                name="spaces"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                defaultChecked
                              />
                            </div>
                            <div className="ml-3 flex-1">
                              <label htmlFor="space-premium-suites" className="font-medium text-gray-700 block text-sm">Premium Suites</label>
                              <p className="text-gray-500 text-xs">Luxury box seating with amenities</p>
                            </div>
                            <div className="ml-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Available
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="p-4 hover:bg-gray-50">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <input
                                id="space-triples-alley"
                                name="spaces"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 flex-1">
                              <label htmlFor="space-triples-alley" className="font-medium text-gray-700 block text-sm">Triples Alley</label>
                              <p className="text-gray-500 text-xs">Event space with field views</p>
                            </div>
                            <div className="ml-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Pending Approval
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="p-4 hover:bg-gray-50 bg-gray-50">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <input
                                id="space-bullpen"
                                name="spaces"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                disabled
                              />
                            </div>
                            <div className="ml-3 flex-1">
                              <label htmlFor="space-bullpen" className="font-medium text-gray-500 block text-sm">Bullpen</label>
                              <p className="text-gray-500 text-xs">Pitcher warmup area</p>
                            </div>
                            <div className="ml-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                Unavailable
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">
                    * Some spaces may require additional approval before confirmation
                  </p>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">External Systems</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="sync-tickets"
                        name="sync-tickets"
                        type="checkbox"
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="sync-tickets" className="ml-2 block text-sm text-gray-700">
                        Sync with Tickets.Com
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="sync-salesforce"
                        name="sync-salesforce"
                        type="checkbox"
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="sync-salesforce" className="ml-2 block text-sm text-gray-700">
                        Sync with Salesforce
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="sync-tripleseat"
                        name="sync-tripleseat"
                        type="checkbox"
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        defaultChecked
                      />
                      <label htmlFor="sync-tripleseat" className="ml-2 block text-sm text-gray-700">
                        Sync with Tripleseat
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6 flex justify-end">
              <button className="mr-3 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Save as Draft
              </button>
              <button className="px-6 py-2 bg-orange-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-orange-700">
                Submit for Approval
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;