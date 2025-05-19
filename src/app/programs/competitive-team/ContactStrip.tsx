import React from 'react';

export default function ContactStrip() {
  return (
    <section className="my-12">
      <div className="bg-gradient-to-r from-[#0A1738] to-[#1e3a8a] text-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold mb-2 md:mb-0">Ready to take the next step?</div>
        <div className="flex gap-4">
          <a href="/register" className="bg-[#FFD700] text-[#0A1738] font-bold px-6 py-3 rounded-lg shadow hover:bg-[#e6c200] transition">Register for Assessment</a>
          <a href="/contact" className="bg-white text-[#0A1738] font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">Contact Us</a>
        </div>
      </div>
    </section>
  );
} 