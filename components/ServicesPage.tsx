
import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const ServicesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Art Direction",
            tags: ["Brand Identity", "Visual Strategy", "Concept"],
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
        <div className="bg-cinema-black min-h-screen pt-28 pb-24 relative z-10 selection:bg-accent-orange selection:text-white">
            
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
                 <div className="flex flex-col gap-2 mb-12 animate-on-scroll">
                    <span className="font-mono text-xs text-accent-orange uppercase tracking-[0.2em]">
                        Expertise — 003
                    </span>
                    <h1 className="font-display font-black text-6xl md:text-[8vw] leading-[0.85] text-white uppercase tracking-tighter">
                        Visual <br/> Arsenal
                    </h1>
                </div>
                 <div className="w-full h-[1px] bg-white/20"></div>
            </div>

            {/* Services List */}
            <div className="container mx-auto px-6 md:px-12 mb-32">
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div key={index} className="group border-b border-white/10 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12 animate-on-scroll">
                            <div className="md:w-1/3">
                                <span className="font-mono text-accent-orange text-xs uppercase tracking-widest mb-4 block">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-none group-hover:text-accent-orange transition-colors duration-300">
                                    {service.title}
                                </h2>
                            </div>
                            
                            <div className="md:w-2/3 flex flex-col gap-6">
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-white/60 text-xs font-mono uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process Section */}
            <div className="bg-[#0f0f0f] py-24 border-y border-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center gap-4 mb-16 animate-on-scroll">
                         <div className="w-3 h-3 bg-accent-orange rounded-full"></div>
                         <h3 className="font-mono text-sm text-white uppercase tracking-widest">Methodology</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, i) => (
                            <div key={i} className="relative p-8 border border-white/5 bg-black/40 hover:bg-white/5 transition-colors duration-300 rounded-xl animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                                <span className="absolute top-8 right-8 font-display font-black text-6xl text-white/5 select-none pointer-events-none">
                                    {step.step}
                                </span>
                                <div className="mb-6 text-accent-orange">
                                    <ArrowDown size={24} />
                                </div>
                                <h4 className="font-display font-bold text-xl text-white mb-4 uppercase">{step.title}</h4>
                                <p className="font-sans text-sm text-white/50 leading-relaxed">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-6 md:px-12 pt-32 text-center">
                 <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight mb-8">
                    Ready to elevate <br/> your brand?
                 </h2>
                 <p className="font-sans text-white/50 mb-12 max-w-lg mx-auto">
                     Let's collaborate to build something that commands attention and delivers results.
                 </p>
                 <a href="mailto:Mostafadrazy@gmail.com" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent-orange hover:text-white transition-all">
                     Start a Project
                 </a>
            </div>

        </div>
    );
};

export default ServicesPage;
