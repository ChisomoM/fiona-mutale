import React from 'react';
import { Container, IconLink } from '../ui';
import { siteData } from '../../data/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <Container>
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {siteData.initials}
                </div>
                <span className="text-lg font-semibold text-white">{siteData.name}</span>
              </div>
              <p className="text-text-secondary text-sm max-w-xs">
                {siteData.title}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>{siteData.email}</p>
                <p>{siteData.phone}</p>
                <p>{siteData.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Connect</h3>
              <div className="flex space-x-3">
                <IconLink
                  href={siteData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </IconLink>
                <IconLink
                  href={`mailto:${siteData.email}`}
                  variant="ghost"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-1.9.85-3.95 1.425-6.1 1.683 2.19-1.31 3.87-3.38 4.66-5.85-2.05 1.22-4.32 2.1-6.73 2.57C14.77.75 12.93-.02 10.87-.02c-3.27 0-5.92 2.65-5.92 5.92 0 .46.05.91.15 1.34C7.69 6.96 4.07 5.16 1.64 2.16c-.51.87-.8 1.88-.8 2.96 0 2.05 1.04 3.86 2.62 4.92-.97-.03-1.88-.3-2.68-.74v.07c0 2.87 2.04 5.26 4.75 5.81-.5.14-1.02.21-1.56.21-.38 0-.75-.04-1.11-.11.75 2.34 2.93 4.04 5.51 4.09-2.02 1.58-4.57 2.52-7.34 2.52-.48 0-.95-.03-1.41-.08C2.61 22.74 5.71 23.76 9.07 23.76c10.9 0 16.85-9.03 16.85-16.85 0-.26 0-.51-.01-.76C22.17 8.85 23.25 6.79 24 4.557z"/>
                  </svg>
                </IconLink>
                <IconLink
                  href={`mailto:${siteData.email}`}
                  variant="ghost"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </IconLink>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-secondary">
            <p>&copy; {currentYear} {siteData.name}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
