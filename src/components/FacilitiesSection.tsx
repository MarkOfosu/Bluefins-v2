'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';

interface FacilityCardProps {
  name: string;
  image: string;
  address: string;
  amenities: string[];
  index: number;
}

const FacilityCard = ({ name, image, address, amenities, index }: FacilityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="relative h-64 w-full">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#0A1738] mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{address}</p>
        
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-[#0A1738] mb-2 uppercase tracking-wider">Amenities</h4>
          <ul className="grid grid-cols-2 gap-1">
            {amenities.map((amenity, i) => (
              <li key={i} className="flex items-center text-sm">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-[#FFD700] mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const FacilitiesSection = () => {
  const facilities = [
    {
      name: "Splash Social Center",
      image: "/public/misc/pools/splash.jpeg",
      address: "Airport Residential Area, Accra",
      amenities: [
        "25m Pool",
        "Heated Water",
        "Changing Rooms",
        "Spectator Area",
        "Cafeteria",
        "Swim Shop"
      ]
    },
    {
      name: "Burma Camp Swimming Pool",
      image: "/public/misc/pools/burmaCamp.jpeg",
      address: "Burma Camp, Accra",
      amenities: [
        "Olympic-sized Pool",
        "Training Lanes",
        "Diving Area",
        "Changing Rooms",
        "Security",
        "Parking"
      ]
    },
    {
      name: "Regimanuel Grey Pool",
      image: "/public/misc/pools/regimanuel.png",
      address: "East Legon, Accra",
      amenities: [
        "20m Pool",
        "Kids Pool",
        "Private Setting",
        "Changing Rooms",
        "Coaching Area",
        "Gated Community"
      ]
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="World-Class Facilities"
          subtitle="Training at Ghana&apos;s premier swimming pools and aquatic centers"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <FacilityCard 
              key={facility.name}
              name={facility.name}
              image={facility.image}
              address={facility.address}
              amenities={facility.amenities}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/facilities" variant="primary" size="lg">
            Explore Our Facilities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
