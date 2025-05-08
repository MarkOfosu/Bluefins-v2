import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Schedule | Ghana BlueFins Swim Club',
  description: 'Class and training schedules for all Ghana BlueFins Swim Club programs at our Spintex and Sakumono locations.',
}

export default function SchedulePage() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Program Schedule</h1>
            <p className="text-xl text-gray-600">
              Find the perfect time slot for your swimming journey
            </p>
          </div>

          {/* Schedule Navigation */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#spintex" className="bg-[#0A1738] text-white py-3 px-6 rounded-lg font-bold text-center hover:bg-[#0A1738]/90 transition-colors">
                  Spintex Location
                </a>
                <a href="#sakumono" className="bg-[#0A1738] text-white py-3 px-6 rounded-lg font-bold text-center hover:bg-[#0A1738]/90 transition-colors">
                  Sakumono Location
                </a>
              </div>
            </div>
          </div>

          {/* SPINTEX */}
          <div id="spintex" className="max-w-5xl mx-auto mb-8 scroll-mt-32">
            <div className="bg-[#0A1738] text-white p-4 text-center">
              <h2 className="text-2xl font-bold">SPINTEX</h2>
            </div>
          </div>

          {/* Spintex Combined Schedule Section */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="border border-gray-200 rounded-lg overflow-hidden">              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">MONDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">TUESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">WEDNESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">THURSDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">FRIDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SATURDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SUNDAY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Competitive Swim Team Section */}
                    <tr className="bg-[#d1e7dd]">
                      <td colSpan={7} className="py-2 px-3 border border-gray-300">
                        <div className="font-bold">Competitive Swim Team</div>
                        <div>TurquoiseFins, LapisFins, NavyFins</div>
                      </td>
                    </tr>
                    <tr className="bg-[#d1e7dd]">
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5:30-6:15pm<br /><br />
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5:30-6:50am swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        6-8am swim<br />8-8:30am dryland
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                    </tr>

                    {/* MiniFins SkyFins Section */}
                    <tr className="bg-[#ffe8d1]">
                      <td colSpan={7} className="py-2 px-3 border border-gray-300">
                        <div className="font-bold">MiniFins, SkyFins</div>
                      </td>
                    </tr>
                    <tr className="bg-[#ffe8d1]">
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        4-5pm swim<br />5-5:15pm dryland
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        4-5pm swim<br />5-5:15pm dryland
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        4-5pm swim<br />5-5:15pm dryland
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        8-8:30am dryland<br />8:30-9:30am swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                    </tr>

                    {/* Kids Learn-to-Swim */}
                    <tr className="bg-[#d8d1e7]">
                      <td colSpan={7} className="py-2 px-3 border border-gray-300">
                        <div className="font-bold">Kids Learn-to-Swim</div>
                        <div className="text-xs">(swimmers can attend no more than 3 sessions per week)</div>
                      </td>
                    </tr>
                    <tr className="bg-[#d8d1e7]">
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        4:00-4:45pm<br />4:45-5:30pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        4:00-4:45pm<br />4:45-5:30pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        4:00-4:45pm<br /><br />
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5:30-6:15pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        4:00-4:45pm<br />4:45-5:30pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        7:30-8:15am<br />8:30-9:15am<br />9:30-10:15am<br />10:30-11:15am
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                    </tr>

                    {/* Adults Learn-to-Swim */}
                    <tr className="bg-[#f9c7c7]">
                      <td colSpan={7} className="py-2 px-3 border border-gray-300">
                        <div className="font-bold">Adults Learn-to-Swim</div>
                        <div className="text-xs">(swimmers can attend no more than 2 sessions per week)</div>
                      </td>
                    </tr>
                    <tr className="bg-[#f9c7c7]">
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5:30-6:30pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5:30-6:30pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5:30-6:30am
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5:30-6:30am
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        6:30-7:30am
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="inline-flex items-center bg-amber-100 px-3 py-1 rounded-md text-sm">
                    <span className="font-semibold">Regimanuel Gray Estates</span>
                  </span>
                  <span className="inline-flex items-center bg-blue-100 px-3 py-1 rounded-md text-sm">
                    <span className="font-semibold">Splash Social Centre</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SAKUMONO */}
          <div id="sakumono" className="max-w-5xl mx-auto mb-8 scroll-mt-32">
            <div className="bg-[#0A1738] text-white p-4 text-center">
              <h2 className="text-2xl font-bold">SAKUMONO</h2>
            </div>
          </div>

          {/* Sakumono - JMJ Section */}
          <section className="max-w-5xl mx-auto mb-16">            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-green-200 text-center p-3 border-b-4 border-green-500">
                <h3 className="text-xl font-bold text-[#0A1738]">JMJ SPORTS & EVENTS CENTRE</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">MONDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">TUESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">WEDNESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">THURSDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">FRIDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SATURDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SUNDAY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Competitive Swim Team */}
                    <tr className="bg-[#d1e7dd]">
                      <td colSpan={7} className="py-2 px-3 border border-gray-300">
                        <div className="font-bold">Competitive Swim Team</div>
                      </td>
                    </tr>
                    <tr className="bg-[#d1e7dd]">
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">1:00-3:00pm</td>
                      <td className="py-2 px-3 text-center border border-gray-300">1:00-3:00pm</td>
                    </tr>

                    {/* Learn-to-Swim */}
                    <tr className="bg-[#d8d1e7]">
                      <td colSpan={7} className="py-2 px-3 border border-gray-300">
                        <div className="font-bold">Learn-to-Swim</div>
                      </td>
                    </tr>
                    <tr className="bg-[#d8d1e7]">
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        1:00-1:45pm<br />2:00-2:45pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        1:00-1:45pm<br />2:00-2:45pm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Schedule Notes */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Schedule Notes</h3>
              
              <div className="space-y-4">
                <div className="bg-[#ebf9f1] p-4 rounded-lg border-l-4 border-[#d1e7dd]">
                  <h4 className="font-semibold text-[#155724] mb-2">Competitive Swim Team</h4>
                  <p className="text-gray-700">
                    Swimmers are expected to attend at least 3 practices per week. Each session includes both swimming and dryland exercises to build strength and improve technique.
                  </p>
                </div>
                
                <div className="bg-[#fff8e8] p-4 rounded-lg border-l-4 border-[#ffe8d1]">
                  <h4 className="font-semibold text-[#856404] mb-2">MiniFins & SkyFins</h4>
                  <p className="text-gray-700">
                    These are our introductory competitive swimming groups. Swimmers in these groups focus on technique development and building endurance.
                  </p>
                </div>
                
                <div className="bg-[#efe9f7] p-4 rounded-lg border-l-4 border-[#d8d1e7]">
                  <h4 className="font-semibold text-[#6f42c1] mb-2">Learn-to-Swim Programs</h4>
                  <p className="text-gray-700">
                    Kids can attend up to 3 sessions per week, while adults can attend up to 2 sessions per week. Sessions are 45 minutes long for kids and 60 minutes for adults.
                  </p>
                </div>
                
                <div className="bg-[#fff4e5] p-4 rounded-lg border-l-4 border-[#ffecb5]">
                  <h4 className="font-semibold text-[#a66b18] mb-2">Schedule Changes</h4>
                  <p className="text-gray-700">
                    Please note that schedules are subject to change, especially during holidays and competition seasons. We will notify all members of any changes via email and WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Location Summary */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-[#0A1738] text-center">Our Locations</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Spintex Locations */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-[#0A1738]">Spintex Locations</h4>
                  <div className="space-y-4">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <p className="font-semibold text-amber-800">Regimanuel Gray Estates</p>
                      <p className="text-gray-700 text-sm">Community pool inside Regimanuel Gray Estates, Spintex Road</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="font-semibold text-blue-800">Splash Social Centre</p>
                      <p className="text-gray-700 text-sm">Modern swimming facility on Spintex Road</p>
                    </div>
                  </div>
                </div>
                
                {/* Sakumono Location */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-[#0A1738]">Sakumono Location</h4>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">JMJ Sports Centre</p>
                    <p className="text-gray-700 text-sm">Located near main Sakumono junction, Tema</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  href="/contact"
                  className="inline-block bg-[#0A1738] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#0A1738]/90 transition-colors"
                >
                  Contact Us For Directions
                </Link>
              </div>
            </div>
          </section>

          {/* Registration CTA */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-[#0A1738] text-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
                <p className="max-w-2xl mx-auto">
                  Register now to secure your spot in our programs. We offer flexible scheduling options to accommodate your busy lifestyle.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link 
                  href="/register"
                  className="bg-[#FFD700] text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors text-center"
                >
                  Register Now
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                >
                  Contact Us With Questions
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}