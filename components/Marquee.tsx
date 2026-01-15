
import React from 'react';

const Marquee: React.FC = () => {
  const items = ["Video Editing", "Art Direction", "Motion Design", "Cinematography", "Visual Engineering", "Brand Identity"];
  
  return (
    <div className="relative z-20 bg-accent-orange text-black py-4 overflow-hidden -rotate-1 origin-left scale-105 border-y-4 border-black">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 mx-6">
            {items.map((item, index) => (
              <span key={index} className="font-display font-black text-4xl uppercase tracking-tighter flex items-center gap-12">
                {item}
                <span className="w-3 h-3 bg-black rounded-full"></span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
