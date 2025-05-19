'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accentColor?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  decorative?: boolean;
  animation?: boolean;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ 
    title, 
    subtitle, 
    centered = true, 
    accentColor = 'bg-[#FFD700]',
    className,
    titleClassName,
    subtitleClassName,
    decorative = true,
    animation = true,
  }, ref) => {
    const Wrapper = animation ? motion.div : 'div';
    const animationProps = animation ? {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-100px' },
      transition: { duration: 0.7 }
    } : {};

    return (
      <Wrapper
        ref={ref}
        className={cn(
          'max-w-3xl mb-12',
          centered && 'mx-auto text-center',
          className
        )}
        {...animationProps}
      >
        <div className="inline-block">
          <h2 className={cn(
            'text-3xl md:text-4xl xl:text-5xl font-bold mb-4',
            titleClassName
          )}>
            {title}
          </h2>
          {decorative && (
            <div className="relative">
              <div className={cn('h-1 w-32 mb-6', accentColor, centered && 'mx-auto')}></div>
            </div>
          )}
        </div>
        
        {subtitle && (
          <p className={cn(
            'text-lg text-gray-700 max-w-3xl',
            centered && 'mx-auto',
            subtitleClassName
          )}>
            {subtitle}
          </p>
        )}
      </Wrapper>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export { SectionHeader };
