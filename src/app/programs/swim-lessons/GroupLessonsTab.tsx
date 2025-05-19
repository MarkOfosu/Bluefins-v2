'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LevelMascot from './LevelMascot';

// Level details components
const LevelDetails = ({ level, isOpen, toggle }: { level: string, isOpen: boolean, toggle: () => void }) => {
  const levelInfo = {
    tidepool: {
      title: "Tidepool", 
      ages: "3-5",
      ratio: "4/1",
      description: "The goal of TIDEPOOL is to get students comfortable and confident in the water while learning to be safe and capable swimmers. They will learn basic skills and proper body alignment.",
      prerequisites: "No prerequisites",
      mascots: ["jellyfish", "anemone"],
      benchmarks: [
        {
          name: "Jellyfish",
          mascot: "jellyfish",
          skills: [
            "Follow directions",
            "No distress/crying",
            "Make balloon face/blow bubbles",
            "Intentional kicking"
          ]
        },
        {
          name: "Anemone",
          mascot: "anemone",
          skills: [
            "Submersion face to face",
            "Independent horizontal swim with exhale (for 6 feet)",
            "Sit jump with climb out unassisted",
            "Back float with assistance"
          ]
        }
      ]
    },
    beach: {
      title: "Beach",
      ages: "5 & up",
      ratio: "5/1",
      description: "The goal of BEACH is to prepare students 5 years and older to be comfortable in the water, learn basic water safety and move from novice to confident capable swimmers.",
      prerequisites: "5 years and up or have completed TIDEPOOL",
      mascots: ["clams", "starfish", "hermitcrab"],
      benchmarks: [
        {
          name: "Clams",
          mascot: "clams",
          skills: [
            "Tidepool skills (above)",
            "3 breaths (side) with assistance",
            "1 side breath no equipment",
            "Roll over front-back-front with assistance",
            "Kicking on back with assistance (6 feet)"
          ]
        },
        {
          name: "Starfish",
          mascot: "starfish",
          skills: [
            "3 breaths no equipment",
            "Roll front/back/front unassisted",
            "Swim on back with equipment (12 feet)"
          ]
        },
        {
          name: "Hermit Crabs",
          mascot: "hermitcrab",
          skills: [
            "Back swim unassisted kicking (12 feet)",
            "3 breaths swimming, roll over front to back unassisted",
            "Back float unassisted (15 seconds)"
          ]
        }
      ]
    },
    waves: {
      title: "Waves",
      ages: "6 & up",
      ratio: "5/1",
      description: "The goal of WAVES is to continue with water safety and build on essential swim skills which include proper body position and stroke technique. WAVES is the most important level as it builds on the foundation of BEACH and develops coordination.",
      prerequisites: "Completed all skills of BEACH or comparable programs",
      mascots: ["dolphin", "rockfish", "squid"],
      benchmarks: [
        {
          name: "Dolphins",
          mascot: "dolphin",
          skills: [
            "Boiling water back kicks (13 yards)",
            "Underwater swim (13 yards)",
            "Proper pencil jump",
            "Front float (15 seconds)"
          ]
        },
        {
          name: "Rockfish",
          mascot: "rockfish",
          skills: [
            "Sidekicks with kickboard (15 yards) arm on ear",
            "Proper streamline",
            "Tread water 1 minute",
            "Freestyle arms with kickboard"
          ]
        },
        {
          name: "Squid",
          mascot: "squid",
          skills: [
            "Backstroke (13 yards)",
            "Freestyle with proper body position (13 yards)",
            "Tread water to surface dive and recover object from bottom of pool"
          ]
        }
      ]
    },
    reef: {
      title: "Reef",
      ages: "6 & up",
      ratio: "5/1",
      description: "The goal of REEF is to enhance the coordination and efficiency of strokes learned in WAVES and develop proper kicks and arms for short axis strokes.",
      prerequisites: "Completed all skills in Waves or comparable program",
      mascots: ["seahorse", "octopus", "clownfish"],
      benchmarks: [
        {
          name: "Sea Horse",
          mascot: "seahorse",
          skills: [
            "Dolphin kicks (13 yards)",
            "Back kicks with streamline arms",
            "Whip kicks on back with kickboard"
          ]
        },
        {
          name: "Octopus",
          mascot: "octopus",
          skills: [
            "Streamline to freestyle (25 yards)",
            "Backstroke properly (25 yards)",
            "Underwater swim (20 yards)"
          ]
        },
        {
          name: "Clownfish",
          mascot: "clownfish",
          skills: [
            "Breaststroke arms with glide (13 yards)",
            "Breaststroke kicks (13 yards)",
            "Butterfly arms (13 yards)",
            "Tread water for 2 minutes (egg beater)"
          ]
        }
      ]
    },
    miniBarracuda: {
      title: "Mini Barracuda",
      ages: "6 & up",
      ratio: "5/1",
      description: "The goal of MINI BARRACUDA is to develop all four competition strokes and endurance to graduate from the Ocean lesson program. Successful completion of this course will qualify a swimmer to swim at an entry competition level for BAC swim team.",
      prerequisites: "Completed all skills in REEF or comparable programs",
      mascots: ["seaturtle", "wahoo", "stingray"],
      benchmarks: [
        {
          name: "Sea Turtle",
          mascot: "seaturtle",
          skills: [
            "Backstroke with streamline start for 13 yards",
            "Streamline dolphin kick to freestyle for 13 yards",
            "Breaststroke for 13 yards (competition stroke)",
            "Butterfly for 13 yards (competition stroke)"
          ]
        },
        {
          name: "Wahoo",
          mascot: "wahoo",
          skills: [
            "Legal turns on all four strokes (one hand vs two hands)",
            "Clearly understand circle swim",
            "Clearly understand use of clock",
            "Clearly understand flags for backstroke"
          ]
        },
        {
          name: "Sting Ray",
          mascot: "stingray",
          skills: [
            "Comfortably swim freestyle for 25 yards (proper body position)",
            "Comfortably swim backstroke for 25 yards (proper body position)",
            "Demonstrate competitive breaststroke for 25 yards",
            "Demonstrate competitive butterfly for 25 yards"
          ]
        }
      ]
    },
    parentMe: {
      title: "Parent & Me",
      ages: "6 months - 3 years",
      ratio: "varies",
      description: "Instructor guided water familiarity class. We use equipment, songs and play to develop your child&apos;s comfort and safety in the water.",
      prerequisites: "None",
      mascots: [],
      benchmarks: []
    }
  };

  const info = levelInfo[level as keyof typeof levelInfo];
  
  return (
    <div className="mb-6">
      <button
        onClick={toggle} 
        className={`w-full bg-blue-50 p-4 rounded-lg flex justify-between items-center ${isOpen ? 'rounded-b-none border-b-2 border-[#0A3D73]' : 'border-l-4 border-[#0A3D73]'}`}
      >
        <div className="flex items-center">
          {info.mascots.length > 0 && (
            <div className="mr-3 hidden sm:block">
              <LevelMascot mascot={info.mascots[0]} size="sm" />
            </div>
          )}
          <div>
            <h4 className="text-xl font-semibold text-[#0A3D73]">{info.title}</h4>
            <p className="text-gray-600 mt-1">Ages: {info.ages} • Ratio: {info.ratio}</p>
          </div>
        </div>
        <svg 
          className={`w-6 h-6 text-[#0A3D73] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div className="bg-white p-6 rounded-b-lg border border-t-0 border-gray-200 shadow-sm">
          <p className="text-gray-600 mb-4">{info.description}</p>
          
          {info.prerequisites && (
            <div className="mb-4">
              <h5 className="text-md font-medium text-[#0A3D73]">Prerequisites:</h5>
              <p className="text-gray-600">{info.prerequisites}</p>
            </div>
          )}
          
          {info.benchmarks.length > 0 && (
            <div>
              <h5 className="text-md font-medium text-[#0A3D73] mb-3">Benchmarks:</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {info.benchmarks.map((benchmark, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center mb-3">
                      <LevelMascot mascot={benchmark.mascot} size="sm" className="mr-2" />
                      <h6 className="font-medium text-[#0A3D73]">{benchmark.name}</h6>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {benchmark.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function GroupLessonsTab() {
  const [openLevel, setOpenLevel] = useState<string>('');
  const toggleLevel = (level: string) => {
    setOpenLevel(openLevel === level ? '' : level);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h3 className="text-2xl font-bold text-[#0A3D73]">Ocean Learn to Swim Program</h3>
        <p className="mt-4 text-gray-600">
          Our group lessons follow the Ocean Learn to Swim program, providing a supportive environment where children develop water confidence and swimming skills alongside peers at similar levels.
        </p>
        
        {/* Featured Image */}
        <div className="mt-6 mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="/image/learn-to-swim/learn-to-swim3.jpg"
              alt="Children taking group swim lessons" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white font-medium text-lg">Small group classes with experienced instructors</p>
            </div>
          </div>
        </div>
        
        {/* Program Levels */}
        <div className="mt-8 space-y-2">
          <LevelDetails 
            level="parentMe" 
            isOpen={openLevel === 'parentMe'} 
            toggle={() => toggleLevel('parentMe')} 
          />
          <LevelDetails 
            level="tidepool" 
            isOpen={openLevel === 'tidepool'} 
            toggle={() => toggleLevel('tidepool')} 
          />
          <LevelDetails 
            level="beach" 
            isOpen={openLevel === 'beach'} 
            toggle={() => toggleLevel('beach')} 
          />
          <LevelDetails 
            level="waves" 
            isOpen={openLevel === 'waves'} 
            toggle={() => toggleLevel('waves')} 
          />
          <LevelDetails 
            level="reef" 
            isOpen={openLevel === 'reef'} 
            toggle={() => toggleLevel('reef')} 
          />
          <LevelDetails 
            level="miniBarracuda" 
            isOpen={openLevel === 'miniBarracuda'} 
            toggle={() => toggleLevel('miniBarracuda')} 
          />
        </div>
      </div>
      
      {/* Key Details */}
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h4 className="text-xl font-bold text-[#0A3D73] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Program Details
          </h4>
          <ul className="mt-4 space-y-4">
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">4-week sessions, Once per week</span>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-gray-600">$140 for 4 lessons (4 weeks)</span>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-600">30 minutes per lesson</span>
            </li>
            <li className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0A3D73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-gray-600">Small class sizes with appropriate swimmer/instructor ratios
              </span>
            </li>
          </ul>
          
          <div className="mt-8">
            <a
              href="https://secure.rec1.com/CA/burlingame-aquatics-ca/catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-[#0A3D73] hover:bg-[#0A3D73]/90 transition-colors duration-200"
            >
              Register for Group Lessons
            </a>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="relative h-48">
            <Image 
              src="/image/learn-to-swim/learn-to-swim4.jpg"
              alt="Child learning to swim" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white">
            <h4 className="font-medium text-[#0A3D73]">Building Confidence</h4>
            <p className="text-sm text-gray-600">Our instructors create a fun and supportive environment</p>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md">
          <div className="relative h-48">
            <Image 
              src="/image/learn-to-swim/learn-to-swim2.jpg" 
              alt="Swim instructor teaching" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 bg-white">
            <h4 className="font-medium text-[#0A3D73]">Developing Skills</h4>
            <p className="text-sm text-gray-600">From basic water safety to stroke technique</p>
          </div>
        </div>
      </div>
    </div>
  );
}