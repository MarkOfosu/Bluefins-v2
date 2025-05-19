'use client';

import React, { useState } from 'react';

// Import components
import HeroSection from './HeroSection';
import PhilosophySection from './Philosophy';
import GroupLessonsTab from './GroupLessonsTab';
import PrivateLessonsTab from './PrivateLessonsTab';
import ContactStrip from './ContactStrip';
import MainNavigation from './MainNavigation';

const SwimLessonsPage = () => {
  const [activeTab, setActiveTab] = useState('group');

  return (
    // <ProgramLayout programId="swim-lessons">
   <>
    <div className="bg-white">
     
      {/* Floating Register Button appears as you scroll */}
      {/* <FloatingRegisterButton /> */}
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Navigation */}
      <MainNavigation activeTab={activeTab} />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Programs Section */}
      <div id="programs" className="py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A3D73] sm:text-4xl text-center">Programs</h2>
          
          {/* Tabs */}
          <div className="mt-8 flex border-b border-gray-200 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('group')}
              aria-label="Group Lessons"
              className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-lg ${
                activeTab === 'group'
                  ? 'border-[#FFD700] text-[#0A3D73]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Group Lessons
            </button>
            <button
              onClick={() => setActiveTab('private')}
              aria-label="Private Lessons"
              className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-lg ${
                activeTab === 'private'
                  ? 'border-[#FFD700] text-[#0A3D73]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Private Lessons
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-12">
            {activeTab === 'group' && <GroupLessonsTab />}
            {activeTab === 'private' && <PrivateLessonsTab />}
          </div>
        </div>
      </div>

    

      {/* Contact Strip */}
      <ContactStrip />
    </div>
    </>
    // </ProgramLayout>
  );
};

export default SwimLessonsPage;