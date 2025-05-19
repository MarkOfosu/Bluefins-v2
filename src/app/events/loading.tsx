'use client';

import React from 'react';

export default function EventsLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-t-4 border-[var(--color-primary)] rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-t-4 border-r-4 border-[var(--color-secondary)] rounded-full animate-ping opacity-20"></div>
      </div>
      <p className="mt-4 text-lg text-gray-600">Loading events...</p>
    </div>
  );
}
