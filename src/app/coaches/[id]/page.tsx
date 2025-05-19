// src/app/coaches/[id]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
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
    return coach.photo || `https://ui-avatars.com/api/?name=${coach.name}&background=0A1738&color=FFD700&size=256`;
  };
  
  return (
    <main className="bg-white">
      {/* Coach Header Section - Card Style with Side-by-side Layout */}
      <section className="pb-16 bg-gradient-to-r from-[#0A1738] to-[#1E3A8A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-[#0A1738] to-[#1E3A8A] shadow-2xl rounded-2xl overflow-hidden">
            <div className="md:flex">
              {/* Coach Image - Left Side */}
              <div className="md:w-2/5 relative">
                {coach.photo ? (
                  <div className="relative h-full min-h-[400px] md:min-h-0">
                    <Image 
                      src={getPhotoSrc()}
                      alt={`Coach ${coach.name}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#0A1738] to-[#1E3A8A]">
                    <div className="text-8xl text-white font-bold">{coach.name.charAt(0)}</div>
                  </div>
                )}
              </div>
              
              {/* Coach Info - Right Side */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                  {coach.name}
                </h1>
                <p className="text-[#FFD700] text-2xl font-medium mb-6">
                  Swim Coach
                </p>
                <p className="text-white/90 text-xl max-w-2xl leading-relaxed mb-8">
                  {coach.shortBio}
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-5 mb-10">
                  {coach.socialLinks && Object.entries(coach.socialLinks).map(([platform, url]) => (
                    url && (
                      <a 
                        key={platform}
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FFD700] transition-colors transform hover:scale-110 transition-transform duration-200"
                        aria-label={`${coach.name}'s ${platform}`}
                      >
                        {platform === 'facebook' && (
                          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        )}
                        {platform === 'instagram' && (
                          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {platform === 'twitter' && (
                          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        )}
                        {platform === 'linkedin' && (
                          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        )}
                      </a>
                    )
                  ))}
                </div>
                
                {/* Contact Button */}
                <div>
                  <Link
                    href={`/contact?coach=${coach.name}`}
                    className="inline-block bg-[#FFD700] hover:bg-white text-[#0A1738] font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Connect with {coach.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content with Modern Card Design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Bio Section with Typography Enhancements */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-[#0A1738] mb-6 flex items-center">
                <span className="w-12 h-2 bg-[#FFD700] rounded-full mr-4 inline-block"></span>
                About {coach.name.split(' ')[0]}
              </h2>
              <div className="space-y-6">
                {coach.fullBio.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Testimonials Section */}
            <div className="bg-gradient-to-r from-[#0A1738] to-[#1E3A8A] rounded-xl p-8 mb-12 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="w-12 h-2 bg-[#FFD700] rounded-full mr-4 inline-block"></span>
                What Swimmers Say
              </h2>
              
              <div className="relative pl-8 border-l-2 border-[#FFD700]">
                <svg className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-[#FFD700] bg-[#0A1738] p-1 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/90 italic mb-4 leading-relaxed">
                  Coach {coach.name.split(' ')[0]} transformed my swimming technique completely. Their attention to detail and encouraging approach helped me gain confidence and improve my times significantly.
                </p>
                <p className="text-[#FFD700] font-medium">— Sarah K., Competitive Swimmer</p>
              </div>
            </div>
            
            {/* Connect with Coach - Modern Card */}
            <div className="bg-gradient-to-br from-[#0A1738] to-[#1E3A8A] rounded-xl p-8 text-center text-white shadow-xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute right-0 top-0 w-40 h-40 bg-[#FFD700]/10 rounded-full blur-2xl"></div>
              <div className="absolute left-0 bottom-0 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Work with {coach.name.split(' ')[0]}</h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Ready to take your swimming to the next level? Coach {coach.name.split(' ')[0]} is available for 
                  private lessons and small group instruction. Get personalized guidance tailored to your specific goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href={`/contact?subject=Private%20Lessons&coach=${coach.name}`}
                    className="inline-block bg-[#FFD700] hover:bg-white text-[#0A1738] font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Book Private Lessons
                  </Link>
                  <Link
                    href="/schedule"
                    className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                  >
                    View Schedule
                  </Link>
                </div>
              </div>
            </div>
            
            {/* More Coaches Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#0A1738]">Meet More Coaches</h2>
                <Link
                  href="/coaches"
                  className="inline-flex items-center text-[#0A1738] hover:text-[#1E3A8A] font-medium transition-colors"
                >
                  <span>View All</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              {/* This would ideally be other coaches, but we'll just show similar styles for demonstration */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="h-48 bg-gradient-to-r from-[#0A1738] to-[#1E3A8A] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 27.5c-6.904 0-12.5-5.596-12.5-12.5S8.096 2.5 15 2.5 27.5 8.096 27.5 15 21.904 27.5 15 27.5z\' opacity=\'.2\' fill=\'%23FFD700\' fill-rule=\'nonzero\'/%3E%3C/svg%3E')] opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center text-[#0A1738] font-bold text-2xl">
                          C{item}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0A1738] mb-2">Coach Example {item}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Experienced swim coach specializing in technique development and competitive training.
                      </p>
                      <Link
                        href="/coaches"
                        className="inline-flex items-center text-[#0A1738] hover:text-[#1E3A8A] font-medium"
                      >
                        <span>View Profile</span>
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Back to all coaches */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <Link
                href="/coaches"
                className="inline-flex items-center text-[#0A1738] hover:text-[#1E3A8A] transition-colors group"
              >
                <svg className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to All Coaches</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}