
import React from 'react';

const Marquee: React.FC = () => {
  const items = [
    "Video Editing",
    "Graphic Design",
    "Motion Design",
    "Cinematography",
    "Visual Engineering",
    "Web Development",
    "Brand Identity"
  ];
  
  return (
    <div className="relative z-20 bg-accent-red text-white py-4 overflow-hidden -rotate-1 origin-left scale-105 border-y-4 border-black/20 shadow-lg select-none">
      <div className="flex w-max animate-marquee">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-12 px-6">
          {items.map((item, index) => (
            <span 
              key={`t1-${index}`} 
              className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter flex items-center gap-12 text-white preserve-white whitespace-nowrap"
            >
              {item}
              <span className="w-3 h-3 bg-white rounded-full shrink-0"></span>
            </span>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless infinite sliding) */}
        <div className="flex shrink-0 items-center gap-12 px-6" aria-hidden="true">
          {items.map((item, index) => (
            <span 
              key={`t2-${index}`} 
              className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter flex items-center gap-12 text-white preserve-white whitespace-nowrap"
            >
              {item}
              <span className="w-3 h-3 bg-white rounded-full shrink-0"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
