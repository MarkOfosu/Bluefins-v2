import React from 'react';
import Link from 'next/link';

const DayHeader = ({ day }: { day: string }) => (
  <th className="bg-red-600 text-white font-bold py-3 px-4 text-center">
    {day}
  </th>
);

const Schedule = () => {
  return (
    <section id="schedule" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1738]">Training Schedule</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-700">
            Our structured training schedule caters to all swimming levels, from beginners to competitive swimmers.
            We offer sessions across multiple locations in Accra to provide convenient access for all members.
          </p>
        </div>

        {/* SPINTEX LOCATIONS */}
        <div className="mb-16">
          <div className="bg-black text-white text-center text-2xl font-bold py-3 rounded-t-lg">
            SPINTEX
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gray-300 py-3 px-4 text-[#0A1738] font-bold"></th>
                  <th className="bg-gray-300 py-3 px-4 text-[#0A1738] font-bold text-center">REGIMANUEL</th>
                  <th colSpan={5} className="bg-gray-300 py-3 px-4 text-[#0A1738] font-bold text-center">SPLASH SOCIAL CENTRE</th>
                  <th className="bg-gray-300 py-3 px-4 text-[#0A1738] font-bold"></th>
                </tr>
                <tr>
                  <th className="bg-gray-300 py-3 px-4 text-[#0A1738]"></th>
                  <DayHeader day="MONDAY" />
                  <DayHeader day="TUESDAY" />
                  <DayHeader day="WEDNESDAY" />
                  <DayHeader day="THURSDAY" />
                  <DayHeader day="FRIDAY" />
                  <DayHeader day="SATURDAY" />
                  <DayHeader day="SUNDAY" />
                </tr>
              </thead>
              
              <tbody>
                {/* Competitive Swim Team Row Groups */}
                <tr>
                  <td rowSpan={2} className="bg-[#0A1738] text-white py-3 px-4 align-middle text-center font-bold border border-gray-200 rotate-[-90deg] w-16">
                    <div className="transform rotate-90 whitespace-nowrap">Competitive Swim Team</div>
                  </td>
                  <td rowSpan={1} className="bg-green-200 p-3 border border-gray-200">
                    <div className="font-semibold">TurquoiseFins<br />LapisFins<br />NavyFins</div>
                    <div>5-5:15pm dryland<br />5:15-7pm swim</div>
                  </td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                  <td colSpan={2} className="bg-green-200 p-3 border border-gray-200">
                    <div>5-5:15pm dryland, 5:15-7pm swim</div>
                  </td>
                  <td className="bg-green-200 p-3 border border-gray-200">
                    <div>5:30-6:50am swim</div>
                  </td>
                  <td className="bg-green-200 p-3 border border-gray-200">
                    <div>6-8am swim<br />8-8:30am dryland</div>
                  </td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                </tr>
                <tr>
                  <td className="bg-orange-200 p-3 border border-gray-200">
                    <div className="font-semibold">MiniFins<br />SkyFins</div>
                    <div>4-5pm swim<br />5-5:15pm dryland</div>
                  </td>
                  <td className="bg-orange-200 p-3 border border-gray-200"></td>
                  <td colSpan={2} className="bg-orange-200 p-3 border border-gray-200">
                    <div>4-5pm swim, 5-5:15pm dryland</div>
                  </td>
                  <td className="bg-orange-200 p-3 border border-gray-200"></td>
                  <td className="bg-orange-200 p-3 border border-gray-200">
                    <div>8-8:30am dryland<br />8:30-9:30am swim</div>
                  </td>
                  <td className="bg-orange-200 p-3 border border-gray-200"></td>
                </tr>
                
                {/* Kids Learn-to-Swim Row */}
                <tr>
                  <td rowSpan={1} className="bg-[#0A1738] text-white py-3 px-4 align-middle text-center font-bold border border-gray-200">
                    <div>
                      <div>Kids Learn-to-Swim</div>
                      <div className="text-xs mt-1">(swimmers can attend no more<br />than 3 sessions per week)</div>
                    </div>
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200">
                    <div>4:00-4:45pm<br />4:45-5:30pm</div>
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                  <td className="bg-purple-200 p-3 border border-gray-200">
                    <div>4:00-4:45pm<br />4:45-5:30pm</div>
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200">
                    <div>Splash:<br />4:00-4:45pm<br /><br />Regimanuel:<br />5:30-6:15pm</div>
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200">
                    <div>4:00-4:45pm<br />4:45-5:30pm</div>
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200">
                    <div>7:30-8:15am<br />8:30-9:15am<br />9:30-10:15am<br />10:30-11:15am</div>
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                </tr>
                
                {/* Adults Learn-to-Swim Row */}
                <tr>
                  <td rowSpan={1} className="bg-[#0A1738] text-white py-3 px-4 align-middle text-center font-bold border border-gray-200">
                    <div>
                      <div>Adults Learn-to-Swim</div>
                      <div className="text-xs mt-1">(swimmers can attend no more<br />than 2 sessions per week)</div>
                    </div>
                  </td>
                  <td className="bg-pink-200 p-3 border border-gray-200">
                    <div>5:30-6:30pm</div>
                  </td>
                  <td className="bg-pink-200 p-3 border border-gray-200"></td>
                  <td className="bg-pink-200 p-3 border border-gray-200">
                    <div>5:30-6:30pm</div>
                  </td>
                  <td className="bg-pink-200 p-3 border border-gray-200">
                    <div>5:30-6:30am</div>
                  </td>
                  <td className="bg-pink-200 p-3 border border-gray-200">
                    <div>5:30-6:30am</div>
                  </td>
                  <td className="bg-pink-200 p-3 border border-gray-200">
                    <div>6:30-7:30am</div>
                  </td>
                  <td className="bg-pink-200 p-3 border border-gray-200"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* SAKUMONO LOCATION */}
        <div className="mb-16">
          <div className="bg-black text-white text-center text-2xl font-bold py-3 rounded-t-lg">
            SAKUMONO
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gray-300 py-3 px-4 text-[#0A1738] font-bold"></th>
                  <th colSpan={7} className="bg-gray-300 py-3 px-4 text-[#0A1738] font-bold text-center">JMJ SPORTS & EVENTS CENTRE</th>
                </tr>
                <tr>
                  <th className="bg-gray-300 py-3 px-4 text-[#0A1738]"></th>
                  <DayHeader day="MONDAY" />
                  <DayHeader day="TUESDAY" />
                  <DayHeader day="WEDNESDAY" />
                  <DayHeader day="THURSDAY" />
                  <DayHeader day="FRIDAY" />
                  <DayHeader day="SATURDAY" />
                  <DayHeader day="SUNDAY" />
                </tr>
              </thead>
              
              <tbody>
                {/* Competitive Swim Team Row */}
                <tr>
                  <td className="bg-[#0A1738] text-white py-3 px-4 text-center font-bold border border-gray-200">
                    Competitive Swim Team
                  </td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                  <td className="bg-green-200 p-3 border border-gray-200">
                    <div>1:00-3:00pm</div>
                  </td>
                  <td className="bg-green-200 p-3 border border-gray-200"></td>
                </tr>
                
                {/* Learn-to-Swim Row */}
                <tr>
                  <td className="bg-[#0A1738] text-white py-3 px-4 text-center font-bold border border-gray-200">
                    Learn-to-Swim
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                  <td className="bg-purple-200 p-3 border border-gray-200">
                    <div>1:00-1:45pm<br />2:00-2:45pm</div>
                  </td>
                  <td className="bg-purple-200 p-3 border border-gray-200"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Schedule Notes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Schedule Notes</h3>
          
          <div className="space-y-4">
            <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">Competitive Swim Team</h4>
              <p className="text-gray-700">
                Swimmers are expected to attend at least 3 practices per week. Each session includes both swimming and dryland exercises to build strength and improve technique.
              </p>
            </div>
            
            <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-800 mb-2">MiniFins & SkyFins</h4>
              <p className="text-gray-700">
                These are our introductory competitive swimming groups. Swimmers in these groups focus on technique development and building endurance.
              </p>
            </div>
            
            <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800 mb-2">Learn-to-Swim Programs</h4>
              <p className="text-gray-700">
                Kids can attend up to 3 sessions per week, while adults can attend up to 2 sessions per week. Sessions are 45 minutes long for kids and 60 minutes for adults.
              </p>
            </div>
            
            <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-2">Schedule Changes</h4>
              <p className="text-gray-700">
                Please note that schedules are subject to change, especially during holidays and competition seasons. We will notify all members of any changes via email and WhatsApp.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/contact"
              className="bg-[#0A1738] text-white hover:bg-[#0A1738]/90 font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              Questions about the schedule? Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 