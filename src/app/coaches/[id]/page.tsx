// src/app/coaches/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCoachById, getAllCoaches } from '@/lib/coaches';

// Generate static params for all coaches
export function generateStaticParams() {
  const coaches = getAllCoaches();
  return coaches.map(coach => ({
    id: coach.id,
  }));
}

export default function CoachDetailsPage({ params }: { params: { id: string } }) {
  const coach = getCoachById(params.id);
  
  // If coach doesn't exist, return 404
  if (!coach) {
    notFound();
  }
  
  // Function to check if photo path exists and return it or a placeholder
  const getPhotoSrc = () => {
    return coach.photo || `https://ui-avatars.com/api/?name=${coach.name}&background=1E40AF&color=FFD700&size=256`;
  };
  
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-[#1E40AF]">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              {coach.photo ? (
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#FFD700]">
                  <Image 
                    src={getPhotoSrc()}
                    alt={coach.photoAlt || `Photo of ${coach.name}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="w-64 h-64 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border-4 border-[#FFD700]">
                  <div className="text-6xl text-white font-bold">{coach.initials}</div>
                </div>
              )}
            </div>
            <div className="md:w-2/3 md:pl-12 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{coach.name}</h1>
              <p className="text-[#FFD700] text-xl font-medium mb-6">{coach.title}</p>
              <p className="text-white/90 text-lg max-w-2xl">{coach.shortBio}</p>
              
              {coach.socialLinks && (
                <div className="mt-6 flex space-x-4 justify-center md:justify-start">
                  {Object.entries(coach.socialLinks).map(([platform, url]) => (
                    url && (
                      <a 
                        key={platform}
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FFD700] transition-colors"
                        aria-label={`${coach.name}'s ${platform}`}
                      >
                        {platform === 'facebook' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        )}
                        {platform === 'instagram' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {platform === 'twitter' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        )}
                        {platform === 'linkedin' && (
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        )}
                      </a>
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Bio Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Biography</h2>
              <div className="prose prose-lg max-w-none">
                {coach.fullBio.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Skills & Certifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Skills & Certifications</h2>
              <div className="flex flex-wrap gap-3">
                {coach.skills.map((skill, index) => (
                  <div key={index} className="bg-[#1E40AF]/10 px-4 py-2 rounded-full text-[#1E40AF] font-medium">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Achievements Section */}
            {coach.achievements && coach.achievements.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Achievements</h2>
                <ul className="space-y-3">
                  {coach.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-[#FFD700] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Connect with Coach */}
            <div className="bg-[#1E40AF]/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-[#1E40AF] mb-4">Work with Coach {coach.name.split(' ')[0]}</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Interested in private lessons or learning more about Coach {coach.name.split(' ')[0]}'s teaching approach? 
                Contact us to schedule a session or learn more about our programs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Back to all coaches */}
          <div className="max-w-4xl mx-auto mt-12 pt-6 border-t border-gray-200">
            <Link
              href="/coaches"
              className="inline-flex items-center text-[#1E40AF] hover:text-[#1E40AF]/80"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Coaches
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}