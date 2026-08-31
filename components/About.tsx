import React from 'react';
import { IMAGES, SKILLS, EXPERIENCE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-transparent text-white relative overflow-hidden z-10">
      
      {/* Editorial Layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Large Intro Statement */}
        <div className="mb-14 sm:mb-20 md:mb-32 max-w-5xl animate-on-scroll">
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-8xl leading-[1.05] md:leading-[0.9] mb-6 sm:mb-8 md:mb-12">
                CRAFTING <span className="text-accent-red italic">NARRATIVES</span> THROUGH <span className="font-sans font-light tracking-tighter">MOTION</span> & DESIGN.
            </h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-24 items-start">
                <div className="w-16 sm:w-24 md:w-64 h-[1px] bg-white/20 mt-2 md:mt-4"></div>
                <p className="font-sans text-sm sm:text-base md:text-xl font-medium leading-relaxed max-w-2xl text-white/80">
                    Mustapha Eddarrazy is a Digital Creator based in Salé. I don't just edit videos or design interfaces; I engineer attention. My work sits at the intersection of cinematic storytelling and functional design.
                </p>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-32">
            
            {/* Image Parallax Container */}
            <div className="relative animate-on-scroll delay-100">
                <div className="relative lg:sticky lg:top-24">
                    <img 
                        src={IMAGES.about} 
                        alt="Portrait" 
                        className="w-full aspect-[4/5] object-cover grayscale contrast-125 rounded-xl md:rounded-none"
                    />
                    <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-accent-red text-white p-4 sm:p-6 md:p-8 shadow-xl rounded-lg md:rounded-none">
                          <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl block">05+</span>
                          <span className="font-sans text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest">Years Exp.</span>
                    </div>
                </div>
            </div>

            {/* Resume Data */}
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-20 pt-4 md:pt-12">
                
                {/* Experience */}
                <div className="animate-on-scroll delay-200">
                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-white border-b border-white/20 pb-4">Career Path</h3>
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        {EXPERIENCE.map((exp, i) => (
                            <div key={i} className="border-b border-white/10 pb-4 sm:pb-6 md:pb-8 last:border-0 hover:pl-4 transition-all duration-300 cursor-default group">
                                <span className="font-sans text-[10px] md:text-xs text-white/40 mb-1.5 sm:mb-2 block">{exp.period}</span>
                                <h4 className="font-display font-bold text-base sm:text-lg md:text-xl mb-1 group-hover:text-accent-red transition-colors">{exp.company}</h4>
                                <p className="font-sans text-xs md:text-sm text-white/60 uppercase tracking-wide">{exp.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="animate-on-scroll delay-300">
                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10 text-white border-b border-white/20 pb-4">Capabilities</h3>
                    <div className="flex flex-col">
                        {SKILLS.map((cat, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-start py-4 sm:py-6 border-b border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors -mx-2 sm:-mx-4 px-2 sm:px-4 rounded-xl">
                                <h4 className="font-mono font-bold uppercase text-[10px] md:text-xs text-accent-red md:w-1/3 shrink-0 mb-3 sm:mb-4 md:mb-0 mt-1 tracking-widest">{cat.title}</h4>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 md:w-2/3">
                                    {cat.skills.map(skill => (
                                        <span key={skill} className="font-sans text-xs md:text-sm font-medium text-white/70 bg-[#0f0f0f] border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
