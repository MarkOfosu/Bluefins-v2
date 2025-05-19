'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface CoachCardProps {
  name: string;
  role: string;
  image: string;
  delay: number;
  bio?: string;
  specialty?: string;
}

const CoachCard = ({ name, role, image, delay, bio, specialty }: CoachCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
      className="group"
    >
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 border-b-4 border-secondary">
        {/* Coach Profile Image with Overlay */}
        <div className="relative h-96 w-full overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary to-transparent z-10"></div>
          
          <Image 
            src={image} 
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Animated highlight effect on hover */}
          <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        </div>
        
        {/* Coach Details */}
        <div className="p-6 relative">
          <h3 className="text-2xl font-bold text-primary">{name}</h3>
          <div className="flex items-center gap-2 mt-1 mb-3">
            <span className="h-1 w-10 bg-secondary rounded-full"></span>
            <p className="text-secondary font-medium">{role}</p>
          </div>
          
          {specialty && (
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-1 mb-3">
              {specialty}
            </div>
          )}
          
          {bio && (
            <p className="mt-3 text-gray-700 line-clamp-3">{bio}</p>
          )}
          
          <div className="mt-6 transition-transform duration-300 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="w-full h-10 flex justify-center items-center text-primary font-medium">
              View Profile
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoachesOverview = () => {
  const featuredCoaches = [
    {
      name: "Coach Mark",
      role: "Head Coach",
      image: "/images/mark.jpg",
      bio: "Former national swimmer with over 10 years of coaching experience.",
      specialty: "Competitive Swimming"
    },
    {
      name: "Coach Desmond",
      role: "Assistant Coach",
      image: "/images/desmond.jpg", 
      bio: "Specialized in training competitive swimmers and improving technique.",
      specialty: "Technique Development"
    },
    {
      name: "Coach Gideon",
      role: "Learn-to-Swim Coach",
      image: "/images/mark.jpg", // Using a placeholder since gideon.jpg may not exist
      bio: "Expert in teaching swimming fundamentals to beginners of all ages.",
      specialty: "Beginner Instruction"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-secondary">Expert Coaches</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated professionals guiding our swimmers to greatness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mt-16">
          {featuredCoaches.map((coach, index) => (
            <div key={coach.name} className="block">
              <CoachCard 
                name={coach.name}
                role={coach.role}
                image={coach.image}
                bio={coach.bio}
                specialty={coach.specialty}
                delay={index}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button href="/coaches" variant="primary" size="lg">
            Meet Our Full Coaching Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoachesOverview;
