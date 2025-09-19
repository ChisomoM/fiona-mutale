import React from 'react';
import { Card } from '../ui';
import { 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  BarChart3, 
  Palette, 
  Video, 
  Users 
} from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  featured?: boolean;
}

const iconMap = {
  Smartphone,
  Globe,
  Server,
  Database,
  BarChart3,
  Palette,
  Video,
  Users,
} as const;

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  featured = false,
}) => {
  // Get the icon component from our icon map
  const IconComponent = icon ? iconMap[icon as keyof typeof iconMap] : null;

  return (
    <Card 
      variant={featured ? "highlighted" : "default"}
      className={`group relative p-8 text-left hover:scale-[1.02] transition-all duration-500 ${
        featured ? 'ring-2 ring-primary-500/50 shadow-2xl shadow-primary-500/20' : 'hover:shadow-xl hover:shadow-primary-500/10'
      }`}
    >
      {/* Background gradient overlay for featured cards */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-primary-500/5 to-transparent rounded-xl" />
      )}
      
      {/* Subtle animated background effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-400/5 rounded-xl" />
      </div>

      <div className="relative space-y-6">
        {/* Icon section with improved design */}
        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 group-hover:scale-110 ${
          featured 
            ? 'bg-gradient-to-br from-primary-500/30 to-primary-600/20 text-primary-300 shadow-lg shadow-primary-500/25' 
            : 'bg-gradient-to-br from-surface-elevated to-surface/80 text-primary-400 group-hover:from-primary-500/20 group-hover:to-primary-600/10'
        }`}>
          {IconComponent ? (
            <IconComponent size={28} className="transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <div className="text-2xl font-bold">
              {title.charAt(0)}
            </div>
          )}
          
          {/* Subtle glow effect */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            featured ? 'bg-primary-500/20' : 'bg-primary-500/10'
          } blur-lg -z-10`} />
        </div>
        
        {/* Content section */}
        <div className="space-y-4">
          <h3 className={`text-xl font-bold transition-colors duration-300 ${
            featured 
              ? 'text-white group-hover:text-primary-300' 
              : 'text-white group-hover:text-primary-300'
          }`}>
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full" />
        </div>
      </div>
    </Card>
  );
};
