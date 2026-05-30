
import React, { useEffect, useState, useRef } from 'react';
import { ASSETS } from '../constants';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  startAnimation: boolean;
}

const Hero: React.FC<HeroProps> = ({ startAnimation }) => {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  return (
    <section 
        ref={sectionRef}
        className="relative h-[100dvh] w-full overflow-hidden bg-cinema-black flex items-center justify-center cursor-none"
    >
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div 
            className={`w-full h-full relative transition-transform duration-[4000ms] ease-out`}
            style={{ 
                transform: `scale(${loaded ? 1.05 : 1.2})` 
            }}
        >
             <img 
                src={ASSETS.heroImageDesktop} 
                alt="Background"
                className="w-full h-full object-cover opacity-60 md:opacity-100" 
            />
        </div>
        
        {/* Heavy Grain Overlay */}
        <div 
            className="absolute inset-0 pointer-events-none z-[1] opacity-30 mix-blend-overlay"
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '150px 150px'
            }}
        ></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent z-[1] opacity-80"></div>
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 py-8 md:py-12">
        
        {/* Header - Empty placeholder for spacing */}
        <div className={`flex justify-end items-start w-full transition-all duration-1000 delay-500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        </div>

        {/* Hero Text - Kinetic Typography with Blend Mode */}
        {/* Increased translation significantly: translate-y-28 (mobile) and md:translate-y-56 (desktop) */}
        <div className="flex flex-col items-center justify-center w-full relative z-20 mix-blend-difference mt-auto mb-auto md:mt-32 md:mb-auto translate-y-28 md:translate-y-56">
             
             {/* "DIGITAL" */}
            <div className="overflow-hidden relative">
                <h1 className={`font-display font-black text-[11vw] md:text-[10vw] leading-[0.8] tracking-tighter text-center text-white transition-transform duration-[1200ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                    DIGITAL
                </h1>
            </div>

            {/* "CREATOR" - Stroke to Fill Animation */}
            <div className="overflow-hidden relative -mt-1 md:-mt-4">
                 <h1 
                    className={`font-display font-black text-[11vw] md:text-[10vw] leading-[0.8] tracking-tighter text-center transition-transform duration-[1200ms] delay-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? 'translate-y-0' : 'translate-y-[120%]'}`}
                 >
                    {/* Background Stroke Layer */}
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>
                        CREATOR
                    </span>
                    
                    {/* Foreground Fill Layer - Animated */}
                    <span 
                        className={`absolute inset-0 text-white overflow-hidden transition-[width] duration-[1500ms] delay-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${loaded ? 'w-full' : 'w-0'}`}
                    >
                        CREATOR
                    </span>
                </h1>
            </div>
            
             {/* Tagline / Action */}
             <div className={`mt-8 md:mt-12 transition-all duration-1000 delay-[900ms] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                 <div className="flex flex-col items-center gap-4">
                    <div className="h-8 md:h-12 w-[1px] bg-white opacity-50"></div>
                    <p className="font-sans text-[9px] md:text-sm font-medium tracking-[0.3em] uppercase text-center text-white">
                        Visual Engineering
                    </p>
                 </div>
             </div>
        </div>

        {/* Footer info */}
        <div className={`flex justify-center md:justify-between items-end w-full transition-all duration-1000 delay-[900ms] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} mix-blend-difference text-white`}>
             {/* Left: Spacer */}
             <div className="hidden md:block flex-1"></div>
             
             {/* Center: Scroll Indicator */}
             <div className="flex flex-col items-center gap-2 pointer-events-none justify-center">
                 <ArrowDown className="animate-bounce opacity-80" size={20} />
             </div>

             {/* Right: Status */}
             <div className="hidden md:block text-right flex-1">
                 <p className="font-sans text-xs uppercase tracking-widest opacity-60">OPEN FOR WORK</p>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
