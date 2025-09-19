import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, centered = true, ...props }, ref) => {
    return (
      <div
        className={cn(
          'space-y-4',
          {
            'text-center': centered,
            'text-left': !centered,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';
