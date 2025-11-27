import React, { useState, useEffect } from 'react';
import { Container } from '../../components/ui/Container';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { getExperience } from '../../lib/adminService';
import { 
  Briefcase
} from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  companySubtitle?: string;
  dates: string;
  duration: string;
  location?: string;
  description: string;
  skills?: string[];
}

export function ExperienceSection() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await getExperience();
        setExperience(data);
      } catch (error) {
        console.error('Error fetching experience:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
        <Container>
          <div className="relative max-w-6xl mx-auto">
            <SectionHeader
              title="Experience"
              subtitle="A decade of expertise in finance systems and automation"
            />
            <div className="text-center text-gray-400">Loading...</div>
          </div>
        </Container>
      </section>
    );
  }
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary-400/6 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            title="Experience"
            subtitle="A decade of expertise in finance systems and automation"
          />
          
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300"></div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-900 shadow-lg group-hover:bg-primary-400 transition-colors duration-300 z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 w-full group-hover:bg-white/10 group-hover:border-primary-500/30 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Briefcase size={20} className="text-primary-400 mr-2" />
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-200 transition-colors">
                            {job.role}
                          </h3>
                        </div>
                        <div className="text-primary-300 font-semibold mb-1">
                          {job.company}
                        </div>
                        {job.companySubtitle && (
                          <div className="text-sm text-gray-400 mb-2">
                            {job.companySubtitle}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-400 mt-2 lg:mt-0 lg:text-right">
                        <div className="font-medium text-primary-300">{job.dates}</div>
                        <div>{job.duration}</div>
                        {job.location && <div>{job.location}</div>}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {job.description}
                    </p>
                    
                    {job.skills && job.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-primary-600/20 border border-primary-500/30 text-primary-200 text-sm rounded-full hover:bg-primary-600/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}