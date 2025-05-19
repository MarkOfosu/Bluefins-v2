// src/app/location/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// Type definitions
interface PoolFees {
  perSession: string | React.ReactNode;
  monthly: string | React.ReactNode;
}

interface LocationData {
  id: string;
  title: string;
  address: string;
  exactAddress: string;
  image: string;
  programs: string[];
  poolFees: PoolFees;
  hours: string[];
  area: 'SPINTEX' | 'SAKUMONO';
  plusCode?: string;
}

// Spintex Schedule Component
const SpintexScheduleComponent: React.FC = () => {
  return (
    <div className="schedule-container overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th colSpan={8} className="bg-black text-white text-center py-2 text-xl">
              SPINTEX
            </th>
          </tr>
          <tr>
            <th className="w-1/6 bg-gray-300 border border-gray-400 p-2"></th>
            <th colSpan={2} className="bg-gray-300 border border-gray-400 text-center py-1 font-bold">
              REGIMANUEL
            </th>
            <th colSpan={4} className="bg-gray-300 border border-gray-400 text-center py-1 font-bold">
              SPLASH SOCIAL CENTRE
            </th>
            <th className="w-16 bg-gray-300 border border-gray-400 p-2"></th>
          </tr>
          <tr>
            <th className="bg-gray-300 border border-gray-400 p-2"></th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">MONDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">TUESDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">WEDNESDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">THURSDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">FRIDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">SATURDAY</th>
            <th className="w-16 bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">SUNDAY</th>
          </tr>
        </thead>
        <tbody>
          {/* First row - TurquoiseFins/LapisFins/NavyFins */}
          <tr>
            <td className="border border-gray-400 p-2 bg-green-200">
              <div className="font-bold">
                TurquoiseFins<br />
                LapisFins<br />
                NavyFins
              </div>
            </td>
            <td colSpan={2} className="border border-gray-400 p-2 bg-green-200 text-center">
              5-5:15pm dryland<br />
              5:15-7pm swim
            </td>
            <td className="border border-gray-400 p-2 bg-green-200 text-center">
              5-5:15pm dryland<br />
              5:15-7pm swim
            </td>
            <td className="border border-gray-400 p-2 bg-green-200 text-center">
              5:30-6:50am swim<br /><br />
              5-5:15pm dryland<br />
              5:15-7pm swim
            </td>
            <td className="border border-gray-400 p-2 bg-green-200 text-center">
              5:30-6:50am swim<br /><br />
              5-5:15pm dryland<br />
              5:15-7pm swim
            </td>
            <td className="border border-gray-400 p-2 bg-green-200 text-center">
              6-8am swim<br />
              8-8:30am dryland
            </td>
            <td className="border border-gray-400 p-2 w-16"></td>
          </tr>
          
          {/* MiniFins/SkyFins row */}
          <tr>
            <td className="border border-gray-400 p-2 bg-orange-200">
              <div className="font-bold">
                MiniFins<br />
                SkyFins
              </div>
            </td>
            <td colSpan={2} className="border border-gray-400 p-2 bg-orange-200 text-center">
              4-5pm swim<br />
              5-5:15pm dryland
            </td>
            <td className="border border-gray-400 p-2 bg-orange-200 text-center">
              4-5pm swim<br />
              5-5:15pm dryland
            </td>
            <td className="border border-gray-400 p-2 bg-orange-200 text-center">
              4-5pm swim<br />
              5-5:15pm dryland
            </td>
            <td className="border border-gray-400 p-2 bg-orange-200 text-center">
              4-5pm swim<br />
              5-5:15pm dryland
            </td>
            <td className="border border-gray-400 p-2 bg-orange-200 text-center">
              8-8:30am dryland<br />
              8:30-9:30am swim
            </td>
            <td className="border border-gray-400 p-2 w-16"></td>
          </tr>
          
          {/* Kids Learn-to-Swim Row */}
          <tr>
            <td className="border border-gray-400 p-2 bg-purple-200">
              <div className="font-bold">Kids Learn-to-Swim</div>
              <div className="text-xs">
                (swimmers can attend no more<br />
                than 3 sessions per week)
              </div>
            </td>
            <td colSpan={2} className="border border-gray-400 p-2 bg-purple-200 text-center">
              4:00-4:45pm<br />
              4:45-5:30pm
            </td>
            <td className="border border-gray-400 p-2 bg-purple-200 text-center">
              4:00-4:45pm<br />
              4:45-5:30pm
            </td>
            <td className="border border-gray-400 p-2 bg-purple-200 text-center">
              Splash:<br />
              4:00-4:45pm<br /><br />
              Regimanuel:<br />
              5:30-6:15pm
            </td>
            <td className="border border-gray-400 p-2 bg-purple-200 text-center">
              4:00-4:45pm<br />
              4:45-5:30pm
            </td>
            <td className="border border-gray-400 p-2 bg-purple-200 text-center">
              7:30-8:15am<br />
              8:30-9:15am<br />
              9:30-10:15am<br />
              10:30-11:15am
            </td>
            <td className="border border-gray-400 p-2 w-16"></td>
          </tr>
          
          {/* Adults Learn-to-Swim Row */}
          <tr>
            <td className="border border-gray-400 p-2 bg-red-200">
              <div className="font-bold">Adults Learn-to-Swim</div>
              <div className="text-xs">
                (swimmers can attend no more<br />
                than 2 sessions per week)
              </div>
            </td>
            <td colSpan={2} className="border border-gray-400 p-2 bg-red-200 text-center">
              5:30-6:30pm
            </td>
            <td className="border border-gray-400 p-2 bg-red-200 text-center">
              5:30-6:30pm
            </td>
            <td className="border border-gray-400 p-2 bg-red-200 text-center">
              5:30-6:30am
            </td>
            <td className="border border-gray-400 p-2 bg-red-200 text-center">
              5:30-6:30am
            </td>
            <td className="border border-gray-400 p-2 bg-red-200 text-center">
              6:30-7:30am
            </td>
            <td className="border border-gray-400 p-2 w-16"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// SAKUMONO Schedule Component
const SakumonoScheduleComponent: React.FC = () => {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th colSpan={8} className="bg-black text-white text-center py-2 text-xl">
              SAKUMONO
            </th>
          </tr>
          <tr>
            <th colSpan={8} className="bg-gray-300 border border-gray-400 text-center py-1 font-bold">
              JMJ SPORTS & EVENTS CENTRE
            </th>
          </tr>
          <tr>
            <th className="w-1/6 bg-gray-300 border border-gray-400 p-2"></th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">MONDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">TUESDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">WEDNESDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">THURSDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">FRIDAY</th>
            <th className="bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">SATURDAY</th>
            <th className="w-16 bg-gray-300 border border-gray-400 text-center py-1 text-red-600 font-bold">SUNDAY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2 bg-green-200 font-bold">
              Competitive Swim Team
            </td>
            <td className="border border-gray-400 p-2"></td>
            <td className="border border-gray-400 p-2 bg-green-200 text-center">
              5:45-7:00pm
            </td>
            <td className="border border-gray-400 p-2"></td>
            <td className="border border-gray-400 p-2 bg-green-200 text-center">
              5:45-7:00pm
            </td>
            <td className="border border-gray-400 p-2"></td>
            <td className="border border-gray-400 p-2 bg-green-200 text-center">
              1:00-3:00pm
            </td>
            <td className="border border-gray-400 p-2 w-16"></td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2 bg-purple-200">
              <div className="font-bold">Learn-to-Swim</div>
              <div className="text-xs">
                (swimmers can attend no more<br />
                than 3 sessions per week)
              </div>
            </td>
            <td className="border border-gray-400 p-2"></td>
            <td className="border border-gray-400 p-2 bg-purple-200 text-center">
              4:15-5:00pm<br />
              5:00-5:45pm
            </td>
            <td className="border border-gray-400 p-2"></td>
            <td className="border border-gray-400 p-2 bg-purple-200 text-center">
              4:15-5:00pm<br />
              5:00-5:45pm
            </td>
            <td className="border border-gray-400 p-2"></td>
            <td className="border border-gray-400 p-2 bg-purple-200 text-center">
              1:00-1:45pm<br />
              1:45-2:30pm<br />
              2:30-3:15pm
            </td>
            <td className="border border-gray-400 p-2 w-16"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Location Card Component
interface LocationCardProps {
  location: LocationData;
  areaHighlight?: boolean;
}

const LocationCard: React.FC<LocationCardProps> = ({ 
  location,
  areaHighlight = false
}) => {
  const { id, title, address, exactAddress, image, programs, poolFees, hours, area, plusCode } = location;
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(`${title}, ${exactAddress}, Accra, Ghana`)}`;
  
  return (
    <div id={id} className={`bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col ${areaHighlight ? 'ring-2 ring-[#1E40AF]' : ''}`}>
      <a 
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer" 
        className="block relative"
      >
        <div className="h-48 relative overflow-hidden">
          <Image
            src={image}
            alt={`${title} facility`}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute top-3 right-3 bg-[#1E40AF] text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Map
          </div>
          <div className="absolute top-3 left-3 bg-gray-100/80 text-[#1E40AF] px-2 py-1 rounded-full text-xs font-semibold">
            {area}
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-white/80 text-sm flex items-center">
              <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {address}
            </p>
            <p className="text-white/60 text-xs ml-5">
              {exactAddress} {plusCode && <span className="text-white/80">({plusCode})</span>}
            </p>
          </div>
        </div>
      </a>
      
      <div className="p-4 flex-1 flex flex-col">
        {/* Programs */}
        <div className="mb-3">
          <h4 className="font-semibold text-[#1E40AF] text-sm mb-2">Programs:</h4>
          <ul className="space-y-1">
            {programs.map((program, index) => (
              <li key={index} className="flex items-start text-xs text-gray-700">
                <svg className="h-3 w-3 text-[#1E40AF] mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{program}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Hours */}
        <div className="mb-3">
          <h4 className="font-semibold text-[#1E40AF] text-sm mb-2">Hours:</h4>
          <ul className="space-y-0.5 text-xs text-gray-700">
            {hours.map((hour, index) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>
        
        {/* Pool Fees */}
        <div className="mb-3">
          <h4 className="font-semibold text-[#1E40AF] text-sm mb-2">Pool Fees:</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="font-medium text-[#1E40AF] mb-1">Per Session</p>
              <div className="text-gray-700">{poolFees.perSession}</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="font-medium text-[#1E40AF] mb-1">Monthly</p>
              <div className="text-gray-700">{poolFees.monthly}</div>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <Link
            href="/contact"
            className="text-center bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90 px-2 py-1.5 rounded text-xs font-medium transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/register"
            className="text-center border border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF]/5 px-2 py-1.5 rounded text-xs font-medium transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

// Spintex Area Section
interface AreaSectionProps {
  locations: LocationData[];
}

const SpintexAreaSection: React.FC<AreaSectionProps> = ({ locations }) => {
  const spintexLocations = locations.filter(loc => loc.area === 'SPINTEX');
  
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {spintexLocations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            areaHighlight={true}
          />
        ))}
      </div>
    </div>
  );
};

// Sakumono Area Section
const SakumonoAreaSection: React.FC<AreaSectionProps> = ({ locations }) => {
  const sakumonoLocations = locations.filter(loc => loc.area === 'SAKUMONO');
  
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 gap-6">
        {sakumonoLocations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            areaHighlight={true}
          />
        ))}
      </div>
    </div>
  );
};

const LocationPage: React.FC = () => {
  const locations: LocationData[] = [
    {
      id: "splash",
      title: "Splash Social Center",
      address: "Spintex Road, Accra",
      exactAddress: "Nii Martey Tsuru St",
      image: "/images/pools/splash.png",
      programs: [
        "Competitive Swim Team",
        "MiniFins & SkyFins",
        "Kids Learn-to-Swim",
        "Adults Learn-to-Swim"
      ],
      poolFees: {
        perSession: "GHS 50",
        monthly: "GHS 250"
      },
      hours: [
        "Mon-Fri: 6:00 AM - 8:00 PM",
        "Sat: 8:00 AM - 6:00 PM",
        "Sun: 10:00 AM - 4:00 PM"
      ],
      area: "SPINTEX"
    },
    {
      id: "regimanuel",
      title: "Regimanuel Gray Estate",
      address: "Regimanuel Gray Estate",
      exactAddress: "Regimanuel Gray Estate Clubhouse",
      plusCode: "JVJ8+HVH",
      image: "/images/pools/regimanuel.png",
      programs: [
        "Kids Learn-to-Swim (Thursday)",
        "Adults Learn-to-Swim"
      ],
      poolFees: {
        perSession: "GHS 40",
        monthly: "N/A"
      },
      hours: [
        "Mon-Fri: 3:00 PM - 7:00 PM",
        "Sat: 9:00 AM - 5:00 PM",
        "Sun: Closed"
      ],
      area: "SPINTEX"
    },
    {
      id: "jmj",
      title: "JMJ Sports & Events",
      address: "Sakumono, Accra",
      exactAddress: "Alphabet Pkwy",
      plusCode: "JWMR+P3X",
      image: "/images/pools/jmj.png",
      programs: [
        "Competitive Swim Team",
        "Learn-to-Swim"
      ],
      poolFees: {
        perSession: <>GHS 50 (Weekdays)<br/>GHS 70 (Weekends)</>,
        monthly: "N/A"
      },
      hours: [
        "Mon-Fri: 2:00 PM - 8:00 PM",
        "Sat: 8:00 AM - 6:00 PM",
        "Sun: 10:00 AM - 4:00 PM"
      ],
      area: "SAKUMONO"
    }
  ];

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative lg:pt-0">
        <div className="absolute inset-0 h-[40vh] z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/location-hero.jpg" 
              alt="Swimming pools at our locations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E40AF]/70 to-[#1E40AF]/40"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-white">Locations</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Find the perfect swimming program at one of our convenient facilities across Accra
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-gray-50 relative z-10 -mt-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Quick Navigation */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-12">
            <h2 className="text-xl font-bold text-[#1E40AF] mb-4 text-center">Our Training Locations & Schedules</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#schedule" 
                className="px-6 py-3 bg-[#FFD700] text-[#1E40AF] rounded-lg hover:bg-[#FFD700]/80 transition-colors font-bold"
              >
                View Schedule
              </a>
              <a 
                href="#locations" 
                className="px-6 py-3 bg-[#1E40AF] text-white rounded-lg hover:bg-[#1E40AF]/90 transition-colors"
              >
                View Locations
              </a>
            </div>
          </div>
          
          {/* Schedule Section */}
          <div id="schedule" className="bg-white rounded-xl shadow-lg p-6 mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-center text-[#1E40AF] mb-6">
              BlueFins Training Schedule
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Our comprehensive training schedule covers all programs at our various locations. 
              Sessions marked with location names indicate where that particular session takes place.
            </p>
            
            <SpintexScheduleComponent />
          </div>
          
          {/* Locations Section */}
          <div id="locations" className="scroll-mt-24 mb-16">
            <h2 className="text-2xl font-bold text-[#1E40AF] mb-6">
              Spintex Area Facilities
            </h2>
            <SpintexAreaSection locations={locations} />
            
         
            
            {/* Sakumono Schedule first, then location card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-[#1E40AF] mb-4 text-center">
                Sakumono Training Schedule
              </h3>
              <SakumonoScheduleComponent />
            </div>
            <h2 className="text-2xl font-bold text-[#1E40AF] mb-6 mt-12">
              Sakumono Area Facility
            </h2>
            <SakumonoAreaSection locations={locations} />
          </div>
          
          {/* Transportation Tips */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-16">
            <h3 className="text-xl font-bold text-[#1E40AF] mb-4">Transportation & Directions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start">
                <div className="bg-[#1E40AF]/10 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E40AF] mb-1">Public Transport</h4>
                  <p className="text-gray-700 text-sm">
                    All our locations are accessible via public transport, with trotro and taxi services available nearby.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1E40AF]/10 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E40AF] mb-1">Google Maps</h4>
                  <p className="text-gray-700 text-sm">
                    Use the Plus Codes (JVJ8+HVH, JWMR+P3X) in Google Maps for the most accurate directions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1E40AF]/10 p-3 rounded-full mr-3">
                  <svg className="w-6 h-6 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1E40AF] mb-1">Need Directions?</h4>
                  <p className="text-gray-700 text-sm">
                    Call us at +233 25 657 2222 for detailed directions to any of our locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#1E40AF] mb-4">Have Questions About Our Locations?</h2>
              <p className="text-gray-700 mb-6">
                Contact us for more information about pool facilities, parking, accessibility, or to schedule a visit before registering.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90 transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+233256572222"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF]/5 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us: +233 25 657 2222
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocationPage;