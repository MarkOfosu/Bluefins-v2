import Link from 'next/link';

export const metadata = {
  title: 'Competitive Swim Team | Ghana BlueFins Swim Club',
  description: 'Join the competitive swim team at Ghana BlueFins Swim Club, featuring experienced coaches, personalized training, and competition opportunities.',
}

export default function CompetitiveTeamPage() {
  return (
    <main className="bg-white">
      <div className="pb-16"> {/* Padding top handled by root layout */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">BlueFins Competitive Team</h1>
            <p className="text-xl text-gray-600">
              Excellence through dedication, discipline, and teamwork
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16 relative">
            <div className="bg-[#0A1738] rounded-lg overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[url('/images/image5.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="relative p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold mb-6">Join Ghana&rsquo;s Premier Swim Team</h2>
                  <p className="text-lg mb-6">
                    The Ghana BlueFins competitive swim team is dedicated to developing swimmers who excel both in and out of the pool. Our program combines technical training, physical conditioning, and mental preparation to help athletes reach their full potential.
                  </p>
                  <p className="text-lg mb-8">
                    With experienced coaches, personalized attention, and a supportive team environment, our swimmers develop the skills, confidence, and character to succeed in competition and in life.
                  </p>
                  <Link 
                    href="/register"
                    className="inline-block bg-[#FFD700] text-[#0A1738] font-bold px-8 py-3 rounded-lg hover:bg-[#e6c200] transition-colors"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Team Overview */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Team Overview</h2>
              <p className="text-gray-700 mb-6">
                The Ghana BlueFins Swim Club was established in 2018 with a mission to develop competitive swimmers while promoting water safety, fitness, and sportsmanship. Since our founding, we have grown to become one of Ghana&rsquo;s leading competitive swim programs.
              </p>
              <p className="text-gray-700 mb-8">
                Our team competes in local, national, and international meets, with swimmers consistently achieving personal bests and winning medals. We are proud members of the Ghana Swimming Association and follow international swimming standards in our training and competition.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-[#0A1738] text-4xl font-bold mb-2">50+</div>
                  <p className="text-gray-600">Competitive Swimmers</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-[#0A1738] text-4xl font-bold mb-2">100+</div>
                  <p className="text-gray-600">Medals Won</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-[#0A1738] text-4xl font-bold mb-2">5</div>
                  <p className="text-gray-600">National Records</p>
                </div>
              </div>
            </div>
          </section>

          {/* Coaching Staff */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Our Coaching Staff</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Head Coach */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-[#0A1738] h-40 relative">
                  <div className="w-28 h-28 bg-gray-300 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/coach1.jpg')] bg-cover bg-center"></div>
                  </div>
                </div>
                <div className="pt-16 p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0A1738] mb-1">Coach Michael Amoah</h3>
                  <p className="text-blue-600 mb-4">Head Coach</p>
                  <p className="text-gray-600 mb-4">
                    Former national swimmer with 15+ years of coaching experience. FINA Level 3 certified with expertise in sprint and middle-distance events.
                  </p>
                  <div className="flex justify-center space-x-3 text-gray-400">
                    <span>📧 Email</span>
                    <span>📱 Contact</span>
                  </div>
                </div>
              </div>
              
              {/* Assistant Coach */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-[#0A1738] h-40 relative">
                  <div className="w-28 h-28 bg-gray-300 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/coach2.jpg')] bg-cover bg-center"></div>
                  </div>
                </div>
                <div className="pt-16 p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0A1738] mb-1">Coach Sarah Mensah</h3>
                  <p className="text-blue-600 mb-4">Assistant Coach</p>
                  <p className="text-gray-600 mb-4">
                    Specializes in technique development and stroke mechanics. Works closely with junior and intermediate swimmers on technical proficiency.
                  </p>
                  <div className="flex justify-center space-x-3 text-gray-400">
                    <span>📧 Email</span>
                    <span>📱 Contact</span>
                  </div>
                </div>
              </div>
              
              {/* Strength Coach */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-[#0A1738] h-40 relative">
                  <div className="w-28 h-28 bg-gray-300 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-white overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/coach3.jpg')] bg-cover bg-center"></div>
                  </div>
                </div>
                <div className="pt-16 p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0A1738] mb-1">Coach Daniel Ofori</h3>
                  <p className="text-blue-600 mb-4">Strength & Conditioning</p>
                  <p className="text-gray-600 mb-4">
                    Certified strength and conditioning specialist with swimming-specific expertise. Designs dry-land training programs for all competitive groups.
                  </p>
                  <div className="flex justify-center space-x-3 text-gray-400">
                    <span>📧 Email</span>
                    <span>📱 Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Training Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Our Training Philosophy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Technical Excellence</h3>
                  <p className="text-gray-700">
                    We prioritize proper technique as the foundation for success. Our coaches work with swimmers to refine stroke mechanics, starts, turns, and finishes to optimize performance and prevent injuries.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Progressive Training</h3>
                  <p className="text-gray-700">
                    Our training programs are designed to develop swimmers incrementally, with age-appropriate workouts that challenge athletes while reducing the risk of burnout. We utilize periodization to ensure peak performance at key competitions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Mental Conditioning</h3>
                  <p className="text-gray-700">
                    Swimming is as much mental as physical. We incorporate goal-setting, visualization, and race strategy into our training to develop mentally tough, confident competitors who perform well under pressure.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Whole Athlete Development</h3>
                  <p className="text-gray-700">
                    We focus on developing the whole athlete—physically, mentally, and emotionally. Our program emphasizes time management, accountability, resilience, and sportsmanship alongside swimming skills.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Individualized Attention</h3>
                  <p className="text-gray-700">
                    While we train as a team, we recognize that each swimmer has unique strengths, challenges, and goals. Our coaches provide personalized feedback and customized training adaptations to maximize individual potential.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Team Culture</h3>
                  <p className="text-gray-700">
                    We foster a positive, supportive team culture where swimmers encourage each other and celebrate both individual and team successes. This supportive environment helps swimmers push through challenges and reach new heights.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Achievements */}
          <section className="mb-16 bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Team Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">National Competitions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>Overall team champions at Ghana Swim League&apos;s Meet of Champions 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>15 individual gold medals at Junior Nationals 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>4 national age group records in 2022-2023 season</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>National relay champions in 4x100m freestyle (14-16 age group)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#FFD700]">International Competitions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>3 swimmers selected for 2023 African Junior Championships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>Silver medal at West African Swimming Championships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>2 swimmers qualified for 2024 Olympic trials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD700] mr-2">🏆</span>
                    <span>FINA World Junior Championships qualification</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Team Expectations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Team Expectations</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Attendance</h3>
                  <p className="text-gray-700 mb-2">
                    Regular attendance is crucial for swimming improvement. Attendance requirements vary by training group:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li><span className="font-semibold">MiniFins & SkyFins:</span> Minimum 2 practices per week</li>
                    <li><span className="font-semibold">TurquoiseFins:</span> Minimum 3 practices per week</li>
                    <li><span className="font-semibold">LapisFins:</span> Minimum 4 practices per week</li>
                    <li><span className="font-semibold">NavyFins:</span> Minimum 5 practices per week</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Competition</h3>
                  <p className="text-gray-700 mb-2">
                    Team members are expected to participate in competitions regularly:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Participation in team-designated meets is required</li>
                    <li>Swimmers must compete in events selected by coaches</li>
                    <li>All swimmers must wear team uniform at competitions</li>
                    <li>Swimmers should arrive on time for warm-ups</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Behavior</h3>
                  <p className="text-gray-700 mb-2">
                    We expect all team members to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Show respect to coaches, teammates, officials, and competitors</li>
                    <li>Demonstrate good sportsmanship at all times</li>
                    <li>Follow pool and facility rules</li>
                    <li>Maintain academic standards</li>
                    <li>Be punctual for all team activities</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Parent Involvement</h3>
                  <p className="text-gray-700 mb-2">
                    Parents are vital to our team&rsquo;s success:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Parents must provide timely transportation to practices and meets</li>
                    <li>Volunteer support at home meets is required (timing, officiating, etc.)</li>
                    <li>Participation in team fundraising activities</li>
                    <li>Support the coach-swimmer relationship</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-center">
                  For full team policies and code of conduct, please see our <Link href="/team-policies" className="text-blue-600 underline">Team Policies</Link> page.
                </p>
              </div>
            </div>
          </section>
          
          {/* Join the Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Join Our Team</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#0A1738]">New Swimmer Assessment</h3>
                <p className="text-gray-700 mb-6">
                  All new swimmers interested in joining our competitive team must complete an assessment. This allows our coaches to evaluate swimming abilities and place athletes in the appropriate training group.
                </p>
                <h4 className="font-bold text-gray-700 mb-2">Assessment Requirements:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-6">
                  <li>Minimum age: 7 years</li>
                  <li>Ability to swim at least 25m freestyle without stopping</li>
                  <li>Basic knowledge of backstroke</li>
                  <li>Comfortable in deep water</li>
                </ul>
                <p className="text-sm text-gray-500 italic">
                  Assessments are conducted on the first Monday of each month at 4:00 PM. Please register in advance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Registration Process</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-2 mb-6">
                  <li><span className="font-semibold">Schedule Assessment:</span> Contact us to schedule an assessment with our coaching staff</li>
                  <li><span className="font-semibold">Assessment:</span> Complete swimming evaluation</li>
                  <li><span className="font-semibold">Group Assignment:</span> Receive training group placement</li>
                  <li><span className="font-semibold">Registration:</span> Complete registration forms and pay fees</li>
                  <li><span className="font-semibold">Orientation:</span> Attend team orientation session</li>
                  <li><span className="font-semibold">Start Training:</span> Begin regular training with assigned group</li>
                </ol>
                <div className="pt-6 border-t border-gray-200">
                  <Link 
                    href="/register"
                    className="block w-full text-center bg-[#0A1738] text-white py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                  >
                    Schedule Assessment
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Team Fees */}
          <section className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-[#0A1738]">Team Fees</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-[#0A1738] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Training Group</th>
                      <th className="py-3 px-4 text-left">Monthly Fee</th>
                      <th className="py-3 px-4 text-left">Annual Registration</th>
                      <th className="py-3 px-4 text-left">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">MiniFins</td>
                      <td className="py-3 px-4">GHS 300</td>
                      <td className="py-3 px-4">GHS 400</td>
                      <td className="py-3 px-4">3 sessions/week, team cap</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">SkyFins</td>
                      <td className="py-3 px-4">GHS 400</td>
                      <td className="py-3 px-4">GHS 450</td>
                      <td className="py-3 px-4">4 sessions/week, team cap & t-shirt</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">TurquoiseFins</td>
                      <td className="py-3 px-4">GHS 500</td>
                      <td className="py-3 px-4">GHS 500</td>
                      <td className="py-3 px-4">5 sessions/week, team gear package</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">LapisFins</td>
                      <td className="py-3 px-4">GHS 600</td>
                      <td className="py-3 px-4">GHS 550</td>
                      <td className="py-3 px-4">6 sessions/week, team gear package</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">NavyFins</td>
                      <td className="py-3 px-4">GHS 700</td>
                      <td className="py-3 px-4">GHS 600</td>
                      <td className="py-3 px-4">8+ sessions/week, full team gear</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-[#0A1738] mb-3">Additional Costs:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Meet entry fees (varies by competition)</li>
                  <li>Travel expenses for away meets</li>
                  <li>Required training equipment (varies by group)</li>
                  <li>Team uniform for competitions</li>
                </ul>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>Sibling discounts available: 10% off monthly fees for second child, 15% for third child.</p>
                <p>Annual registration fee includes Ghana Swimming Association membership and insurance.</p>
              </div>
            </div>
          </section>
          
          {/* Contact */}
          <section className="bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] text-white rounded-lg p-8 md:p-12 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Your Swimming to the Next Level?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join the Ghana BlueFins competitive team and become part of a tradition of excellence in and out of the pool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register"
                className="bg-[#FFD700] text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors"
              >
                Schedule Assessment
              </Link>
              <Link 
                href="/contact"
                className="bg-white text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Contact Team Administrator
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 