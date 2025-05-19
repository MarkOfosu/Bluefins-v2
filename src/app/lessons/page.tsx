
import Link from 'next/link';

export const metadata = {
  title: 'Swimming Lessons | Ghana BlueFins Swim Club',
  description: 'Learn to swim programs for all ages and abilities at Ghana BlueFins Swim Club, with professional instructors in a safe environment.',
}

export default function LessonsPage() {
  return (
    <main className="bg-white">
      <div className="pt-24 pb-16"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Swimming Lessons</h1>
            <p className="text-xl text-gray-600">
              Professional swim instruction for all ages and abilities
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
                  <h2 className="text-3xl font-bold mb-6">Learn to Swim with Confidence</h2>
                  <p className="text-lg mb-6">
                    At Ghana BlueFins, we believe that swimming is more than just a recreational activity—it&rsquo;s an essential life skill. Our learn-to-swim programs are designed to help swimmers of all ages and abilities develop water confidence, proper technique, and water safety skills.
                  </p>
                  <p className="text-lg mb-8">
                    With small class sizes, certified instructors, and a structured curriculum, we provide a safe, supportive environment for swimmers to progress at their own pace.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Our Swimming Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kids Learn-to-Swim Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                <div className="relative h-60">
                  <div className="absolute inset-0 bg-[url('/images/image6.jpg')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Kids Learn-to-Swim</h3>
                    <p className="text-white text-sm">Ages 3-14</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Our kids&rsquo; program takes children from their first splash to becoming confident, skilled swimmers through age-appropriate lessons that build skills progressively while making water safety fun and engaging.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-1">
                    <li>Six progressive skill levels</li>
                    <li>Small class sizes (max 6:1 ratio)</li>
                    <li>Emphasis on water safety</li>
                    <li>Supportive, fun learning environment</li>
                    <li>Regular progress evaluations</li>
                  </ul>
                  <Link 
                    href="/lessons/kids"
                    className="block w-full text-center bg-[#0A1738] text-white py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                  >
                    Learn More About Kids&rsquo; Lessons
                  </Link>
                </div>
              </div>
              
              {/* Adult Learn-to-Swim Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
                <div className="relative h-60">
                  <div className="absolute inset-0 bg-[url('/images/image7.jpg')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Adult Learn-to-Swim</h3>
                    <p className="text-white text-sm">Ages 18+</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    It&rsquo;s never too late to learn to swim! Our adult program is specially designed for adult learners, whether you&rsquo;re overcoming water anxiety or refining your technique for fitness swimming.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-1">
                    <li>Adult-focused teaching methods</li>
                    <li>Small class sizes (max 4:1 ratio)</li>
                    <li>Options for private/semi-private lessons</li>
                    <li>Flexible scheduling for busy adults</li>
                    <li>Supportive, judgment-free environment</li>
                  </ul>
                  <Link 
                    href="/lessons/adults"
                    className="block w-full text-center bg-[#0A1738] text-white py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                  >
                    Learn More About Adult Lessons
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1738]">Benefits of Swimming</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0A1738] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Safety</h3>
                <p className="text-gray-600">
                  Learning to swim is a critical safety skill that can prevent drowning and water-related accidents, giving you peace of mind around water.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0A1738] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Health</h3>
                <p className="text-gray-600">
                  Swimming is a complete workout that improves cardiovascular fitness, builds muscle strength, and enhances flexibility without stressing joints.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[#0A1738] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Confidence</h3>
                <p className="text-gray-600">
                  Mastering swimming builds self-confidence and opens up opportunities for water-based recreation and activities for a lifetime.
                </p>
              </div>
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">What Our Students Say</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="text-[#FFD700] text-3xl mr-3">&ldquo;</div>
                  <p className="text-gray-700">
                    The instructors at BlueFins are exceptional—patient with beginners yet skilled at challenging more advanced swimmers. Our whole family has taken lessons here, and we&rsquo;ve all had excellent experiences. The progress my children have made is remarkable!
                  </p>
                </div>
                <p className="font-bold text-[#0A1738] ml-8">The Mensah Family</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="text-[#FFD700] text-3xl mr-3">&ldquo;</div>
                  <p className="text-gray-700">
                    I started swimming at 43 with a fear of water. The adult program at BlueFins was transformative. Within weeks, I went from panic to swimming laps! The instructors understand adult learners and created a supportive environment where I could progress at my own pace.
                  </p>
                </div>
                <p className="font-bold text-[#0A1738] ml-8">David O., Adult Swimmer</p>
              </div>
            </div>
          </section>
          
          {/* Class Information Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#0A1738]">Class Information</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#0A1738] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Program</th>
                    <th className="py-3 px-4 text-left border-b">Ages</th>
                    <th className="py-3 px-4 text-left border-b">Class Size</th>
                    <th className="py-3 px-4 text-left border-b">Session Length</th>
                    <th className="py-3 px-4 text-left border-b">Price Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Kids Group Lessons</td>
                    <td className="py-3 px-4">3-14 years</td>
                    <td className="py-3 px-4">Max 6 students</td>
                    <td className="py-3 px-4">8 weeks (45 min classes)</td>
                    <td className="py-3 px-4">GHS 600-1,100</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-3 px-4 font-medium">Kids Private Lessons</td>
                    <td className="py-3 px-4">3-14 years</td>
                    <td className="py-3 px-4">1:1 instruction</td>
                    <td className="py-3 px-4">Per lesson (45 min)</td>
                    <td className="py-3 px-4">GHS 200 per lesson</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Adult Group Lessons</td>
                    <td className="py-3 px-4">18+ years</td>
                    <td className="py-3 px-4">Max 4 students</td>
                    <td className="py-3 px-4">6 weeks (60 min classes)</td>
                    <td className="py-3 px-4">GHS 800-1,500</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-3 px-4 font-medium">Adult Private Lessons</td>
                    <td className="py-3 px-4">18+ years</td>
                    <td className="py-3 px-4">1:1 instruction</td>
                    <td className="py-3 px-4">Per lesson (30 min)</td>
                    <td className="py-3 px-4">GHS 350 per lesson</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Water Phobia Program</td>
                    <td className="py-3 px-4">All ages</td>
                    <td className="py-3 px-4">1:1 instruction</td>
                    <td className="py-3 px-4">4 sessions</td>
                    <td className="py-3 px-4">GHS 1,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              All new students pay a one-time GHS 100 registration fee. Family discounts available.
            </p>
          </section>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-[#0A1738] to-[#1a3a6c] text-white rounded-lg p-8 md:p-12 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Swimming?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Discover the joy and benefits of swimming with our professional instructors in a safe, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/schedule"
                className="bg-white text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                View Schedule
              </Link>
              <Link 
                href="/register"
                className="bg-[#FFD700] text-[#0A1738] px-8 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors"
              >
                Register for Lessons
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 