import React from 'react';
import { cn } from '../../lib/utils';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <span
        className={cn(
          'inline-flex items-center rounded-full font-medium transition-colors',
          {
            'bg-surface text-text-secondary border border-border': variant === 'default',
            'bg-primary-500/20 text-primary-300 border border-primary-500/30': variant === 'primary',
            'bg-neutral-700/50 text-neutral-300 border border-neutral-600/50': variant === 'secondary',
          },
          {
            'px-2 py-1 text-xs': size === 'sm',
            'px-3 py-1.5 text-sm': size === 'md',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Chip.displayName = 'Chip';
