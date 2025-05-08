import React from 'react';

export default function ScheduleSection() {
  return (
    <>
      {/* SPINTEX */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="bg-[#0A1738] text-white p-4 text-center">
          <h2 className="text-2xl font-bold">SPINTEX</h2>
        </div>
      </div>

      {/* Spintex - Regimanuel Section */}
      <section className="max-w-5xl mx-auto mb-16">            
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-200 text-center p-3">
            <h3 className="text-xl font-bold text-[#0A1738]">REGIMANUEL</h3>
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
                {/* Competitive Swim Team Section */}
                <tr className="bg-[#d1e7dd]">
                  <td colSpan={7} className="py-2 px-3 border border-gray-300">
                    <div className="font-bold">Competitive Swim Team</div>
                    <div>TurquoiseFins, LapisFins, NavyFins</div>
                  </td>
                </tr>
                <tr className="bg-[#d1e7dd]">
                  <td className="py-2 px-3 text-center border border-gray-300">
                    5-5:15pm dryland<br />5:15-7pm swim
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    5-5:15pm dryland<br />5:15-7pm swim
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    5:30-6:50am swim
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    5-5:15pm dryland<br />5:15-7pm swim
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    6-8am swim<br />8-8:30am dryland
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                </tr>

                {/* MiniFins SkyFins Section */}
                <tr className="bg-[#ffe8d1]">
                  <td colSpan={7} className="py-2 px-3 border border-gray-300">
                    <div className="font-bold">MiniFins, SkyFins</div>
                  </td>
                </tr>
                <tr className="bg-[#ffe8d1]">
                  <td className="py-2 px-3 text-center border border-gray-300">
                    4-5pm swim<br />5-5:15pm dryland
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    4-5pm swim<br />5-5:15pm dryland
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    4-5pm swim<br />5-5:15pm dryland
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    8-8:30am dryland<br />8:30-9:30am swim
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                </tr>

                {/* Kids Learn-to-Swim */}
                <tr className="bg-[#d8d1e7]">
                  <td colSpan={7} className="py-2 px-3 border border-gray-300">
                    <div className="font-bold">Kids Learn-to-Swim</div>
                    <div className="text-xs">(swimmers can attend no more than 3 sessions per week)</div>
                  </td>
                </tr>
                <tr className="bg-[#d8d1e7]">
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    4:00-4:45pm<br />4:45-5:30pm
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    4:00-4:45pm<br />4:45-5:30pm
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    Splash:<br />4:00-4:45pm<br /><br />
                    Regimanuel:<br />5:30-6:15pm
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    4:00-4:45pm<br />4:45-5:30pm
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    7:30-8:15am<br />8:30-9:15am<br />9:30-10:15am<br />10:30-11:15am
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
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
                    5:30-6:30pm
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    5:30-6:30pm
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    5:30-6:30am
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    5:30-6:30am
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                    6:30-7:30am
                  </td>
                  <td className="py-2 px-3 text-center border border-gray-300">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SAKUMONO */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="bg-[#0A1738] text-white p-4 text-center">
          <h2 className="text-2xl font-bold">SAKUMONO</h2>
        </div>
      </div>

      {/* Sakumono - JMJ Section */}
      <section className="max-w-5xl mx-auto mb-16">            
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-200 text-center p-3">
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
                  <td className="py-2 px-3 text-center border border-gray-300"></td>
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
                  <td className="py-2 px-3 text-center border border-gray-300"></td>
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
    </>
  );
} 