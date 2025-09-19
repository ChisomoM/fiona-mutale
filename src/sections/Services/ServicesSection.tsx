import React from 'react';
import { Container, SectionHeader } from '../../components/ui';
import { ServiceCard } from '../../components/domain/ServiceCard';
import { services } from '../../data/services';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary-600/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-primary-400/8 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            title="Services"
            subtitle="Transforming ideas into intuitive digital experiences through cutting-edge technology"
          />
          
          {/* Services grid with improved layout */}
          <div className="mt-20">
            {/* Featured services - first 3 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {services.slice(0, 3).map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  featured={index === 1} // Highlight the middle service (Web Development)
                />
              ))}
            </div>
            
            {/* Secondary services - remaining services */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.slice(3).map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                />
              ))}
            </div>
          </div>

          {/* Call to action section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-primary-600/10 to-primary-500/10 rounded-2xl border border-primary-500/20">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
              <p className="text-gray-300 font-medium">
                Ready to bring your project to life? Let's work together.
              </p>
              <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
