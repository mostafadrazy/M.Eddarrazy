
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../constants';

const services = [
    {
        id: "01",
        title: "Art Direction",
        description: "Defining visual languages that cut through the noise. Strategy meets aesthetics to create memorable brands.",
        image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg"
    },
    {
        id: "02",
        title: "Video Production",
        description: "End-to-end cinematic storytelling. From concept scripting to filming, editing, and final color grade.",
        image: "https://storage.googleapis.com/creatorspace-public/users%2Fcm36fnldg0bvzqq01ucd25h3d%2FQUw3Vga10FLSgpm7-Porsche%2520(2).mp4-thumbnail.jpg" // We'll just use the hero image if this fails
    },
    {
        id: "03",
        title: "Motion Design",
        description: "Bringing static pixels to life. High-end kinetic typography, 2D/3D animation, and VFX compositing.",
        image: "https://res.cloudinary.com/dmnqlruhl/video/upload/v1764377214/Sequence_01_6_hjkn7p.jpg"
    },
    {
        id: "04",
        title: "Web Development",
        description: "Immersive web experiences using React, WebGL, and modern frontend architecture for maximum performance.",
        image: ASSETS.heroImageDesktop
    }
];

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Fallback images logic if the raw strings above don't load, but we can just use the constant images
  const imagesForServices = [
    "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg",
    "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764373738/nano-banana_A_portrait_1with_dram_jlmfv8.png",
    ASSETS.heroImageDesktop,
    ASSETS.footerBanner
  ];

  return (
    <section id="services" className="bg-[#050505] text-white py-16 md:py-32 relative overflow-hidden z-20 transition-colors duration-500">
        
        {/* Background Images Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
            {services.map((service, index) => (
                <div 
                    key={`bg-${service.id}`}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${hoveredService === service.id ? 'opacity-30' : 'opacity-0'}`}
                >
                    <img 
                        src={imagesForServices[index]} 
                        alt="" 
                        className="w-full h-full object-cover grayscale scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 animate-on-scroll">
                <h2 className="font-display font-black text-4xl md:text-8xl leading-none">
                    CORE <br/><span className="text-accent-orange">EXPERTISE</span>
                </h2>
                <p className="font-sans text-sm md:text-lg font-medium max-w-sm mt-6 md:mt-0 md:text-right text-white/70">
                    A multidisciplinary approach to digital problem solving, blending technical precision with artistic intuition.
                </p>
            </div>

            <div className="border-t border-white/20">
                {services.map((service, index) => (
                    <div 
                        key={service.id} 
                        onMouseEnter={() => setHoveredService(service.id)}
                        onMouseLeave={() => setHoveredService(null)}
                        className="group border-b border-white/20 py-8 md:py-16 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start md:items-center transition-all duration-300 hover:bg-accent-orange hover:text-black px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer animate-on-scroll"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-baseline gap-4 md:gap-8 md:w-1/2">
                            <span className="font-mono text-xs md:text-sm text-accent-orange group-hover:text-black opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                /{service.id}
                            </span>
                            <h3 className="font-display font-black text-3xl md:text-6xl uppercase tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-300">
                                {service.title}
                            </h3>
                        </div>
                        
                        <div className="md:w-1/3 flex justify-between items-end md:items-center w-full gap-4">
                            <p className="font-sans text-sm md:text-base opacity-70 group-hover:opacity-100 max-w-xs leading-relaxed">
                                {service.description}
                            </p>
                            <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 bg-black text-white">
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
