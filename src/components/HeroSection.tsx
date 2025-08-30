import { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';
import cmcLogo from '@/assets/cmc-logo.png';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="CMC Infratech Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
          {/* Company Logo */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-3">
              <img 
                src={cmcLogo}
                alt="CMC Infratech Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-hero mb-6">
            <span className="block mb-2">CMC Infratech</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-secondary">Pvt. Ltd.</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            "We understand your needs on construction"
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm sm:text-base text-white/80">Skilled Workforce</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">120+</div>
              <div className="text-sm sm:text-base text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">2013</div>
              <div className="text-sm sm:text-base text-white/80">Since Established</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="btn-hero group"
            >
              <Phone size={20} className="mr-2" />
              Contact Us Today
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};