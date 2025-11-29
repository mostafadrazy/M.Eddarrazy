import React from 'react';
import { motion } from 'framer-motion';

const StartupSection: React.FC = () => {
  return (
    <section id="startup" className="py-32 px-4 md:px-12 bg-[#080808]">
        <div className="flex flex-col md:flex-row gap-16 items-center max-w-7xl mx-auto">
            
            <div className="md:w-1/2 order-2 md:order-1">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-lg overflow-hidden border border-white/10 bg-black aspect-video group"
                >
                    <img 
                        src="https://i.ibb.co/cSPNK03R/Screenshot-19-11-2025-02814-www-9adiya-site.jpg" 
                        alt="9adiya.site"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6">
                        <span className="text-xs font-mono text-green-500 bg-green-900/20 px-2 py-1 rounded">Live Production</span>
                    </div>
                </motion.div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 block">Founder Mode</span>
                <h2 className="font-display text-5xl md:text-6xl text-white font-bold tracking-tighter mb-6">9adiya.site</h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                    I built 9adiya to solve a specific problem in the Moroccan legal landscape. It bridges the gap between complex legal workflows and modern digital efficiency.
                </p>
                <ul className="space-y-4 mb-10 text-gray-500 font-mono text-sm">
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Full Stack (Django + React)
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span> User-Centric Design
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Market Fit Strategy
                    </li>
                </ul>
                <a 
                    href="https://www.9adiya.site/" 
                    target="_blank" 
                    className="inline-block border-b border-white pb-1 text-white text-sm font-bold uppercase tracking-widest hover:text-gray-400 hover:border-gray-400 transition-all"
                >
                    Visit Platform
                </a>
            </div>

        </div>
    </section>
  );
};

export default StartupSection;