
import React from 'react';
import { IMAGES, SKILLS, EXPERIENCE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="pt-16 md:pt-24 pb-[20vh] md:pb-[40vh] bg-cinema-white text-cinema-black relative overflow-hidden z-10">
      
      {/* Editorial Layout */}
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Large Intro Statement */}
        <div className="mb-20 md:mb-32 max-w-5xl animate-on-scroll">
            <h2 className="font-display font-bold text-3xl md:text-8xl leading-[1.05] md:leading-[0.9] mb-8 md:mb-12">
                CRAFTING <span className="text-accent-orange italic">NARRATIVES</span> THROUGH <span className="font-sans font-light tracking-tighter">MOTION</span> & DESIGN.
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
                <div className="w-24 md:w-64 h-[1px] bg-cinema-black/20 mt-2 md:mt-4"></div>
                <p className="font-sans text-sm md:text-xl font-medium leading-relaxed max-w-2xl">
                    Mustapha Eddarrazy is a Digital Creator based in Salé. I don't just edit videos or design interfaces; I engineer attention. My work sits at the intersection of cinematic storytelling and functional design.
                </p>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
            
            {/* Image Parallax Container */}
            <div className="relative animate-on-scroll delay-100">
                <div className="relative lg:sticky lg:top-24">
                    <img 
                        src={IMAGES.about} 
                        alt="Portrait" 
                        className="w-full aspect-[4/5] object-cover grayscale contrast-125 rounded-lg md:rounded-none"
                    />
                    <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-accent-orange text-white p-6 md:p-8 shadow-xl">
                         <span className="font-display font-bold text-3xl md:text-4xl block">05+</span>
                         <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest">Years Exp.</span>
                    </div>
                </div>
            </div>

            {/* Resume Data */}
            <div className="flex flex-col gap-12 md:gap-20 pt-4 md:pt-12">
                
                {/* Experience */}
                <div className="animate-on-scroll delay-200">
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-6 md:mb-8">Career Path</h3>
                    <div className="space-y-6 md:space-y-8">
                        {EXPERIENCE.map((exp, i) => (
                            <div key={i} className="border-b border-cinema-black/10 pb-6 md:pb-8 last:border-0 hover:pl-4 transition-all duration-300 cursor-default group">
                                <span className="font-sans text-[10px] md:text-xs text-cinema-black/40 mb-2 block">{exp.period}</span>
                                <h4 className="font-display font-bold text-lg md:text-xl mb-1 group-hover:text-accent-orange transition-colors">{exp.company}</h4>
                                <p className="font-sans text-xs md:text-sm text-cinema-black/70 uppercase tracking-wide">{exp.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="animate-on-scroll delay-300">
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-6 md:mb-8">Capabilities</h3>
                    <div className="flex flex-col gap-6 md:gap-8">
                        {SKILLS.map((cat, i) => (
                            <div key={i}>
                                <h4 className="font-sans font-bold uppercase text-xs md:text-sm mb-3 md:mb-4 text-cinema-black/40">{cat.title}</h4>
                                <div className="flex flex-wrap gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-3">
                                    {cat.skills.map(skill => (
                                        <span key={skill} className="font-display text-xl md:text-3xl text-cinema-black/80 hover:text-accent-orange transition-colors cursor-default">
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
