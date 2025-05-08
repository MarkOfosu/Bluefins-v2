import React from 'react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  color: string;
  highlight?: boolean;
}

const PricingCard = ({ title, price, period, features, color, highlight = false }: PricingCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border ${highlight ? 'border-[#FFD700]' : 'border-gray-100'} transform ${highlight ? 'scale-105' : ''}`}>
      <div className={`${color} text-white p-6 text-center`}>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <div className="flex justify-center items-baseline">
          <span className="text-3xl font-bold">GHS {price}</span>
          <span className="text-white/80 ml-1">/{period}</span>
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-3 mb-8">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start text-gray-700">
              <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href="/register"
          className={`inline-block w-full ${highlight ? 'bg-[#FFD700] text-[#0A1738]' : 'bg-[#0A1738] text-white'} font-medium py-3 px-4 rounded-lg transition-colors text-center hover:opacity-90`}
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

interface LocationCardProps {
  name: string;
  address: string;
  fees: string[];
  image?: string;
}

const LocationCard = ({ name, address, fees, image }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
      )}
      <div className="p-5">
        <h4 className="font-bold text-lg text-[#0A1738] mb-1">{name}</h4>
        <p className="text-gray-600 text-sm mb-3">{address}</p>
        <div className="bg-[#0A1738]/5 p-3 rounded-lg">
          <h5 className="font-semibold text-[#0A1738] mb-2 text-sm">POOL FEES:</h5>
          <ul className="space-y-1">
            {fees.map((fee, index) => (
              <li key={index} className="text-gray-700 text-sm">{fee}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1738]">Membership & Pricing</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-700">
            We offer flexible payment options for our various swimming programs to suit your needs.
            Join the BlueFins family today and start your swimming journey with us.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-[#0A1738]">Competitive Swim Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Monthly Plan"
              price="800"
              period="month"
              features={[
                "Payment due by 7th of each month",
                "Flexible commitment option",
                "Access to all team practices",
                "Late fee of GHS 50 applies after due date",
                "Professional coaching"
              ]}
              color="bg-blue-600"
            />
            <PricingCard
              title="4-Month Plan"
              price="3,000"
              period="4 months"
              features={[
                "Save GHS 200 over monthly rate",
                "Payment due by 7th of starting month",
                "Medium-term commitment",
                "Access to all team practices",
                "Professional coaching and feedback"
              ]}
              color="bg-indigo-600"
              highlight={true}
            />
            <PricingCard
              title="Annual Plan"
              price="8,000"
              period="year"
              features={[
                "Best value option",
                "Save GHS 1,600 over monthly rate",
                "Payment due by 7th of starting month",
                "Access to all team practices",
                "Priority registration for events",
                "Professional coaching and video analysis"
              ]}
              color="bg-purple-600"
            />
          </div>

          <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-bold text-lg mb-2 text-[#0A1738]">Registration Fee</h4>
            <p className="mb-4">A one-time registration fee of GHS 400 is required at the time of registration. This includes a Swim Club T-shirt and a Swim Cap for each member.</p>
            
            <div className="flex items-center my-6 border-t border-b border-gray-100 py-4">
              <div className="bg-[#0A1738] text-white p-3 rounded-full mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700 italic">
                <span className="font-medium">Important Note:</span> All membership fees must be paid by the due date to avoid late fees and maintain team privileges.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-[#0A1738]">Learn-to-Swim Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Kids Group"
              price="950"
              period="month"
              features={[
                "Ages 3-17 years",
                "45-minute sessions",
                "2-3 times per week",
                "Payment due by 1st of each month",
                "Small class sizes for personalized attention"
              ]}
              color="bg-teal-600"
            />
            <PricingCard
              title="Adults Group"
              price="800"
              period="month"
              features={[
                "Ages 18 and older",
                "45-60 minute sessions",
                "1-2 times per week",
                "Payment due by 1st of each month",
                "Focus on technique and fitness"
              ]}
              color="bg-green-600"
            />
            <PricingCard
              title="Private Lessons"
              price="300"
              period="hour"
              features={[
                "All ages welcome",
                "One-on-one instruction",
                "Flexible scheduling",
                "Minimum booking: 5 lessons",
                "30-min option: GHS 200/session",
                "Accelerated progress"
              ]}
              color="bg-orange-600"
              highlight={true}
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-[#0A1738]">Our Locations & Pool Fees</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LocationCard
              name="Splash Social Center"
              address="Spintex Road, Accra"
              fees={[
                "GHS 250 per month",
                "GHS 50 per session",
                "Open 7 days a week"
              ]}
              image="/images/splash-social.jpg"
            />
            <LocationCard
              name="Regimanuel Gray Estate Clubhouse"
              address="Spintex Road, Accra"
              fees={[
                "GHS 40 per session",
                "Available on weekdays and weekends"
              ]}
              image="/images/regimanuel.jpg"
            />
            <LocationCard
              name="JMJ Sports & Events Center"
              address="Sakumono, Accra"
              fees={[
                "GHS 70 per session (weekends)",
                "GHS 50 per session (weekdays)",
                "Spacious 25m competition pool"
              ]}
              image="/images/jmj-sports.jpg"
            />
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center text-[#0A1738]">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-bold text-lg">Pool Fee Policy</h4>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Pool fees are charged separately from membership fees</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Monthly pool fees are due by the 1st day of each month</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Per session pool fees must be paid before each swim session</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0A1738] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Swimmers will not be permitted to train if pool fees are unpaid</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 bg-[#0A1738] rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-4">Referral Program</h3>
              <p className="text-white/80 mb-6">
                Share the BlueFins experience with friends and family and enjoy discounts on your membership fees!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-white/80">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold block text-white">Parent Referral Discount</span>
                    <span>Receive 5% off your fees for each referred member (up to 50% discount)</span>
                  </div>
                </li>
                <li className="flex items-start text-white/80">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold block text-white">Learn-to-Swim Coach Referral</span>
                    <span>Coaches receive GHS 400 bonus for competitive team referrals</span>
                  </div>
                </li>
                <li className="flex items-start text-white/80">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold block text-white">Annual Reset</span>
                    <span>Referral discounts reset at the start of each swim year (September)</span>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1738] font-bold py-3 px-6 rounded-lg transition-colors text-center shadow-md"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-[#0A1738] hidden md:block relative">
              <div className="absolute inset-0 bg-[url('/images/swim-friends.jpg')] bg-cover bg-center opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738] to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#FFD700] text-[#0A1738] font-bold text-xl px-6 py-4 rounded-lg shadow-lg transform -rotate-3">
                  Refer & Save!
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h4 className="font-bold text-xl mb-4 text-[#0A1738]">Have Questions About Pricing?</h4>
          <p className="text-gray-600 mb-6">
            For billing inquiries, payment options, membership updates, or any questions, please contact us at:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+233256572222" className="flex items-center text-[#0A1738] hover:text-[#FFD700]">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +233 25 657 2222
            </a>
            <a href="mailto:ghanabluefins@gmail.com" className="flex items-center text-[#0A1738] hover:text-[#FFD700]">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ghanabluefins@gmail.com
            </a>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-[#0A1738] to-[#0A1738]/90 rounded-lg p-6 text-white">
            <h4 className="font-bold text-lg mb-3">Ready to Dive In?</h4>
            <p className="mb-4 text-white/80">
              Join the Ghana BlueFins Swim Club today and start your swimming journey with us!
            </p>
            <Link 
              href="/register" 
              className="inline-block bg-[#FFD700] text-[#0A1738] font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 