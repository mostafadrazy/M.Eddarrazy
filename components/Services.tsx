import React, { useState } from 'react';
import { ArrowUpRight, Layout, Video, Sparkles, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const services = [
    {
        id: "01",
        title: "Graphic Design",
        shortDesc: "Visual Identity",
        description: "Defining visual languages that cut through the noise. Strategy meets aesthetics to create memorable brands.",
        image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1788121404/Man_typing_on_laptop_202608302118_biiamv.jpg",
        icon: Layout,
        colSpan: "md:col-span-8",
        aspect: "aspect-[16/9] md:aspect-auto md:min-h-[450px]"
    },
    {
        id: "02",
        title: "Video Production",
        shortDesc: "Cinematic Storytelling",
        description: "End-to-end cinematic storytelling. From concept scripting to filming, editing, and final color grade.",
        image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1788121404/Man_typing_on_laptop_202608302115_vfjsr4.jpg",
        icon: Video,
        colSpan: "md:col-span-4",
        aspect: "aspect-square md:aspect-auto md:min-h-[450px]"
    },
    {
        id: "03",
        title: "Motion Design",
        shortDesc: "Kinetic Animation",
        description: "Bringing static pixels to life. High-end kinetic typography, 2D/3D animation, and VFX compositing.",
        image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1788121404/Person_looking_at_laptop_202608302104_vfxxqi.jpg",
        icon: Sparkles,
        colSpan: "md:col-span-5",
        aspect: "aspect-square md:aspect-auto md:min-h-[400px]"
    },
    {
        id: "04",
        title: "Web Development",
        shortDesc: "Digital Experiences",
        description: "Immersive web experiences using React, WebGL, and modern frontend architecture for maximum performance.",
        image: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1788121404/Man_typing_on_laptop_202608302107_yliync.jpg",
        icon: Terminal,
        colSpan: "md:col-span-7",
        aspect: "aspect-[16/9] md:aspect-auto md:min-h-[400px]"
    }
];

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const { isLight } = useTheme();

  return (
    <section id="services" className={`bg-transparent py-20 md:py-32 relative z-20 transition-colors duration-300 ${
        isLight ? 'text-black' : 'text-white'
    }`}>
        <div className="container mx-auto px-6 md:px-12">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 animate-on-scroll">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-2 h-2 rounded-full bg-accent-red"></span>
                        <span className={`font-mono text-[10px] uppercase tracking-widest ${
                            isLight ? 'text-black/50' : 'text-white/40'
                        }`}>
                            Capabilities
                        </span>
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
                        CORE <br/><span className="text-accent-red">EXPERTISE.</span>
                    </h2>
                </div>
                <p className={`font-sans text-sm md:text-base font-medium max-w-sm mt-8 md:mt-0 md:text-right leading-relaxed ${
                    isLight ? 'text-black/70' : 'text-white/70'
                }`}>
                    A multidisciplinary approach to digital problem solving, blending technical precision with artistic intuition.
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                {services.map((service, index) => {
                    const isHovered = hoveredService === service.id;
                    const Icon = service.icon;

                    return (
                        <div 
                            key={service.id}
                            className={`group relative overflow-hidden rounded-[2rem] ${service.colSpan} ${service.aspect} animate-on-scroll flex flex-col transition-all duration-500 ${
                                isLight 
                                    ? 'bg-white border border-black/10 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)] hover:border-black/20' 
                                    : 'bg-[#0c0c0c] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:border-white/25'
                            }`}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Media Background */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <div className={`absolute inset-0 z-10 transition-all duration-500 ${
                                    isLight
                                        ? 'bg-gradient-to-t from-white/95 via-white/80 to-white/20 group-hover:from-white/90 group-hover:via-white/50 group-hover:to-white/10'
                                        : 'bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:opacity-75'
                                }`} />
                                <img 
                                    src={service.image}
                                    alt={service.title}
                                    className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                        isLight
                                            ? 'grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105'
                                            : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                                    }`}
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 flex flex-col justify-between h-full p-6 md:p-8 lg:p-10 pointer-events-none">
                                {/* Top row */}
                                <div className="flex justify-between items-start">
                                    <div className={`backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ${
                                        isLight 
                                            ? 'bg-black/5 border border-black/10 shadow-sm' 
                                            : 'bg-black/60 border border-white/15'
                                    }`}>
                                        <Icon size={12} className="text-accent-red" />
                                        <span className={`font-mono text-[10px] uppercase tracking-widest font-semibold ${
                                            isLight ? 'text-black/80' : 'text-white/90'
                                        }`}>
                                            {service.shortDesc}
                                        </span>
                                    </div>
                                    <span className="font-mono text-xs md:text-sm text-accent-red font-bold">
                                        /{service.id}
                                    </span>
                                </div>

                                {/* Bottom row */}
                                <div>
                                    <h3 className={`font-display font-black text-2xl lg:text-3xl xl:text-4xl uppercase tracking-tighter mb-3 transition-all duration-500 group-hover:-translate-y-2 ${
                                        isLight ? 'text-black' : 'text-white'
                                    }`}>
                                        {service.title}
                                    </h3>
                                    
                                    <div className="relative">
                                        <p className={`font-sans text-sm leading-relaxed max-w-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
                                            isLight ? 'text-black/80 font-medium' : 'text-white/70'
                                        }`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Hover Reveal Button */}
                            <div className="absolute top-8 right-8 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-accent-red text-white flex items-center justify-center transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 shadow-lg">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
};

export default Services;

