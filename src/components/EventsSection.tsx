'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';

interface EventProps {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  featured?: boolean;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'long', 
    day: 'numeric' 
  });
};

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card hoverEffect className={event.featured ? 'border-[#FFD700] border-2' : ''}>
        {event.featured && (
          <div className="bg-[#FFD700] text-[#0A1738] text-xs uppercase tracking-wider font-bold py-1 px-3 absolute right-0 top-0">
            Featured
          </div>
        )}
        <CardContent>
          <time className="text-sm text-gray-500 mb-2 block">
            {formatDate(event.date)}
          </time>
          <h3 className="text-xl font-bold text-[#0A1738] mb-2">
            {event.title}
          </h3>
          <p className="text-sm font-medium text-blue-600 mb-3">
            {event.location}
          </p>
          <p className="text-gray-600 mb-5">
            {event.description}
          </p>
          <Button href={`/events/${event.id}`} variant="primary" fullWidth>
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const EventsSection = () => {
  // Example events - in a real application, these would come from an API or database
  const events = [
    {
      id: "annual-banquet",
      title: "Annual Banquet",
      date: "2025-06-15",
      location: "Kempinski Hotel, Accra",
      description: "Join us for our annual banquet to celebrate our swimmers' achievements and enjoy a night of fun and networking.",
      featured: true
    },
    {
      id: "summer-camp-2025",
      title: "Kids Learn-to-Swim Summer Camp",
      date: "2025-06-30",
      location: "SPINTEX (multiple locations)",
      description: "Four 2-week summer camp sessions combining dryland training and in-water instruction."
    },
    {
      id: "meet-of-champions",
      title: "Meet of Champions",
      date: "2025-06-28",
      location: "Trust Sports Emporium",
      description: "Support our team at the prestigious Meet of Champions organized by Ghana Swim League."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Upcoming Events"
          subtitle="Stay updated with BlueFins competitions, workshops and special programs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/events" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
