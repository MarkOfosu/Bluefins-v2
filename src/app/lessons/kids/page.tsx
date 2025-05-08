import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Kids Learn-to-Swim | Ghana BlueFins Swim Club',
  description: 'Our structured swimming lessons for children of all ages and abilities, from beginners to advanced swimmers.',
}

export default function KidsLearnToSwim() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-24 pb-16"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Kids Learn-to-Swim Program</h1>
            <p className="text-xl text-gray-600">
              Building confidence, water safety skills, and a lifelong love of swimming
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16 relative">
            <div className="bg-[#0A1738] rounded-lg overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[url('/images/image6.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="relative p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold mb-6">Swimming Skills for Life</h2>
                  <p className="text-lg mb-6">
                    At Ghana BlueFins, we believe that swimming is an essential life skill that every child should have the opportunity to learn. Our Kids Learn-to-Swim program is designed to teach children water safety, swimming techniques, and build confidence in the water.
                  </p>
                  <p className="text-lg mb-8">
                    Through progressive, age-appropriate lessons taught by our experienced instructors, children develop skills that last a lifetime while having fun in a safe, supportive environment.
                  </p>
                  <Link 
                    href="/register"
                    className="inline-block bg-[#FFD700] text-[#0A1738] font-bold px-8 py-3 rounded-lg hover:bg-[#e6c200] transition-colors"
                  >
                    Enroll Your Child Today
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Program Overview */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 max-w-5xl mx-auto shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Program Overview</h2>
              <p className="text-gray-700 mb-6">
                Our Kids Learn-to-Swim program follows a structured, progressive curriculum that takes children from their first experience in the water to becoming confident, skilled swimmers. Each level builds upon previously learned skills while introducing new techniques and water safety concepts.
              </p>
              <p className="text-gray-700 mb-8">
                Classes are limited to small groups to ensure personalized attention, with swimmers grouped by age and ability. Our experienced, safety-certified instructors make learning fun while maintaining high standards for skill development.
              </p>
              
              <div className="bg-[#0A1738] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Program Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Progressive, skills-based curriculum</li>
                  <li>Small class sizes (maximum 6:1 student-to-instructor ratio)</li>
                  <li>Safety-certified instructors</li>
                  <li>Regular progress assessments</li>
                  <li>Family-friendly facilities</li>
                  <li>Options for different ages and abilities</li>
                  <li>Focus on water safety and drowning prevention</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skill Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Our Skill Levels</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Level 1: Water Discovery */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#78b6e4] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 1: Water Discovery</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 3-5 • First-time swimmers</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Water adjustment and comfort</li>
                      <li>Blowing bubbles and breath control</li>
                      <li>Floating with support</li>
                      <li>Kicking with support</li>
                      <li>Water safety basics</li>
                      <li>Pool rules and boundaries</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">Perfect for children who are new to the water or have fear of swimming</p>
                </div>
              </div>
              
              {/* Level 2: Water Exploration */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#5da3d8] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 2: Water Exploration</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 4-6 • Beginning swimmers</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Submerging face and head</li>
                      <li>Opening eyes underwater</li>
                      <li>Floating independently (front and back)</li>
                      <li>Gliding with assistance</li>
                      <li>Basic arm and leg movements</li>
                      <li>Jumping into shallow water</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For children who are comfortable in water but need to develop basic swimming skills</p>
                </div>
              </div>
              
              {/* Level 3: Stroke Introduction */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#4190cc] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 3: Stroke Introduction</h3>
                  <p className="text-sm text-gray-500 mb-4">Ages 5-8 • Intermediate beginners</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Independent front and back floats</li>
                      <li>Front and back glides</li>
                      <li>Freestyle arm strokes</li>
                      <li>Backstroke introduction</li>
                      <li>Rotary breathing basics</li>
                      <li>Treading water introduction</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For children ready to learn proper swimming strokes and build endurance</p>
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
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Class Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Class Duration</h3>
                    <p className="text-gray-700">All lessons are 45 minutes long, with structured learning activities, guided practice, and supervised free time.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Class Size</h3>
                    <p className="text-gray-700">Maximum 6 students per instructor to ensure quality instruction and safety. Private lessons are also available.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Session Length</h3>
                    <p className="text-gray-700">Sessions run for 8 weeks, with classes once or twice per week. Consistent attendance is recommended for optimal progress.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Equipment Needed</h3>
                    <p className="text-gray-700">Swimsuit, towel, goggles, and swim cap (required for long hair). Additional equipment may be recommended for higher levels.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Pricing & Registration</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Regular Group Lessons</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-semibold">Once Weekly:</span> GHS 600 per 8-week session</li>
                      <li><span className="font-semibold">Twice Weekly:</span> GHS 1,100 per 8-week session</li>
                      <li><span className="font-semibold">Registration Fee:</span> GHS 100 (one-time for new students)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Private Lessons</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><span className="font-semibold">Individual:</span> GHS 200 per 45-minute lesson</li>
                      <li><span className="font-semibold">Package:</span> GHS 1,500 for 8 lessons</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">How to Register</h3>
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
          </section>
          
          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">What Parents Say</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6">My 5-year-old used to be terrified of water. After just one session of lessons, she&rsquo;s now excited to go swimming and has made incredible progress. The instructors are patient and make learning fun!</p>
                <p className="font-bold text-[#0A1738]">Abena M.</p>
                <p className="text-sm text-gray-500">Mother of Level 2 swimmer</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6">As a parent who doesn&rsquo;t swim, it was important to me that my children learn this essential skill. BlueFins provides excellent instruction in a safe environment. My son is now on Level 4 and swimming better than I ever could!</p>
                <p className="font-bold text-[#0A1738]">Kofi A.</p>
                <p className="text-sm text-gray-500">Father of Level 4 swimmer</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6">We&rsquo;ve tried other swim schools, but none compare to the quality of instruction at BlueFins. The small class sizes ensure each child gets attention, and the structured curriculum means constant progress. Worth every cedi!</p>
                <p className="font-bold text-[#0A1738]">Esi T.</p>
                <p className="text-sm text-gray-500">Mother of Level 5 swimmer</p>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">What age can my child start swimming lessons?</h3>
                <p className="text-gray-700">We accept children as young as 3 years old in our program. Children should be able to follow basic instructions and be comfortable being separated from parents during the lesson.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">How do you determine which level my child should be in?</h3>
                <p className="text-gray-700">New swimmers undergo a brief skill assessment during their first lesson to determine proper placement. We evaluate water comfort, current abilities, and confidence to ensure they're placed in a level where they'll be challenged but successful.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">How long does it take to complete each level?</h3>
                <p className="text-gray-700">Progress varies by child, but typically students complete a level in 1-3 sessions (8-24 weeks). Factors affecting progress include attendance, practice outside of lessons, age, and natural ability. We evaluate progress continuously and advance children when they've mastered all required skills.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Can parents stay and watch the lessons?</h3>
                <p className="text-gray-700">Yes, we have designated viewing areas where parents can observe lessons. However, we ask that parents refrain from interacting with children during lessons to maintain their focus and independence in the water.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">What happens if we miss a class?</h3>
                <p className="text-gray-700">We offer limited make-up lessons subject to availability within the same session. Please notify us of absences at least 24 hours in advance when possible. Consistent attendance provides the best learning experience.</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] text-white rounded-lg p-8 md:p-12 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Give your child the gift of swimming - a life skill that builds confidence, provides exercise, ensures safety, and creates joy for a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register"
                className="bg-[#FFD700] text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors"
              >
                Register for Lessons
              </Link>
              <Link 
                href="/contact"
                className="bg-white text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
} 