'use client';

import { useRef } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { motion, useInView } from 'framer-motion';

interface AchievementItemProps {
  count: string;
  title: string;
  delay: number;
}

const AchievementItem = ({ count, title, delay }: AchievementItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: delay * 0.2 }}
      className="flex flex-col items-center p-6"
    >
      <div className="text-5xl sm:text-6xl font-bold text-[#FFD700] mb-2">{count}</div>
      <div className="text-center text-white font-medium">{title}</div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const achievements = [
    { count: '900+', title: 'Swimmers Trained' },
    { count: '100+', title: 'National Medals' },
    // { count: '12', title: 'International Events' },
    { count: '100%', title: 'Safety Record' },
    { count: '95%', title: 'Parent Satisfaction' },
  ];

  return (
    <section className="relative bg-[#0A1738] py-20">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader
          title="Our Achievements"
          subtitle="Building a legacy of swimming excellence in Ghana"
          centered={true}
          accentColor="bg-[#FFD700]"
          titleClassName="text-white"
          subtitleClassName="text-white/80"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementItem 
              key={index}
              count={achievement.count}
              title={achievement.title}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
