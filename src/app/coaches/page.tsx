// src/app/coaches/page.tsx
import Link from 'next/link';
import { getAllCoaches } from '@/lib/coaches';

export default function CoachesPage() {
  // Get all coaches without categorizing by type
  const coaches = getAllCoaches();
  
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-28">
        {/* Hero Background with Modern Gradient */}
        <div className="absolute inset-0 h-[50vh] z-0 overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738] via-[#1E3A8A] to-[#0A1738]"></div>
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            
            {/* Modern animated elements */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#FFD700]/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Hero Content with Modern Typography */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16 pb-32 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-[#FFD700] inline-block transform hover:scale-105 transition-transform duration-300">Coaches</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            The dedicated professionals who inspire excellence both in and out of the water
          </p>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 bg-white relative z-10 -mt-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Modern Introduction Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-b-4 border-[#FFD700] transform hover:translate-y-[-5px] transition-all duration-300">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#0A1738] mb-6">Expert Coaching Team</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our coaches bring passion, expertise, and personalized attention to every swimmer. With diverse backgrounds and a unified commitment to excellence, our team provides world-class instruction for swimmers at all levels. We focus on technical development, confidence building, and fostering a love for swimming that lasts a lifetime.
              </p>
            </div>
          </div>
          
          {/* Coaches Grid - Modern Layout with fully clickable cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coaches.map((coach) => (
              <Link 
                key={coach.id} 
                href={`/coaches/${coach.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-10px] flex flex-col h-full cursor-pointer"
              >
                {/* Coach Image with Overlay - More prominent */}
                <div className="h-80 relative overflow-hidden">
                  {coach.photo ? (
                    <img 
                      src={coach.photo} 
                      alt={`Coach ${coach.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0A1738] to-[#1E3A8A] flex items-center justify-center">
                      <span className="text-5xl text-white font-bold">{coach.initials || coach.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1738]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <span className="inline-block bg-[#FFD700] text-[#0A1738] px-4 py-2 rounded-full font-bold text-sm">
                        View Profile
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Coach Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0A1738] mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
                    {coach.name}
                  </h3>
                  <p className="text-[#FFD700] font-medium mb-4">Swim Coach</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{coach.shortBio}</p>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Join Our Team Section - Modern Design */}
          <div className="bg-gradient-to-r from-[#0A1738] to-[#1E3A8A] text-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl">
            <div className="md:flex items-stretch">
              <div className="md:w-2/3 p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-4">Join Our Coaching Team</h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  We&#39;re always looking for passionate and experienced swim coaches to join our team. If you have a background in swimming and a passion for teaching, we&#39;d love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Experience in competitive swimming</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Passion for teaching and mentoring</p>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Desire to help swimmers reach their potential</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact?subject=Coaching%20Position"
                    className="inline-block bg-[#FFD700] hover:bg-white text-[#0A1738] font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 hidden md:block relative bg-[#0A1738]">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFD700\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]"></div>
                <div className="h-full flex items-center justify-center p-6">
                  <div className="bg-[#FFD700] text-[#0A1738] font-bold text-xl px-6 py-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    Be Part of Our Success
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}