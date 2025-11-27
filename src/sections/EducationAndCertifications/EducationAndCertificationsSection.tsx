import { useState, useEffect } from 'react';
import { Container } from '../../components/ui/Container';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { getEducation, getCertifications } from '../../lib/adminService';
import { 
  GraduationCap, 
  Award 
} from 'lucide-react';

interface Education {
  degree: string;
  field: string;
  institution: string;
  dates?: string;
}

export function EducationAndCertificationsSection() {
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eduData, certData] = await Promise.all([
          getEducation(),
          getCertifications()
        ]);
        setEducation(eduData);
        setCertifications(certData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="education-certifications" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
        <Container>
          <div className="relative max-w-6xl mx-auto">
            <SectionHeader
              title="Education & Certifications"
              subtitle="Academic foundation and professional qualifications"
            />
            <div className="text-center text-gray-400">Loading...</div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="education-certifications" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary-400/6 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            title="Education & Certifications"
            subtitle="Academic foundation and professional qualifications"
          />
          
          {/* Education Section */}
          <div className="mt-16">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-xl border border-primary-500/30 mr-4">
                <GraduationCap size={24} className="text-primary-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-gray-400">Academic foundation in accounting and finance</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-200 transition-colors mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-primary-300 font-medium mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-gray-400">
                    {edu.field}
                  </div>
                  {edu.dates && (
                    <div className="text-sm text-gray-500 mt-2">
                      {edu.dates}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="mt-24">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-xl border border-primary-500/30 mr-4">
                <Award size={24} className="text-primary-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
                <p className="text-gray-400">Professional qualifications and achievements</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-3 group-hover:bg-primary-400 transition-colors"></div>
                    <span className="text-gray-200 group-hover:text-white font-medium transition-colors">
                      {cert}
                    </span>
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