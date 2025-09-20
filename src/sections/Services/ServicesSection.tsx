import React from 'react';
import { Container, SectionHeader } from '../../components/ui';
import { siteData } from '../../data/site';
import { 
  Settings, 
  Database, 
  Zap, 
  GraduationCap 
} from 'lucide-react';

// Service icons mapping
const serviceIcons: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  'NetSuite Implementation & Configuration': Settings,
  'Data Migration & Validation': Database,
  'Finance Process Automation': Zap,
  'Training & Change Management': GraduationCap
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-primary-400/6 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            title="Services"
            subtitle="Expert NetSuite and finance automation consulting services"
          />
          
          {/* Services grid */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              {siteData.services.map((service) => {
                const IconComponent = serviceIcons[service.title] || Settings;
                
                return (
                  <div 
                    key={service.title} 
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
                  >
                    {/* Service Icon & Title */}
                    <div className="flex items-start mb-6">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary-600/20 rounded-xl border border-primary-500/30 mr-4 group-hover:bg-primary-600/30 transition-all duration-300">
                        <IconComponent size={28} className="text-primary-400 group-hover:text-primary-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary-200 transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-4 group-hover:bg-primary-400 transition-colors"></div>
                          <span className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to action section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
              <p className="text-gray-200 font-medium">
                Ready to optimize your finance systems? Let's discuss your needs.
              </p>
              <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};