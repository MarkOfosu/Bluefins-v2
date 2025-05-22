import Link from 'next/link';

export const metadata = {
  title: 'Swimming Lessons | Ghana BlueFins Swim Club',
  description: 'Learn to swim programs for all ages and abilities at Ghana BlueFins Swim Club, with professional instructors in a safe environment.',
}

export default function LessonsPage() {
  return (
    <main className="bg-white">
      <div className="pb-16">
        {/* Hero Section with Background Image */}
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738]/90 to-[#1E3A8A]/80">
            <div className="absolute inset-0 bg-[url('/images/image6.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
          </div>
          
          <div className="relative h-full flex flex-col justify-center px-6 md:px-10 pt-16 max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Swim Lessons</h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-10">
                Learn to swim in a safe, supportive environment with our experienced instructors.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/register"
                  className="bg-[#FFD700] text-[#0A1738] px-8 py-3.5 rounded-lg font-bold hover:bg-[#e6c200] transition-colors"
                >
                  Register Now
                </Link>
                <Link 
                  href="#programs" 
                  className="bg-white/10 text-white border border-white/30 backdrop-blur-sm px-8 py-3.5 rounded-lg font-bold hover:bg-white/20 transition-colors"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="bg-white py-8 shadow-md relative z-10 -mt-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between max-w-5xl mx-auto">
              <Link href="#programs" className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#0A1738] flex items-center justify-center text-white mb-2 group-hover:bg-[#1E3A8A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-[#0A1738] font-medium">Programs</span>
              </Link>
              
              <Link href="#kids-section" className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#0A1738] flex items-center justify-center text-white mb-2 group-hover:bg-[#1E3A8A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-[#0A1738] font-medium">Kids Lessons</span>
              </Link>
              
              <Link href="#adults-section" className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#0A1738] flex items-center justify-center text-white mb-2 group-hover:bg-[#1E3A8A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-[#0A1738] font-medium">Adult Lessons</span>
              </Link>
              
              <Link href="#private-section" className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#0A1738] flex items-center justify-center text-white mb-2 group-hover:bg-[#1E3A8A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-[#0A1738] font-medium">Private Lessons</span>
              </Link>
              
              <Link href="/register" className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#0A1738] flex items-center justify-center text-white mb-2 group-hover:bg-[#1E3A8A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-[#0A1738] font-medium">Book Now</span>
              </Link>
              
              <Link href="#faq" className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-full bg-[#0A1738] flex items-center justify-center text-white mb-2 group-hover:bg-[#1E3A8A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[#0A1738] font-medium">FAQ</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div id="programs" className="container mx-auto px-4 md:px-6 pt-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Our Swimming Programs</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Kids Learn-to-Swim Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                <div className="relative h-52">
                  <div className="absolute inset-0 bg-[url('/images/image6.jpg')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Kids Learn-to-Swim</h3>
                    <p className="text-white text-sm">Ages 3-14</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Age-appropriate lessons that build skills progressively while making water safety fun and engaging.
                  </p>
                  <Link 
                    href="#kids-section"
                    className="block w-full text-center bg-[#0A1738] text-white py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              
              {/* Adult Learn-to-Swim Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                <div className="relative h-52">
                  <div className="absolute inset-0 bg-[url('/images/image7.jpg')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Adult Learn-to-Swim</h3>
                    <p className="text-white text-sm">Ages 18+</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Programs specially designed for adult learners, whether you&rsquo;re overcoming water anxiety or refining technique.
                  </p>
                  <Link 
                    href="#adults-section"
                    className="block w-full text-center bg-[#0A1738] text-white py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              
              {/* Private Lessons Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                <div className="relative h-52">
                  <div className="absolute inset-0 bg-[url('/public/lts2.jpeg')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">Private Lessons</h3>
                    <p className="text-white text-sm">All Ages</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Personalized one-on-one instruction tailored to your specific needs and learning pace.
                  </p>
                  <Link 
                    href="#private-section"
                    className="block w-full text-center bg-[#0A1738] text-white py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Kids Section */}
          <section id="kids-section" className="mb-16 pt-8 scroll-mt-32">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-[url('/images/image6.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738] to-[#0A1738]/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white text-center">Kids Learn-to-Swim Programs</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-700 mb-6 text-lg">
                    Our kids&rsquo; swimming lessons are designed to help children develop water confidence, proper technique, and essential water safety skills in a fun and supportive environment.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#0A1738]">Program Features</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Six Progressive Levels:</span> From water acclimatization to advanced stroke techniques</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Small Class Sizes:</span> Maximum 6:1 student-to-teacher ratio</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Water Safety Focus:</span> Essential safety skills integrated into every lesson</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Fun Learning Environment:</span> Engaging activities that make learning enjoyable</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Achievement System:</span> Regular progress reports and skill badges</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Qualified Instructors:</span> Certified teachers with specialized training</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#0A1738]">Skill Levels</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Level 1: Water Explorers</h4>
                      <p className="text-gray-700 text-sm">First water experiences, basic floating, and comfort in the water.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Level 2: Water Confidence</h4>
                      <p className="text-gray-700 text-sm">Submerging, independent floating, and basic arm movements.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Level 3: Stroke Introduction</h4>
                      <p className="text-gray-700 text-sm">Introduction to front crawl, backstroke, and deep water confidence.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Level 4: Stroke Development</h4>
                      <p className="text-gray-700 text-sm">Refining front crawl and backstroke, introducing breaststroke.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Level 5: Stroke Refinement</h4>
                      <p className="text-gray-700 text-sm">All four competitive strokes and endurance building.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Level 6: Swim Team Prep</h4>
                      <p className="text-gray-700 text-sm">Advanced technique, turns, and competitive swimming skills.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/register"
                      className="bg-[#0A1738] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                    >
                      Register for Kids Lessons
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Adults Section */}
          <section id="adults-section" className="mb-16 pt-8 scroll-mt-32">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-[url('/images/image7.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738] to-[#0A1738]/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white text-center">Adult Swimming Lessons</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-700 mb-6 text-lg">
                    It&rsquo;s never too late to learn to swim! Our adult swim programs create a supportive environment for adults of all skill levels, from complete beginners to those looking to refine their technique.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#0A1738]">Program Features</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Adult-Focused Teaching:</span> Methods specifically designed for adult learners</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Small Group Sizes:</span> Maximum 4:1 student-to-teacher ratio</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Supportive Environment:</span> No judgment, just encouragement</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Flexible Scheduling:</span> Options designed to fit busy adult lifestyles</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Personalized Approach:</span> Programs adjusted to individual needs and goals</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Water Confidence Focus:</span> Special attention to anxiety and fear barriers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#0A1738]">Class Options</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Beginner Adult Classes</h4>
                      <p className="text-gray-700 mb-2">For adults with little to no swimming experience or those with water anxiety.</p>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Water acclimation and basic safety</li>
                        <li>• Floating and breathing techniques</li>
                        <li>• Basic stroke introduction</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Intermediate/Advanced</h4>
                      <p className="text-gray-700 mb-2">For adults looking to improve technique and build endurance.</p>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Stroke refinement</li>
                        <li>• Endurance building</li>
                        <li>• Advanced techniques and turns</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/register"
                      className="bg-[#0A1738] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                    >
                      Register for Adult Lessons
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Private Lessons Section */}
          <section id="private-section" className="mb-16 pt-8 scroll-mt-32">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-[url('/public/lts2.jpeg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738] to-[#0A1738]/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white text-center">Private Swimming Lessons</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-700 mb-6 text-lg">
                    Our private swimming lessons offer one-on-one instruction tailored specifically to your needs, goals, and learning pace. Perfect for all ages and abilities.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#0A1738]">Benefits of Private Lessons</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Personalized Attention:</span> 100% focus on your specific needs and goals</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Customized Curriculum:</span> Lessons designed specifically for your skill level</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Accelerated Learning:</span> Progress at your own optimal pace</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Flexible Scheduling:</span> Convenient times that work for your calendar</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Specialized Focus:</span> Ability to work on specific skills or overcome particular challenges</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-[#0A1738] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700"><span className="font-semibold">Comfortable Environment:</span> Ideal for those with anxiety or special needs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#0A1738]">Who Benefits Most</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Water-Anxious Individuals</h4>
                      <p className="text-gray-700 text-sm">For those with fear or anxiety about water who need patient, dedicated attention.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Competitive Swimmers</h4>
                      <p className="text-gray-700 text-sm">Athletes looking to refine technique and improve race performance.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-[#0A1738] mb-2">Special Needs</h4>
                      <p className="text-gray-700 text-sm">Customized instruction for individuals with different learning styles or physical needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      href="/register"
                      className="bg-[#0A1738] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                    >
                      Schedule Private Lessons
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Why Choose Us Section */}
          <section className="mb-16">
            <div className="bg-[#0A1738]/5 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Why Choose BlueFins Swim Lessons?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738] flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] mr-2"></div>
                    Our Approach
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We focus on building confidence in the water through progressive skill development in a supportive, encouraging environment. Our structured curriculum ensures swimmers develop proper technique while having fun.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738] flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] mr-2"></div>
                    Expert Instructors
                  </h3>
                  <p className="text-gray-700">
                    All BlueFins instructors are certified, experienced teachers with training in water safety and effective teaching methods for swimmers of all ages and abilities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738] flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] mr-2"></div>
                    World-Class Facilities
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our lessons take place in clean, well-maintained pools with appropriate water temperature and depth for learning. All facilities have dedicated viewing areas for parents.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738] flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[#FFD700] mr-2"></div>
                    Year-Round Programs
                  </h3>
                  <p className="text-gray-700">
                    Swimming is a life skill that should be practiced regularly. That&apos;s why we offer lessons throughout the year with flexible scheduling options to fit your needs.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section id="register-section" className="mb-16 bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] text-white rounded-lg p-8 text-center scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join our swimming programs today and develop this essential life skill in a supportive environment.
            </p>
            <Link 
              href="/register"
              className="bg-[#FFD700] text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors inline-block"
            >
              Register Now
            </Link>
          </section>
          
          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1738]">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="font-bold text-[#0A1738] mb-2">What should my child bring to their first lesson?</h3>
                <p className="text-gray-700">A swimsuit, towel, goggles (optional for beginners), and a positive attitude! If your child has long hair, a swim cap is recommended but not required.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="font-bold text-[#0A1738] mb-2">How will you determine my child&apos;s swim level?</h3>
                <p className="text-gray-700">New swimmers undergo a brief skill assessment during their first lesson. Our instructors evaluate water comfort, current abilities, and confidence to ensure proper placement.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="font-bold text-[#0A1738] mb-2">I&apos;m an adult with fear of water. Can you help?</h3>
                <p className="text-gray-700">Absolutely! We specialize in helping adults overcome water anxiety. Our instructors are trained in techniques specifically for adults with water fear, and we recommend starting with private lessons.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="font-bold text-[#0A1738] mb-2">How long does it typically take to learn to swim?</h3>
                <p className="text-gray-700">Everyone learns at their own pace. Most children and adults can develop basic water safety skills within 8-10 lessons. Becoming a proficient swimmer typically takes several sessions over multiple months.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="font-bold text-[#0A1738] mb-2">Can I observe my child&apos;s swim lessons?</h3>
                <p className="text-gray-700">Yes! We have designated viewing areas where parents can observe lessons. For some younger children, we find they focus better when parents aren&apos;t in their direct line of sight.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}