import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';
import video from '@/assets/Video_Ready_After_Tagline_Removal.mp4';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Lazy-load video when hero scrolls into view (lower threshold for mobile)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
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

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  // Try to auto-play when video is loaded to improve behavior on mobile browsers
  useEffect(() => {
    if (!loadVideo || !videoRef.current) return;
    const v = videoRef.current;
    const tryPlay = async () => {
      try {
        await v.play();
        setIsPlaying(true);
      } catch (err) {
        // autoplay blocked, remain paused — user can tap play
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, [loadVideo]);

  return (
    <section id="home" ref={sectionRef as any} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (MP4) with image poster/fallback and overlay */}
      <div className="absolute inset-0">
        {/* Video shown on small+ screens; mobile will use the image fallback to save bandwidth */}
        {loadVideo && (
          <video
            ref={videoRef}
            className="block w-full h-full object-cover"
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            preload="auto"
            poster={heroImage}
            aria-hidden="true"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={video} type="video/mp4" />
            {/* Fallback: browsers will display poster/image */}
          </video>
        )}

        {/* Fallback image (always present) */}
        <img
          src={heroImage}
          alt="CMC Infratech Construction Site"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 gradient-hero"></div>

        {/* Play/Pause control for accessibility -- shown on md+ screens */}
        {loadVideo && (
          <button
            type="button"
            aria-pressed={isPlaying}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            onClick={toggleVideo}
            className="flex items-center justify-center absolute bottom-6 right-6 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm touch-manipulation"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isPlaying ? (
                <>
                  <rect x="6" y="5" width="3" height="14" fill="white" />
                  <rect x="15" y="5" width="3" height="14" fill="white" />
                </>
              ) : (
                <path d="M5 3v18l15-9L5 3z" fill="white" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
          {/* Logo removed per request */}

          {/* Main Heading */}
          <h1 className="text-hero mb-6">
            <span className="block mb-2">CMC Infratech</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-secondary">Pvt. Ltd.</span>
          </h1>

          {/* Tagline and key stats removed per request */}

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