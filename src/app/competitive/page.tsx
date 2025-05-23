"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, Trophy, Target, Clock, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const CompetitiveTeamPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('schedule');
  const [selectedGroup, setSelectedGroup] = useState('skyfins');

  // Gallery images
  const galleryImages = [
    { src: '/images/g1.jpg', alt: 'Swimmers diving into competition', caption: 'Perfect synchronization at the start' },
    { src: '/images/g2.jpg', alt: 'Freestyle stroke technique', caption: 'Mastering freestyle technique' },
    { src: '/images/g3.jpg', alt: 'Team celebration', caption: 'Victory celebration moments' },
    { src: '/images/g4.jpg', alt: 'Butterfly stroke training', caption: 'Butterfly stroke perfection' },
    { src: '/images/g5.jpg', alt: 'Backstroke competition', caption: 'Backstroke championship form' },
    { src: '/images/g6.jpg', alt: 'Team huddle', caption: 'Pre-race team motivation' },
    { src: '/images/g7.jpg', alt: 'Breaststroke technique', caption: 'Breaststroke excellence' },
    { src: '/images/g8.jpg', alt: 'Young swimmers training', caption: 'Future champions in training' },
    { src: '/images/g9.jpg', alt: 'Medal ceremony', caption: 'Achievement recognition' },
    { src: '/images/g10.jpg', alt: 'Pool training session', caption: 'Intensive training sessions' },
    { src: '/images/g11.jpg', alt: 'Diving practice', caption: 'Perfect diving form' },
    { src: '/images/g12.jpg', alt: 'Relay team', caption: 'Relay team coordination' },
    { src: '/images/g13.jpg', alt: 'Individual medley', caption: 'Individual medley mastery' },
    { src: '/images/g14.jpg', alt: 'Coach instruction', caption: 'Expert coaching guidance' },
    { src: '/images/g15.jpg', alt: 'Swimming lanes', caption: 'Professional training facility' },
    { src: '/images/g16.jpg', alt: 'Team photo', caption: 'BlueFins family portrait' },
    { src: '/images/g17.jpg', alt: 'Equipment setup', caption: 'Professional training equipment' },
    { src: '/images/g18.jpg', alt: 'Water safety', caption: 'Safety first approach' },
    { src: '/images/g19.jpg', alt: 'Competitive spirit', caption: 'Competitive excellence' },
    { src: '/images/g20.jpg', alt: 'Training dedication', caption: 'Dedication pays off' },
    { src: '/images/g21.jpg', alt: 'Team spirit', caption: 'Unity and teamwork' }
  ];

  const competitiveGroups = {
    skyfins: {
      name: 'SkyFins',
      level: 'Beginners',
      age: '5-7 years',
      coaches: 'Ibrahim Abu, Benjamin Oteng',
      color: 'from-sky-400 to-sky-600',
      icon: '🌤️',
      description: 'Introduction to competitive swimming with focus on fundamentals',
      requirements: [
        '25m freestyle with proper breathing',
        '25m backstroke unassisted',
        '50m breaststroke unassisted',
        'Legal breaststroke and butterfly kicks'
      ],
      equipment: ['Swimwear', 'Goggles', 'Head cap', 'Kickboard', 'Swim fins']
    },
    turquoisefins: {
      name: 'TurquoiseFins',
      level: 'Lower Intermediate',
      age: '8-10 years',
      coaches: 'Desmond Amponsah, Joseph Asante Okai',
      color: 'from-teal-400 to-teal-600',
      icon: '🏊‍♂️',
      description: 'Building strong fundamentals with emphasis on technique',
      requirements: [
        '25m butterfly unassisted',
        '50m backstroke unassisted',
        '100m breaststroke and freestyle',
        '100m Individual Medley',
        'Flip turns and streamline kicks'
      ],
      equipment: ['Swimwear', 'Goggles', 'Head cap', 'Long fins', 'Kickboard', 'Snorkel']
    },
    lapisfins: {
      name: 'LapisFins',
      level: 'Intermediate',
      age: '11-14 years',
      coaches: 'Desmond Amponsah, Joseph Asante Okai',
      color: 'from-blue-500 to-blue-700',
      icon: '💎',
      description: 'Balance of technique and physiological development',
      requirements: [
        '50m butterfly unassisted',
        '100m backstroke unassisted',
        '200m breaststroke and freestyle',
        '200m Individual Medley',
        'Advanced turns and techniques'
      ],
      equipment: ['Swimwear', 'Goggles', 'Head cap', 'Kickboard', 'Pull buoy', 'Snorkel', 'Hand paddles', 'Yoga mat']
    },
    navyfins: {
      name: 'NavyFins',
      level: 'Advanced',
      age: '15+ years',
      coaches: 'Desmond Amponsah, Benjamin Oteng, Joseph Okai',
      color: 'from-indigo-600 to-indigo-800',
      icon: '🏆',
      description: 'High-intensity training for competitive excellence',
      requirements: [
        '100m butterfly unassisted',
        '200m backstroke unassisted',
        '400m freestyle and Individual Medley',
        'Advanced hypoxic training',
        'Competition in all stroke events'
      ],
      equipment: ['Swimwear', 'Goggles', 'Head cap', 'Long & power fins', 'Pull buoy', 'Snorkel', 'Hand paddles', 'Yoga mat']
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
            poster="/images/g1.jpg"
          >
            <source src="/videos/gv1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            BlueFins <span className="text-yellow-400">Competitive Team</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Where Champions Are Made Through Excellence, Dedication, and Team Spirit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Join Our Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Watch Training Video
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'schedule', label: 'Training Schedule', icon: Calendar },
              { id: 'groups', label: 'Team Groups', icon: Users },
              { id: 'gallery', label: 'Photo Gallery', icon: Trophy },
              { id: 'philosophy', label: 'Our Philosophy', icon: Target },
              { id: 'contact', label: 'Contact', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors duration-300 whitespace-nowrap ${
                  activeTab === id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Training Schedule Section */}
      {activeTab === 'schedule' && (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Training Schedule</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Structured training programs designed for each skill level and age group
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(competitiveGroups).map(([key, group]) => (
                    <div
                      key={key}
                      className={`bg-gradient-to-br ${group.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105`}
                      onClick={() => setSelectedGroup(key)}
                    >
                      <div className="text-3xl mb-2">{group.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{group.level}</p>
                      <p className="text-sm opacity-80">{group.age}</p>
                      <div className="mt-4 flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">2-3 sessions/week</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Groups Section */}
      {activeTab === 'groups' && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Competitive Groups</h2>
              <p className="text-xl text-gray-600">
                Progressive training structure based on ability, age, and dedication
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-4 mb-8">
              {Object.entries(competitiveGroups).map(([key, group]) => (
                <button
                  key={key}
                  onClick={() => setSelectedGroup(key)}
                  className={`p-4 rounded-lg transition-all duration-300 ${
                    selectedGroup === key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                  }`}
                >
                  <div className="text-2xl mb-2">{group.icon}</div>
                  <div className="font-semibold">{group.name}</div>
                  <div className="text-sm opacity-75">{group.level}</div>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`bg-gradient-to-r ${competitiveGroups[selectedGroup].color} text-white p-8`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {competitiveGroups[selectedGroup].icon} {competitiveGroups[selectedGroup].name}
                    </h3>
                    <p className="text-xl opacity-90">{competitiveGroups[selectedGroup].level}</p>
                    <p className="opacity-80">Age: {competitiveGroups[selectedGroup].age}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80">Coaches:</p>
                    <p className="font-semibold">{competitiveGroups[selectedGroup].coaches}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Philosophy & Approach</h4>
                    <p className="text-gray-600 mb-6">{competitiveGroups[selectedGroup].description}</p>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Group Requirements</h4>
                    <ul className="space-y-2">
                      {competitiveGroups[selectedGroup].requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5">
                            <div className="w-2 h-2 bg-current rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Required Equipment</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {competitiveGroups[selectedGroup].equipment.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-yellow-400">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-5 h-5 text-yellow-600" />
                        <h5 className="font-bold text-gray-800">Training Focus</h5>
                      </div>
                      <p className="text-gray-700 text-sm">
                        {selectedGroup === 'skyfins' && 'Stroke technique, water safety, and building confidence in all four competitive strokes.'}
                        {selectedGroup === 'turquoisefins' && 'Fundamentals, motor skills, balance, and coordination with low-intensity technique work.'}
                        {selectedGroup === 'lapisfins' && 'Strong foundation in all strokes with balance of technique and physiological development.'}
                        {selectedGroup === 'navyfins' && 'High-intensity training, competition preparation, and advanced technique refinement.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery Section */}
      {activeTab === 'gallery' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
              <p className="text-xl text-gray-600">
                Capturing moments of excellence, teamwork, and achievement
              </p>
            </div>

            {/* Main Gallery Display */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{galleryImages[currentImageIndex].caption}</h3>
                  <p className="text-sm opacity-80">{currentImageIndex + 1} of {galleryImages.length}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? 'ring-4 ring-blue-500 scale-105'
                      : 'hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {currentImageIndex === index && (
                    <div className="absolute inset-0 bg-blue-500/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Philosophy Section */}
      {activeTab === 'philosophy' && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Training Philosophy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At BlueFins, we believe in developing the whole athlete through technical excellence, mental toughness, and team spirit
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Technical Excellence",
                  description: "Focus on proper technique across all four competitive strokes",
                  icon: "🏊‍♂️",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  title: "Mental Toughness",
                  description: "Building resilience, focus, and competitive mindset",
                  icon: "🧠",
                  color: "from-purple-400 to-purple-600"
                },
                {
                  title: "Team Spirit",
                  description: "Supporting each other to achieve collective and individual goals",
                  icon: "👥",
                  color: "from-green-400 to-green-600"
                }
              ].map((pillar, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className={`bg-gradient-to-r ${pillar.color} p-6 text-white text-center`}>
                    <div className="text-4xl mb-2">{pillar.icon}</div>
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 shadow-lg text-white">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <p className="text-lg mb-4">
                    Our comprehensive approach ensures swimmers develop into well-rounded athletes prepared for competition at any level.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Progressive, age-appropriate training for all squads",
                      "Emphasis on technique, efficiency, and race skills",
                      "Balanced focus on endurance, speed, and strength"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 md:pl-8 md:border-l border-white/30">
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-2">
                    {[
                      "Supportive, team-oriented environment",
                      "Goal setting and personal growth",
                      "Fun, challenge, and sportsmanship",
                      "Academic and athletic excellence"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold px-6 py-2 rounded-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h2>
              <p className="text-xl text-gray-600">
                Ready to dive into competitive swimming? Contact us to get started!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">BlueFins Swimming Club, Accra</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+233 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">info@bluefins.com</span>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)}
    </div>
  );
};

export default CompetitiveTeamPage;