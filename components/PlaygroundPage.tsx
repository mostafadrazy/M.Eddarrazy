
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { VIDEOS, IMAGES } from '../constants';

const PlaygroundPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Simulating "Experiments" using existing assets for demo purposes
    const experiments = [
        {
            id: 'EXP-001',
            title: 'Kinetic Typography Study',
            type: 'Motion',
            date: 'Oct 12, 2024',
            video: VIDEOS[1].url, // Reusing asset
            grid: 'col-span-1 md:col-span-2 row-span-2'
        },
        {
            id: 'EXP-002',
            title: 'Procedural Shader',
            type: 'WebGL',
            date: 'Sep 28, 2024',
            image: IMAGES.hero,
            grid: 'col-span-1 row-span-1'
        },
        {
            id: 'EXP-003',
            title: 'Glitch Effect V2',
            type: 'VFX',
            date: 'Sep 15, 2024',
            video: VIDEOS[2].url,
            grid: 'col-span-1 row-span-1'
        },
        {
            id: 'EXP-004',
            title: 'Interface Interactions',
            type: 'UI/UX',
            date: 'Aug 30, 2024',
            image: IMAGES.project,
            grid: 'col-span-1 md:col-span-1 row-span-2'
        },
        {
            id: 'EXP-005',
            title: 'Abstract Fluidity',
            type: '3D Render',
            date: 'Aug 12, 2024',
            video: VIDEOS[0].url,
            grid: 'col-span-1 md:col-span-2 row-span-1'
        },
        {
            id: 'EXP-006',
            title: 'Color Grade Test',
            type: 'Grading',
            date: 'July 22, 2024',
            video: VIDEOS[3].url,
            grid: 'col-span-1 row-span-1'
        },
        {
            id: 'EXP-007',
            title: 'Agent Memory Loops',
            type: 'AI/Agentic',
            date: 'Oct 15, 2025',
            video: VIDEOS[4].url,
            grid: 'col-span-1 md:col-span-2 row-span-1'
        },
        {
            id: 'EXP-008',
            title: 'Latent Embedding Space Map',
            type: 'Generative',
            date: 'Sep 05, 2025',
            image: IMAGES.project,
            grid: 'col-span-1 row-span-1'
        }
    ];

    return (
        <div className="bg-transparent min-h-screen pt-28 pb-[20vh] relative z-10 selection:bg-accent-orange selection:text-white">
            
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
                 <div className="flex flex-col gap-2 mb-12 animate-on-scroll">
                    <span className="font-mono text-xs text-accent-orange uppercase tracking-[0.2em]">
                        Experiments — 000
                    </span>
                    <h1 className="font-display font-black text-6xl md:text-[8vw] leading-[0.85] text-white uppercase tracking-tighter">
                        The Lab
                    </h1>
                </div>
                <div className="w-full h-[1px] bg-white/20"></div>
                <p className="mt-8 font-sans text-white/50 max-w-lg leading-relaxed">
                    A collection of digital sketches, motion dailies, and code experiments. 
                    Unpolished, raw, and purely for the joy of creation.
                </p>
            </div>

            {/* Masonry-ish Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {experiments.map((item, index) => (
                        <div 
                            key={index} 
                            className={`group relative bg-[#0f0f0f] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 ${item.grid} animate-on-scroll`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Media */}
                            <div className="absolute inset-0 w-full h-full">
                                {item.video ? (
                                    <video 
                                        src={item.video} 
                                        muted 
                                        loop 
                                        playsInline 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                        onMouseOver={e => e.currentTarget.play()}
                                        onMouseOut={e => e.currentTarget.pause()}
                                    />
                                ) : (
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform"
                                    />
                                )}
                            </div>

                            {/* Overlay Info */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent-orange border border-accent-orange/30 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                                        {item.id}
                                    </span>
                                    <ArrowUpRight className="text-white transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" size={20} />
                                </div>
                                
                                <div>
                                    <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-1 block">
                                        {item.type} — {item.date}
                                    </span>
                                    <h3 className="font-display font-bold text-2xl text-white leading-none">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Mobile Play Indicator */}
                            {item.video && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
                                    <PlayCircle className="text-white/50" size={48} />
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Note */}
            <div className="container mx-auto px-6 md:px-12 mt-24 text-center">
                <p className="font-mono text-xs text-white/30 uppercase tracking-widest">
                    // End of Experiments Log
                </p>
            </div>

        </div>
    );
};

export default PlaygroundPage;
