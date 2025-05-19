'use client';
import React, { useState } from 'react';

const squads = [
  { label: 'MiniFins', color: 'bg-[#ffe8d1]' },
  { label: 'SkyFins', color: 'bg-[#ffe8d1]' },
  { label: 'TurquoiseFins', color: 'bg-[#d1e7dd]' },
  { label: 'LapisFins', color: 'bg-[#cfe2ff]' },
  { label: 'NavyFins', color: 'bg-[#d8d1e7]' },
  { label: 'MasterFins', color: 'bg-[#f9c7c7]' },
];

const locations = ['Spintex', 'Sakumono'];

export default function ScheduleTabs() {
  const [activeSquad, setActiveSquad] = useState('MiniFins');
  const [activeLocation, setActiveLocation] = useState('Spintex');

  return (
    <section id="schedule" className="mb-12">
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {squads.map((squad) => (
          <button
            key={squad.label}
            className={`px-4 py-2 rounded-lg font-bold border transition ${activeSquad === squad.label ? squad.color + ' border-[#0A1738] text-[#0A1738]' : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveSquad(squad.label)}
          >
            {squad.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {locations.map((loc) => (
          <button
            key={loc}
            className={`px-4 py-1 rounded font-semibold border transition ${activeLocation === loc ? 'bg-[#0A1738] text-white border-[#0A1738]' : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveLocation(loc)}
          >
            {loc}
          </button>
        ))}
      </div>
      <div className="rounded-lg shadow bg-white border border-gray-100 p-6">
        <h3 className="text-xl font-bold mb-4 text-[#0A1738]">{activeSquad} Schedule ({activeLocation})</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-center">
            <thead>
              <tr>
                <th className="py-2 px-3 border-b">Day</th>
                <th className="py-2 px-3 border-b">Time</th>
                <th className="py-2 px-3 border-b">Activity</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder rows, replace with real data */}
              <tr>
                <td className="py-2 px-3 border-b">Monday</td>
                <td className="py-2 px-3 border-b">4:00-5:00pm</td>
                <td className="py-2 px-3 border-b">Swim Training</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border-b">Wednesday</td>
                <td className="py-2 px-3 border-b">4:00-5:00pm</td>
                <td className="py-2 px-3 border-b">Swim + Dryland</td>
              </tr>
              <tr>
                <td className="py-2 px-3 border-b">Saturday</td>
                <td className="py-2 px-3 border-b">8:00-9:30am</td>
                <td className="py-2 px-3 border-b">Endurance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
} 