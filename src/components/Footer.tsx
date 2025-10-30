import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Machinery', href: '#machinery' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Heavy Equipment Rental',
    'O&M Services',
    'Civil Construction',
    'Industrial Projects',
    'Material Handling'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
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
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">CMC Infratech</h3>
                  <p className="text-primary-foreground/80">Pvt. Ltd.</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-md">
                Leading construction and infrastructure company in Odisha since 2013. 
                We deliver excellence in construction, equipment rental, and industrial services.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-secondary" />
                  <span className="text-sm">Odisha, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-secondary" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-secondary" />
                  <span className="text-sm">info@cmcinfratech.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-primary-foreground/80 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p style={{textAlign: 'left', fontSize: '14px', color: '#777', marginTop: '20px'}} className="w-full">
              © 2025 All Rights Reserved | Made by{' '}
              <a href="https://logisaar.in" target="_blank" style={{color: '#007bff', textDecoration: 'none'}}>
                Logisaar
              </a>
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/80">Follow Us:</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/20 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/20 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/20 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};