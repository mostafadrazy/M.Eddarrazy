import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setComplete(true);
            setTimeout(() => {
                onComplete();
                // Delay hiding the DOM element to allow transitions to finish
                setTimeout(() => setHide(true), 1500);
            }, 800);
          }, 200);
          return 100;
        }
        // Non-linear increment for organic feel
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (hide) return null;

  // Generate 10 columns for the zipper effect
  const columns = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col pointer-events-none">
      
      {/* Background Zipper Columns */}
      <div className="absolute inset-0 flex w-full h-full">
        {columns.map((_, i) => (
          <div 
            key={i}
            className={`h-full flex-1 bg-cinema-black border-r border-white/5 last:border-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
                complete 
                    ? (i % 2 === 0 ? '-translate-y-full' : 'translate-y-full') 
                    : 'translate-y-0'
            }`}
            style={{ transitionDelay: `${i * 50}ms` }}
          ></div>
        ))}
      </div>

      {/* Content Layer (Fades out before zipper opens) */}
      <div className={`relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 transition-opacity duration-500 ${complete ? 'opacity-0' : 'opacity-100'}`}>
         
         {/* Top Info */}
         <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
             <span>Salé, Morocco</span>
             <span>Portfolio '25</span>
         </div>

         {/* Center Text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-difference">
             <div className="relative overflow-hidden inline-block">
                <h1 className="font-display font-black text-[20vw] leading-none text-white tracking-tighter animate-pulse">
                    M.
                </h1>
             </div>
         </div>

         {/* Bottom Status */}
         <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
                <span className="w-12 h-[2px] bg-accent-orange animate-pulse"></span>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-white">
                    {progress < 100 ? "Loading Assets..." : "Ready"}
                </span>
            </div>
            <span className="font-mono text-xs text-white/30">
                v2.0.4
            </span>
         </div>
      </div>

    </div>
  );
};

export default Preloader;