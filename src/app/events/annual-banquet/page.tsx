'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Event schedule
const eventSchedule = [
  { time: "6:00 PM - 7:00 PM", activity: "Welcome Reception & Drinks" },
  { time: "7:00 PM - 8:30 PM", activity: "Dinner & Speeches" },
  { time: "8:30 PM - 9:30 PM", activity: "Awards Ceremony" },
  { time: "9:30 PM - 11:00 PM", activity: "Entertainment & Networking" },
];

// Award categories
const awardCategories = [
  "Swimmer of the Year",
  "Most Improved Swimmer",
  "Team Spirit Award",
  "Academic Excellence Award",
  "Coach&apos;s Recognition Award",
  "Outstanding Achievement Award",
  "Volunteer of the Year",
  "Leadership Award"
];

export default function AnnualBanquetPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/image2.jpg" 
            alt="Annual Banquet" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,120,212,0.8)] to-[rgba(0,90,158,0.6)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold py-1 px-3 mb-4 rounded">
            June 15, 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Annual Banquet & Awards Night
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Join us for an elegant evening celebrating the achievements of our swimmers and recognizing excellence in and out of the pool.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="#rsvp"
              className="inline-flex items-center px-6 py-3 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors duration-300"
            >
              RSVP Now
            </Link>
            <Link 
              href="#details"
              className="inline-flex items-center px-6 py-3 bg-white text-[var(--color-primary-dark)] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Event Details
            </Link>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6">Annual Banquet Overview</h2>
              
              <p className="text-lg text-gray-700 mb-4">
                Our Annual Banquet & Awards Night is BlueFins&apos; premier social event of the year, bringing together swimmers, coaches, families, and supporters for an evening of recognition and celebration.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                This year&apos;s event will feature a formal dinner, inspiring speeches, awards ceremony recognizing outstanding achievements, and entertainment. It&apos;s an opportunity to reflect on the past year&apos;s accomplishments and look forward to even greater success.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                The evening will include recognition of our competitive swimmers&apos; achievements, appreciation of our volunteers and staff, and special presentations highlighting the impact of BlueFins in the community.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Location</h3>
                  <p className="text-gray-700">Kempinski Hotel Gold Coast City, Accra</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Date & Time</h3>
                  <p className="text-gray-700">June 15, 2025 • 6:00 PM - 11:00 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Dress Code</h3>
                  <p className="text-gray-700">Formal Attire / Black Tie Optional</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Ticket Price</h3>
                  <p className="text-gray-700">GH₵ 500 per person / GH₵ 900 per couple</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[var(--color-primary)]">
                <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4">Event Schedule</h3>
                
                <div className="space-y-4">
                  {eventSchedule.map((item, index) => (
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
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-700 mb-3">Award Categories:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {awardCategories.map((award, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600">{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Highlights from Last Year</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/hero15.jpeg" 
                alt="Last Year Celebration" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image2.jpg" 
                alt="Award Ceremony" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image11.jpg" 
                alt="Team Photo" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image6.jpg" 
                alt="Networking" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">What Attendees Say</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">The annual banquet was a wonderful celebration of our children&apos;s hard work. Seeing them recognized in front of their peers and the swimming community was priceless.</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Sarah K., Parent</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">A highlight of the season! Getting dressed up and celebrating with my teammates and coaches made me feel like all the hard training was worth it.</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Michael T., Swimmer</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">The banquet brings our entire BlueFins community together in a way that celebrates not just swimming achievements but character and commitment.</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Coach Thomas</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-16 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Reserve Your Spot</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join us for this special evening celebrating BlueFins&apos; achievements. Tickets are limited, so secure yours today!
          </p>
          <Link 
            href="/register?event=annual-banquet-2025" 
            className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Purchase Tickets
          </Link>
          <p className="mt-4 text-white/70">
            For table reservations or special dietary requirements, please <Link href="/contact" className="underline">contact us</Link>.
          </p>
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
                  src="/images/image9.jpg" 
                  alt="Meet of Champions" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">Meet of Champions</h3>
                <p className="text-sm text-[var(--color-primary)] mb-3">June 28-29, 2025</p>
                <p className="text-gray-600 mb-4 line-clamp-2">Support our team at Ghana Swim League&apos;s prestigious competition.</p>
                <Link href="/events/meet-of-champions" className="text-[var(--color-primary)] font-medium hover:underline">
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
