import Link from 'next/link';

export const metadata = {
  title: 'Competitive Programs | Ghana BlueFins Swim Club',
  description: 'Our competitive swimming programs for swimmers of all ages and abilities, from development to national level competition.',
}

export default function CompetitivePrograms() {
  return (
    <main className="bg-white">
      <div className="pb-16"> {/* Padding top handled by root layout */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Competitive Swimming Programs</h1>
            <p className="text-xl text-gray-600">
              Structured training programs designed to develop skilled, confident, and competitive swimmers
            </p>
          </div>

          {/* Overview Section */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Our Competitive Program</h2>
              <p className="text-gray-700 mb-6">
                The Ghana BlueFins competitive swim program offers a progressive training system for swimmers looking to develop their skills and compete at various levels, from local meets to the prestigious Meet of Champions. Our experienced coaches provide technical guidance, race strategy, and personalized feedback in a structured, supportive environment.
              </p>
              <p className="text-gray-700 mb-8">
                Swimmers are placed in training groups based on their age, ability, and commitment level. Each group has specific training objectives, attendance expectations, and performance goals, with opportunities to advance as skills develop.
              </p>
              
              <div className="bg-[#0A1738] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Program Benefits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Structured, progressive training system</li>
                  <li>Technical stroke development and refinement</li>
                  <li>Race strategy and competitive skills</li>
                  <li>Strength and conditioning programs</li>
                  <li>Team building and leadership opportunities</li>
                  <li>Competition at appropriate levels</li>
                  <li>Potential for national and international competition</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Training Groups */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Competitive Training Groups</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* MiniFins */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#0A1738] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">MiniFins</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 6-8 • Entry Level Competitive</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Basic stroke techniques</li>
                      <li>Introduction to competitive swimming</li>
                      <li>Water comfort and confidence</li>
                      <li>Basic training concepts</li>
                      <li>Fun and enjoyment in the water</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Ability to swim 25m freestyle and backstroke</li>
                      <li>3 practices per week recommended</li>
                      <li>Introduction to local swim meets</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">Perfect first step into competitive swimming for young swimmers</p>
                </div>
              </div>
              
              {/* SkyFins */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#78b6e4] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">SkyFins</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 8-10 • Developmental</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Stroke technique refinement</li>
                      <li>Building endurance and strength</li>
                      <li>Introduction to all four competitive strokes</li>
                      <li>Basic racing starts and turns</li>
                      <li>Introduction to race strategy</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Ability to swim 50m freestyle and backstroke</li>
                      <li>Basic knowledge of breaststroke and butterfly</li>
                      <li>4 practices per week recommended</li>
                      <li>Participation in local swim meets</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">Focus on developing technical proficiency in all strokes</p>
                </div>
              </div>
              
              {/* TurquoiseFins */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#40a0c7] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">TurquoiseFins</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 10-12 • Intermediate</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Advanced stroke technique</li>
                      <li>Increased training volume</li>
                      <li>Competitive starts, turns, and finishes</li>
                      <li>Race strategy development</li>
                      <li>Goal setting and performance tracking</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Proficiency in all four competitive strokes</li>
                      <li>Ability to swim 100m freestyle and 50m of other strokes</li>
                      <li>5 practices per week recommended</li>
                      <li>Regular competition at local and regional meets</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">Building the foundation for advanced training and competition</p>
                </div>
              </div>
              
              {/* LapisFins */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#1a75a7] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">LapisFins</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 12-15 • Advanced</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>High-level stroke technique and efficiency</li>
                      <li>Increased training intensity and volume</li>
                      <li>Advanced race strategy and tactics</li>
                      <li>Strength and conditioning</li>
                      <li>Mental preparation and race psychology</li>
                      <li>Specialized event training</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Strong technical proficiency in all strokes</li>
                      <li>Demonstrated commitment to training</li>
                      <li>6 practices per week recommended</li>
                      <li>Competition at regional and national levels</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For dedicated swimmers seeking to excel in regional competition</p>
                </div>
              </div>
              
              {/* NavyFins */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#003366] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">NavyFins</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 14-18 • Elite</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Elite-level training and preparation</li>
                      <li>Periodized training plans</li>
                      <li>Advanced strength and conditioning</li>
                      <li>Race analysis and technical refinement</li>
                      <li>Peak performance at target competitions</li>
                      <li>Leadership and team building</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>National-level performance standards</li>
                      <li>Full commitment to competitive swimming</li>
                      <li>6-8 practices per week including dryland</li>
                      <li>Competition at national and international levels</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">Our highest training group for elite competitive swimmers</p>
                </div>
              </div>
              
              {/* MasterFins */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#FFD700] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">MasterFins</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 18+ • Adult Competitive</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Technique refinement for adult swimmers</li>
                      <li>Fitness and conditioning</li>
                      <li>Competitive opportunities for all abilities</li>
                      <li>Stroke-specific training</li>
                      <li>Flexible practice schedule options</li>
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Basic swimming ability in at least two strokes</li>
                      <li>Self-selected practice frequency</li>
                      <li>Optional competition in Masters swim meets</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">Adult fitness and competitive swimming for all levels</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Get Started Section */}
          <section className="bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] text-white rounded-lg p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Join Our Competitive Program?</h2>
                <p className="mb-6">
                  New swimmers are evaluated and placed in the appropriate training group based on age, ability, and experience. Contact us to schedule an assessment with our coaching staff.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/register"
                    className="bg-[#FFD700] text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Assessment Process</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Complete contact form or call our office</li>
                  <li>Schedule an assessment with our coaching staff</li>
                  <li>Receive group placement recommendation</li>
                  <li>Complete registration and payment</li>
                  <li>Begin training with your assigned group</li>
                </ol>
                <p className="mt-4 text-sm text-[#0A1738]">
                  Group placements are reviewed regularly, with opportunities to advance as swimmers develop their skills and demonstrate readiness for the next level.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 