
import React, { useEffect } from 'react';
import { IMAGES, EXPERIENCE, SKILLS } from '../constants';
import { ArrowDown, Download } from 'lucide-react';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About | Mustapha Eddarrazy — Digital Creator";
    }, []);

    return (
        <div className="bg-transparent min-h-screen pt-28 pb-[20vh] md:pb-[40vh] relative z-10 selection:bg-accent-orange selection:text-white">
            {/* Header / Title */}
             <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
                <div className="flex flex-col gap-2 mb-12 animate-on-scroll">
                    <span className="font-mono text-xs text-accent-orange uppercase tracking-[0.2em]">
                        Profile — 002
                    </span>
                    <h1 className="font-display font-black text-6xl md:text-[8vw] leading-[0.85] text-white uppercase tracking-tighter">
                        Beyond <br/> The Pixel
                    </h1>
                </div>
                 <div className="w-full h-[1px] bg-white/20"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column - Image & Quick Stats */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32">
                             <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-8 group">
                                <img 
                                    src={IMAGES.about} 
                                    alt="Mustapha Eddarrazy" 
                                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                             </div>
                             
                             <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                                 <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Location</span>
                                 <span className="font-sans text-white text-sm">Salé, Morocco</span>
                             </div>
                             <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                                 <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Experience</span>
                                 <span className="font-sans text-white text-sm">5+ Years</span>
                             </div>
                             <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-8">
                                 <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Focus</span>
                                 <span className="font-sans text-white text-sm">Motion & Art Direction</span>
                             </div>

                             <a 
                                href="#" 
                                className="group w-full bg-white text-black py-4 rounded-lg font-sans font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-accent-orange hover:text-white transition-all duration-300"
                             >
                                <span>Download Résumé</span>
                                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                             </a>
                        </div>
                    </div>

                    {/* Right Column - Narrative & Details */}
                    <div className="lg:col-span-7 pt-4 lg:pt-8">
                        
                        {/* Bio */}
                        <div className="mb-20 animate-on-scroll">
                            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-8 leading-tight">
                                I engineer digital experiences that bridge the gap between <span className="text-accent-orange">cinematic storytelling</span> and functional design.
                            </h2>
                            <div className="space-y-6 text-white/60 font-sans text-lg leading-relaxed">
                                <p>
                                    The story started when my dad brought us a Sega console. That singular moment sparked a fascination with digital movement that never faded. From the pixelated sprites of retro games to the rhythmic cadence of modern film editing, I've spent the last five years deconstructing the mechanics of attention.
                                </p>
                                <p>
                                    As a Digital Creator, I don't just make things look good. I build systems—visual, auditory, and interactive—that communicate brand values instantaneously. Whether it's high-octane motion graphics or a minimalist user interface, the goal remains the same: impactful, memorable, and precise.
                                </p>
                                <p>
                                    Currently based in Morocco, I collaborate with global brands to translate complex ideas into visceral digital realities.
                                </p>
                            </div>
                        </div>

                        {/* Experience Timeline */}
                        <div className="mb-20 animate-on-scroll">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-3 h-3 bg-accent-orange rounded-full"></div>
                                <h3 className="font-mono text-sm text-white uppercase tracking-widest">Career Trajectory</h3>
                            </div>
                            
                            <div className="relative border-l border-white/10 ml-1.5 space-y-12 pl-8 md:pl-12">
                                {EXPERIENCE.map((item, index) => (
                                    <div key={index} className="relative group">
                                        <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-black border border-white/40 rounded-full group-hover:bg-accent-orange group-hover:border-accent-orange transition-colors"></div>
                                        <span className="font-mono text-xs text-accent-orange mb-2 block">{item.period}</span>
                                        <h4 className="font-display font-bold text-2xl text-white mb-1">{item.company}</h4>
                                        <p className="font-sans text-sm text-white/50 uppercase tracking-wider mb-3">{item.role}</p>
                                        <p className="font-sans text-white/60 leading-relaxed max-w-md">
                                            {item.description || "Leading visual direction and executing high-impact digital campaigns across multiple channels."}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="mb-20 animate-on-scroll">
                             <div className="flex items-center gap-4 mb-12">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <h3 className="font-mono text-sm text-white uppercase tracking-widest">Education</h3>
                            </div>
                            
                            <div className="relative border-l border-white/10 ml-1.5 space-y-12 pl-8 md:pl-12">
                                <div className="relative group">
                                    <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-black border border-white/40 rounded-full group-hover:bg-accent-orange group-hover:border-accent-orange transition-colors"></div>
                                    <span className="font-mono text-xs text-white/40 mb-2 block">Jan 2021 — Apr 2024</span>
                                    <h4 className="font-display font-bold text-2xl text-white mb-1">Bachelor's Degree in English Language and Literature</h4>
                                    <p className="font-sans text-sm text-white/50 uppercase tracking-wider mb-3">Mohammed V University in Rabat</p>
                                    <p className="font-sans text-white/60 leading-relaxed max-w-md">
                                        Specialized in Linguistics and Literature/Letters. An in-depth exploration of language structure, critical analysis, and cross-cultural communication.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Skills / Tech Stack */}
                        <div className="animate-on-scroll">
                             <div className="flex items-center gap-4 mb-12">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <h3 className="font-mono text-sm text-white uppercase tracking-widest">Technical Arsenal</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {SKILLS.map((category, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-display font-bold text-xl text-white mb-6 border-b border-white/10 pb-4 inline-block pr-12">
                                            {category.title}
                                        </h4>
                                        <ul className="space-y-3">
                                            {category.skills.map((skill, sIdx) => (
                                                <li key={sIdx} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group cursor-default">
                                                    <ArrowDown className="text-accent-orange -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" size={12} />
                                                    <span className="font-sans text-base group-hover:translate-x-2 transition-transform duration-300">{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            {/* Core Manifesto Section */}
            <div className="container mx-auto px-6 md:px-12 mt-32 border-t border-white/10 pt-20 animate-on-scroll">
                <span className="font-mono text-xs text-accent-orange uppercase tracking-[0.2em] mb-4 block">
                    Manifesto
                </span>
                <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-16">
                    Pillars of <br/> Attention Engineering
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-xs text-accent-orange">01/</span>
                        <h4 className="font-display font-bold text-xl uppercase text-white">Attention Retention</h4>
                        <p className="font-sans text-sm text-white/50 leading-relaxed">
                            Rhythm and visual cadence are calibrated to capture cognitive attention in the first 2.5 seconds. Storytelling is engineered as a functional asset.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-xs text-accent-orange">02/</span>
                        <h4 className="font-display font-bold text-xl uppercase text-white">Synthesized Logic</h4>
                        <p className="font-sans text-sm text-white/50 leading-relaxed">
                            Every pixel must serve a purpose. We merge cinematic aesthetics with clean, optimized frontend performance to ensure visual experiences have real utility.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-xs text-accent-orange">03/</span>
                        <h4 className="font-display font-bold text-xl uppercase text-white">Cognitive Automation</h4>
                        <p className="font-sans text-sm text-white/50 leading-relaxed">
                            Leveraging machine intelligence to accelerate the creative process. Prompt flows, semantic databases, and custom agents are integrated directly into our visual pipeline.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutPage;
