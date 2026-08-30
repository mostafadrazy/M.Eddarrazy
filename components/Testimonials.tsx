import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-transparent py-24 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 animate-on-scroll">
           <div>
                <h2 className="font-display font-black text-4xl md:text-7xl text-white uppercase leading-none mb-6">
                    Trusted <br/> <span className="text-accent-red">Voices</span>
                </h2>
                <div className="w-24 h-1 bg-white/20"></div>
           </div>
           <p className="hidden md:block font-sans text-white/50 max-w-xs text-right mb-2">
               Feedback from collaborators and clients across the creative industry.
           </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div 
                key={i} 
                className="group relative bg-[#111] border border-white/5 p-8 md:p-10 rounded-2xl hover:border-accent-red/50 transition-all duration-500 flex flex-col justify-between animate-on-scroll hover:-translate-y-2" 
                style={{ transitionDelay: `${i * 150}ms` }}
            >
               {/* Decorative Background Quote */}
               <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <Quote size={80} className="text-white fill-white" />
               </div>

               <div className="relative z-10 mb-8 md:mb-12">
                  <Quote className="text-accent-red mb-6 opacity-80" size={32} />
                  <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed font-light font-light italic">
                    "{t.quote}"
                  </p>
               </div>

               <div className="relative z-10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-white border border-white/10">
                      {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white leading-tight group-hover:text-accent-red transition-colors">
                        {t.name}
                    </h4>
                    <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
                        {t.role} @ {t.company}
                    </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
