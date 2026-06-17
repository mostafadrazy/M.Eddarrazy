import React, { useEffect, useState, useRef } from 'react';

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
        className="relative h-[100dvh] w-full overflow-hidden bg-transparent flex flex-col justify-center items-center px-6 md:px-12 py-8 md:py-12 cursor-none"
    >
      {/* 1. Subtle film grain overlay only - absolutely no dark vignettes or gradient filters */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        <div 
            className="absolute inset-0 pointer-events-none z-[1] opacity-10 mix-blend-overlay"
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '150px 150px'
            }}
        ></div>
      </div>

      {/* 2. Main Title Text Overlay - Centered perfectly with clean solid white text */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center select-none">
        {/* "MUSTAPHA" */}
        <div className="overflow-hidden w-full">
            <h1 className={`font-display font-black text-[12vw] md:text-[8.5vw] leading-[0.85] tracking-tighter text-white transition-transform duration-[1200ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                MUSTAPHA
            </h1>
        </div>

        {/* "EDDARRAZY" */}
        <div className="overflow-hidden w-full -mt-2 md:-mt-4">
             <h1 
                className={`font-display font-black text-[12vw] md:text-[8.5vw] leading-[0.85] tracking-tighter text-white transition-transform duration-[1200ms] delay-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? 'translate-y-0' : 'translate-y-[120%]'}`}
             >
                EDDARRAZY
            </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
