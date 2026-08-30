import React, { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Synchronize progress counter with the 3.2s animation sequence
    const duration = 2800; // ms
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setComplete(true);
          setTimeout(() => {
            onComplete();
            setTimeout(() => setHide(true), 1200);
          }, 600);
        }, 500);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (hide) return null;

  // Generate 10 columns for the zipper effect
  const columns = Array.from({ length: 10 });

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col pointer-events-none select-none">
      
      {/* Background Zipper Columns */}
      <div className="absolute inset-0 flex w-full h-full">
        {columns.map((_, i) => (
          <div 
            key={i}
            className={`h-full flex-1 bg-[#0a0a0a] border-r border-white/5 last:border-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
                complete 
                    ? (i % 2 === 0 ? '-translate-y-full' : 'translate-y-full') 
                    : 'translate-y-0'
            }`}
            style={{ transitionDelay: `${i * 40}ms` }}
          ></div>
        ))}
      </div>

      {/* Content Layer (Fades out when zipper opens) */}
      <div className={`relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 transition-opacity duration-600 ${complete ? 'opacity-0' : 'opacity-100'}`}>
         
         {/* Top Info */}
         <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 preserve-white">
             <span>Salé, Morocco</span>
             <span>Portfolio '25</span>
         </div>

         {/* Center Animated Logo (Exact blueprint wireframe to solid fill & specular shine) */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
             <div className="relative text-white flex flex-col items-center justify-center preserve-white">
                <AnimatedLogo className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 text-white" />
             </div>
         </div>

         {/* Bottom Status */}
         <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-red animate-ping"></span>
                    <span className="font-mono text-xs text-accent-red font-bold">
                      {progress.toString().padStart(3, '0')}%
                    </span>
                </div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-white preserve-white">
                    {progress < 100 ? "Initializing Sequence..." : "Welcome"}
                </span>
            </div>
            <span className="font-mono text-xs text-white/40 preserve-white">
                ME — ARCHIVE 2025
            </span>
         </div>
      </div>

    </div>
  );
};

export default Preloader;