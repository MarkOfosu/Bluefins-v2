import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Adult Learn-to-Swim | Ghana BlueFins Swim Club',
  description: 'Swimming lessons for adults of all abilities, from beginners to advanced swimmers, in a supportive environment.',
}

export default function AdultLearnToSwim() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-24 pb-16"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Adult Learn-to-Swim Program</h1>
            <p className="text-xl text-gray-600">
              It&rsquo;s never too late to learn how to swim
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16 relative">
            <div className="bg-[#0A1738] rounded-lg overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[url('/images/image7.jpg')] bg-cover bg-center"></div>
              </div>
              <div className="relative p-8 md:p-12 text-white">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold mb-6">Swimming is a Lifelong Skill</h2>
                  <p className="text-lg mb-6">
                    Learning to swim as an adult opens up a world of possibilities for fitness, recreation, and safety around water. Our Adult Learn-to-Swim program is specifically designed for adult learners, providing a supportive and understanding environment.
                  </p>
                  <p className="text-lg mb-8">
                    Whether you&rsquo;ve never entered a pool before or want to refine your technique, our experienced instructors help you build confidence and skills at your own pace.
                  </p>
                  <Link 
                    href="/register"
                    className="inline-block bg-[#FFD700] text-[#0A1738] font-bold px-8 py-3 rounded-lg hover:bg-[#e6c200] transition-colors"
                  >
                    Register for Classes
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
                Our Adult Learn-to-Swim program addresses the unique challenges and needs of adult learners. We provide a structured, progressive curriculum that takes you from your first experience in the water to becoming a confident, skilled swimmer.
              </p>
              <p className="text-gray-700 mb-8">
                We understand that as an adult, learning to swim may come with anxiety or apprehension. Our instructors are specially trained to work with adult learners, providing patience, encouragement, and techniques to overcome fear of water.
              </p>
              
              <div className="bg-[#0A1738] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Program Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Small class sizes (maximum 4:1 student-to-instructor ratio)</li>
                  <li>Options for private or semi-private lessons</li>
                  <li>Adult-focused teaching methods</li>
                  <li>Segregated sections for men and women if requested</li>
                  <li>Supportive, judgment-free environment</li>
                  <li>Flexible scheduling including evening and weekend options</li>
                  <li>Focus on practical water safety and survival skills</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skill Levels */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Our Skill Levels</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Level 1: Water Comfort & Safety */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#78b6e4] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 1: Water Comfort & Safety</h3>
                  <p className="text-sm text-gray-500 mb-4">First-time adult swimmers</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Water adjustment and overcoming anxiety</li>
                      <li>Breath control and submerging</li>
                      <li>Floating with and without support</li>
                      <li>Basic water safety</li>
                      <li>Understanding pool environments</li>
                      <li>Recovery techniques</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">Perfect for adults with little or no water experience or with water anxiety</p>
                </div>
              </div>
              
              {/* Level 2: Fundamental Strokes */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#5da3d8] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 2: Fundamental Strokes</h3>
                  <p className="text-sm text-gray-500 mb-4">Comfortable in water, ready for strokes</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Front and back gliding</li>
                      <li>Rhythmic breathing</li>
                      <li>Freestyle arm and leg movements</li>
                      <li>Backstroke introduction</li>
                      <li>Treading water basics</li>
                      <li>Deep water orientation</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For adults who can float but need to develop basic swimming strokes</p>
                </div>
              </div>
              
              {/* Level 3: Stroke Development */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#4190cc] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 3: Stroke Development</h3>
                  <p className="text-sm text-gray-500 mb-4">Building on the basics</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Freestyle with side breathing</li>
                      <li>Backstroke refinement</li>
                      <li>Breaststroke introduction</li>
                      <li>Endurance building</li>
                      <li>Diving from poolside</li>
                      <li>Extended treading water</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For adults with basic stroke knowledge looking to improve technique</p>
                </div>
              </div>
              
              {/* Level 4: Stroke Refinement & Fitness */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#277cc0] h-3"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#0A1738]">Level 4: Stroke Refinement & Fitness</h3>
                  <p className="text-sm text-gray-500 mb-4">Confident swimmers improving technique</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Skills Taught:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                      <li>Advanced stroke technique</li>
                      <li>All four competitive strokes</li>
                      <li>Lap swimming strategies</li>
                      <li>Turns and streamlining</li>
                      <li>Fitness swimming principles</li>
                      <li>Interval training introduction</li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-blue-600 italic">For competent swimmers looking to improve efficiency and fitness</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Program Features */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Class Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Class Options</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-semibold">Group Classes:</span> 60-minute sessions with maximum 4 students per instructor</li>
                      <li><span className="font-semibold">Semi-Private:</span> 45-minute sessions with 2 students per instructor</li>
                      <li><span className="font-semibold">Private Lessons:</span> 30-minute one-on-one instruction</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Schedule</h3>
                    <p className="text-gray-700 mb-2">We offer flexible scheduling options to accommodate busy adult lives:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Weekday evening classes (6:00 PM - 8:00 PM)</li>
                      <li>Saturday morning and afternoon sessions</li>
                      <li>Sunday afternoon sessions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">What to Bring</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Comfortable swimsuit</li>
                      <li>Towel</li>
                      <li>Goggles (recommended)</li>
                      <li>Swim cap (optional but recommended for long hair)</li>
                      <li>Change of clothes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Pricing & Registration</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Group Lessons</h3>
                    <ul className="list-none space-y-2 text-gray-700">
                      <li><span className="font-semibold">6-Week Session (weekly):</span> GHS 800</li>
                      <li><span className="font-semibold">6-Week Session (twice weekly):</span> GHS 1,500</li>
                      <li><span className="font-semibold">Registration Fee:</span> GHS 100 (one-time for new students)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Semi-Private & Private</h3>
                    <ul className="list-none space-y-2 text-gray-700">
                      <li><span className="font-semibold">Semi-Private:</span> GHS 250 per lesson or GHS 1,350 for 6 lessons</li>
                      <li><span className="font-semibold">Private:</span> GHS 350 per lesson or GHS 1,800 for 6 lessons</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Special Programs</h3>
                    <ul className="list-none space-y-2 text-gray-700">
                      <li><span className="font-semibold">Water Phobia Overcome:</span> 4-session intensive private program - GHS 1,500</li>
                      <li><span className="font-semibold">Stroke Technique Clinic:</span> 2-hour specialized workshop - GHS 400</li>
                    </ul>
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
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Success Stories</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6">I never learned to swim as a child and was terrified of water. At 45, I finally decided to face my fear. The instructors at BlueFins were incredible - understanding, patient, and encouraging. Six weeks later, I can swim the length of the pool!</p>
                <p className="font-bold text-[#0A1738]">Francis K., 45</p>
                <p className="text-sm text-gray-500">Overcame 40+ years of water fear</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6">I could stay afloat but never learned proper technique. After just two months in the Adult program, my stroke efficiency has improved dramatically. Swimming has become my favorite form of exercise, and I&rsquo;ve lost 5kg!</p>
                <p className="font-bold text-[#0A1738]">Akosua M., 38</p>
                <p className="text-sm text-gray-500">Fitness swimmer</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[#FFD700] text-3xl mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6">As someone in my 60s, I was worried I&rsquo;d be out of place, but BlueFins has students of all ages. The instructors modified techniques to work with my joint issues, and I&rsquo;ve found swimming to be the perfect low-impact exercise for me.</p>
                <p className="font-bold text-[#0A1738]">Joseph A., 63</p>
                <p className="text-sm text-gray-500">Senior swimmer</p>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">I&rsquo;m terrified of water. Can you really help me?</h3>
                <p className="text-gray-700">Absolutely! Many of our adult students start with significant water anxiety. We have specialized techniques and approaches for helping adults overcome fear of water, and our instructors are trained in working with anxious swimmers. Our &ldquo;Water Phobia Overcome&rdquo; program is specifically designed for this situation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Will I be in a class with much younger/more advanced swimmers?</h3>
                <p className="text-gray-700">No. Our adult classes are exclusively for adults (18+), and we further group students by ability level. You&rsquo;ll be learning alongside peers at a similar skill level, ensuring comfortable and appropriate progression.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">How long will it take me to learn to swim?</h3>
                <p className="text-gray-700">Learning rates vary by individual, but most adults can develop basic water safety skills and elementary swimming ability within 6-12 lessons. Becoming a confident, efficient swimmer typically takes 3-6 months of regular practice. The key factors are consistency in attendance and comfort in the water.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Is there an age limit for adult swimming lessons?</h3>
                <p className="text-gray-700">There is no upper age limit! We have successful students in their 70s and 80s. Swimming is an excellent low-impact exercise that&rsquo;s particularly beneficial for older adults. Our instructors can adapt teaching methods to accommodate physical limitations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Do you offer women-only or men-only classes?</h3>
                <p className="text-gray-700">Yes, we understand cultural and personal preferences and offer segregated classes on request. Please inquire about our women-only and men-only sessions when registering.</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] text-white rounded-lg p-8 md:p-12 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">It&rsquo;s Never Too Late to Learn</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join the thousands of adults who have discovered the joy, freedom, and health benefits of swimming through our Adult Learn-to-Swim program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register"
                className="bg-[#FFD700] text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors"
              >
                Register Now
              </Link>
              <Link 
                href="/contact"
                className="bg-white text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Contact Us With Questions
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
} 