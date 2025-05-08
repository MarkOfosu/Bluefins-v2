// src/app/components/Programs.tsx
import Link from 'next/link';

interface ProgramProps {
  title: string;
  description: string;
  icon: string;
  ageGroup: string;
  schedule: string;
  link: string;
  color: string;
}

const ProgramCard = ({ title, description, icon, ageGroup, schedule, link, color }: ProgramProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 group hover:-translate-y-1`}>
      <div className={`${color} text-white p-4 flex items-center justify-between group-hover:bg-[#0A1738]`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-3xl">{icon}</div>
      </div>

      <div className="p-6">
        <div className="mb-4 text-sm py-1 px-3 rounded-full bg-[#0A1738]/10 text-[#0A1738] inline-block">
          {ageGroup}
        </div>
        
        <p className="text-gray-700 mb-5">
          {description}
        </p>

        <div className="bg-[#0A1738]/5 p-3 rounded-lg mb-5">
          <h4 className="font-semibold text-[#0A1738] mb-1 text-sm">SCHEDULE:</h4>
          <p className="text-gray-700 text-sm">{schedule}</p>
        </div>
        
        <Link 
          href={link}
          className="inline-block w-full bg-[#0A1738] hover:bg-[#0A1738]/90 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center group-hover:bg-[#FFD700] group-hover:text-[#0A1738]"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Learn-to-Swim",
      description: "A comprehensive program introducing swimming fundamentals and water safety for beginners of all ages.",
      icon: "🏊",
      ageGroup: "Ages 4 and up",
      schedule: "Mon, Wed, Fri: 3:30PM - 4:30PM",
      link: "/programs/learn-to-swim",
      color: "bg-blue-600"
    },
    {
      title: "Mini BlueFins",
      description: "Early aquatic development for infants and toddlers, focusing on water comfort and foundational skills.",
      icon: "👶",
      ageGroup: "6 months to 3 years",
      schedule: "Tue, Thu: 10:00AM - 10:45AM",
      link: "/programs/mini-bluefins",
      color: "bg-teal-600"
    },
    {
      title: "Competitive Team",
      description: "Advanced training for serious swimmers looking to excel in competitions at local and national levels.",
      icon: "🏆",
      ageGroup: "Ages 7 to 18",
      schedule: "Mon-Fri: 5:00PM - 7:00PM",
      link: "/programs/competitive-team",
      color: "bg-indigo-600"
    },
    {
      title: "Masters Swimming",
      description: "Adult fitness swimming program for improved technique, endurance and optional competitive opportunities.",
      icon: "🏅",
      ageGroup: "Ages 18 and up",
      schedule: "Mon, Wed, Fri: 6:00AM - 7:30AM",
      link: "/programs/masters-team",
      color: "bg-purple-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1738]">Our Swimming Programs</h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-700">
            From infants to adults, beginners to competitive athletes, we offer programs 
            designed to meet the needs of swimmers at every level of development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
              ageGroup={program.ageGroup}
              schedule={program.schedule}
              link={program.link}
              color={program.color}
            />
          ))}
        </div>

        <div className="mt-16 bg-[#0A1738] rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-4">Private Lessons</h3>
              <p className="text-white/80 mb-6">
                Need personalized attention? Our one-on-one lessons are tailored to your specific needs 
                and schedule, offering accelerated progress and focused skill development.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start text-white/80">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start text-white/80">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized training plans</span>
                </li>
                <li className="flex items-start text-white/80">
                  <svg className="h-5 w-5 text-[#FFD700] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accelerated progress</span>
                </li>
              </ul>
              <Link
                href="/programs/private-lessons"
                className="inline-block bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1738] font-bold py-3 px-6 rounded-lg transition-colors text-center shadow-md"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-[#0A1738] hidden md:block relative">
              <div className="absolute inset-0 bg-[url('/images/image6.jpg')] bg-cover bg-center opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1738] to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#FFD700] text-[#0A1738] font-bold text-xl px-6 py-4 rounded-lg shadow-lg transform -rotate-3">
                  One-on-One Instruction
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link
            href="/register"
            className="inline-block bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A1738] font-bold py-3 px-8 rounded-lg transition-colors shadow-md mx-auto"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;