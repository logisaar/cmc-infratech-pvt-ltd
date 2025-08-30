import { DesktopNavigation } from '@/components/DesktopNavigation';
import { BottomNavigation } from '@/components/BottomNavigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { MachinerySection } from '@/components/MachinerySection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ClientsSection } from '@/components/ClientsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <DesktopNavigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MachinerySection />
        <ProjectsSection />
        <ClientsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;