'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Event type definition
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  featured?: boolean;
  detailsLink: string;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Sample events data (in a real app, this would come from an API or database)
const eventsData: Event[] = [
  {
    id: "summer-camp-2025",
    title: "Kids Learn-to-Swim Summer Camp 2025",
    date: "2025-06-30",
    location: "SPINTEX (Splash Social Center & Regimanuel Gray Estate)",
    description: "Four 2-week summer camp sessions from June to August, featuring both dryland training and in-water instruction. Build strength, flexibility, coordination and swimming skills in a fun, supportive environment.",
    image: "/events/summerCamp.jpeg",
    featured: true,
    detailsLink: "/events/summer-camp-2025"
  },
  {
    id: "annual-banquet",
    title: "Annual Banquet & Awards Night",
    date: "2025-06-15",
    location: "Kempinski Hotel, Accra",
    description: "Join us for our annual banquet to celebrate our swimmers' achievements and enjoy a night of fun and networking. Dinner, awards ceremony, and entertainment provided.",
    image: "/images/image2.jpg",
    detailsLink: "/events/annual-banquet"
  },
  {
    id: "meet-of-champions",
    title: "Meet of Champions",
    date: "2025-06-28",
    location: "Trust Sports Emporium, Accra",
    description: "Support our competitive team as they participate in the prestigious Meet of Champions organized by Ghana Swim League. This two-day event showcases the best swimmers in the country.",
    image: "/images/image9.jpg",
    detailsLink: "/events/meet-of-champions"
  },
  {
    id: "sprint-meet",
    title: "BlueFins Sprint Meet",
    date: "2025-07-12",
    location: "Regimanuel Grey Pool, Accra",
    description: "A fun sprint competition for swimmers of all levels. Events include 50m and 100m races in all strokes. Great for beginners to get competition experience!",
    image: "/images/image11.jpg",
    detailsLink: "/events/sprint-meet"
  },
  {
    id: "parent-workshop",
    title: "Parent Workshop: Supporting Young Athletes",
    date: "2025-07-25",
    location: "JMJ Sports Complex",
    description: "An informative session for parents on how to support their young swimmers through training and competition. Topics include nutrition, mental preparation, and long-term development.",
    image: "/images/jmj-sports.jpg",
    detailsLink: "/events/parent-workshop"
  }
];

// Filter options for events
const filterOptions = [
  { value: "all", label: "All Events" },
  { value: "upcoming", label: "Upcoming Events" },
  { value: "camps", label: "Camps & Clinics" },
  { value: "competitions", label: "Competitions" },
];

export default function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter events based on selected filter and search term
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (filter === "all") return true;
    if (filter === "upcoming") {
      const eventDate = new Date(event.date);
      const now = new Date();
      return eventDate > now;
    }
    if (filter === "camps") return event.title.toLowerCase().includes("camp") || event.title.toLowerCase().includes("clinic");
    if (filter === "competitions") return event.title.toLowerCase().includes("championships") || event.title.toLowerCase().includes("meet") || event.title.toLowerCase().includes("competition");
    
    return true;
  });

  // Animation variants for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero15.jpeg" 
            alt="BlueFins Events" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,120,212,0.85)] to-[rgba(0,90,158,0.7)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BlueFins Events</h1>
            <p className="text-xl text-white/90">
              Stay updated with our latest competitions, camps, workshops, and special programs
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-2 mb-4 md:mb-0">
              {filterOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === option.value
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredEvents.map((event) => (
                <motion.div 
                  key={event.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill 
                      className="object-cover"
                    />
                    {event.featured && (
                      <div className="absolute top-0 right-0 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold py-1 px-3 text-sm">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-[var(--color-primary)] font-medium mb-2">
                      {formatDate(event.date)} • {event.location}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <Link 
                      href={event.detailsLink}
                      className="inline-flex items-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
                    >
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No events found matching your criteria</h3>
              <button 
                onClick={() => {setFilter("all"); setSearchTerm("");}} 
                className="mt-4 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Events?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join Ghana BlueFins Swim Club today and participate in our exciting events, competitions, and training programs.
          </p>
          <Link 
            href="/register" 
            className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Join BlueFins
          </Link>
        </div>
      </section>
    </main>
  );
}
