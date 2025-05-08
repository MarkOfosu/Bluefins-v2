import React from 'react';
import Link from 'next/link';

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
  icon: string;
}

const PolicySection = ({ title, children, icon }: PolicySectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="bg-[#0A1738] text-white p-4 flex items-center">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};

const TeamPolicy = () => {
  return (
    <section id="team-policy" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1738]">Team Policies</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-700">
            Our policies help ensure that all swimmers have a positive, productive, and safe experience.
            Please review these guidelines carefully.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Policy Hero */}
          <div className="bg-[#0A1738] rounded-xl p-8 mb-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/team-policy-bg.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ghana BlueFins Team Policy</h3>
              <p className="text-white/90 mb-6 max-w-2xl">
                At Ghana BlueFins, we strive to create an environment where swimmers can excel both in and out of the pool. 
                Our policies are designed to support swimmers in their development and ensure the smooth operation of our programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/register"
                  className="bg-[#FFD700] text-[#0A1738] hover:bg-white font-bold px-6 py-3 rounded-lg transition-colors shadow-md"
                >
                  Register Now
                </Link>
                <Link 
                  href="/contact"
                  className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Attendance Policy */}
          <PolicySection title="Practice Attendance Policy" icon="📋">
            <p className="text-gray-700 mb-4">
              Regular attendance is crucial for the development and progress of our swimmers. We expect swimmers to attend at least 3 workouts a week to ensure they are getting the most out of the program. Consistent attendance helps swimmers build their skills, endurance, and confidence in the water.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-700 font-medium">Attendance Requirement: Minimum 3 practices per week</p>
            </div>
          </PolicySection>

          {/* Tracking Attendance */}
          <PolicySection title="Tracking Attendance" icon="✓">
            <p className="text-gray-700 mb-4">
              We use an attendance tracking system to monitor the participation of each swimmer. This helps us ensure that swimmers are meeting the attendance requirements and allows us to identify any issues early on. Swimmers or their guardians are required to inform the coach in advance if they will miss a practice session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex-1 bg-[#0A1738]/5 p-4 rounded">
                <h4 className="font-semibold text-[#0A1738] mb-2">Coach Notification</h4>
                <p className="text-gray-700 text-sm">
                  Please notify your coach as soon as possible if you will miss a practice session
                </p>
              </div>
              <div className="flex-1 bg-[#0A1738]/5 p-4 rounded">
                <h4 className="font-semibold text-[#0A1738] mb-2">Progress Tracking</h4>
                <p className="text-gray-700 text-sm">
                  Regular attendance allows coaches to effectively track and improve swimmer performance
                </p>
              </div>
            </div>
          </PolicySection>

          {/* Excused Absences */}
          <PolicySection title="Excused Absences" icon="🏫">
            <p className="text-gray-700 mb-4">
              We understand that there may be occasions when a swimmer cannot attend practice due to illness, school commitments, or other personal reasons. In such cases, please inform the coach as soon as possible to ensure that the absence is excused.
            </p>
            <h4 className="font-semibold text-[#0A1738] mb-2">Valid Reasons for Excused Absences:</h4>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Illness or injury</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Important school events or exams</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Family emergencies</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Religious observances</span>
              </li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-800">
                <span className="font-medium">Important:</span> Please communicate absences to your coach via email or phone as early as possible.
              </p>
            </div>
          </PolicySection>

          {/* Unexcused Absences */}
          <PolicySection title="Unexcused Absences" icon="⚠️">
            <p className="text-gray-700 mb-4">
              Unexcused absences can affect the progress and development of the swimmer. Repeated unexcused absences may result in a meeting with the coach to discuss their commitment to the program. If a swimmer has multiple unexcused absences, they may be asked to take a break from the program.
            </p>
            <div className="overflow-hidden rounded-lg border border-red-200 mb-6">
              <div className="bg-red-50 px-4 py-2 border-b border-red-200">
                <h4 className="font-semibold text-red-800">Consequences of Unexcused Absences</h4>
              </div>
              <div className="p-4">
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">First occurrence:</span> Verbal reminder about attendance policy</li>
                  <li><span className="font-medium">Multiple occurrences:</span> Meeting with coach and parents/guardians</li>
                  <li><span className="font-medium">Continued pattern:</span> Potential temporary suspension from team activities</li>
                  <li><span className="font-medium">Persistent issues:</span> Reassessment of program participation</li>
                </ol>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">
              Our goal is not to penalize swimmers but to ensure commitment and maximize development. We&apos;re always open to discussing special circumstances.
            </p>
          </PolicySection>

          {/* Scholarships */}
          <PolicySection title="Scholarships" icon="🏆">
            <p className="text-gray-700 mb-4">
              As one of our main goals is to raise the awareness of swimming as both a sport and as a safety skill and as we understand the program fees may be high for some families, we are offering a financial aid scholarship program. Unfortunately, we are not able to subsidize the pool fee. The financial aid program only applies to the Ghana BlueFins club fees. Everyone interested in this program must complete a financial aid application, which can be emailed upon request.
            </p>
            <p className="text-gray-700 mb-4">
              The number of recipients into this program is limited and selection will be based mainly on financial need as well as the motivation and drive of the swimmer.
            </p>
            <div className="bg-gradient-to-r from-[#0A1738] to-[#0A1738]/90 text-white p-5 rounded-lg mt-6">
              <h4 className="font-bold text-lg mb-3">Application Deadlines</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-medium">Competitive team, masters team, mini BlueFins:</span> Each January or when first joining</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><span className="font-medium">Learn-to-swim programs:</span> After trial lesson, before first paid lesson</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/20">
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-white hover:text-[#FFD700] font-medium"
                >
                  <span>Request a scholarship application</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </PolicySection>

          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 mt-10">
            <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Additional Team Policies</h3>
            <p className="text-gray-700 mb-6">
              The policies outlined above are key parts of our team guidelines. For complete details on all our policies, including code of conduct, competition requirements, and more, please download our complete team handbook.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <Link
                href="/team-handbook.pdf"
                className="inline-flex items-center text-[#0A1738] font-medium hover:text-[#FFD700]"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Complete Team Handbook
              </Link>
              <Link
                href="/contact"
                className="bg-[#0A1738] text-white font-semibold py-2 px-4 rounded hover:bg-[#0A1738]/90 text-center"
              >
                Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPolicy; 