'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Workshop schedule
const workshopSchedule = [
  { time: "9:00 AM - 9:30 AM", activity: "Registration & Welcome" },
  { time: "9:30 AM - 10:45 AM", activity: "Session 1: Understanding Athletic Development" },
  { time: "10:45 AM - 11:00 AM", activity: "Break" },
  { time: "11:00 AM - 12:15 PM", activity: "Session 2: Nutrition for Young Athletes" },
  { time: "12:15 PM - 1:15 PM", activity: "Lunch Break (provided)" },
  { time: "1:15 PM - 2:30 PM", activity: "Session 3: Mental Preparation & Support" },
  { time: "2:30 PM - 2:45 PM", activity: "Break" },
  { time: "2:45 PM - 3:45 PM", activity: "Session 4: Q&A with Coaches Panel" },
  { time: "3:45 PM - 4:30 PM", activity: "Networking & Closing Remarks" },
];

// Workshop topics
const workshopTopics = [
  {
    title: "Athletic Development",
    description: "Learn about age-appropriate training, long-term athlete development models, and how to support physical growth alongside swimming skills.",
    icon: "📈",
  },
  {
    title: "Swimming Nutrition",
    description: "Discover proper nutrition timing, hydration strategies, and meal planning to support young swimmers' energy needs and recovery.",
    icon: "🥗",
  },
  {
    title: "Mental Preparation",
    description: "Understand how to help your child develop mental toughness, manage competition anxiety, and set achievable goals.",
    icon: "🧠",
  },
  {
    title: "Supporting Success",
    description: "Learn the right balance between encouragement and pressure, and how to create a positive swimming experience.",
    icon: "🏆",
  },
];

// Workshop speakers
const speakers = [
  {
    name: "Coach Thomas Lamptey",
    role: "BlueFins Head Coach",
    bio: "20+ years of coaching experience with national team swimmers",
    image: "/images/mark.jpg"
  },
  {
    name: "Dr. Abena Mensah",
    role: "Sports Nutritionist",
    bio: "Specialist in nutrition for developing athletes",
    image: "/images/desmond.jpg"
  },
  {
    name: "Samuel Osei",
    role: "Sports Psychologist",
    bio: "Works with Olympic athletes on mental preparation",
    image: "/images/desmond.jpg"
  }
];

export default function ParentWorkshopPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/jmj-sports.jpg" 
            alt="Parent Workshop" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,120,212,0.8)] to-[rgba(0,90,158,0.6)]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="inline-block bg-[var(--color-secondary)] text-[var(--color-primary-dark)] font-bold py-1 px-3 mb-4 rounded">
            July 25, 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Parent Workshop: Supporting Young Athletes
          </h1>
          <p className="text-xl text-white max-w-3xl">
            A comprehensive workshop to help parents understand how to best support their young swimmers through training and competition.
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
              Workshop Details
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Overview */}
      <section id="details" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-6">Workshop Overview</h2>
              
              <p className="text-lg text-gray-700 mb-4">
                The BlueFins Parent Workshop is designed to provide parents with the knowledge and tools needed to effectively support their children&apos;s swimming journey. Whether your child is just starting out or competing at higher levels, this workshop offers valuable insights from experts in swimming, nutrition, and sports psychology.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                During this full-day event, you&apos;ll learn about age-appropriate training approaches, nutrition strategies for young swimmers, mental preparation techniques, and how to create a supportive environment that fosters long-term development and enjoyment of the sport.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                The workshop includes interactive sessions, panel discussions with coaches and experts, and opportunities to network with other swimming parents. You&apos;ll leave with practical strategies you can implement immediately to help your child thrive both in and out of the pool.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Location</h3>
                  <p className="text-gray-700">JMJ Sports Complex, North Legon, Accra</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Date & Time</h3>
                  <p className="text-gray-700">July 25, 2025 • 9:00 AM - 4:30 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Registration Fee</h3>
                  <p className="text-gray-700">GH₵ 300 per person / GH₵ 500 per couple</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-[var(--color-primary)] mb-3">Includes</h3>
                  <p className="text-gray-700">Workshop materials, lunch, refreshments, and certificate</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[var(--color-primary)] mb-6">
                <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-4">Who Should Attend</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)] mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Parents of new swimmers</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)] mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Parents of competitive swimmers</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)] mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Guardians and family supporters</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-secondary)] mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Junior coaches interested in parent relations</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-[var(--color-primary)] mb-3">What You&apos;ll Receive</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Comprehensive workshop handbook</li>
                    <li>• Nutrition guide for young swimmers</li>
                    <li>• Mental preparation toolkit</li>
                    <li>• Certificate of completion</li>
                    <li>• Recordings of key sessions</li>
                    <li>• Follow-up resources via email</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-[var(--color-primary)] font-medium mb-2">Limited to 40 participants</p>
                <p className="text-sm text-gray-600">Register early to secure your spot!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Workshop Topics</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workshopTopics.map((topic, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Workshop Schedule</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-4">
              {workshopSchedule.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row sm:items-center py-3 ${index < workshopSchedule.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="sm:w-1/3 font-semibold text-[var(--color-primary)] mb-1 sm:mb-0">
                    {item.time}
                  </div>
                  <div className="sm:w-2/3 text-gray-700">
                    {item.activity}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">Meet Our Speakers</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {speakers.map((speaker, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image 
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[var(--color-primary-dark)] mb-1">{speaker.name}</h3>
                  <div className="text-[var(--color-primary)] font-medium mb-2">{speaker.role}</div>
                  <p className="text-gray-600">{speaker.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-2 text-center">From Previous Attendees</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">The nutrition information alone was worth the registration fee. I&apos;ve completely changed how I prepare meals and snacks for my son before and after practice.</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Mrs. Owusu</div>
              <div className="text-sm text-gray-500">Parent of 12-year-old swimmer</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">I wish this workshop existed when my child first started swimming! The insights on managing competition anxiety have transformed our meet day experiences.</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Mr. Ansah</div>
              <div className="text-sm text-gray-500">Parent of 14-year-old swimmer</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="text-xl text-[var(--color-secondary)] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">The coaches&apos; panel was incredibly insightful. Getting to ask questions and understand their perspective helped me better support my daughter&apos;s development.</p>
              <div className="font-bold text-[var(--color-primary-dark)]">Mrs. Appiah</div>
              <div className="text-sm text-gray-500">Parent of 10-year-old swimmer</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-16 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Register for the Workshop</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Space is limited to 40 participants to ensure quality interaction. Secure your spot today!
          </p>
          <Link 
            href="/register?event=parent-workshop" 
            className="inline-block bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-[var(--color-primary-dark)] font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
          >
            Register Now
          </Link>
          <p className="mt-4 text-white/70">
            Group discounts available for 3+ registrations. <Link href="/contact" className="underline">Contact us</Link> for details.
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
