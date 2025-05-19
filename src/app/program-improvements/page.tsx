import Link from 'next/link';

export const metadata = {
  title: 'Program Improvements | Ghana BlueFins Swim Club',
  description: 'Learn about our upcoming program improvements and enhancements at Ghana BlueFins Swim Club.',
}

export default function ProgramImprovementsPage() {
  return (
    <main className="bg-white">
      <div className="pt-24 pb-16"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Program Improvements</h1>
            <p className="text-xl text-gray-600">
              Enhancing our swim programs to better serve our community
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Our Commitment to Excellence</h2>
              <p className="text-gray-700 mb-6">
                At Ghana BlueFins Swim Club, we are committed to continuous improvement and providing the highest quality swim programs. Based on program evaluations, parent feedback, and industry best practices, we are excited to announce several enhancements to our swim programs.
              </p>
              <p className="text-gray-700 mb-6">
                These improvements will be implemented gradually over the coming months, with full implementation expected by the start of the next season. We believe these changes will significantly enhance the swimming experience for all our participants and further strengthen our position as Ghana&apos;s premier swim club.
              </p>
              <p className="text-gray-700">
                We welcome your feedback throughout this process as we work to create the best possible swimming environment for our community.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            {/* Structured Level Progression */}
            <section className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-[#0A1738] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1738]">Structured Level Progression System</h2>
                </div>
                
                <div className="pl-14">
                  <p className="text-gray-700 mb-6">
                    We are implementing a clear, numbered level system with defined skills and objectives for each level, making it easier for swimmers and parents to understand progression and goals.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Clearly defined skills checklist for each level</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Visual progression charts for parents and swimmers</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Achievement certificates and badges for level completion</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Consistent assessment periods with progress reports</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic border-l-4 border-[#0A1738] pl-4 mb-6">
                    &ldquo;Our new level system will provide clear pathways for swimmers to progress from beginners to advanced levels, with transparent criteria for advancement.&rdquo;
                  </p>
                  
                  <div className="mt-6">
                    <p className="text-gray-700">
                      <span className="font-semibold">Expected Implementation:</span> January 2024
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Enhanced Age-Specific Programs */}
            <section className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-[#0A1738] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1738]">Enhanced Age-Specific Programs</h2>
                </div>
                
                <div className="pl-14">
                  <p className="text-gray-700 mb-6">
                    We are expanding our age-specific programming to better address the developmental needs of swimmers at different stages, with specialized curriculum for each age group.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-3">Baby & Toddler Program</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Enhanced parent-child classes (6-36 months)</li>
                        <li>• Water acclimation and safety focus</li>
                        <li>• Playful, developmentally appropriate activities</li>
                        <li>• Parent education component</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-3">Preschool Program</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Specialized curriculum for ages 3-5</li>
                        <li>• Focus on water comfort and basic skills</li>
                        <li>• Small class sizes (max 4:1 ratio)</li>
                        <li>• Engaging, age-appropriate teaching methods</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-3">School-Age Program</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Expanded intermediate levels for ages 6-12</li>
                        <li>• Technical stroke development focus</li>
                        <li>• Introduction to competitive concepts</li>
                        <li>• Water safety and endurance building</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-3">Teen Program</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Dedicated program for ages 13-17</li>
                        <li>• Technique refinement and conditioning</li>
                        <li>• Peer-appropriate learning environment</li>
                        <li>• Competitive and non-competitive options</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic border-l-4 border-[#0A1738] pl-4 mb-6">
                    &ldquo;By creating more defined programs for each age group, we can better address the unique developmental needs and learning styles of swimmers at every stage.&rdquo;
                  </p>
                  
                  <div className="mt-6">
                    <p className="text-gray-700">
                      <span className="font-semibold">Expected Implementation:</span> March 2024
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Program Diversification */}
            <section className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-[#0A1738] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1738]">Program Diversification</h2>
                </div>
                
                <div className="pl-14">
                  <p className="text-gray-700 mb-6">
                    We are expanding our program offerings to provide more options for swimmers with different interests and goals beyond traditional competitive swimming.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="border-l-4 border-[#0A1738] pl-4">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-2">Recreational Swim Club</h3>
                      <p className="text-gray-700">
                        A non-competitive program for children who love swimming but don&apos;t wish to compete. Focuses on technique, fitness, and fun in a relaxed environment.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-[#0A1738] pl-4">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-2">Specialized Skills Classes</h3>
                      <p className="text-gray-700">
                        Short-term focused programs including Water Safety, Junior Lifeguard Preparation, Stroke Clinics, and Endurance Training.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-[#0A1738] pl-4">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-2">Adaptive Swim Program</h3>
                      <p className="text-gray-700">
                        Specialized instruction for children with physical, cognitive, or sensory challenges, with individualized learning plans and trained instructors.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-[#0A1738] pl-4">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-2">Fitness Swimming</h3>
                      <p className="text-gray-700">
                        For teens and adults focusing on swimming as exercise, with workout plans, technique correction, and fitness goals rather than competition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-700">
                      <span className="font-semibold">Expected Implementation:</span> April-August 2024 (Phased approach)
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Parent-Child Programs */}
            <section className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-[#0A1738] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1738]">Enhanced Parent-Child Programs</h2>
                </div>
                
                <div className="pl-14">
                  <p className="text-gray-700 mb-6">
                    We are strengthening our parent-infant class offerings and expanding parent education resources to better support families in early water introduction.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Structured curriculum with age-appropriate activities from 6 months to 3 years</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Parent education workshops on home water safety and drowning prevention</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Take-home guides with activities to reinforce skills between lessons</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-[#0A1738] mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Specialized training for instructors teaching parent-child classes</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-3">Parent Resources</h3>
                    <p className="text-gray-700 mb-4">
                      We will be developing a comprehensive set of resources for parents, including:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Digital library of instructional videos</li>
                      <li>• Home water safety guides</li>
                      <li>• Developmental milestones in aquatic learning</li>
                      <li>• Tips for supporting anxious swimmers</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-700">
                      <span className="font-semibold">Expected Implementation:</span> February 2024
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Curriculum Documentation */}
            <section className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-[#0A1738] text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    5
                  </div>
                  <h2 className="text-3xl font-bold text-[#0A1738]">Curriculum Documentation</h2>
                </div>
                
                <div className="pl-14">
                  <p className="text-gray-700 mb-6">
                    We are developing comprehensive documentation of our curriculum to ensure consistent, high-quality instruction across all programs and locations.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-3">Instructor Materials</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Detailed lesson plans for each level and age group</li>
                        <li>• Skill progression charts with teaching methods</li>
                        <li>• Troubleshooting guides for common challenges</li>
                        <li>• Visual teaching aids and demonstration guides</li>
                        <li>• Assessment protocols and documentation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-3">Student Progress Tracking</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Digital skill tracking system for each swimmer</li>
                        <li>• Clear criteria for level advancement</li>
                        <li>• Regular progress reports for parents</li>
                        <li>• Visual skill badges and achievement markers</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-3">Program Quality Assurance</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Regular curriculum review and updates</li>
                        <li>• Instructor observation and feedback system</li>
                        <li>• Parent satisfaction surveys</li>
                        <li>• Student learning outcome assessments</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic border-l-4 border-[#0A1738] pl-4 mb-6">
                    &ldquo;Our enhanced curriculum documentation will ensure that every instructor delivers consistent, high-quality lessons while still allowing for creativity and adaptation to individual student needs.&rdquo;
                  </p>
                  
                  <div className="mt-6">
                    <p className="text-gray-700">
                      <span className="font-semibold">Expected Implementation:</span> January-March 2024
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Additional Improvements */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#0A1738]">Additional Program Enhancements</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">6. Marketing and Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Website redesign with program details and progression charts</li>
                    <li>Parent portal for registration and progress tracking</li>
                    <li>Regular communication about student achievements</li>
                    <li>Social media strategy highlighting program benefits</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Expected Implementation:</span> Q1 2024
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">7. Instructor Development</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Comprehensive certification program</li>
                    <li>Monthly training workshops</li>
                    <li>Mentor relationships between instructors</li>
                    <li>Continuous education opportunities</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Expected Implementation:</span> Ongoing throughout 2024
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">8. Facility Improvements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Enhanced parent viewing areas</li>
                    <li>Consistent 30°C pool temperature</li>
                    <li>Child-friendly changing areas</li>
                    <li>Better accessibility features</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Expected Implementation:</span> Q2-Q3 2024
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">9. Year-Round Programming</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Continuous enrollment options</li>
                    <li>Flexible scheduling choices</li>
                    <li>Membership plans with benefits</li>
                    <li>Holiday and school break camps</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Expected Implementation:</span> Q1 2024
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">10. Community Outreach</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Water safety presentations for local schools</li>
                    <li>Community swimming events and demonstrations</li>
                    <li>Partnerships with health organizations</li>
                    <li>Scholarship program for underprivileged children</li>
                    <li>Annual water safety awareness day</li>
                  </ul>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Expected Implementation:</span> Throughout 2024
                  </p>
                </div>
              </div>
            </section>

            {/* Feedback Section */}
            <section className="mb-16">
              <div className="bg-[#0A1738] text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">We Value Your Input</h2>
                <p className="mb-6">
                  As we implement these improvements, we welcome your feedback and suggestions. Our goal is to create the best possible swimming experience for all our members.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-[#FFD700] text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors text-center"
                  >
                    Share Your Feedback
                  </Link>
                  <Link 
                    href="/register"
                    className="bg-white text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                  >
                    Join Our Programs
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 