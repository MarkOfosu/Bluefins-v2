

// src/app/about-us/page.tsx
import AboutSection from '../../components/AboutSection';

export const metadata = {
  title: 'About Us | Ghana BlueFins Swim Club',
  description: 'Learn about Ghana BlueFins Swim Club, our mission, values, and history as a premier swim club in Ghana.',
}

export default function AboutUsPage() {
  return (
    <main className="bg-white">

      <div className="pt-24"> 
        <AboutSection />
        
        {/* Extended About Us content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1738]">Our History</h2>
              <p className="text-gray-700 mb-6">
                Ghana BlueFins Swim Club was established in 2015 with a mission to develop swimming as both a competitive sport and essential life skill in Ghana. What began as a small group of dedicated swimmers has grown into one of Ghana&apos;s premier swimming clubs, with multiple training locations and programs catering to swimmers of all ages and abilities.
              </p>
              <p className="text-gray-700 mb-6">
                Our club has produced numerous national champions and record holders, with several swimmers representing Ghana in international competitions, including the African Swimming Championships and FINA events.
              </p>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-[#0A1738]">Our Coaching Philosophy</h2>
              <p className="text-gray-700 mb-6">
                At Ghana BlueFins, we believe in a developmental approach to swimming that emphasizes proper technique, consistent training, and a supportive team environment. Our coaches work with swimmers at every level to help them reach their full potential, whether their goal is to learn basic water safety or compete at the international level.
              </p>
              <p className="text-gray-700 mb-6">
                We place a strong emphasis on character development alongside swimming skills, promoting values such as discipline, perseverance, sportsmanship, and teamwork. Our coaches serve as mentors both in and out of the pool, helping swimmers develop into well-rounded individuals.
              </p>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-[#0A1738]">Community Impact</h2>
              <p className="text-gray-700 mb-6">
                Beyond competitive swimming, Ghana BlueFins is committed to making a positive impact in our community. We offer water safety programs, collaborate with schools to introduce swimming to more children, and provide scholarships to talented swimmers who might not otherwise have access to professional coaching.
                  </p>
              <p className="text-gray-700">
                We&apos;re proud to be contributing to the growth of swimming in Ghana and helping to change the perception of swimming from a luxury activity to an essential life skill that everyone should have the opportunity to learn.
              </p>
            </div>
          </div>
        </section>
        </div>
    </main>
  );
}