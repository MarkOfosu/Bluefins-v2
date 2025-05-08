// src/components/AboutSection.tsx
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1738] mb-4">About Ghana BlueFins</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ghana&apos;s premier swimming club dedicated to excellence in water safety, competitive swimming, and athlete development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div>
            <Image 
              src="/images/team-photo.jpg" 
              alt="BlueFins Swim Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0A1738] mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Ghana BlueFins, our mission is to provide high-quality swimming instruction and competitive opportunities for swimmers of all ages and abilities. We are committed to developing not just swimmers, but well-rounded individuals who carry the values of discipline, teamwork, and perseverance into all aspects of their lives.
            </p>
            <p className="text-gray-700">
              We strive to make swimming accessible to all Ghanaians by offering programs at multiple locations and providing scholarships to talented swimmers who might not otherwise have access to professional coaching.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#0A1738] rounded-lg p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">Excellence</h3>
            <p>
              We pursue excellence in all aspects of our programs, from the quality of our coaching to the standards we expect from our swimmers. We believe in setting high goals and working diligently to achieve them.
            </p>
          </div>
          
          <div className="bg-[#0A1738] rounded-lg p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">Community</h3>
            <p>
              The BlueFins family extends beyond the pool. We foster a supportive community where swimmers encourage each other, parents are engaged, and everyone contributes to a positive environment.
            </p>
          </div>
          
          <div className="bg-[#0A1738] rounded-lg p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#FFD700]">Development</h3>
            <p>
              We focus on the holistic development of our swimmers, emphasizing not just technical skills and physical fitness, but also mental toughness, sportsmanship, and leadership qualities.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-100 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A1738] mb-8">By the Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-[#0A1738] text-4xl font-bold mb-2">250+</div>
              <div className="text-gray-700">Active Swimmers</div>
            </div>
            
            <div className="text-center">
              <div className="text-[#0A1738] text-4xl font-bold mb-2">12</div>
              <div className="text-gray-700">Professional Coaches</div>
            </div>
            
            <div className="text-center">
              <div className="text-[#0A1738] text-4xl font-bold mb-2">2</div>
              <div className="text-gray-700">Training Locations</div>
            </div>
            
            <div className="text-center">
              <div className="text-[#0A1738] text-4xl font-bold mb-2">8</div>
              <div className="text-gray-700">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;