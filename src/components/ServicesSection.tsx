import { useEffect, useRef, useState } from 'react';
import { Truck, Settings, Building } from 'lucide-react';
import excavatorImage from '@/assets/excavator-service.jpg';
import craneImage from '@/assets/crane-service.jpg';
import civilImage from '@/assets/civil-construction.jpg';

const services = [
  {
    title: 'Heavy Equipment Rental Service',
    description: 'Comprehensive fleet of modern construction equipment including excavators, dumpers, graders, dozers, compactors, wheel loaders, backhoe loaders, and cranes. All equipment maintained to highest standards with experienced operators.',
    icon: Truck,
    image: excavatorImage,
    features: ['Modern Equipment Fleet', 'Experienced Operators', '24/7 Support', 'Flexible Rental Terms']
  },
  {
    title: 'O&M and Material Handling Service', 
    description: 'Operation and Maintenance services with efficient material handling solutions. We ensure smooth operations and optimal material flow for industrial projects with our skilled workforce and advanced equipment.',
    icon: Settings,
    image: craneImage,
    features: ['Operation & Maintenance', 'Material Handling', 'Process Optimization', 'Industrial Support']
  },
  {
    title: 'Civil Construction & Industrial Project Work',
    description: 'End-to-end civil construction services for industrial and commercial projects. From foundation to completion, we deliver quality construction with attention to detail and adherence to timelines.',
    icon: Building,
    image: civilImage,
    features: ['Complete Project Management', 'Quality Construction', 'Industrial Expertise', 'Timely Delivery']
  }
];

export const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-section-title text-primary mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and infrastructure services tailored to meet your project requirements 
            with excellence and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center fade-in-up ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-subsection-title text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-2xl shadow-medium w-full group-hover:shadow-strong transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl group-hover:bg-primary/5 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need Custom Construction Solutions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We understand that every project is unique. Contact us to discuss your specific requirements 
              and let us create a tailored solution for your construction needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};