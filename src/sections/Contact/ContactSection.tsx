import React from 'react';
import { Container, SectionHeader } from '../../components/ui';
import { ContactForm } from '../../components/domain/ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-surface/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Let's Create Something Amazing Together"
            subtitle="Ready to bring your ideas to life? Let's discuss your next project"
          />
          
          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
