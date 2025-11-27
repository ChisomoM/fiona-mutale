import React, { useState, useEffect } from 'react';
import { Container, SectionHeader } from '../../components/ui';
import { getSkillCategories } from '../../lib/adminService';
import { 
  Calculator, 
  Database, 
  BarChart3, 
  Users,
  // TrendingUp,
  // FileSpreadsheet
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  order: number;
}

// Skill category icons mapping
const categoryIcons: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  'Core Finance & NetSuite': Calculator,
  'Technical Skills': Database,
  'Business & Leadership': Users
};

export const SkillsSection: React.FC = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkillCategories();
        setSkillCategories(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
        <Container>
          <div className="relative max-w-6xl mx-auto">
            <SectionHeader
              title="Skills"
              subtitle="Technical proficiency in NetSuite, finance systems, and business analysis"
            />
            <div className="text-center text-gray-400">Loading...</div>
          </div>
        </Container>
      </section>
    );
  }
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary-400/6 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            title="Skills"
            subtitle="Technical proficiency in NetSuite, finance systems, and business analysis"
          />

          {/* Skills Categories */}
          <div className="mt-16 space-y-12">
            {skillCategories.map((category) => {
              const IconComponent = categoryIcons[category.name] || BarChart3;
              
              return (
                <div key={category.id} className="relative">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-xl border border-primary-500/30 mr-4">
                      <IconComponent size={24} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:bg-primary-400 transition-colors" />
                          <span className="text-gray-200 group-hover:text-white font-medium transition-colors">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Achievements/Stats */}
          {/* <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <TrendingUp size={32} className="text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <Database size={32} className="text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Systems Implementations</div>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                <FileSpreadsheet size={32} className="text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">Multiple</div>
              <div className="text-gray-400">NetSuite Certifications</div>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};