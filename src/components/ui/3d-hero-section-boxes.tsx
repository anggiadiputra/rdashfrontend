"use client";

import React, { useEffect, useRef } from 'react';

// Lazy load Spline to prevent mobile browsers from importing/executing the heavy 3D engine code
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export function HeroSplineBackground() {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
      backgroundColor: '#070913',
    }}>
      {isMobile ? (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.15) 0%, transparent 40%),
            linear-gradient(135deg, #070913 0%, #0c0e25 100%)
          `,
        }} />
      ) : (
        <React.Suspense fallback={<div style={{ position: 'absolute', inset: 0, backgroundColor: '#070913' }} />}>
          <Spline
            style={{
              width: '100%',
              height: '100vh',
              pointerEvents: 'auto',
            }}
            scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
          />
        </React.Suspense>
      )}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function ScreenshotSection({ screenshotRef }: { screenshotRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 mt-11 md:mt-12">
      <div ref={screenshotRef} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 w-full md:w-[80%] lg:w-[70%] mx-auto">
        <div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            alt="App Screenshot"
            className="w-full h-auto block rounded-lg mx-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="text-white px-4 max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-16">

      <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-wide">
          We're Building<br />Cool Experiences
        </h1>
        <div className="text-sm text-gray-300 opacity-90 mt-4">
          AI \ WEB3 \ UI \ 3D \ MOTION
        </div>
      </div>

      <div className="w-full lg:w-1/2 pl-0 lg:pl-8 flex flex-col items-start">
         <p className="text-base sm:text-lg opacity-80 mb-6 max-w-md">
            Crafting Awesome Stories and Killer Designs to Make Brand Stand Out
         </p>
        <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
             <button className="border border-white text-white font-semibold py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-2xl transition duration-300 w-full sm:w-auto hover:bg-white hover:text-black">
                Contact Us
            </button>
            <button className="pointer-events-auto bg-white text-black font-semibold py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-2xl transition duration-300 hover:scale-105 flex items-center justify-center w-full sm:w-auto">
               <svg className="lucide lucide-plus w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
               Get Started
            </button>
        </div>
      </div>

    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20" style={{ backgroundColor: 'rgba(13, 13, 24, 0.3)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: '0 0 0.75rem 0.75rem' }}>
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="text-white" style={{ width: '32px', height: '32px' }}>
             <svg className="lucide lucide-play-circle" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-300 hover:text-white text-sm transition duration-150">Home</a>
            <a href="/cases" className="text-gray-300 hover:text-white text-sm transition duration-150">Cases</a>
            <a href="/library" className="text-gray-300 hover:text-white text-sm transition duration-150">Library</a>
            <a href="/resources" className="text-gray-300 hover:text-white text-sm transition duration-150">Resources</a>
          </div>
        </div>

        <div className="flex items-center">
          <a href="/contact" className="border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition duration-300">
              Let's Talk!
          </a>
        </div>
      </div>
    </nav>
  );
}

const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (screenshotRef.current && heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;

          if (screenshotRef.current) {
            screenshotRef.current.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
          }

          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
             heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <HeroContent />
        </div>
      </div>

      <div className="bg-black relative z-10" style={{ marginTop: '-10vh' }}>
        <ScreenshotSection screenshotRef={screenshotRef} />
        <div className="container mx-auto px-4 py-16 text-white">
            <h2 className="text-4xl font-bold text-center mb-8">Other Content Below</h2>
             <p className="text-center max-w-xl mx-auto opacity-80">This is where additional sections of your landing page would go.</p>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
