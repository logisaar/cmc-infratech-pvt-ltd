import { useEffect, useRef, useState } from 'react';
import { Wrench } from 'lucide-react';
import excavatorImage from '@/assets/excavator-service.jpg';
import wheelLoaderImage from '@/assets/wheel-loader.jpg';
import bulldozerImage from '@/assets/bulldozer.jpg';
import dumpTruckImage from '@/assets/dump-truck.jpg';
import graderImage from '@/assets/grader.jpg';
import compactorImage from '@/assets/compactor.jpg';
import craneImage from '@/assets/crane-service.jpg';

const machinery = [
  {
    name: 'Excavators',
    image: excavatorImage,
    description: 'Heavy-duty excavators for digging, demolition, and material handling'
  },
  {
    name: 'Wheel Loaders',
    image: wheelLoaderImage,
    description: 'Versatile loaders for material handling and loading operations'
  },
  {
    name: 'Bulldozers',
    image: bulldozerImage,
    description: 'Powerful dozers for earthmoving and site preparation'
  },
  {
    name: 'Dump Trucks',
    image: dumpTruckImage,
    description: 'Heavy-duty dumpers for material transportation'
  },
  {
    name: 'Graders',
    image: graderImage,
    description: 'Motor graders for road construction and surface preparation'
  },
  {
    name: 'Compactors',
    image: compactorImage,
    description: 'Soil and asphalt compactors for ground preparation'
  },
  {
    name: 'Cranes',
    image: craneImage,
    description: 'Mobile and tower cranes for lifting operations'
  },
  {
    name: 'Backhoe Loaders',
    image: excavatorImage,
    description: 'Multi-purpose machines for digging and loading'
  }
];

export const MachinerySection = () => {
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
    <section id="machinery" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-section-title text-primary mb-6">Our Machinery Fleet</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            State-of-the-art construction equipment maintained to the highest standards, 
            operated by skilled professionals to ensure maximum efficiency and safety.
          </p>
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {machinery.map((machine, index) => (
            <div
              key={index}
              className={`project-card fade-in-up ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={machine.image} 
                  alt={machine.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{machine.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{machine.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Well-Maintained Fleet</h3>
            <p className="text-muted-foreground">
              Regular maintenance and servicing ensures optimal performance and reliability of all equipment.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary">24/7</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Round-the-Clock Support</h3>
            <p className="text-muted-foreground">
              Our technical support team is available 24/7 to ensure continuous operation of your projects.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">500+</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Skilled Operators</h3>
            <p className="text-muted-foreground">
              Experienced and certified operators ensure safe and efficient operation of all machinery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};