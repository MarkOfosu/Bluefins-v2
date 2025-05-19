import React from 'react';

const tabs = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Team Info', href: '/competitive/team' },
  { label: 'Registration', href: '/register' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '/contact' },
];

export default function MainNavigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex flex-wrap gap-2 md:gap-6 py-3 justify-center">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <a
                href={tab.href}
                className="inline-block px-4 py-2 rounded-lg font-semibold text-[#0A1738] hover:bg-[#f3f4f6] transition"
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 