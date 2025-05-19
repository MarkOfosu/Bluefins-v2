

export const metadata = {
  title: 'Additional Information | Ghana BlueFins Swim Club',
  description: 'Find additional information about the Ghana BlueFins Swim Club, including equipment requirements, membership details, and more.',
}

export default function InfoPage() {
  return (
    <main className="bg-white">
      <div className="pt-24 pb-16"> {/* Add padding to account for the fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-8 text-center">Additional Information</h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Equipment Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Required Equipment</h2>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-[#0A1738]">All Swimmers Must Have:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Proper-fitting swimsuit (one-piece for girls, jammers or briefs for boys)</li>
                  <li>Swimming cap (silicone or latex)</li>
                  <li>Goggles (properly fitted)</li>
                  <li>Towel</li>
                  <li>Water bottle</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#0A1738]">Competitive Team Additional Requirements:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Team swimsuit (for competitions)</li>
                  <li>Team cap with BlueFins logo</li>
                  <li>Kickboard</li>
                  <li>Pull buoy</li>
                  <li>Fins</li>
                  <li>Mesh equipment bag</li>
                </ul>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-blue-800 font-medium">
                    Equipment is available for purchase through the club. Please speak with a coach or admin staff for ordering information.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Membership Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Membership Information</h2>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-[#0A1738]">Membership Benefits:</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Access to professional coaching</li>
                  <li>Structured training sessions</li>
                  <li>Progress tracking and assessments</li>
                  <li>Eligibility for competitions (competitive team)</li>
                  <li>Team apparel discounts</li>
                  <li>Community events and social activities</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-[#0A1738]">Registration Process:</h3>
                <ol className="list-decimal ml-6 space-y-2 text-gray-700">
                  <li>Complete online registration form</li>
                  <li>Attend assessment (for proper group placement)</li>
                  <li>Pay registration fee and first month&apos;s dues</li>
                  <li>Submit medical clearance form (if applicable)</li>
                  <li>Attend orientation session</li>
                </ol>
                
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <p className="text-yellow-800 font-medium">
                    Registration is open year-round, but spaces in each group are limited. We recommend registering early to secure your spot.
                  </p>
                </div>
              </div>
            </section>
            
            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">What age can my child start swimming lessons?</h3>
                  <p className="text-gray-700">We accept children as young as 4 years old for our learn-to-swim program. Children must be able to follow basic instructions and be comfortable being separated from parents during the lesson.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">How often should my child attend practice?</h3>
                  <p className="text-gray-700">Learn-to-swim programs typically meet 1-2 times per week. Competitive team members are expected to attend 3-6 practices per week, depending on their age and level.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">What if we need to miss practice?</h3>
                  <p className="text-gray-700">Please notify your coach or the admin office if you need to miss practice. While occasional absences are understood, consistent attendance is important for progress. Refer to our attendance policy for competitive team requirements.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">Do you offer make-up lessons?</h3>
                  <p className="text-gray-700">Make-up lessons for the learn-to-swim program may be scheduled based on availability. Competitive team practices cannot be made up due to the progressive nature of the training schedule.</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#0A1738]">How do swimmers move up to the next level?</h3>
                  <p className="text-gray-700">Swimmers are evaluated regularly by their coaches. Promotion to the next level is based on skill mastery, physical readiness, and sometimes age considerations. Coaches will notify families when a swimmer is ready to move up.</p>
                </div>
              </div>
            </section>
            
            {/* Contact Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Still Have Questions?</h2>
              <div className="bg-[#0A1738] text-white rounded-lg p-8">
                <p className="mb-6">
                  If you couldn&apos;t find the information you were looking for, please don&apos;t hesitate to contact us directly. Our staff is happy to assist you with any questions or concerns.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#FFD700]">Club Admin Office</h3>
                    <p className="mb-1">Email: info@ghanabluefins.com</p>
                    <p className="mb-1">Phone: +233 55 123 4567</p>
                    <p>Hours: Mon-Fri, 9am-5pm</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#FFD700]">Head Coach</h3>
                    <p className="mb-1">Email: coach@ghanabluefins.com</p>
                    <p className="mb-1">Phone: +233 50 987 6543</p>
                    <p>Office Hours: By appointment</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 