import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | Ghana BlueFins Swim Club',
  description: 'Check out upcoming events, competitions, and programs at Ghana BlueFins Swim Club.',
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
