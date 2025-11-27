import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme';
import { AppShell } from './components/layout';
import { 
  HeroSection, 
  AboutSection, 
  SkillsSection,
  ServicesSection,
  ExperienceSection,
  EducationAndCertificationsSection,
  // ProjectsSection, 
  ContactSection 
} from './sections';
import { 
  AdminDashboard, 
  ServicesAdmin, 
  ExperienceAdmin, 
  EducationAdmin, 
  SkillsAdmin, 
  MetadataAdmin 
} from './pages/admin';
import './App.css';

function MainSite() {
  return (
    <AppShell>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationAndCertificationsSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </AppShell>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/secret-section" element={<AdminDashboard />} />
          <Route path="/secret-section/services" element={<ServicesAdmin />} />
          <Route path="/secret-section/experience" element={<ExperienceAdmin />} />
          <Route path="/secret-section/education" element={<EducationAdmin />} />
          <Route path="/secret-section/skills" element={<SkillsAdmin />} />
          <Route path="/secret-section/metadata" element={<MetadataAdmin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
