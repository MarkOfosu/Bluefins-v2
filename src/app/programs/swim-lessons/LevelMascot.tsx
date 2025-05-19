'use client';

import React from 'react';
import Image from 'next/image';

type LevelMascotProps = {
  mascot: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const LevelMascot: React.FC<LevelMascotProps> = ({ mascot, size = 'md', className = '' }) => {
  const getMascotSrc = () => {
    const mascots = {
      jellyfish: '/image/mascots/jellyfish.jpg',
      anemone: '/image/mascots/anemone.jpg',
      clams: '/image/mascots/clam.jpg',
      starfish: '/image/mascots/starfish.jpg',
      hermitcrab: '/image/mascots/hermitCrab.jpg',
      dolphin: '/image/mascots/dolphin.jpg',
      rockfish: '/image/mascots/rockFish.jpg',
      squid: '/image/mascots/squid.png',
      seahorse: '/image/mascots/seaHorse.jpg',
      octopus: '/image/mascots/octopus.jpg',
      clownfish: '/image/mascots/clownfish.jpg',
      seaturtle: '/image/mascots/seaTurtle.png',
      wahoo: '/image/mascots/wahoo.png',
      stingray: '/image/mascots/stingray.jpg',
      otter: '/image/mascots/otter.png',
    } as const;
    
    return mascots[mascot.toLowerCase() as keyof typeof mascots] || '/image/mascots/default.jpg';
  };
  
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <Image
        src={getMascotSrc()}
        alt={`${mascot} mascot`}
        fill
        className="object-contain"
      />
    </div>
  );
};

export default LevelMascot;