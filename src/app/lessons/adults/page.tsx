// Part 1: Imports and Page Setup
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Adult Learn-to-Swim | Ghana BlueFins Swim Club',
  description: 'Swimming lessons for adults of all abilities, from beginners to advanced swimmers, in a supportive environment.',
}

export default function AdultLearnToSwim() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pb-16 md:pb-20">
        <div className="absolute inset-0 h-[60vh]">
          <div className="w-full h-full relative">
            <Image
              src="/images/image7.jpg"
              alt="Adult swimming lesson"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738]/90 to-[#0A1738]/60"></div>
          </div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20 md:pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 text-white/90 text-sm font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFD700] mr-2"></span>
              Adult Swimming Lessons
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              It&apos;s Never Too Late <span className="text-[#FFD700]">To Learn</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Our adult swim program provides a supportive environment for swimmers of all abilities, from complete beginners to those looking to refine their technique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/register"
                className="px-8 py-3.5 bg-[#FFD700] text-[#0A1738] rounded-lg font-bold hover:bg-white transition-colors inline-flex items-center justify-center"
              >
                Register Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <a 
                href="#levels"
                className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Explore Program
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave shape separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="w-full">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,128L80,122.7C160,117,320,107,480,112C640,117,800,139,960,133.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 -mt-6 md:-mt-12 relative z-20">
        {/* Program Benefits */}
        <section className="mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-[#0A1738]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A1738] mb-3">Supportive Environment</h3>
                <p className="text-gray-600">Our specially trained instructors understand adult learners, providing patience and techniques to overcome water anxiety.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-[#0A1738]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A1738] mb-3">Customized Instruction</h3>
                <p className="text-gray-600">With small class sizes and flexible options, we adapt our teaching to your specific needs, goals, and comfort level.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-[#0A1738]/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A1738] mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">With evening and weekend options, our program fits into your busy life, making it easier to commit to learning this essential skill.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Swimming Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0A1738] to-[#1a3a6c] text-white rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-10 lg:p-12">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <span className="w-10 h-1 bg-[#FFD700] mr-4"></span>
                  Benefits of Swimming for Adults
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </span>
                        Physical Health
                      </h3>
                      <p className="text-white/90 pl-11">
                        Swimming is a full-body workout that improves cardiovascular fitness, builds muscle strength, and enhances flexibility—all while being gentle on joints. It&apos;s an ideal exercise for adults of all ages.
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </span>
                        Stress Reduction
                      </h3>
                      <p className="text-white/90 pl-11">
                        The rhythmic nature of swimming combined with controlled breathing has a meditative quality that reduces stress and anxiety, promoting mental wellbeing and relaxation.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </span>
                        Essential Life Skill
                      </h3>
                      <p className="text-white/90 pl-11">
                        Learning to swim as an adult provides you with essential water safety skills and the confidence to enjoy water-related activities, from relaxing beach vacations to boating with friends.
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </span>
                        Social Connection
                      </h3>
                      <p className="text-white/90 pl-11">
                        Our group lessons provide an opportunity to meet others with similar goals. Many of our adult students form lasting friendships and swimming groups that continue beyond formal lessons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#0A1738] to-[#1a3a6c] text-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-8 md:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="w-10 h-1 bg-[#FFD700] mr-4"></span>
                    Program Overview
                  </h2>
                  
                  <p className="text-white/90 mb-6">
                    Our Adult Learn-to-Swim program addresses the unique challenges and needs of adult learners. We provide a structured, progressive curriculum that takes you from your first experience in the water to becoming a confident, skilled swimmer.
                  </p>
                  
                  <p className="text-white/90 mb-8">
                    We understand that as an adult, learning to swim may come with anxiety or apprehension. Our instructors are specially trained to work with adult learners, providing patience, encouragement, and techniques to overcome fear of water.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-[#FFD700] font-bold text-2xl mb-1">4:1</div>
                      <div className="text-white/90 text-sm">Maximum student-to-instructor ratio</div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-[#FFD700] font-bold text-2xl mb-1">60min</div>
                      <div className="text-white/90 text-sm">Group lesson duration</div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-[#FFD700] font-bold text-2xl mb-1">6 weeks</div>
                      <div className="text-white/90 text-sm">Standard session length</div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-[#FFD700] font-bold text-2xl mb-1">4 levels</div>
                      <div className="text-white/90 text-sm">Progressive skill-building curriculum</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 relative">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/image7.jpg" 
                      fill 
                      alt="Adult learning to swim" 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A1738]/50 md:bg-gradient-to-r"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Skill Levels */}
        <section id="levels" className="mb-20 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-1 w-10 bg-[#0A1738] mr-4"></span>
                <h2 className="text-3xl font-bold text-[#0A1738]">Our Skill Levels</h2>
                <span className="h-1 w-10 bg-[#0A1738] ml-4"></span>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our progressive curriculum is designed for adult learners at every stage, from those with water anxiety to those refining competitive strokes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Level 1: Water Comfort & Safety */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                <div className="h-2 bg-gradient-to-r from-[#78b6e4] to-[#5da3d8]"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1738] group-hover:text-[#0A1738]/80 transition-colors">Level 1: Water Comfort & Safety</h3>
                      <p className="text-sm text-gray-500">First-time adult swimmers</p>
                    </div>
                    <div className="w-10 h-10 bg-[#78b6e4]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#78b6e4] font-bold">1</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#0A1738] mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#78b6e4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Skills Taught:
                    </h4>
                    <ul className="grid grid-cols-1 gap-y-1">
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#78b6e4] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Water adjustment & anxiety management</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#78b6e4] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Breath control and submerging</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#78b6e4] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Floating with and without support</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#78b6e4] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Basic water safety</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#78b6e4] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Recovery techniques</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f0f7ff] rounded-lg p-3 text-sm text-[#1a67a3] italic">
                    Perfect for adults with little or no water experience
                  </div>
                </div>
              </div>
              
              {/* Level 2: Fundamental Strokes */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                <div className="h-2 bg-gradient-to-r from-[#5da3d8] to-[#4190cc]"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1738] group-hover:text-[#0A1738]/80 transition-colors">Level 2: Fundamental Strokes</h3>
                      <p className="text-sm text-gray-500">Comfortable in water</p>
                    </div>
                    <div className="w-10 h-10 bg-[#5da3d8]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#5da3d8] font-bold">2</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#0A1738] mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#5da3d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Skills Taught:
                    </h4>
                    <ul className="grid grid-cols-1 gap-y-1">
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#5da3d8] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Front and back gliding</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#5da3d8] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Rhythmic breathing</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#5da3d8] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Freestyle arm and leg movements</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#5da3d8] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Backstroke introduction</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#5da3d8] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Treading water basics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f0f7ff] rounded-lg p-3 text-sm text-[#1a67a3] italic">
                    For adults who can float but need basic strokes
                  </div>
                </div>
              </div>
              
              {/* Level 3: Stroke Development */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                <div className="h-2 bg-gradient-to-r from-[#4190cc] to-[#277cc0]"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1738] group-hover:text-[#0A1738]/80 transition-colors">Level 3: Stroke Development</h3>
                      <p className="text-sm text-gray-500">Building on the basics</p>
                    </div>
                    <div className="w-10 h-10 bg-[#4190cc]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#4190cc] font-bold">3</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#0A1738] mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4190cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Skills Taught:
                    </h4>
                    <ul className="grid grid-cols-1 gap-y-1">
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#4190cc] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Freestyle with side breathing</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#4190cc] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Backstroke refinement</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#4190cc] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Breaststroke introduction</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#4190cc] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Endurance building</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#4190cc] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Extended treading water</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f0f7ff] rounded-lg p-3 text-sm text-[#1a67a3] italic">
                    For adults with basic strokes seeking improvement
                  </div>
                </div>
              </div>
              
              {/* Level 4: Stroke Refinement & Fitness */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                <div className="h-2 bg-gradient-to-r from-[#277cc0] to-[#0A1738]"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1738] group-hover:text-[#0A1738]/80 transition-colors">Level 4: Stroke Refinement</h3>
                      <p className="text-sm text-gray-500">Advanced technique & fitness</p>
                    </div>
                    <div className="w-10 h-10 bg-[#277cc0]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#277cc0] font-bold">4</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#0A1738] mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#277cc0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Skills Taught:
                    </h4>
                    <ul className="grid grid-cols-1 gap-y-1">
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#277cc0] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Advanced stroke technique</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#277cc0] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>All four competitive strokes</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#277cc0] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Turns and streamlining</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#277cc0] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fitness swimming principles</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#277cc0] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Interval training introduction</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-[#f0f7ff] rounded-lg p-3 text-sm text-[#1a67a3] italic">
                    For confident swimmers focusing on fitness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Programs Section */}
        <section className="mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-1 w-10 bg-[#0A1738] mr-4"></span>
                <h2 className="text-3xl font-bold text-[#0A1738]">Specialized Programs</h2>
                <span className="h-1 w-10 bg-[#0A1738] ml-4"></span>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer focused programs designed to address specific needs and goals of adult swimmers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Water Phobia Program */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-[#0A1738]/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Water Phobia Overcome</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-700 mb-4">
                      A specialized program for adults with significant fear of water. This 4-session intensive course uses gradual exposure techniques combined with relaxation strategies to help you overcome water anxiety.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>One-on-one private instruction</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>4 sessions of 45-minutes each</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Specialized anxiety-reduction techniques</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mt-4">
                    <span className="font-medium text-[#0A1738]">Package Price</span>
                    <span className="text-[#0A1738] font-bold">GHS 1,500</span>
                  </div>
                </div>
              </div>
              
              {/* Fitness Swimming */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-[#1a3a6c]/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Fitness Swimming</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-700 mb-4">
                      For adults who can already swim and want to improve their fitness. This program focuses on building endurance, improving technique, and learning training principles for fitness swimming.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Small group format (max 6 swimmers)</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>8-week program, 2 sessions per week</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Personalized training plans</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mt-4">
                    <span className="font-medium text-[#0A1738]">Package Price</span>
                    <span className="text-[#0A1738] font-bold">GHS 2,000</span>
                  </div>
                </div>
              </div>
              
              {/* Stroke Technique Clinic */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-[#277cc0]/80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Stroke Technique Clinic</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-700 mb-4">
                      A focused workshop to improve your stroke technique. Each session focuses on one competitive stroke with video analysis and personalized feedback to enhance efficiency and speed.
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>2-hour intensive workshop</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Video analysis and feedback</span>
                      </li>
                      <li className="flex items-start text-sm text-gray-600">
                        <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Technique drills and corrections</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mt-4">
                    <span className="font-medium text-[#0A1738]">Workshop Price</span>
                    <span className="text-[#0A1738] font-bold">GHS 400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Information & Pricing */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="h-2 bg-[#0A1738]"></div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-[#0A1738]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0A1738] mb-1">Class Information</h2>
                      <p className="text-gray-500 text-sm">Everything you need to know about our swimming lessons</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="text-lg font-semibold text-[#0A1738] mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Class Options
                      </h3>
                      <p className="text-gray-600 mb-2">Choose the format that works best for your learning style:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span><span className="font-medium">Group Classes:</span> 60-minute sessions with maximum 4 students</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span><span className="font-medium">Semi-Private:</span> 45-minute sessions with 2 students</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span><span className="font-medium">Private Lessons:</span> 30-minute one-on-one instruction</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="text-lg font-semibold text-[#0A1738] mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Schedule
                      </h3>
                      <p className="text-gray-600 mb-2">Flexible scheduling options to accommodate busy adult lives:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Weekday evening classes (6:00 PM - 8:00 PM)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Saturday morning and afternoon sessions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Sunday afternoon sessions</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A1738] mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        What to Bring
                      </h3>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Comfortable swimsuit</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Towel</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Goggles (recommended)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Swim cap (optional but recommended for long hair)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-[#FFD700] mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Change of clothes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="h-2 bg-[#FFD700]"></div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-[#FFD700]/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#0A1738] mb-1">Pricing & Registration</h2>
                      <p className="text-gray-500 text-sm">Flexible options to fit your schedule and budget</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="text-lg font-semibold text-[#0A1738] mb-3">Group Lessons</h3>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">6-Week Session (weekly)</span>
                          <span className="text-[#0A1738] font-bold">GHS 800</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">6-Week Session (twice weekly)</span>
                          <span className="text-[#0A1738] font-bold">GHS 1,500</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">Registration Fee</span>
                          <span className="text-[#0A1738] font-bold">GHS 100</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">*Registration fee is one-time for new students</div>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="text-lg font-semibold text-[#0A1738] mb-3">Semi-Private & Private</h3>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">Semi-Private Lesson</span>
                          <span className="text-[#0A1738] font-bold">GHS 250</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">Semi-Private Package (6)</span>
                          <span className="text-[#0A1738] font-bold">GHS 1,350</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">Private Lesson</span>
                          <span className="text-[#0A1738] font-bold">GHS 350</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">Private Package (6)</span>
                          <span className="text-[#0A1738] font-bold">GHS 1,800</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A1738] mb-3">Special Programs</h3>
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">Water Phobia Overcome (4 private)</span>
                          <span className="text-[#0A1738] font-bold">GHS 1,500</span>
                        </div>
                        <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
                          <span className="font-medium text-[#0A1738]">Stroke Technique Workshop</span>
                          <span className="text-[#0A1738] font-bold">GHS 400</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Link 
                        href="/register"
                        className="block w-full bg-[#0A1738] text-white text-center font-bold py-3.5 rounded-lg hover:bg-[#0A1738]/90 transition-colors"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        / Part 6: Class Schedule

        {/* Class Schedule Section */}
        <section className="mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-1 w-10 bg-[#0A1738] mr-4"></span>
                <h2 className="text-3xl font-bold text-[#0A1738]">Class Schedule</h2>
                <span className="h-1 w-10 bg-[#0A1738] ml-4"></span>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer flexible scheduling options to accommodate busy adult lives. All classes below run in 6-week sessions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                  <thead>
                    <tr className="bg-[#0A1738] text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold">Day</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Morning</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Afternoon</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Evening</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0A1738]/10 flex items-center justify-center">
                            <span className="text-[#0A1738] font-medium">M</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Monday</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        10:00 AM - 11:00 AM<br/>
                        <span className="text-xs text-gray-500">Level 1 & 2</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        6:00 PM - 7:00 PM<br/>
                        <span className="text-xs text-gray-500">Level 1 & 2</span>
                        <br/>
                        7:15 PM - 8:15 PM<br/>
                        <span className="text-xs text-gray-500">Level 3 & 4</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0A1738]/10 flex items-center justify-center">
                            <span className="text-[#0A1738] font-medium">T</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Tuesday</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        2:00 PM - 3:00 PM<br/>
                        <span className="text-xs text-gray-500">Women Only (All Levels)</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        6:00 PM - 7:00 PM<br/>
                        <span className="text-xs text-gray-500">Water Phobia Program</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0A1738]/10 flex items-center justify-center">
                            <span className="text-[#0A1738] font-medium">W</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Wednesday</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        10:00 AM - 11:00 AM<br/>
                        <span className="text-xs text-gray-500">Level 1 & 2</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        6:00 PM - 7:00 PM<br/>
                        <span className="text-xs text-gray-500">Level 1 & 2</span>
                        <br/>
                        7:15 PM - 8:15 PM<br/>
                        <span className="text-xs text-gray-500">Level 3 & 4</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0A1738]/10 flex items-center justify-center">
                            <span className="text-[#0A1738] font-medium">T</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Thursday</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        2:00 PM - 3:00 PM<br/>
                        <span className="text-xs text-gray-500">Men Only (All Levels)</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        6:00 PM - 7:00 PM<br/>
                        <span className="text-xs text-gray-500">Fitness Swimming</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0A1738]/10 flex items-center justify-center">
                            <span className="text-[#0A1738] font-medium">F</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Friday</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        11:00 AM - 12:00 PM<br/>
                        <span className="text-xs text-gray-500">Senior Swim (55+)</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        5:30 PM - 7:30 PM<br/>
                        <span className="text-xs text-gray-500">Private Lessons (By Appointment)</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0A1738]/10 flex items-center justify-center">
                            <span className="text-[#0A1738] font-medium">S</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Saturday</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        9:00 AM - 10:00 AM<br/>
                        <span className="text-xs text-gray-500">Level 1 & 2</span>
                        <br/>
                        10:15 AM - 11:15 AM<br/>
                        <span className="text-xs text-gray-500">Level 3 & 4</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        1:00 PM - 4:00 PM<br/>
                        <span className="text-xs text-gray-500">Private Lessons (By Appointment)</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#0A1738]/10 flex items-center justify-center">
                            <span className="text-[#0A1738] font-medium">S</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Sunday</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        2:00 PM - 3:00 PM<br/>
                        <span className="text-xs text-gray-500">Level 1 & 2</span>
                        <br/>
                        3:15 PM - 4:15 PM<br/>
                        <span className="text-xs text-gray-500">Level 3 & 4</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Note:</span> Private lessons are available by appointment throughout the week. Please contact us to schedule.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0A1738] hover:bg-[#0A1738]/90"
              >
                Reserve Your Spot
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#0A1738] to-[#1a3a6c]">
              <div className="p-8 md:p-10 lg:p-12">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center mb-4">
                    <span className="h-1 w-10 bg-[#FFD700] mr-4"></span>
                    <h2 className="text-3xl font-bold text-white">Success Stories</h2>
                    <span className="h-1 w-10 bg-[#FFD700] ml-4"></span>
                  </div>
                  <p className="text-white/80 max-w-2xl mx-auto">
                    Hear from adults who have transformed their relationship with water through our program
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                    <p className="text-white/90 mb-6">I never learned to swim as a child and was terrified of water. At 45, I finally decided to face my fear. The instructors at BlueFins were incredible - understanding, patient, and encouraging. Six weeks later, I can swim the length of the pool!</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#FFD700]/30 text-[#FFD700] flex items-center justify-center font-bold mr-3">F</div>
                      <div>
                        <p className="font-bold text-white">Francis K., 45</p>
                        <p className="text-xs text-white/70">Overcame 40+ years of water fear</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                    <p className="text-white/90 mb-6">I could stay afloat but never learned proper technique. After just two months in the Adult program, my stroke efficiency has improved dramatically. Swimming has become my favorite form of exercise, and I&apos;ve lost 5kg!</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#FFD700]/30 text-[#FFD700] flex items-center justify-center font-bold mr-3">A</div>
                      <div>
                        <p className="font-bold text-white">Akosua M., 38</p>
                        <p className="text-xs text-white/70">Fitness swimmer</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                    <p className="text-white/90 mb-6">As someone in my 60s, I was worried I&apos;d be out of place, but BlueFins has students of all ages. The instructors modified techniques to work with my joint issues, and I&apos;ve found swimming to be the perfect low-impact exercise for me.</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#FFD700]/30 text-[#FFD700] flex items-center justify-center font-bold mr-3">J</div>
                      <div>
                        <p className="font-bold text-white">Joseph A., 63</p>
                        <p className="text-xs text-white/70">Senior swimmer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-1 w-10 bg-[#0A1738] mr-4"></span>
                <h2 className="text-3xl font-bold text-[#0A1738]">Frequently Asked Questions</h2>
                <span className="h-1 w-10 bg-[#0A1738] ml-4"></span>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our Adult Learn-to-Swim program? Find answers to common questions below.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#0A1738]">I&apos;m terrified of water. Can you really help me?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#0A1738]">Will I be in a class with much younger/more advanced swimmers?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#0A1738]">How long will it take me to learn to swim?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#0A1738]">Is there an age limit for adult swimming lessons?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#0A1738]">Do you offer women-only or men-only classes?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0A1738]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center mt-6">
                <button className="px-6 py-2 text-[#0A1738] font-medium hover:text-[#0A1738]/70 transition-colors flex items-center mx-auto">
                  <span>View All FAQs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-8 md:p-10 lg:p-12">
                  <h2 className="text-3xl font-bold text-white mb-4">It&apos;s Never Too Late to Learn</h2>
                  <p className="text-xl text-white/90 mb-8">
                    Join the thousands of adults who have discovered the joy, freedom, and health benefits of swimming through our program.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/register"
                      className="px-8 py-3.5 bg-[#FFD700] text-[#0A1738] rounded-lg font-bold hover:bg-white transition-colors inline-flex items-center justify-center"
                    >
                      Register Now
                    </Link>
                    <Link 
                      href="/contact"
                      className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                
                <div className="md:col-span-2 relative hidden md:block">
                  <div className="absolute inset-0">
                    <Image 
                      src="/images/image7.jpg" 
                      fill 
                      alt="Adult swimming" 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738] to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}