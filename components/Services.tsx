
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: "01",
        title: "Art Direction",
        description: "Defining visual languages that cut through the noise. Strategy meets aesthetics to create memorable brands."
    },
    {
        id: "02",
        title: "Video Production",
        description: "End-to-end cinematic storytelling. From concept scripting to filming, editing, and final color grade."
    },
    {
        id: "03",
        title: "Motion Design",
        description: "Bringing static pixels to life. High-end kinetic typography, 2D/3D animation, and VFX compositing."
    },
    {
        id: "04",
        title: "Web Development",
        description: "Immersive web experiences using React, WebGL, and modern frontend architecture for maximum performance."
    }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-cinema-white text-cinema-black py-16 md:py-32 relative overflow-hidden z-20">
        <div className="container mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 animate-on-scroll">
                <h2 className="font-display font-black text-4xl md:text-8xl leading-none">
                    CORE <br/><span className="text-accent-orange">EXPERTISE</span>
                </h2>
                <p className="font-sans text-sm md:text-lg font-medium max-w-sm mt-6 md:mt-0 md:text-right">
                    A multidisciplinary approach to digital problem solving, blending technical precision with artistic intuition.
                </p>
            </div>

            <div className="border-t border-black">
                {services.map((service, index) => (
                    <div 
                        key={service.id} 
                        className="group border-b border-black py-8 md:py-16 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-center transition-all hover:bg-black hover:text-white px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer animate-on-scroll"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-baseline gap-4 md:gap-8 md:w-1/2">
                            <span className="font-mono text-xs md:text-sm text-accent-orange opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                /{service.id}
                            </span>
                            <h3 className="font-display font-bold text-2xl md:text-6xl uppercase group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-300">
                                {service.title}
                            </h3>
                        </div>
                        
                        <div className="md:w-1/3 flex justify-between items-end md:items-center w-full gap-4">
                            <p className="font-sans text-sm md:text-base opacity-70 max-w-xs leading-relaxed">
                                {service.description}
                            </p>
                            <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                                <ArrowUpRight className="group-hover:-rotate-45 group-hover:rotate-0 transition-transform duration-500" size={18} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;
