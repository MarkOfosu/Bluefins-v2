import React from 'react';

const faqs = [
  {
    q: 'Who can join the BlueFins competitive team?',
    a: 'Swimmers who have completed our Learn-to-Swim program or can demonstrate basic proficiency in all four strokes are eligible for assessment.'
  },
  {
    q: 'How often do competitive swimmers train?',
    a: 'Most squads train 3-6 times per week, depending on age and level. See the schedule above for details.'
  },
  {
    q: 'Are competitions required?',
    a: 'Yes, all competitive swimmers are expected to participate in local and national meets as part of their development.'
  },
  {
    q: 'What equipment do I need?',
    a: 'All swimmers need a suit, cap, goggles, fins, kickboard, and water bottle. Some squads require additional gear.'
  },
  {
    q: 'How do I join?',
    a: 'Contact us to schedule an assessment. Our coaches will recommend the best squad for your swimmer.'
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="my-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0A1738] mb-6 text-center">Competitive Team FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <div className="font-bold text-[#0A1738] mb-2">Q: {faq.q}</div>
            <div className="text-gray-700">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 