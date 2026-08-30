
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ServicesPage: React.FC = () => {
    const { isLight } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Services | Mustapha Eddarrazy — Digital Creator";
    }, []);

    const services = [
        {
            title: "Graphic Design",
            tags: ["Brand Identity", "Visual Strategy", "Typography"],
            description: "I help brands find their visual voice. By combining strategic insight with aesthetic precision, I create identity systems that resonate with audiences and stand the test of time."
        },
        {
            title: "Motion Design",
            tags: ["2D/3D Animation", "Kinetic Typography", "VFX"],
            description: "Bringing static concepts to life through rhythm and movement. From subtle micro-interactions to high-energy kinetic typography, motion is used to guide attention and enhance storytelling."
        },
        {
            title: "Video Production",
            tags: ["Editing", "Color Grading", "Sound Design"],
            description: "End-to-end post-production services. I craft cinematic narratives that evoke emotion, ensuring every cut and color grade serves the larger story and brand message."
        },
        {
            title: "Web Experience",
            tags: ["Frontend Dev", "UI/UX", "Interactive"],
            description: "Building immersive digital platforms. Using modern frameworks like React and WebGL to create performant, accessible, and visually stunning web experiences that convert."
        }
    ];

    const process = [
        { step: "01", title: "Discovery", text: "Deep dive into core objectives, audience analysis, and competitor landscape." },
        { step: "02", title: "Strategy", text: "Defining the visual language, technical requirements, and project roadmap." },
        { step: "03", title: "Execution", text: "Iterative design and development phase with regular feedback loops." },
        { step: "04", title: "Delivery", text: "Final polish, performance optimization, and asset handoff." }
    ];

    return (
        <div className={`bg-transparent min-h-screen pt-28 pb-[20vh] md:pb-[40vh] relative z-10 selection:bg-accent-red selection:text-white transition-colors duration-300 ${
            isLight ? 'text-black' : 'text-white'
        }`}>
            
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
                 <div className="flex flex-col gap-2 mb-12 animate-on-scroll">
                    <span className="font-mono text-xs text-accent-red uppercase tracking-[0.2em]">
                        Expertise — 003
                    </span>
                    <h1 className={`font-display font-black text-6xl md:text-[8vw] leading-[0.85] uppercase tracking-tighter ${
                        isLight ? 'text-black' : 'text-white'
                    }`}>
                        Visual <br/> Arsenal
                    </h1>
                </div>
                 <div className={`w-full h-[1px] ${isLight ? 'bg-black/10' : 'bg-white/20'}`}></div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-6 md:px-12 mb-32">
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div key={index} className={`group py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12 animate-on-scroll border-b ${
                            isLight ? 'border-black/10' : 'border-white/10'
                        }`}>
                            <div className="md:w-1/3">
                                <span className="font-mono text-accent-red text-xs uppercase tracking-widest mb-4 block">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <h2 className={`font-display font-black text-4xl md:text-5xl uppercase leading-none group-hover:text-accent-red transition-colors duration-300 ${
                                    isLight ? 'text-black' : 'text-white'
                                }`}>
                                    {service.title}
                                </h2>
                            </div>
                            
                            <div className="md:w-2/3 flex flex-col gap-6">
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                                            isLight 
                                                ? 'border border-black/10 bg-black/5 text-black/70' 
                                                : 'border border-white/10 text-white/60'
                                        }`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className={`font-sans text-lg md:text-xl leading-relaxed max-w-2xl ${
                                    isLight ? 'text-black/75' : 'text-white/80'
                                }`}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process Section */}
            <div className={`py-24 border-y transition-colors duration-300 ${
                isLight 
                    ? 'bg-[#f4f4f7] border-black/5' 
                    : 'bg-[#0f0f0f] border-white/5'
            }`}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center gap-4 mb-16 animate-on-scroll">
                         <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                         <h3 className={`font-mono text-sm uppercase tracking-widest ${
                             isLight ? 'text-black font-semibold' : 'text-white'
                         }`}>Methodology</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, i) => (
                            <div key={i} className={`relative p-8 border rounded-2xl animate-on-scroll transition-all duration-300 ${
                                isLight 
                                    ? 'border-black/10 bg-white shadow-md hover:border-black/25' 
                                    : 'border-white/5 bg-black/40 hover:bg-white/5'
                            }`} style={{ transitionDelay: `${i * 100}ms` }}>
                                <span className={`absolute top-8 right-8 font-display font-black text-6xl select-none pointer-events-none ${
                                    isLight ? 'text-black/5' : 'text-white/5'
                                }`}>
                                    {step.step}
                                </span>
                                <div className="mb-6 text-accent-red">
                                    <ArrowDown size={24} />
                                </div>
                                <h4 className={`font-display font-bold text-xl mb-4 uppercase ${
                                    isLight ? 'text-black' : 'text-white'
                                }`}>{step.title}</h4>
                                <p className={`font-sans text-sm leading-relaxed ${
                                    isLight ? 'text-black/60' : 'text-white/50'
                                }`}>
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Integrations Section */}
            <div className={`container mx-auto px-6 md:px-12 mt-32 border-t pt-20 animate-on-scroll ${
                isLight ? 'border-black/10' : 'border-white/10'
            }`}>
                 <span className="font-mono text-xs text-accent-red uppercase tracking-[0.2em] mb-4 block">
                     AI & Automation Systems
                 </span>
                 <h2 className={`font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-16 ${
                     isLight ? 'text-black' : 'text-white'
                 }`}>
                     Cognitive <br/> Engineering
                 </h2>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                     <div>
                         <h4 className={`font-display font-bold text-xl uppercase mb-4 ${
                             isLight ? 'text-black' : 'text-white'
                         }`}>Autonomous Scraping & Ingestion</h4>
                         <p className={`font-sans text-sm leading-relaxed mb-6 ${
                             isLight ? 'text-black/65' : 'text-white/50'
                         }`}>
                             Extracting structural data from thousands of pages at scale. I configure robust scraper networks using Scrapy and Selenium, with auto-triggering workflows that format raw unstructured text into relational databases or vector indices.
                         </p>
                         <div className={`w-12 h-px ${isLight ? 'bg-black/20' : 'bg-white/20'}`}></div>
                     </div>
                     <div>
                         <h4 className={`font-display font-bold text-xl uppercase mb-4 ${
                             isLight ? 'text-black' : 'text-white'
                         }`}>Semantic Context & RAG Apps</h4>
                         <p className={`font-sans text-sm leading-relaxed mb-6 ${
                             isLight ? 'text-black/65' : 'text-white/50'
                         }`}>
                             Connecting your custom company knowledge base directly to large language model agents. I architect vector search indexes that enable intelligent question-answering with high precision and verifiable citations.
                         </p>
                         <div className={`w-12 h-px ${isLight ? 'bg-black/20' : 'bg-white/20'}`}></div>
                     </div>
                 </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-6 md:px-12 pt-32 text-center">
                 <h2 className={`font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-8 ${
                     isLight ? 'text-black' : 'text-white'
                 }`}>
                    Ready to elevate <br/> your brand?
                 </h2>
                 <p className={`font-sans mb-12 max-w-lg mx-auto ${
                     isLight ? 'text-black/60' : 'text-white/50'
                 }`}>
                     Let's collaborate to build something that commands attention and delivers results.
                 </p>
                 <a 
                     href="mailto:Mostafadrazy@gmail.com" 
                     className={`inline-block px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent-red hover:text-white transition-all shadow-xl ${
                         isLight 
                             ? 'bg-black text-white hover:bg-accent-red' 
                             : 'bg-white text-black hover:bg-accent-red hover:text-white'
                     }`}
                 >
                     Start a Project
                 </a>
            </div>

        </div>
    );
};

export default ServicesPage;
