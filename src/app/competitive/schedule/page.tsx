import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Competitive Team Schedule | Ghana BlueFins Swim Club',
  description: 'Training schedule for all competitive swim teams at Ghana BlueFins Swim Club, including TurquoiseFins, LapisFins, NavyFins, MiniFins, SkyFins, and MasterFins.',
}

export default function CompetitiveSchedulePage() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">Competitive Team Schedule</h1>
            <p className="text-xl text-gray-600">
              Detailed training schedule for all our competitive swimming squads
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

          {/* Squad List */}
          <section className="max-w-5xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-[#0A1738]">Our Competitive Squads</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#d1e7dd] p-4 rounded-lg border-l-4 border-[#198754]">
                  <h3 className="font-bold text-[#155724] mb-2">MiniFins</h3>
                  <p className="text-gray-700 text-sm">Ages 6-8 • Introductory competitive swimming</p>
                </div>
                
                <div className="bg-[#ffe8d1] p-4 rounded-lg border-l-4 border-[#fd7e14]">
                  <h3 className="font-bold text-[#856404] mb-2">SkyFins</h3>
                  <p className="text-gray-700 text-sm">Ages 8-10 • Developing competitive swimmers</p>
                </div>
                
                <div className="bg-[#d1ecf1] p-4 rounded-lg border-l-4 border-[#17a2b8]">
                  <h3 className="font-bold text-[#0c5460] mb-2">TurquoiseFins</h3>
                  <p className="text-gray-700 text-sm">Ages 10-12 • Intermediate competitive</p>
                </div>
                
                <div className="bg-[#cfe2ff] p-4 rounded-lg border-l-4 border-[#0d6efd]">
                  <h3 className="font-bold text-[#004085] mb-2">LapisFins</h3>
                  <p className="text-gray-700 text-sm">Ages 12-14 • Advanced technique</p>
                </div>
                
                <div className="bg-[#d8d1e7] p-4 rounded-lg border-l-4 border-[#6f42c1]">
                  <h3 className="font-bold text-[#2c0b5a] mb-2">NavyFins</h3>
                  <p className="text-gray-700 text-sm">Ages 14+ • Elite performance</p>
                </div>
                
                <div className="bg-[#f9c7c7] p-4 rounded-lg border-l-4 border-[#dc3545]">
                  <h3 className="font-bold text-[#721c24] mb-2">MasterFins</h3>
                  <p className="text-gray-700 text-sm">Ages 18+ • Adult competitive</p>
                </div>
              </div>
            </div>
          </section>

          {/* SPINTEX */}
          <div id="spintex" className="max-w-5xl mx-auto mb-8 scroll-mt-32">
            <div className="bg-[#0A1738] text-white p-4 text-center">
              <h2 className="text-2xl font-bold">SPINTEX LOCATION</h2>
            </div>
          </div>

          {/* Spintex Combined Schedule Section */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="border border-gray-200 rounded-lg overflow-hidden">              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SQUAD</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">MONDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">TUESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">WEDNESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">THURSDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">FRIDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SATURDAY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* MiniFins */}
                    <tr className="bg-[#ffe8d1]">
                      <td className="py-2 px-3 font-bold text-center border border-gray-300">MiniFins</td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        4-5pm swim<br />5-5:15pm dryland
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        4-5pm swim<br />5-5:15pm dryland
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        8-8:30am dryland<br />8:30-9:30am swim
                      </td>
                    </tr>

                    {/* SkyFins */}
                    <tr className="bg-[#ffe8d1]">
                      <td className="py-2 px-3 font-bold text-center border border-gray-300">SkyFins</td>
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
                    </tr>

                    {/* TurquoiseFins */}
                    <tr className="bg-[#d1e7dd]">
                      <td className="py-2 px-3 font-bold text-center border border-gray-300">TurquoiseFins</td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        6-8am swim<br />8-8:30am dryland
                      </td>
                    </tr>

                    {/* LapisFins */}
                    <tr className="bg-[#d1e7dd]">
                      <td className="py-2 px-3 font-bold text-center border border-gray-300">LapisFins</td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5-5:15pm dryland<br />5:15-7pm swim<br /><br />
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5:30-6:15pm
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5:30-6:50am swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        6-8am swim<br />8-8:30am dryland
                      </td>
                    </tr>

                    {/* NavyFins */}
                    <tr className="bg-[#d1e7dd]">
                      <td className="py-2 px-3 font-bold text-center border border-gray-300">NavyFins</td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-amber-100 px-2 py-1 rounded-sm block mb-2">Regimanuel:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        <span className="bg-blue-100 px-2 py-1 rounded-sm block mb-2">Splash:</span>
                        5-5:15pm dryland<br />5:15-7pm swim
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
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
              <h2 className="text-2xl font-bold">SAKUMONO LOCATION</h2>
            </div>
          </div>

          {/* Sakumono - JMJ Section */}
          <section className="max-w-5xl mx-auto mb-16">            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SQUAD</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">MONDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">TUESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">WEDNESDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">THURSDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">FRIDAY</th>
                      <th className="py-3 px-2 text-center font-semibold text-gray-700 border border-gray-300">SATURDAY/SUNDAY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* NavyFins */}
                    <tr className="bg-[#d1e7dd]">
                      <td className="py-2 px-3 font-bold text-center border border-gray-300">NavyFins</td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        SAT: 1:00-3:00pm<br />
                        SUN: 1:00-3:00pm
                      </td>
                    </tr>

                    {/* MasterFins */}
                    <tr className="bg-[#f9c7c7]">
                      <td className="py-2 px-3 font-bold text-center border border-gray-300">MasterFins</td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        5:30-7:00am
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        5:30-7:00am
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300"></td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        5:30-7:00am
                      </td>
                      <td className="py-2 px-3 text-center border border-gray-300">
                        SAT: 1:00-3:00pm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600 text-sm italic text-center">All Sakumono sessions take place at JMJ Sports Centre</p>
              </div>
            </div>
          </section>
          
          {/* Training Notes */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Training Notes</h3>
              
              <div className="space-y-4">
                <div className="bg-[#ebf9f1] p-4 rounded-lg border-l-4 border-[#d1e7dd]">
                  <h4 className="font-semibold text-[#155724] mb-2">Training Expectations</h4>
                  <p className="text-gray-700">
                    Swimmers are expected to attend at least 3 practices per week. Each session includes both swimming and dryland exercises to build strength and improve technique.
                  </p>
                </div>
                
                <div className="bg-[#fff8e8] p-4 rounded-lg border-l-4 border-[#ffe8d1]">
                  <h4 className="font-semibold text-[#856404] mb-2">Training Equipment</h4>
                  <p className="text-gray-700">
                    All competitive swimmers should bring their own fins, kickboard, pull buoy, and water bottle to every practice. MiniFins and SkyFins only need kickboards and water bottles.
                  </p>
                </div>
                
                <div className="bg-[#cfe2ff] p-4 rounded-lg border-l-4 border-[#0d6efd]">
                  <h4 className="font-semibold text-[#004085] mb-2">Dryland Training</h4>
                  <p className="text-gray-700">
                    Dryland training is an essential part of our competitive program. It focuses on core strength, flexibility, and injury prevention. Swimmers should wear appropriate athletic clothing and shoes.
                  </p>
                </div>
                
                <div className="bg-[#fff4e5] p-4 rounded-lg border-l-4 border-[#ffecb5]">
                  <h4 className="font-semibold text-[#a66b18] mb-2">Schedule Changes</h4>
                  <p className="text-gray-700">
                    Please note that schedules are subject to change, especially during holidays and competition seasons. We will notify all team members of any changes via email and WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Info CTA */}
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-[#0A1738] text-white p-8 rounded-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-4">Ready to Join Our Competitive Team?</h2>
                <p className="max-w-2xl mx-auto">
                  Learn more about our competitive program requirements, assessment process, and team policies.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link 
                  href="/competitive/team"
                  className="bg-[#FFD700] text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-[#e6c200] transition-colors text-center"
                >
                  Team Information
                </Link>
                <Link 
                  href="/register"
                  className="bg-white text-[#0A1738] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                >
                  Request Team Assessment
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