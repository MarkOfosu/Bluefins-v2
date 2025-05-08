import React from 'react';
import Link from 'next/link';

interface LocationDetailProps {
  name: string;
  address: string;
  exactAddress: string;
  description: string;
  amenities: string[];
  hours: string[];
  image: string;
  mapUrl: string;
}

const LocationDetail = ({ 
  name, 
  address, 
  exactAddress,
  description, 
  amenities, 
  hours, 
  image, 
  mapUrl 
}: LocationDetailProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-white/80 flex items-center mb-1">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {address}
          </p>
          <p className="text-white/60 text-sm ml-7">
            {exactAddress}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div>
          <h4 className="text-lg font-bold mb-3 text-[#0A1738]">About This Location</h4>
          <p className="text-gray-700 mb-6">{description}</p>
          
          <h4 className="text-lg font-bold mb-3 text-[#0A1738]">Hours of Operation</h4>
          <ul className="mb-6 space-y-1 text-gray-700">
            {hours.map((hour, index) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>

          <Link 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#0A1738] font-semibold hover:text-[#FFD700] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            View on Map
          </Link>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3 text-[#0A1738]">Amenities</h4>
          <ul className="space-y-2 mb-6">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{amenity}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-[#0A1738]/5 p-4 rounded-lg">
            <h4 className="text-lg font-bold mb-2 text-[#0A1738]">Pool Fees</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-semibold text-[#0A1738]">Per Session</p>
                {name === "Splash Social Center" && <p className="text-gray-700">GHS 50</p>}
                {name === "Regimanuel Gray Estate Clubhouse" && <p className="text-gray-700">GHS 40</p>}
                {name === "JMJ Sports & Events Centre" && (
                  <>
                    <p className="text-gray-700">GHS 50 (Weekdays)</p>
                    <p className="text-gray-700">GHS 70 (Weekends)</p>
                  </>
                )}
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="font-semibold text-[#0A1738]">Monthly</p>
                {name === "Splash Social Center" && <p className="text-gray-700">GHS 250</p>}
                {name === "Regimanuel Gray Estate Clubhouse" && <p className="text-gray-700">N/A</p>}
                {name === "JMJ Sports & Events Centre" && <p className="text-gray-700">N/A</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Location = () => {
  const locations = [
    {
      name: "Splash Social Center",
      address: "Spintex Road, Accra",
      exactAddress: "Nii Martey Tsuru St, Accra",
      description: "Our main training facility featuring a 25-meter swimming pool with 6 lanes. This location hosts most of our regular training sessions and is ideal for both beginners and competitive swimmers.",
      amenities: [
        "6-lane 25m swimming pool",
        "Changing rooms with showers",
        "Poolside seating for parents",
        "On-site parking",
        "Trained lifeguards on duty",
        "Pool maintained to international standards"
      ],
      hours: [
        "Monday - Friday: 6:00 AM - 8:00 PM",
        "Saturday: 8:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 4:00 PM"
      ],
      image: "/images/splash-social.jpg",
      mapUrl: "https://maps.google.com/?q=Splash+Social+Center,+Nii+Martey+Tsuru+St,+Accra,+Ghana"
    },
    {
      name: "Regimanuel Gray Estate Clubhouse",
      address: "Regimanuel Gray Estate, Spintex Road, Accra",
      exactAddress: "JVJ8+HVH, Accra",
      description: "An intimate pool setting perfect for private lessons and small group classes. The quieter environment makes it ideal for beginners who might need more focused attention.",
      amenities: [
        "Well-maintained swimming pool",
        "Changing facilities",
        "Peaceful environment",
        "Shaded seating area",
        "Water temperature monitoring"
      ],
      hours: [
        "Monday - Friday: 3:00 PM - 7:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: Closed"
      ],
      image: "/images/regimanuel.jpg",
      mapUrl: "https://maps.google.com/?q=Regimanuel+Gray+Estate+Clubhouse,+JVJ8%2BHVH,+Accra,+Ghana"
    },
    {
      name: "JMJ Sports & Events Centre",
      address: "Sakumono, Accra",
      exactAddress: "JWMR+P3X, Alphabet Pkwy, Accra",
      description: "A modern sport complex featuring a competition-standard swimming pool. This location is primarily used for our competitive swim team training and weekend intensive programs.",
      amenities: [
        "Olympic-size 25m swimming pool",
        "Electronic timing system for competitions",
        "Spectator seating",
        "Modern changing facilities",
        "Cafeteria",
        "First aid station",
        "Professional coaching equipment"
      ],
      hours: [
        "Monday - Friday: 2:00 PM - 8:00 PM",
        "Saturday: 8:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 4:00 PM"
      ],
      image: "/images/jmj-sports.jpg",
      mapUrl: "https://maps.google.com/?q=JMJ+Sports+%26+Events+Centre,+JWMR%2BP3X,+Alphabet+Pkwy,+Accra,+Ghana"
    }
  ];

  return (
    <section id="locations" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1738]">Our Locations</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-700">
            BlueFins operates at multiple pools across Accra to provide convenient access for all our members. 
            Each location offers unique features and amenities to enhance your swimming experience.
          </p>
        </div>

        {/* Location map */}
        <div className="mb-12 relative h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254156.27296809584!2d-0.2956758419921875!3d5.6011358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1653962069429!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1738]/20 to-transparent"></div>
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
            <p className="text-[#0A1738] font-semibold text-sm">BlueFins Locations in Greater Accra</p>
          </div>
        </div>

        {/* Location details */}
        <div className="space-y-8">
          {locations.map((location, index) => (
            <LocationDetail 
              key={index}
              name={location.name}
              address={location.address}
              exactAddress={location.exactAddress}
              description={location.description}
              amenities={location.amenities}
              hours={location.hours}
              image={location.image}
              mapUrl={location.mapUrl}
            />
          ))}
        </div>

        {/* Contact block */}
        <div className="mt-12 bg-[#0A1738] text-white rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Visit Us Today</h3>
              <p className="text-white/80 mb-6 md:mb-0">
                Come by any of our locations to see our facilities and speak with our coaches.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-[#0A1738] hover:bg-[#FFD700] px-6 py-3 rounded-lg font-bold transition-colors shadow-md text-center"
              >
                Contact Us
              </Link>
              <Link 
                href="/register" 
                className="bg-[#FFD700] text-[#0A1738] hover:bg-white px-6 py-3 rounded-lg font-bold transition-colors shadow-md text-center"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* Transportation info */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-[#0A1738]">Transportation & Directions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start">
              <div className="bg-[#0A1738]/10 p-3 rounded-full mr-3">
                <svg className="w-6 h-6 text-[#0A1738]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#0A1738] mb-1">Public Transport</h4>
                <p className="text-gray-700 text-sm">
                  All our locations are accessible via public transport, with trotro and taxi services available nearby.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#0A1738]/10 p-3 rounded-full mr-3">
                <svg className="w-6 h-6 text-[#0A1738]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#0A1738] mb-1">Parking</h4>
                <p className="text-gray-700 text-sm">
                  Free parking is available at all our locations for members and guests.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#0A1738]/10 p-3 rounded-full mr-3">
                <svg className="w-6 h-6 text-[#0A1738]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#0A1738] mb-1">Need Directions?</h4>
                <p className="text-gray-700 text-sm">
                  Call us at +233 25 657 2222 for detailed directions to any of our locations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0A1738]/5 p-4 rounded-lg">
            <h4 className="font-semibold text-[#0A1738] mb-2">Transportation Tips</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>For the Splash Social Center, you can use the address &quot;Nii Martey Tsuru St&quot; when using ride-sharing apps or giving directions to taxi drivers.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>The Regimanuel Gray Estate Clubhouse has security at the entrance. Mention you&apos;re visiting the swimming pool or BlueFins Swim Club. You can use the Plus Code &quot;JVJ8+HVH&quot; in Google Maps.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>JMJ Sports & Events Centre is located on Alphabet Parkway in Sakumono. You can use the Plus Code &quot;JWMR+P3X&quot; for precise navigation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;