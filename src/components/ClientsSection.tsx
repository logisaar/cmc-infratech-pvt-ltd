import { useEffect, useRef, useState } from 'react';
import { Star, Award, Handshake } from 'lucide-react';

const clients = [
  {
    name: 'Jindal Stainless Ltd',
    logo: 'JSL',
    industry: 'Steel & Stainless',
    color: 'bg-blue-500'
  },
  {
    name: 'JSW Cement Ltd',
    logo: 'JSW',
    industry: 'Cement Manufacturing',
    color: 'bg-green-500'
  },
  {
    name: 'Rashmi Metalliks Ltd',
    logo: 'RML',
    industry: 'Metallurgy',
    color: 'bg-purple-500'
  }
];

const testimonials = [
  {
    quote: "CMC Infratech has been our trusted partner for heavy equipment rental and industrial project work. Their professional approach, advanced machinery fleet, and commitment to safety have consistently exceeded our expectations.",
    client: "Jindal Stainless Limited",
    project: "Industrial Equipment & Construction Services"
  },
  {
    quote: "The team at CMC Infratech demonstrates exceptional expertise in material handling and O&M services. Their skilled workforce and timely delivery have made them our preferred construction partner.",
    client: "JSW Cement Limited", 
    project: "Material Handling & Construction Operations"
  },
  {
    quote: "CMC Infratech's commitment to statutory compliance and man-machine-environment balance sets them apart in the industry. Their quality work and adherence to timelines have been remarkable.",
    client: "Rashmi Metalliks Ltd",
    project: "Civil Construction & Equipment Rental"
  }
];

export const ClientsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-section-title text-primary mb-6">Our Trusted Clients</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are proud to serve leading industrial companies across Odisha, building lasting partnerships 
            through quality service and reliable performance.
          </p>
        </div>

        {/* Client Logos */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-20 h-20 ${client.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-xl">{client.logo}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.industry}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Trusted Partner</h3>
            <p className="text-muted-foreground">
              Preferred construction and equipment rental partner for major industrial companies.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality Assurance</h3>
            <p className="text-muted-foreground">
              Committed to delivering excellence in every project with highest quality standards.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Long-term Relationships</h3>
            <p className="text-muted-foreground">
              Building lasting partnerships through reliability, trust, and exceptional service.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-foreground">{testimonial.client}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};