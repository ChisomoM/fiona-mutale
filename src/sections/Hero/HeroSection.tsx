import React, { useState, useEffect } from 'react';
// import { CVDownloadButton } from '../../components/domain';
import { getSiteMetadata } from '../../lib/adminService';
import { siteData } from '../../data/site';
import { seedDatabase } from '../../lib/seed';


export const HeroSection: React.FC = () => {
  const [metadata, setMetadata] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const data = await getSiteMetadata();
        setMetadata(data);
      } catch (error) {
        console.error('Error loading metadata:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMetadata();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="text-center text-gray-400">Loading...</div>
      </section>
    );
  }

  if (!metadata) {
    return null;
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">

      <div 
        className="absolute pointer-events-none z-0"
        style={{
          bottom: '-50%',
          right: '-50%',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.4) 0%, rgba(219, 39, 119, 0.2) 30%, transparent 70%)'
        }}
      />
      
      {/* Additional subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl"
          style={{ backgroundColor: 'rgba(236, 72, 153, 0.05)' }}
        />
        <div 
          className="absolute bottom-1/2 right-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(219, 39, 119, 0.1)' }}
        />
      </div>

      <div className="relative pt-20 pb-20 w-full z-10">
        <div className="max-w-6xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-left space-y-8 lg:-mr-20 xl:-mr-28">
            {/* Welcome text */}
            <div className="space-y-4">
            <p 
              className="font-medium tracking-widest cursor-pointer uppercase text-xs hover:"
              style={{ color: 'var(--color-primary-300)' }}
              onClick={ async ()=> {
                try {
                  await seedDatabase();
                  alert("Seeding successful")
                } catch (e) {
                  alert(`seeding failed! ${e}`)
                }
                
              }}
              
            >
              Welcome to my world ✨
            </p>
            <div className="space-y-2">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Hi, I'm{' '}
                <span style={{ color: 'var(--color-text-primary)' }}>
                  {metadata.name.split(' ')[0]}
                </span>
              </h1>
              <h2 className="text-2xl max-w-5xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  {metadata.title.split('|')[0].trim()}
                </span>
              </h2>
            </div>
          </div>

          {/* Bio */}
          {/* <p 
            className="text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {metadata.profile.slice(0, 150)}...
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* <Button
              size="lg"
              variant="primary"
              onClick={() => scrollToSection('projects')}
              className="group bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-3 font-semibold text-base shadow-lg border-none w-fit"
            >
              <span>My Projects</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button> */}
            <button
              onClick={() => scrollToSection('about-me')}
              className="group border border-pink-500 text-pink-300 hover:bg-pink-500 hover:text-white rounded-full px-8 py-3 font-semibold text-base transition-all duration-300 w-fit flex items-center"
            >
              <span>Learn more about me</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            {/* <CVDownloadButton
              cvPath={siteData.cvPath}
              variant="outline"
              size="lg"
              showFileSize={true}
              className="border border-pink-500 text-pink-300 hover:bg-pink-500 hover:text-white rounded-full px-8 py-3 font-semibold text-base transition-all duration-300 w-fit"
            /> */}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-6">
            <a
              href={`mailto:${metadata.email}`}
              className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                color: 'var(--color-text-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)'}
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={metadata.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                color: 'var(--color-text-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)'}
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                color: 'var(--color-text-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)'}
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`mailto:${metadata.email}`}
              className="w-14 h-14 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                color: 'var(--color-text-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)'}
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a> */}
          </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <img 
                src="/duoi.png" 
                alt="Fiona M Mutale"
                className="w-full max-w-lg rounded-3xl"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(236, 72, 153, 0.2)) drop-shadow(0 0 80px rgba(219, 39, 119, 0.1))'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - positioned at bottom center */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: 'var(--color-surface-elevated)',
              color: 'var(--color-text-primary)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)'}
            aria-label="Scroll to about section"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
