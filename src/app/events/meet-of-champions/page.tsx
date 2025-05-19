'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Competition schedule
const dayOneSchedule = [
  { time: "8:00 AM - 9:00 AM", activity: "Warm-up: 13 & Over" },
  { time: "9:00 AM - 10:00 AM", activity: "Warm-up: 12 & Under" },
  { time: "10:15 AM - 1:00 PM", activity: "Morning Session: Heats" },
  { time: "1:00 PM - 2:00 PM", activity: "Break" },
  { time: "2:00 PM - 3:00 PM", activity: "Warm-up: Finals" },
  { time: "3:15 PM - 6:00 PM", activity: "Evening Session: Finals" },
];

const dayTwoSchedule = [
  { time: "8:00 AM - 9:00 AM", activity: "Warm-up: 13 & Over" },
  { time: "9:00 AM - 10:00 AM", activity: "Warm-up: 12 & Under" },
  { time: "10:15 AM - 1:30 PM", activity: "Morning Session: Heats" },
  { time: "1:30 PM - 2:30 PM", activity: "Break" },
  { time: "2:30 PM - 3:30 PM", activity: "Warm-up: Finals" },
  { time: "3:45 PM - 6:30 PM", activity: "Evening Session: Finals & Awards" },
];

// Competition events
const competitionEvents = [
  { day: "Day 1 (June 28)", events: [
    "50m Freestyle (All Age Groups)",
    "100m Backstroke (All Age Groups)",
    "200m Butterfly (13 & Over)",
    "100m Breaststroke (All Age Groups)",
    "200m Individual Medley (All Age Groups)",
    "400m Freestyle (13 & Over)",
    "4×50m Freestyle Relay (All Age Groups)"
  ]},
  { day: "Day 2 (June 29)", events: [
    "100m Freestyle (All Age Groups)",
    "200m Backstroke (13 & Over)",
    "100m Butterfly (All Age Groups)",
    "200m Breaststroke (13 & Over)",
    "200m Freestyle (All Age Groups)",
    "400m Individual Medley (13 & Over)",
    "4×50m Medley Relay (All Age Groups)"
  ]},
];

// FAQ items
const faqItems = [
  {
    question: "Who can participate in the Meet of Champions?",
    answer: "This is an invitational meet for qualified swimmers from clubs across Ghana. Qualifying times have been distributed to all clubs."
  },
  {
    question: "Is there an entry fee for spectators?",
    answer: "Yes, spectator tickets are GH₵ 30 per day or GH₵ 50 for both days. Children under 10 enter free when accompanied by a paying adult."
  },
  {
    question: "Will food and drinks be available?",
    answer: "Yes, there will be food vendors and a refreshment stand at the venue throughout the competition."
  },
  {
    question: "Can I take photos during the event?",
    answer: "Yes, spectator photography is allowed, but flash photography is prohibited during starts. Professional photography will also be available."
  },
  {
    question: "How are the swimmers seeded for races?",
    answer: "Swimmers are seeded based on their submitted entry times, with the fastest swimmers competing in the center lanes."
  }
];

export default function MeetOfChampionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/image9.jpg" 
            alt="Meet of Champions" 
            fill 
            className="object-cover animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,120,212,0.8)] to-[rgba(0,90,158,0.6)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold py-1 px-3 mb-4 rounded">
            June 28-29, 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet of Champions
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Ghana Swim League&apos;s prestigious swimming competition featuring the country&apos;s top talent competing for national honors.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="#schedule"
              className="inline-flex items-center px-6 py-3 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors duration-300"
            >
              View Schedule
            </Link>
            <Link 
              href="/register?event=meet-of-champions"
              className="inline-flex items-center px-6 py-3 bg-white text-[var(--color-primary-dark)] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Register Team
            </Link>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6">Event Overview</h2>
              
              <p className="text-lg text-gray-700 mb-4">
                The Meet of Champions is a premier swimming competition organized by Ghana Swim League, bringing together the best swimmers from clubs across the country for two days of high-level competition.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                This prestigious invitational meet will feature preliminary heats in the morning followed by finals in the evening, giving swimmers the opportunity to compete in a championship format similar to international competitions.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                BlueFins is proud to have qualified swimmers competing across multiple age groups and events. We invite all our community members to come support our team as they showcase their skills and compete against Ghana&apos;s best.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Location</h3>
                  <p className="text-gray-700">Trust Sports Emporium, Accra</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Dates</h3>
                  <p className="text-gray-700">June 28-29, 2025</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Format</h3>
                  <p className="text-gray-700">Prelims & Finals Championship Format</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Age Groups</h3>
                  <p className="text-gray-700">8 & Under, 9-10, 11-12, 13-14, 15 & Over</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] p-6 rounded-lg text-white">
                <h3 className="font-bold text-xl mb-3">About Ghana Swim League</h3>
                <p className="mb-4">
                  The Ghana Swim League is the governing body for competitive swimming in Ghana, organizing competitions and developing swimming talent nationwide.
                </p>
                <p>
                  The Meet of Champions is their signature event, showcasing the progress of Ghanaian swimming and providing a platform for athletes to achieve qualifying times for international competitions.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[var(--color-primary)] mb-6">
                  <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4">BlueFins Participation</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-[var(--color-primary)]">Team Size</div>
                      <p className="text-gray-700">24 qualified swimmers across all age groups</p>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--color-primary)]">Team Captains</div>
                      <p className="text-gray-700">David Ampah (Boys) & Sarah Mensah (Girls)</p>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--color-primary)]">Head Coach</div>
                      <p className="text-gray-700">Coach Thomas Lamptey</p>
                    </div>
                    <div>
                      <div className="font-medium text-[var(--color-primary)]">Last Year&apos;s Result</div>
                      <p className="text-gray-700">2nd Place Overall with 14 medals</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/programs/competitive-team"
                  className="block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] text-center font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Learn About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Competition Schedule</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Day One */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4 text-center">Day 1 - Saturday, June 28</h3>
              
              <div className="space-y-3">
                {dayOneSchedule.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-[var(--color-primary)]">{item.time}</div>
                      <div className="text-sm bg-blue-50 text-[var(--color-primary)] px-2 py-1 rounded">
                        {item.activity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Day Two */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4 text-center">Day 2 - Sunday, June 29</h3>
              
              <div className="space-y-3">
                {dayTwoSchedule.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-[var(--color-primary)]">{item.time}</div>
                      <div className="text-sm bg-blue-50 text-[var(--color-primary)] px-2 py-1 rounded">
                        {item.activity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-6 text-center">Competition Events</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {competitionEvents.map((day, dayIndex) => (
                <div key={dayIndex} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-lg text-[var(--color-primary)] mb-4">{day.day}</h4>
                  <ul className="space-y-2">
                    {day.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 text-gray-500">
              <p>* Schedule subject to change. Check with coaches for final timings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Support Our Team</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Come cheer for BlueFins swimmers at this prestigious competition! Your support makes a difference.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="#schedule" 
              className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View Schedule
            </Link>
            <Link 
              href="/register?event=spectator-meet-of-champions" 
              className="inline-block bg-white hover:bg-gray-100 text-[var(--color-primary-dark)] font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Buy Spectator Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--color-primary-dark)] mb-8">Other Events You Might Like</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/events/summerCamp.jpeg" 
                  alt="Summer Camp" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">Learn-to-Swim Summer Camp</h3>
                <p className="text-sm text-[var(--color-primary)] mb-3">June 20, 2025</p>
                <p className="text-gray-600 mb-4 line-clamp-2">Two-week intensive program for children to learn swimming fundamentals.</p>
                <Link href="/events/summer-camp-2025" className="text-[var(--color-primary)] font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/image2.jpg" 
                  alt="Annual Banquet" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">Annual Banquet & Awards</h3>
                <p className="text-sm text-[var(--color-primary)] mb-3">June 15, 2025</p>
                <p className="text-gray-600 mb-4 line-clamp-2">Join us for our annual celebration of achievements and awards night.</p>
                <Link href="/events/annual-banquet" className="text-[var(--color-primary)] font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/hero15.jpeg" 
                  alt="All Events" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">Browse All Events</h3>
                <p className="text-gray-600 mb-4">Discover more competitions, clinics and special programs at BlueFins.</p>
                <Link href="/events" className="text-[var(--color-primary)] font-medium hover:underline">
                  View Calendar →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
