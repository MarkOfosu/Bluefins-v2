// src/app/coaches/page.tsx
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoachCard from '@/components/CoachCard';
import {  getCoachesByType } from '@/lib/coaches';

export default function CoachesPage() {
  // Get all coaches categorized by type
  const headCoaches = getCoachesByType('head');
  const assistantCoaches = getCoachesByType('assistant');
  const guestCoaches = getCoachesByType('guest');
  
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        {/* Hero Background */}
        <div className="absolute inset-0 h-[40vh] z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[#1E40AF]"></div>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFD700\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-[#FFD700]">Coaches</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Experienced professionals dedicated to developing champions in and out of the water
          </p>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-12 bg-white relative z-10 -mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Our Coaching Philosophy</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our coaches are dedicated to helping you achieve your swimming goals. They are experienced in coaching swimmers of all ages and abilities. Whether you are a beginner or an experienced swimmer, our coaches will help you improve your technique and reach your full potential.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-[#1E40AF]/5 px-4 py-2 rounded-full text-[#1E40AF] font-medium">
                  ASCA Certified
                </div>
                <div className="bg-[#1E40AF]/5 px-4 py-2 rounded-full text-[#1E40AF] font-medium">
                  FINA Certified
                </div>
                <div className="bg-[#1E40AF]/5 px-4 py-2 rounded-full text-[#1E40AF] font-medium">
                  ITU Certified
                </div>
                <div className="bg-[#1E40AF]/5 px-4 py-2 rounded-full text-[#1E40AF] font-medium">
                  Lifeguard Trained
                </div>
                <div className="bg-[#1E40AF]/5 px-4 py-2 rounded-full text-[#1E40AF] font-medium">
                  Competition Experience
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation within page */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <a href="#head-coaches" className="bg-[#1E40AF] text-white px-6 py-2 rounded-lg hover:bg-[#1E40AF]/90 transition-colors">
              Head Coaches
            </a>
            {assistantCoaches.length > 0 && (
              <a href="#assistant-coaches" className="bg-[#1E40AF] text-white px-6 py-2 rounded-lg hover:bg-[#1E40AF]/90 transition-colors">
                Assistant Coaches
              </a>
            )}
            {guestCoaches.length > 0 && (
              <a href="#guest-coaches" className="bg-[#1E40AF] text-white px-6 py-2 rounded-lg hover:bg-[#1E40AF]/90 transition-colors">
                Guest Coaches
              </a>
            )}
          </div>
          
          {/* Head Coaches Section */}
          <div id="head-coaches" className="scroll-mt-24 mb-16">
            <div className="border-b border-gray-200 pb-4 mb-8">
              <h2 className="text-3xl font-bold text-[#1E40AF]">Head Coaches</h2>
              <p className="text-gray-600 mt-2">
                Our leadership team brings extensive experience and expertise to guide our swimming programs.
              </p>
            </div>
            
            <div className="space-y-16">
              {headCoaches.map(coach => (
                <CoachCard key={coach.id} coach={coach} variant="full" />
              ))}
            </div>
          </div>
          
          {/* Assistant Coaches Section */}
          {assistantCoaches.length > 0 && (
            <div id="assistant-coaches" className="scroll-mt-24 mb-16">
              <div className="border-b border-gray-200 pb-4 mb-8">
                <h2 className="text-3xl font-bold text-[#1E40AF]">Assistant Coaches</h2>
                <p className="text-gray-600 mt-2">
                  Our dedicated assistant coaches provide specialized instruction and support for all swimmers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {assistantCoaches.map(coach => (
                  <CoachCard key={coach.id} coach={coach} variant="compact" />
                ))}
              </div>
            </div>
          )}
          
          {/* Guest Coaches Section */}
          {guestCoaches.length > 0 && (
            <div id="guest-coaches" className="scroll-mt-24 mb-16">
              <div className="border-b border-gray-200 pb-4 mb-8">
                <h2 className="text-3xl font-bold text-[#1E40AF]">Guest Coaches</h2>
                <p className="text-gray-600 mt-2">
                  Visiting professional coaches who offer specialized clinics and training sessions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {guestCoaches.map(coach => (
                  <CoachCard key={coach.id} coach={coach} variant="compact" />
                ))}
              </div>
            </div>
          )}
          
          {/* Private Lessons Section */}
          <div className="bg-[#1E40AF]/5 rounded-lg p-8 my-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1E40AF] mb-4">Private Lessons</h2>
              <p className="text-gray-700 mb-6">
                Get personalized one-on-one instruction from our experienced coaches. Private lessons are tailored to your specific needs and goals, offering accelerated progress in technique development, competitive skills, or water confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center">
                  <div className="bg-[#FFD700] rounded-full p-2 mr-3">
                    <svg className="w-5 h-5 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-[#1E40AF] font-medium">Flexible scheduling to fit your availability</span>
                </div>
                
                <Link
                  href="/contact?subject=Private%20Lessons"
                  className="inline-block bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Inquire About Private Lessons
                </Link>
              </div>
            </div>
          </div>
          
          {/* Join Our Team Section */}
          <div className="bg-[#1E40AF] text-white rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-4">Interested in Coaching?</h2>
                <p className="text-white/90 mb-6">
                  We&apos;re always looking for passionate and experienced swim coaches to join our team. If you have a background in competitive swimming and a passion for teaching, we'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Experience in competitive swimming</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Passion for teaching and mentoring</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Coaching certifications preferred but not required</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact?subject=Coaching%20Position"
                    className="inline-block bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#1E40AF] font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 bg-[#1E40AF] hidden md:block relative">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFD700\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  backgroundSize: '60px 60px'
                }}></div>
                <div className="h-full flex items-center justify-center p-6">
                  <div className="bg-[#FFD700] text-[#1E40AF] font-bold text-xl px-6 py-4 rounded-lg shadow-lg transform -rotate-3">
                    Join Our Coaching Team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}