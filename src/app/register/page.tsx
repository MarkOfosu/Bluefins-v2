import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Register | Ghana BlueFins Swim Club',
  description: 'Register for swimming lessons, competitive team, or other programs at Ghana BlueFins Swim Club.',
}

export default function RegisterPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-24 pb-16"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Registration</h1>
            <p className="text-xl text-gray-600">
              Join the Ghana BlueFins Swim Club family
            </p>
          </div>

          {/* Registration Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-[#0A1738] p-6 text-white">
                <h2 className="text-2xl font-bold">Registration Form</h2>
                <p>Please complete all fields to register for our programs</p>
              </div>
              
              <div className="p-6 md:p-8">
                <form className="space-y-6">
                  {/* Program Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-4">Program Selection</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <label className="flex items-start p-4 border border-gray-200 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                          <input 
                            type="radio" 
                            name="program" 
                            value="kids-lessons" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="font-semibold block text-[#0A1738]">Kids Learn-to-Swim</span>
                            <span className="text-sm text-gray-500">Ages 3-14 • Group lessons</span>
                          </div>
                        </label>
                        <label className="flex items-start p-4 border border-gray-200 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                          <input 
                            type="radio" 
                            name="program" 
                            value="adult-lessons" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="font-semibold block text-[#0A1738]">Adult Learn-to-Swim</span>
                            <span className="text-sm text-gray-500">Ages 18+ • Group lessons</span>
                          </div>
                        </label>
                        <label className="flex items-start p-4 border border-gray-200 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                          <input 
                            type="radio" 
                            name="program" 
                            value="private-lessons" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="font-semibold block text-[#0A1738]">Private Lessons</span>
                            <span className="text-sm text-gray-500">One-on-one instruction</span>
                          </div>
                        </label>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="flex items-start p-4 border border-gray-200 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                          <input 
                            type="radio" 
                            name="program" 
                            value="competitive-assessment" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="font-semibold block text-[#0A1738]">Competitive Team Assessment</span>
                            <span className="text-sm text-gray-500">Ages 7+ • Team tryout</span>
                          </div>
                        </label>
                        <label className="flex items-start p-4 border border-gray-200 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                          <input 
                            type="radio" 
                            name="program" 
                            value="water-phobia" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="font-semibold block text-[#0A1738]">Water Phobia Program</span>
                            <span className="text-sm text-gray-500">All ages • Overcome fear of water</span>
                          </div>
                        </label>
                        <label className="flex items-start p-4 border border-gray-200 rounded-md hover:border-blue-500 cursor-pointer transition-colors">
                          <input 
                            type="radio" 
                            name="program" 
                            value="stroke-clinic" 
                            className="mt-1 mr-3"
                          />
                          <div>
                            <span className="font-semibold block text-[#0A1738]">Stroke Technique Clinic</span>
                            <span className="text-sm text-gray-500">Specialized workshops</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location Preference */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-4">Location Preference</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="location" value="spintex" className="mr-2" />
                        <span>Spintex Location</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="location" value="sakumono" className="mr-2" />
                        <span>Sakumono Location</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="location" value="any" className="mr-2" />
                        <span>No preference</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Swimmer Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-4">Swimmer Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <input 
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <input 
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                        <input 
                          type="date"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                        <select 
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Prefer not to say</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Swimming Experience *</label>
                        <select 
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Experience Level</option>
                          <option value="none">None - Never swam before</option>
                          <option value="beginner">Beginner - Some exposure but not comfortable</option>
                          <option value="intermediate">Intermediate - Can swim but need technique work</option>
                          <option value="advanced">Advanced - Proficient swimmer</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Any medical conditions or special needs we should be aware of?</label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows={3}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  {/* Parent/Guardian Information (for minors) */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-4">Parent/Guardian Information</h3>
                    <p className="text-sm text-gray-500 mb-4">(Required for swimmers under 18 years old)</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
                        <input 
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Relationship to Swimmer</label>
                        <input 
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-4">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input 
                          type="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input 
                          type="tel"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input 
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Street Address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input 
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone *</label>
                        <input 
                          type="tel"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Schedule Preference */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-4">Schedule Preference</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Days *</label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="days" value="monday" />
                            <span>Monday</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="days" value="tuesday" />
                            <span>Tuesday</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="days" value="wednesday" />
                            <span>Wednesday</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="days" value="thursday" />
                            <span>Thursday</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="days" value="friday" />
                            <span>Friday</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="days" value="saturday" />
                            <span>Saturday</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="days" value="sunday" />
                            <span>Sunday</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="time" value="morning" />
                            <span>Morning (8:00 AM - 12:00 PM)</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="time" value="afternoon" />
                            <span>Afternoon (12:00 PM - 4:00 PM)</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" name="time" value="evening" />
                            <span>Evening (4:00 PM - 8:00 PM)</span>
                          </label>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Session Frequency</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="once">Once per week</option>
                            <option value="twice">Twice per week</option>
                            <option value="thrice">Three times per week</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Information */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0A1738] mb-4">Additional Information</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select an option</option>
                        <option value="friend">Friend/Family Referral</option>
                        <option value="social">Social Media</option>
                        <option value="search">Internet Search</option>
                        <option value="event">Community Event</option>
                        <option value="school">School</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Any additional comments or questions?</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div className="mb-8">
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 mr-3" />
                        <span className="text-sm text-gray-700">
                          I agree to the <Link href="#" className="text-blue-600 underline">terms and conditions</Link>, including the waiver of liability. I understand that the registration fee is non-refundable, and I have read and agree to the payment and cancellation policies.
                        </span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button 
                      type="submit"
                      className="w-full bg-[#0A1738] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#0A1738]/90 transition-colors"
                    >
                      Submit Registration
                    </button>
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      You will receive an email confirmation with payment instructions after submission.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Information Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-[#0A1738] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Registration Process</h3>
                <ol className="list-decimal pl-5 text-gray-600 space-y-1">
                  <li>Submit registration form</li>
                  <li>Receive confirmation email</li>
                  <li>Pay registration fee</li>
                  <li>Attend assessment (if applicable)</li>
                  <li>Get assigned to class/group</li>
                  <li>Start swimming!</li>
                </ol>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-[#0A1738] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">What to Bring</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Swimwear</li>
                  <li>Towel</li>
                  <li>Swimming cap (required for long hair)</li>
                  <li>Goggles</li>
                  <li>Flip-flops/pool shoes</li>
                  <li>Water bottle</li>
                  <li>Change of clothes</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-[#0A1738] text-4xl mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A1738]">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  If you have questions about registration or need assistance, please contact our team:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">📞</span>
                    <span>+233 XX XXX XXXX</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✉️</span>
                    <span>info@ghanabluefins.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⏰</span>
                    <span>Office Hours: 9 AM - 5 PM, Mon-Sat</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 