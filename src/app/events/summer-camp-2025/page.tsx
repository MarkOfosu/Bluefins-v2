'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Summer camp schedule info - used in various places in the page
const scheduleInfo = {
  days: "Monday - Friday",
  time: "1:30 PM - 3:30 PM",
  activity: "Camp Session"
};

// Summer camp sessions
const campSessions = [
  { name: "Session 1", dates: "June 30 - July 11" },
  { name: "Session 2", dates: "July 14 - July 25" },
  { name: "Session 3", dates: "July 28 - August 8" },
  { name: "Session 4", dates: "August 11 - August 22" }
];

// Pricing options
const pricingOptions = [
  { duration: "2 weeks", price: "1,250 GHS" },
  { duration: "4 weeks", price: "2,000 GHS" },
  { duration: "6 weeks", price: "2,800 GHS" },
  { duration: "8 weeks", price: "3,500 GHS" }
];

// Camp features
const campFeatures = [
  {
    title: "Expert Coaching",
    description: "Learn from our certified swimming coaches with years of experience teaching children.",
    icon: "👨‍🏫",
  },
  {
    title: "Complete Training",
    description: "Balance of dryland training for strength and flexibility with in-water instruction for technique.",
    icon: "💪",
  },
  {
    title: "Small Groups",
    description: "Maximum of 6 children per coach ensures personalized attention and faster progress.",
    icon: "👥",
  },
  {
    title: "Fun Activities",
    description: "Swimming skills taught through games, competitions and enjoyable water activities.",
    icon: "🎮",
  },
  {
    title: "Skill Development",
    description: "Progressive learning from water confidence to stroke technique across all levels.",
    icon: "📈",
  },
  {
    title: "Safety First",
    description: "Constant supervision and strict safety protocols for peace of mind.",
    icon: "🛡️",
  },
];

// FAQ items
const faqItems = [
  {
    question: "What does the program include?",
    answer: "The program includes both dryland training and in-water instruction. Dryland focuses on strength, flexibility, coordination, and core stability, while in-water sessions develop water confidence, safety skills, and fundamental swimming techniques."
  },
  {
    question: "Can I sign up for multiple sessions?",
    answer: "Yes! We offer discounted rates for multiple sessions. You can choose 2, 4, 6, or 8 weeks of camp with progressive pricing options."
  },
  {
    question: "What should my child bring to camp?",
    answer: "Children should bring swimwear, a towel, swim cap, goggles, a water bottle, sunscreen, and a snack. Please label all items with your child&apos;s name."
  },
  {
    question: "Which locations are available?",
    answer: "Our summer camp runs at two Spintex locations: Splash Social Center and Regimanuel Gray Estate Clubhouse."
  },
  {
    question: "What if my child has never swam before?",
    answer: "No problem! Our summer camp is perfect for beginners. We start with water confidence and basic skills before progressing to swimming techniques."
  },
  {
    question: "How do I reserve a spot?",
    answer: "A 100 GHS deposit is required to reserve your spot, which will be applied toward the total fee. Contact us at +233 256 572 222 to make arrangements."
  }
];

export default function SummerCampPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/events/summerCamp.jpeg" 
            alt="Summer Camp" 
            fill 
            className="object-cover animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,120,212,0.8)] to-[rgba(0,90,158,0.6)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold py-1 px-3 mb-4 rounded">
            June 30 - August 22, 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Kids Learn-to-Swim Summer Camp 2025
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Four 2-week sessions designed to help children learn essential swimming skills through both dryland training and in-water instruction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="#register"
              className="inline-flex items-center px-6 py-3 bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors duration-300"
            >
              Register Now
            </Link>
            <Link 
              href="#details"
              className="inline-flex items-center px-6 py-3 bg-white text-[var(--color-primary-dark)] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section id="details" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6">Summer Camp Overview</h2>
              
              <p className="text-lg text-gray-700 mb-4">
                BlueFins&apos; annual Summer Camp provides children with an exciting opportunity to learn essential swimming skills in a fun, safe environment. Our comprehensive program is designed to develop water confidence, swimming techniques, and water safety knowledge.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                The summer swim camp includes daily sessions with both dryland training and in-water instruction. Our program focuses on building strength, flexibility, coordination, and core stability through dryland exercises, while boosting water confidence, water safety skills, and fundamental swimming techniques in the pool.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Under the guidance of our certified coaches, campers will progress through structured lessons tailored to their skill level. From complete beginners to intermediate swimmers, our program accommodates all abilities with a focus on individual progress.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Location</h3>
                  <p className="text-gray-700">SPINTEX (Splash Social Center & Regimanuel Gray Estate Clubhouse)</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Schedule</h3>
                  <p className="text-gray-700">Monday to Friday, 1:30 PM - 3:30 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Contact</h3>
                  <p className="text-gray-700">Phone: +233 256 572 222</p>
                  <p className="text-gray-700">Website: www.ghanabluefins.com</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Reservation</h3>
                  <p className="text-gray-700">100 GHS deposit (applied to fees)</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[var(--color-primary)]">
                <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4">Available Sessions</h3>
                
                <div className="space-y-4">
                  {campSessions.map((session, i) => (
                    <div key={`session-${i}`} className="border-b border-gray-100 pb-3">
                      <div className="font-semibold text-[var(--color-primary)]">{session.name}</div>
                      <div className="flex justify-between items-center">
                        <div>{session.dates}</div>
                        <div className="text-sm bg-blue-50 text-[var(--color-primary)] px-2 py-1 rounded">
                          2 weeks
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Program Focus:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Dryland training for strength & flexibility</li>
                    <li>Core stability & coordination exercises</li>
                    <li>Water confidence & safety</li>
                    <li>Floating and breathing techniques</li>
                    <li>Basic stroke development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Pricing Options</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Choose the option that works best for your schedule. Pool fee not included. A 100 GHS reservation deposit is required and will be applied to the total fees.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {pricingOptions.map((option, idx) => (
              <motion.div 
                key={`price-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-3">{option.duration}</h3>
                <p className="text-2xl font-bold text-[var(--color-primary)]">{option.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Features */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Why Choose Our Camp?</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campFeatures.map((feature, idx) => (
              <motion.div 
                key={`feature-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Camp Gallery</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image11.jpg" 
                alt="Camp Activity" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
              <Image 
                src="/images/image6.jpg" 
                alt="Swimming Lesson" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image 
                  src="/lts1.jpeg" 
                  alt="Water Games" 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image 
                  src="/lts2.jpeg" 
                alt="Camp Celebration" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-700">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Pricing Options</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              {pricingOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">{option.duration}</h3>
                  <p className="text-xl text-[var(--color-primary)]">{option.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Sign Up?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Secure your child&apos;s place in our popular summer camp. Spots fill quickly!
          </p>
          <Link 
            href="/register?program=summer-camp-2025" 
            className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Register for Summer Camp
          </Link>
          <p className="mt-4 text-white/70">
            Contact us at +233 256 572 222 or <Link href="/contact" className="underline">online</Link> for more information.
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
                  src="/images/image2.jpg" 
                  alt="Annual Banquet" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[var(--color-primary-dark)] mb-2">Annual Banquet & Awards</h3>
                <p className="text-sm text-[var(--color-primary)] mb-3">June 15, 2025</p>
                <p className="text-gray-600 mb-4 line-clamp-2">Celebrate achievements and enjoy a night of networking and fun.</p>
                <Link href="/events/annual-banquet" className="text-[var(--color-primary)] font-medium hover:underline">
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
                <p className="text-gray-600 mb-4 line-clamp-2">Support our team at Ghana Swim League&apos;s premier competition.</p>
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
