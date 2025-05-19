'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    href, 
    children, 
    disabled,
    loading = false,
    fullWidth = false,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-[#0A1738] text-white hover:bg-[#0A1738]/90 focus:ring-[#0A1738]',
      secondary: 'bg-[#FFD700] text-[#0A1738] hover:bg-[#FFD700]/90 focus:ring-[#FFD700]',
      outline: 'border border-[#0A1738] bg-transparent text-[#0A1738] hover:bg-[#0A1738]/10',
      ghost: 'bg-transparent text-[#0A1738] hover:bg-[#0A1738]/10',
      link: 'bg-transparent text-[#0A1738] hover:underline p-0 h-auto'
    };
    
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-5 text-base',
      lg: 'h-12 px-6 text-lg'
    };

    const loadingClass = loading ? 'relative text-transparent transition-none hover:text-transparent' : '';
    const widthClass = fullWidth ? 'w-full' : '';

    const allClassNames = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      widthClass,
      loadingClass,
      className
    );

    const loadingSpinner = loading ? (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          className="animate-spin h-5 w-5 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ) : null;

    if (href) {
      return (
        <Link href={href} className={allClassNames}>
          {children}
        </Link>
      );
    }

    return (
      <button 
        ref={ref} 
        disabled={disabled || loading}
        className={allClassNames} 
        {...props}
      >
        {children}
        {loadingSpinner}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
