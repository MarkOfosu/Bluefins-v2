import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  variant?: 'default' | 'primary' | 'secondary';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hoverEffect = false, variant = 'default' }, ref) => {
    // Determine card styling based on variant
    const variantStyles = {
      default: 'bg-white border-gray-200',
      primary: 'bg-primary-dark text-white border-primary-light',
      secondary: 'bg-white border-secondary/30'
    };
    
    const hoverStyles = hoverEffect 
      ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' +
        (variant === 'primary' ? ' hover:shadow-primary-dark/20' : 
         variant === 'secondary' ? ' hover:shadow-secondary/20' : '')
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden border shadow',
          variantStyles[variant],
          hoverStyles,
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
  accent?: boolean;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, accent = false }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-6', 
        accent ? 'border-b-2 border-secondary' : 'border-b border-gray-100',
        className
      )}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = 'CardHeader';

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn('p-6', className)}
    >
      {children}
    </div>
  )
);

CardContent.displayName = 'CardContent';

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, variant = 'default' }, ref) => {
    const variantStyles = {
      default: 'bg-gray-50 border-t border-gray-100',
      primary: 'bg-primary-light/10 border-t border-primary-light/20',
      secondary: 'bg-secondary/5 border-t border-secondary/20'
    };
    
    return (
      <div
        ref={ref}
        className={cn('p-6', variantStyles[variant], className)}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
