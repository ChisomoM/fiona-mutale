import React from 'react';
import { Container, Button } from '../ui';
import { CVDownloadButton } from '../domain';
import { siteData } from '../../data/site';

export interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'home' }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
        { id: 'about-me', label: 'About Me' },
    { id: 'services', label: 'Expertise' },
     { id: 'experience', label: 'Experience' },
    { id: 'education-certifications', label: 'Education & Certifications' },
    // { id: 'projects', label: 'My Work' },
    // { id: 'about', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'var(--color-surface)' }}>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 text-xl font-bold transition-colors"
            style={{ 
              color: 'var(--color-text-primary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-400)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ 
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {siteData.initials}
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-all duration-300 relative"
                style={{
                  color: activeSection === item.id ? 'var(--color-primary-400)' : 'var(--color-text-secondary)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-400)'}
                onMouseLeave={(e) => e.currentTarget.style.color = activeSection === item.id ? 'var(--color-primary-400)' : 'var(--color-text-secondary)'}
              >
                {item.label}
                {activeSection === item.id && (
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary-400)' }}
                  ></div>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <div
              className="px-4 py-2 rounded-full font-medium transition-all duration-300"
              style={{
                background: 'var(--gradient-surface)',
                color: 'var(--color-text-primary)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <CVDownloadButton
                cvPath={siteData.cvPath}
                variant="ghost"
                size="sm"
                className="text-inherit bg-transparent border-none shadow-none p-0"
              >
                <span>📄 CV</span>
              </CVDownloadButton>
            </div>
            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 rounded-full font-medium transition-all duration-300"
              style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              Contact
            </Button>
            
            {/* Mobile Menu Button - placeholder for now */}
            <button aria-label="Toggle mobile menu" className="md:hidden p-2 text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
