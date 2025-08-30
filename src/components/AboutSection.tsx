import { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, Shield } from 'lucide-react';
import companyBuilding from '@/assets/company-building.jpg';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section id="about" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-section-title text-primary mb-6">About CMC Infratech</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading the construction industry in Odisha with excellence, safety, and innovation since 2013.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
            <div className="relative">
              <img 
                src={companyBuilding} 
                alt="CMC Infratech Company Building" 
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 slide-in-left ${isVisible ? 'animate' : ''}`}>
            {/* Company Story */}
            <div>
              <h3 className="text-subsection-title text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                CMC Infratech Pvt. Ltd., founded in 2013 by Mr. Anirudha Mohanty and headquartered at Chorda, Jajpur Road, Odisha, 
                is a leading infrastructure and construction company specializing in heavy equipment rental, operation & maintenance, 
                material handling, civil construction, and industrial project works. With a fleet of advanced machinery and more than 
                500 skilled professionals and engineers, we have successfully completed over 120 projects across Odisha.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are trusted by reputed clients such as Jindal Stainless Limited, JSW Cement Limited, and Rashmi Metalliks Ltd., 
                delivering projects with safety, quality, and within stipulated timelines. Under the leadership of our Chairman & 
                Managing Director, Mr. Anirudha Mohanty, we have earned respect in the industrial and mining sectors through our 
                commitment to excellence, statutory compliance, and safeguarding man-machine-environment balance.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center">
                <Target className="w-5 h-5 text-primary mr-2" />
                Our Vision
              </h4>
              <p className="text-muted-foreground font-medium">
                "To become the No. 1 infrastructure development company in Odisha, continuously expanding our presence across 
                the state and neighboring regions while maintaining our commitment to excellence, safety, quality, and delivering 
                projects within stipulated timelines."
              </p>
            </div>

            {/* Key Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Excellence</h5>
                  <p className="text-sm text-muted-foreground">Delivering superior quality in every project</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Safety First</h5>
                  <p className="text-sm text-muted-foreground">Prioritizing safety in all operations</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Team Work</h5>
                  <p className="text-sm text-muted-foreground">Building success through collaboration</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Timely Delivery</h5>
                  <p className="text-sm text-muted-foreground">Meeting deadlines with precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CMD Message */}
        <div className={`mt-16 bg-card p-8 rounded-2xl border border-border shadow-soft fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold text-foreground mb-2">Message from Chairman & Managing Director</h4>
            <p className="text-primary font-medium">Mr. Anirudha Mohanty</p>
          </div>
          <blockquote className="text-muted-foreground text-lg leading-relaxed italic text-center max-w-4xl mx-auto">
            "Under my leadership, CMC Infratech has earned respect in the industrial and mining sectors through our unwavering 
            commitment to excellence, statutory compliance, and safeguarding man-machine-environment balance. We are trusted by 
            reputed clients and continue to deliver projects with safety, quality, and within stipulated timelines. Our vision 
            to become Odisha's No. 1 infrastructure development company drives us forward every day, as we continuously expand 
            our presence across the state and neighboring regions."
          </blockquote>
        </div>
      </div>
    </section>
  );
};