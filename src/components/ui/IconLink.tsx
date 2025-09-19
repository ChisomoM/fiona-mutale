import React from 'react';
import { cn } from '../../lib/utils';

export interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <a
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background',
          {
            'bg-surface text-text-secondary hover:bg-surface-elevated hover:text-white border border-border': variant === 'default',
            'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl': variant === 'primary',
            'text-text-secondary hover:text-white hover:bg-surface': variant === 'ghost',
          },
          {
            'w-8 h-8 text-sm': size === 'sm',
            'w-10 h-10 text-base': size === 'md',
            'w-12 h-12 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);

IconLink.displayName = 'IconLink';
