'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Event schedule
const eventSchedule = [
  { time: "7:30 AM - 8:15 AM", activity: "Registration & Check-in" },
  { time: "8:15 AM - 9:00 AM", activity: "Warm-up: All Swimmers" },
  { time: "9:15 AM - 12:30 PM", activity: "Competition Session 1" },
  { time: "12:30 PM - 1:30 PM", activity: "Lunch Break" },
  { time: "1:30 PM - 2:00 PM", activity: "Warm-up: All Swimmers" },
  { time: "2:00 PM - 5:00 PM", activity: "Competition Session 2" },
  { time: "5:15 PM - 5:45 PM", activity: "Awards Ceremony" },
];

// Events list
const competitionEvents = [
  "50m Freestyle (All Age Groups)",
  "50m Backstroke (All Age Groups)",
  "50m Breaststroke (All Age Groups)",
  "50m Butterfly (All Age Groups)",
  "100m Individual Medley (All Age Groups)",
  "100m Freestyle (All Age Groups)",
  "4×50m Freestyle Relay (Mixed Age Groups)",
  "4×50m Medley Relay (Mixed Age Groups)"
];

// Age groups
const ageGroups = [
  "6 & Under",
  "7-8 Years",
  "9-10 Years",
  "11-12 Years",
  "13-14 Years",
  "15-18 Years",
  "Open (19+)"
];

export default function SprintMeetPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/image11.jpg" 
            alt="BlueFins Sprint Meet" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,120,212,0.8)] to-[rgba(0,90,158,0.6)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold py-1 px-3 mb-4 rounded">
            July 12, 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            BlueFins Sprint Meet
          </h1>
          <p className="text-xl text-white max-w-3xl">
            A fun, beginner-friendly competition focusing on short-distance events. Perfect for swimmers of all levels to gain racing experience!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="#register"
              className="inline-flex items-center px-6 py-3 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors duration-300"
            >
              Register to Swim
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
              <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6">Sprint Meet Overview</h2>
              
              <p className="text-lg text-gray-700 mb-4">
                The BlueFins Sprint Meet is a one-day competition designed to provide a fun, low-pressure racing experience for swimmers of all levels. With a focus on shorter distances, it&apos;s the perfect opportunity for beginners to experience the excitement of competition.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                All events are 50m or 100m distances, making them accessible to swimmers who are still developing endurance. Each participant can enter up to 4 individual events plus relays, ensuring plenty of racing opportunities throughout the day.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                This is a BlueFins-hosted event open to all clubs in Ghana. It&apos;s an excellent chance for our swimmers to compete in a familiar environment and for parents to see their children&apos;s progress in action!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Location</h3>
                  <p className="text-gray-700">Regimanuel Grey Pool, East Legon, Accra</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Date</h3>
                  <p className="text-gray-700">July 12, 2025 • 7:30 AM - 6:00 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Entry Fee</h3>
                  <p className="text-gray-700">GH₵ 150 per swimmer</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Registration Deadline</h3>
                  <p className="text-gray-700">July 5, 2025</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[var(--color-primary)]">
                <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4">Age Groups</h3>
                
                <div className="space-y-2 mb-6">
                  {ageGroups.map((group, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{group}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-2">Important Notes</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Age as of July 12, 2025</li>
                    <li>• NT (No Time) entries accepted</li>
                    <li>• Maximum 4 individual events per swimmer</li>
                    <li>• Electronic timing will be used</li>
                    <li>• Medals for 1st-3rd place in each event/age group</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Event Schedule</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4 text-center">Day Schedule</h3>
              
              <div className="space-y-3">
                {eventSchedule.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100 pb-3"
                  >
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-[var(--color-primary)]">{item.time}</div>
                      <div className="text-sm bg-blue-50 text-[var(--color-primary)] px-2 py-1 rounded">
                        {item.activity}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4 text-center">Events</h3>
              
              <div className="space-y-2">
                {competitionEvents.map((event, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)] mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{event}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  * Event order will be published one week before the meet. A final heat sheet will be distributed to coaches on the morning of the meet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Highlights from Previous Meets</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image11.jpg" 
                alt="Sprint Meet Race" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image6.jpg" 
                alt="Awards Ceremony" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image9.jpg" 
                alt="Team Cheering" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/hero15.jpeg" 
                alt="Pool Overview" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">What Participants Say</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">This was my first swimming competition ever, and I was so nervous! But the BlueFins team made it fun and I even got a medal in 50m backstroke!</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Kofi, 9</div>
              <div className="text-sm text-gray-500">First-time competitor</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">The sprint meet was the perfect environment for my daughter to experience competition without too much pressure. She&apos;s now excited about swimming regularly!</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Mrs. Addo</div>
              <div className="text-sm text-gray-500">Parent</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">I&apos;ve competed in many meets, but the BlueFins Sprint Meet is always well-organized and great for working on my race starts and turns.</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Ekow, 14</div>
              <div className="text-sm text-gray-500">Experienced swimmer</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Register to Participate</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to race? Register now to secure your spot in our BlueFins Sprint Meet!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link 
              href="/register?event=sprint-meet-swimmer" 
              className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
            >
              Register as Swimmer
            </Link>
            <Link 
              href="/register?event=sprint-meet-spectator" 
              className="inline-block bg-white hover:bg-gray-100 text-[var(--color-primary-dark)] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
            >
              Buy Spectator Tickets
            </Link>
          </div>
          <p className="mt-4 text-white/70">
            Have questions? <Link href="/contact" className="underline">Contact us</Link> for more information.
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
