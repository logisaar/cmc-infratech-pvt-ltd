import { useEffect, useRef, useState } from 'react';
import { Building, Users, Clock, CheckCircle } from 'lucide-react';
import projectImage from '@/assets/project-1.jpg';
import civilImage from '@/assets/civil-construction.jpg';
import companyImage from '@/assets/company-building.jpg';

const stats = [
  { icon: CheckCircle, value: '120+', label: 'Projects Completed Across Odisha', color: 'text-primary' },
  { icon: Users, value: '500+', label: 'Skilled Professionals & Engineers', color: 'text-secondary' },
  { icon: Clock, value: '11+', label: 'Years of Excellence', color: 'text-primary' },
  { icon: Building, value: '3', label: 'Core Service Areas', color: 'text-secondary' }
];

const projects = [
  {
    title: 'Industrial Complex Development',
    category: 'Industrial Construction',
    image: projectImage,
    status: 'Completed'
  },
  {
    title: 'Infrastructure Development Project',
    category: 'Civil Engineering',
    image: civilImage,
    status: 'Completed'
  },
  {
    title: 'Commercial Building Construction',
    category: 'Commercial',
    image: companyImage,
    status: 'Completed'
  },
  {
    title: 'Heavy Equipment Operations',
    category: 'Equipment Rental',
    image: projectImage,
    status: 'Ongoing'
  },
  {
    title: 'Material Handling Operations',
    category: 'O&M Services',
    image: civilImage,
    status: 'Completed'
  },
  {
    title: 'Industrial Project Support',
    category: 'Support Services',
    image: companyImage,
    status: 'Ongoing'
  }
];

export const ProjectsSection = () => {
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
    <section id="projects" ref={sectionRef} className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-section-title text-primary mb-6">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of our successful construction and infrastructure projects across various sectors, 
            demonstrating our commitment to quality and excellence.
          </p>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-card border border-border rounded-2xl flex items-center justify-center shadow-soft">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card fade-in-up ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <p className="text-xs text-white/80 mb-1">{project.category}</p>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients. Let&apos;s discuss how we can bring 
              your construction vision to life with our expertise and dedication.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};