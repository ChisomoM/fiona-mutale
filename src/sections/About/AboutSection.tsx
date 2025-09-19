import React from 'react';
import { Container } from '../../components/ui';
import { CVDownloadButton } from '../../components/domain';
import { siteData } from '../../data/site';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, transparent, var(--color-surface), var(--color-background))'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-20 h-20 rotate-45 rounded-lg"
          style={{ backgroundColor: 'rgba(244, 114, 182, 0.1)' }}
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-16 h-16 rounded-full"
          style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-8 h-8 rotate-12 rounded-lg"
          style={{ backgroundColor: 'rgba(249, 168, 212, 0.2)' }}
        ></div>
      </div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Empty/minimal as per design */}
          <div className="hidden lg:block">
            {/* Intentionally minimal/empty to match the design */}
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Main heading */}
            <h2 
              className="text-2xl lg:text-3xl font-bold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              About me
            </h2>
            
            {/* Main content */}
            <div className="space-y-6">
              <p 
                className="text-lg leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Welcome to my portfolio! I'm {siteData.name}, a passionate software developer 
                dedicated to creating seamless and visually engaging digital experiences. With 
                2 years of experience, I specialize in designing intuitive interfaces that enhance 
                usability and user satisfaction.
              </p>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                My skills include wireframing, prototyping, and user research, ensuring that 
                each design is both aesthetically pleasing and functionally efficient. I have 
                worked on diverse projects, including mobile apps, web platforms, and 
                interactive dashboards, always focusing on user-centered solutions that drive engagement.
              </p>
              
              {/* Highlighted quote section */}
              <div 
                className="flex items-start space-x-4 p-6 rounded-2xl mt-8"
                style={{ 
                  background: 'linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(244, 114, 182, 0.2))',
                  border: `1px solid var(--color-primary-600)`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p 
                  className="font-medium text-lg leading-relaxed"
                  style={{ color: 'var(--color-primary-200)' }}
                >
                  I am deeply committed to my work, investing creativity and precision in 
                  every project to ensure a unique and effective user experience.
                </p>
              </div>
              
              {/* CV Download button */}
              <div className="pt-6">
                <div
                  className="inline-block font-medium rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to right, var(--color-primary-600), var(--color-primary-500))',
                    boxShadow: 'var(--shadow-lg)',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, var(--color-primary-700), var(--color-primary-600))';
                    e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, var(--color-primary-600), var(--color-primary-500))';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                >
                  <CVDownloadButton
                    cvPath={siteData.cvPath}
                    variant="primary"
                    size="lg"
                    showFileSize={true}
                    className="bg-transparent border-none text-inherit shadow-none p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
