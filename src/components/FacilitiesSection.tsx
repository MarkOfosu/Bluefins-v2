'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';

interface FacilityProps {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const FacilityCard = ({ facility }: { facility: FacilityProps }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card hoverEffect className="h-full">
        <div className="relative h-64 w-full">
          <Image
            src={facility.imageUrl}
            alt={facility.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#0A1738] mb-2">
            {facility.name}
          </h3>
          <p className="text-sm font-medium text-blue-600 mb-3">
            {facility.location}
          </p>
          <p className="text-gray-600 mb-4">
            {facility.description}
          </p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Facility Features:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {facility.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-[#FFD700] mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Button href={`/locations/${facility.id}`} variant="primary" fullWidth>
            View Details
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FacilitiesSection = () => {
  // Example facilities - in a real application, these would come from an API or database
  const facilities = [
    {
      id: "jmj",
      name: "JMJ International School Pool",
      location: "East Legon, Accra",
      description: "Our main training facility with Olympic standard lanes and state-of-the-art equipment.",
      imageUrl: "/images/pools/jmj.png",
      features: ["25m Pool", "6 Lanes", "Heated Water", "Professional Starting Blocks", "Advanced Timing System", "Viewing Area"]
    },
    {
      id: "regimanuel",
      name: "Regimanuel Gray Pool",
      location: "East Airport, Accra",
      description: "A premium facility perfect for training sessions and smaller competitions.",
      imageUrl: "/images/pools/regimanuel.png",
      features: ["25m Pool", "4 Lanes", "Controlled Environment", "Coaching Area", "Changing Rooms", "Secure Parking"]
    },
    {
      id: "splash",
      name: "Splash Swimming Academy",
      location: "Spintex Road, Accra",
      description: "Ideal for learn-to-swim programs and beginner training sessions.",
      imageUrl: "/images/pools/splash.png",
      features: ["20m Pool", "Shallow Area", "Children's Pool", "Qualified Instructors", "Safety Equipment", "Shaded Area"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Training Facilities"
          subtitle="World-class swimming pools where champions are made"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/locations" size="lg">
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
