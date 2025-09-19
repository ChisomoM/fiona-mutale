import React from 'react';
import { Container, SectionHeader, Chip, Card } from '../../components/ui';
import { skills } from '../../data/skills';
import { 
  Smartphone, 
  Globe, 
  Server, 
  Database, 
  BarChart3, 
  Palette, 
  Video, 
  Users 
} from 'lucide-react';

// Skill category icons mapping using Lucide icons
const categoryIcons: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  mobileAppDevelopment: Smartphone,
  webDevelopment: Globe,
  backendDevelopment: Server,
  databaseManagement: Database,
  dataAnalysis: BarChart3,
  graphicDesign: Palette,
  videoEditing: Video,
  socialMediaManagement: Users
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rotate-45 rounded-2xl blur-sm"></div>
        <div className="absolute bottom-40 left-16 w-20 h-20 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-primary-300/20 rotate-12 rounded-xl blur-sm"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rotate-45 rounded-lg"></div>
      </div>
      
      <Container>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Skills & Technologies"
            subtitle="The tools and technologies I use to bring ideas to life"
          />
          
          <div className="mt-20 space-y-16">
            {/* Technical Skills */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Technical Expertise
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills.technical).map(([category, items]) => {
                  const IconComponent = categoryIcons[category];
                  
                  return (
                    <Card 
                      key={category}
                      variant="default"
                      className="group relative p-8 text-left hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                    >
                      {/* Subtle animated background effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-400/5 rounded-xl" />
                      </div>

                      <div className="relative space-y-6">
                        {/* Icon section with improved design */}
                        <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 bg-gradient-to-br from-surface-elevated to-surface/80 text-primary-400 group-hover:from-primary-500/20 group-hover:to-primary-600/10">
                          {IconComponent ? (
                            <IconComponent size={28} className="transition-transform duration-300" />
                          ) : (
                            <div className="text-2xl font-bold">
                              {category.charAt(0).toUpperCase()}
                            </div>
                          )}
                          
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary-500/10 blur-lg -z-10" />
                        </div>
                        
                        {/* Content section */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold transition-colors duration-300 text-white group-hover:text-primary-300">
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                          </h4>
                          
                          {/* Skills chips */}
                          <div className="flex flex-wrap gap-2">
                            {items.map((skill: string) => (
                              <Chip 
                                key={skill} 
                                variant="primary" 
                                className="hover:bg-primary-400/30 hover:border-primary-400/50 transition-all duration-200 cursor-default text-xs"
                              >
                                {skill}
                              </Chip>
                            ))}
                          </div>
                        </div>

                        {/* Decorative corner elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full" />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Soft Skills
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="bg-gradient-to-br from-surface/60 via-surface-elevated/40 to-surface/30 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 relative overflow-hidden">
                {/* Decorative elements for soft skills card */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-300/10 to-purple-500/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10 flex flex-wrap justify-center gap-4">
                  {skills.soft.map((skill: string, index: number) => (
                    <Chip 
                      key={skill} 
                      variant="secondary" 
                      size="md"
                      className="hover:bg-purple-500/20 hover:border-purple-400/50 hover:text-purple-200 transition-all duration-200 cursor-default hover:scale-105 transform"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              <div className="text-center p-6 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-2xl border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-2">8+</div>
                <div className="text-sm text-gray-400 font-medium">Categories</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2">25+</div>
                <div className="text-sm text-gray-400 font-medium">Technologies</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">7</div>
                <div className="text-sm text-gray-400 font-medium">Soft Skills</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-2">2+</div>
                <div className="text-sm text-gray-400 font-medium">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
