import Link from 'next/link';

export const metadata = {
  title: 'Kids Learn-to-Swim | Ghana BlueFins Swim Club',
  description: 'Our structured swimming lessons for children of all ages and abilities, from beginners to advanced swimmers.',
}

export default function KidsLearnToSwim() {
  return (
    <main className="bg-white">
      <div className="pb-16"> {/* Padding top handled by root layout */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4 animate-slide-up">Kids Learn-to-Swim Program</h1>
            <p className="text-xl text-gray-600 animate-fade-in">
              Building confidence, water safety skills, and a lifelong love of swimming
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16 relative">
            <div className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-lg overflow-hidden shadow-xl transform hover:shadow-2xl transition-all">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[url('/images/image6.jpg')] bg-cover bg-center animate-slow-zoom"></div>
              </div>
              <div className="relative p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold mb-6 animate-slide-up">Swimming Skills for Life</h2>
                  <p className="text-lg mb-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
                    At Ghana BlueFins, we believe that swimming is an essential life skill that every child should have the opportunity to learn. Our Kids Learn-to-Swim program is designed to teach children water safety, swimming techniques, and build confidence in the water.
                  </p>
                  <p className="text-lg mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
                    Through progressive, age-appropriate lessons taught by our experienced instructors, children develop skills that last a lifetime while having fun in a safe, supportive environment.
                  </p>
                  <Link 
                    href="/register"
                    className="inline-block bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold px-8 py-3 rounded-lg hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" 
                    style={{animationDelay: "0.3s"}}
                  >
                    Enroll Your Child Today
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Program Overview */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] rounded-lg p-8 max-w-5xl mx-auto shadow-lg border border-gray-100 text-white transform hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <div className="w-10 h-1 bg-[var(--color-secondary)] mr-4"></div>
                Program Overview
              </h2>
              <p className="text-white/90 mb-6">
                Our Kids Learn-to-Swim program follows a structured, progressive curriculum that takes children from their first experience in the water to becoming confident, skilled swimmers. Each level builds upon previously learned skills while introducing new techniques and water safety concepts.
              </p>
              <p className="text-white/90 mb-8">
                Classes are limited to small groups to ensure personalized attention, with swimmers grouped by age and ability. Our experienced, safety-certified instructors make learning fun while maintaining high standards for skill development.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-secondary)]">Program Features</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-start space-x-2">
                    <div className="text-[var(--color-secondary)] mt-1">•</div>
                    <div>Progressive, skills-based curriculum</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[var(--color-secondary)] mt-1">•</div>
                    <div>Small class sizes (maximum 6:1 student-to-instructor ratio)</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[var(--color-secondary)] mt-1">•</div>
                    <div>Safety-certified instructors</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[var(--color-secondary)] mt-1">•</div>
                    <div>Regular progress assessments</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[var(--color-secondary)] mt-1">•</div>
                    <div>Family-friendly facilities</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[var(--color-secondary)] mt-1">•</div>
                    <div>Options for different ages and abilities</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[var(--color-secondary)] mt-1">•</div>
                    <div>Focus on water safety and drowning prevention</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skill Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Our Skill Levels</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Level 1: Water Discovery */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group relative">
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="bg-[var(--color-primary-light)/60] h-3"></div>
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">Level 1: Water Discovery</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 3-5 • First-time swimmers</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                      Skills Taught:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Water adjustment and comfort</li>
                      <li>Blowing bubbles and breath control</li>
                      <li>Floating with support</li>
                      <li>Kicking with support</li>
                      <li>Water safety basics</li>
                      <li>Pool rules and boundaries</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-[var(--color-primary)] italic bg-[var(--color-primary)]/5 p-3 rounded-lg group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">Perfect for children who are new to the water or have fear of swimming</p>
                </div>
              </div>
              
              {/* Level 2: Water Exploration */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group relative">
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="bg-[var(--color-primary)/70] h-3"></div>
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">Level 2: Water Exploration</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 4-6 • Beginning swimmers</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                      Skills Taught:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Submerging face and head</li>
                      <li>Opening eyes underwater</li>
                      <li>Floating independently (front and back)</li>
                      <li>Gliding with assistance</li>
                      <li>Basic arm and leg movements</li>
                      <li>Jumping into shallow water</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-[var(--color-primary)] italic bg-[var(--color-primary)]/5 p-3 rounded-lg group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">For children who are comfortable in water but need to develop basic swimming skills</p>
                </div>
              </div>
              
              {/* Level 3: Stroke Introduction */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group relative">
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="bg-[var(--color-primary-dark)] h-3"></div>
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--color-primary)]/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">Level 3: Stroke Introduction</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 5-8 • Intermediate beginners</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                      <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                      Skills Taught:
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Independent front and back floats</li>
                      <li>Front and back glides</li>
                      <li>Freestyle arm strokes</li>
                      <li>Backstroke introduction</li>
                      <li>Rotary breathing basics</li>
                      <li>Treading water introduction</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-[var(--color-primary)] italic bg-[var(--color-primary)]/5 p-3 rounded-lg group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">For children ready to learn proper swimming strokes and build endurance</p>
                </div>
              </div>
              
              {/* Level 4: Stroke Development */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#277cc0] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 4: Stroke Development</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 6-10 • Intermediate swimmers</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Freestyle with side breathing</li>
                      <li>Backstroke refinement</li>
                      <li>Breaststroke introduction</li>
                      <li>Elementary backstroke</li>
                      <li>Swimming longer distances</li>
                      <li>Diving introduction from sitting position</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For children who can swim freestyle and backstroke and are ready to learn more strokes</p>
                </div>
              </div>
              
              {/* Level 5: Stroke Refinement */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#1368b1] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 5: Stroke Refinement</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 7-12 • Advanced intermediate</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Freestyle and backstroke refinement</li>
                      <li>Breaststroke development</li>
                      <li>Butterfly introduction</li>
                      <li>Open turns and flip turn introduction</li>
                      <li>Diving from kneeling position</li>
                      <li>Extended treading water</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For children who can swim multiple strokes and are developing technical skills</p>
                </div>
              </div>
              
              {/* Level 6: Swim Proficiency */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#0A1738] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 6: Swim Proficiency</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 8-14 • Advanced swimmers</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>All four competitive strokes</li>
                      <li>Advanced stroke technique</li>
                      <li>Flip turns and open turns</li>
                      <li>Standing dives</li>
                      <li>Endurance swimming (200m+)</li>
                      <li>Advanced water safety</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For proficient swimmers ready to transition to competitive swimming or water sports</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Class Information */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group relative">
                <div className="absolute top-0 left-0 w-3 h-full bg-[var(--color-primary-light)]"></div>
                <div className="pl-4">
                  <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">Class Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)] flex items-center">
                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                        Class Duration
                      </h3>
                      <p className="text-gray-700">All lessons are 45 minutes long, with structured learning activities, guided practice, and supervised free time.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)] flex items-center">
                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                        Class Size
                      </h3>
                      <p className="text-gray-700">Maximum 6 students per instructor to ensure quality instruction and safety. Private lessons are also available.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)] flex items-center">
                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                        Session Length
                      </h3>
                      <p className="text-gray-700">Sessions run for 8 weeks, with classes once or twice per week. Consistent attendance is recommended for optimal progress.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)] flex items-center">
                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                        Equipment Needed
                      </h3>
                      <p className="text-gray-700">Swimsuit, towel, goggles, and swim cap (required for long hair). Additional equipment may be recommended for higher levels.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group relative">
                <div className="absolute top-0 left-0 w-3 h-full bg-[var(--color-secondary)]"></div>
                <div className="pl-4">
                  <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">Pricing & Registration</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)] flex items-center">
                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                        Regular Group Lessons
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-baseline">
                          <div className="text-[var(--color-secondary)] mr-2">•</div>
                          <span className="font-semibold">Once Weekly:</span>
                          <span className="ml-1">GHS 600 per 8-week session</span>
                        </li>
                        <li className="flex items-baseline">
                          <div className="text-[var(--color-secondary)] mr-2">•</div>
                          <span className="font-semibold">Twice Weekly:</span>
                          <span className="ml-1">GHS 1,100 per 8-week session</span>
                        </li>
                        <li className="flex items-baseline">
                          <div className="text-[var(--color-secondary)] mr-2">•</div>
                          <span className="font-semibold">Registration Fee:</span>
                          <span className="ml-1">GHS 100 (one-time for new students)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)] flex items-center">
                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                        Private Lessons
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-baseline">
                          <div className="text-[var(--color-secondary)] mr-2">•</div>
                          <span className="font-semibold">Individual:</span>
                          <span className="ml-1">GHS 200 per 45-minute lesson</span>
                        </li>
                        <li className="flex items-baseline">
                          <div className="text-[var(--color-secondary)] mr-2">•</div>
                          <span className="font-semibold">Package:</span>
                          <span className="ml-1">GHS 1,500 for 8 lessons</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)] flex items-center">
                        <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mr-2"></div>
                        How to Register
                      </h3>
                      <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                        <li>Complete online registration form</li>
                        <li>Schedule assessment (for correct level placement)</li>
                        <li>Pay registration fee and tuition</li>
                        <li>Receive confirmation and class details</li>
                      </ol>
                    </div>
                    
                    <div className="pt-4">
                      <Link 
                        href="/register"
                        className="block w-full bg-[#0A1738] text-white text-center font-bold py-3 rounded-lg hover:bg-[#0A1738]/90 transition-colors"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[var(--color-primary)]">What Parents Say</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] p-6 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="text-[var(--color-secondary)] text-3xl mb-4">&ldquo;</div>
                <p className="text-white/90 mb-6 relative z-10">My 5-year-old used to be terrified of water. After just one session of lessons, she&rsquo;s now excited to go swimming and has made incredible progress. The instructors are patient and make learning fun!</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/30 text-[var(--color-secondary)] flex items-center justify-center font-bold mr-3">A</div>
                  <div>
                    <p className="font-bold text-white">Abena M.</p>
                    <p className="text-xs text-white/70">Mother of Level 2 swimmer</p>
                  </div>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              
              <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] p-6 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="text-[var(--color-secondary)] text-3xl mb-4">&ldquo;</div>
                <p className="text-white/90 mb-6 relative z-10">As a parent who doesn&rsquo;t swim, it was important to me that my children learn this essential skill. BlueFins provides excellent instruction in a safe environment. My son is now on Level 4 and swimming better than I ever could!</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/30 text-[var(--color-secondary)] flex items-center justify-center font-bold mr-3">K</div>
                  <div>
                    <p className="font-bold text-white">Kofi A.</p>
                    <p className="text-xs text-white/70">Father of Level 4 swimmer</p>
                  </div>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              
              <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] p-6 rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="text-[var(--color-secondary)] text-3xl mb-4">&ldquo;</div>
                <p className="text-white/90 mb-6 relative z-10">We&rsquo;ve tried other swim schools, but none compare to the quality of instruction at BlueFins. The small class sizes ensure each child gets attention, and the structured curriculum means constant progress. Worth every cedi!</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/30 text-[var(--color-secondary)] flex items-center justify-center font-bold mr-3">E</div>
                  <div>
                    <p className="font-bold text-white">Esi T.</p>
                    <p className="text-xs text-white/70">Mother of Level 5 swimmer</p>
                  </div>
                </div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[var(--color-primary)] animate-slide-up">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[var(--color-primary-light)]/30 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></div>
                  What age can my child start swimming lessons?
                </h3>
                <p className="text-gray-700">We accept children as young as 3 years old in our program. Children should be able to follow basic instructions and be comfortable being separated from parents during the lesson.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[var(--color-primary-light)]/30 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></div>
                  How do you determine which level my child should be in?
                </h3>
                <p className="text-gray-700">New swimmers undergo a brief skill assessment during their first lesson to determine proper placement. We evaluate water comfort, current abilities, and confidence to ensure they&apos;re placed in a level where they&apos;ll be challenged but successful.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[var(--color-primary-light)]/30 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></div>
                  How long does it take to complete each level?
                </h3>
                <p className="text-gray-700">Progress varies by child, but typically students complete a level in 1-3 sessions (8-24 weeks). Factors affecting progress include attendance, practice outside of lessons, age, and natural ability. We evaluate progress continuously and advance children when they&apos;ve mastered all required skills.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[var(--color-primary-light)]/30 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></div>
                  Can parents stay and watch the lessons?
                </h3>
                <p className="text-gray-700">Yes, we have designated viewing areas where parents can observe lessons. However, we ask that parents refrain from interacting with children during lessons to maintain their focus and independence in the water.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[var(--color-primary-light)]/30 animate-fade-in" style={{animationDelay: "0.5s"}}>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)] flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-2"></div>
                  What happens if we miss a class?
                </h3>
                <p className="text-gray-700">We offer limited make-up lessons subject to availability within the same session. Please notify us of absences at least 24 hours in advance when possible. Consistent attendance provides the best learning experience.</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white rounded-lg p-8 md:p-12 max-w-5xl mx-auto text-center shadow-xl transform hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 animate-slide-up">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.1s"}}>
              Give your child the gift of swimming - a life skill that builds confidence, provides exercise, ensures safety, and creates joy for a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Link 
                href="/register"
                className="bg-[var(--color-secondary)] text-[var(--color-primary-dark)] px-8 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Register for Lessons
              </Link>
              <Link 
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}