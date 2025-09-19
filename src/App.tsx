import { ThemeProvider } from './theme';
import { AppShell } from './components/layout';
import { 
  HeroSection, 
  AboutSection, 
  SkillsSection,
  ServicesSection, 
  // ProjectsSection, 
  ContactSection 
} from './sections';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AppShell>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        {/* <ProjectsSection /> */}
        <ContactSection />
      </AppShell>
    </ThemeProvider>
  );
}

export default App
