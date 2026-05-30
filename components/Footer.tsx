
import React from 'react';
import { SOCIAL_LINKS, ASSETS } from '../constants';
import { ArrowUpRight, ArrowUp, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative z-30">
      
      {/* 1. Independent Floating Card Container */}
      <div className="relative z-40 px-4 md:px-8 -mt-[15vh] md:-mt-[27.5vh] pointer-events-none animate-on-scroll">
        <div className="pointer-events-auto w-full max-w-[96%] mx-auto h-[45vh] md:h-[55vh] min-h-[320px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative group bg-cinema-black">
            
            {/* Background Image */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
            <img 
                src={ASSETS.footerBanner} 
                alt="Start a project" 
                className="w-full h-full object-cover object-[75%_center] lg:object-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100 opacity-90"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 z-10"></div>

            {/* Content Container - Flex Layout */}
            <div className="absolute inset-0 z-20 p-6 md:p-12 lg:p-16 flex flex-col justify-between">
                 
                 {/* Top Left Label */}
                 <div className="flex justify-start">
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                        <span className="font-mono text-[10px] md:text-xs text-accent-orange uppercase tracking-[0.3em] font-bold">
                            Start a Project
                        </span>
                    </div>
                 </div>

                 {/* Bottom Content Row */}
                 <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 md:gap-12">
                    
                    {/* Big Headline */}
                    <h2 className="font-display font-black text-2xl md:text-6xl lg:text-7xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter drop-shadow-2xl text-white max-w-4xl">
                        Let's Build <br/> The Future.
                    </h2>
                    
                    {/* CTA Button */}
                    <a 
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="group/btn bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-accent-orange hover:border-accent-orange text-white pl-6 pr-2 py-2 md:pl-8 rounded-full font-sans font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-between gap-4 md:gap-8 w-full md:w-fit xl:mb-4 shadow-lg"
                    >
                        <span className="uppercase tracking-widest">Start a conversation</span>
                        <span className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-300">
                            <ArrowUpRight size={18} />
                        </span>
                    </a>
                 </div>
            </div>
        </div>
      </div>

      {/* 2. Main Footer - Black Background */}
      <footer id="contact" className="bg-cinema-black text-white relative z-30 -mt-[15vh] md:-mt-[27.5vh] pt-[20vh] md:pt-[35vh] pb-12 overflow-hidden">
         
         <div className="container mx-auto px-6 md:px-12 relative">
             
             {/* Big Typography Header Interaction */}
             <div className="mb-12 md:mb-28 flex flex-col items-start border-b border-white/10 pb-8 md:pb-12 animate-on-scroll">
                 <span className="font-mono text-[10px] md:text-sm text-white/40 uppercase tracking-[0.2em] mb-4 md:mb-6 ml-1">
                    Have an idea?
                 </span>
                 <a 
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="relative block w-full group cursor-none"
                 >
                    <h2 className="font-display font-black text-[10vw] leading-[0.8] tracking-tighter text-transparent transition-all duration-500 group-hover:text-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                        SAY HELLO<span className="text-accent-orange group-hover:text-white transition-colors">.</span>
                    </h2>
                    {/* Fill effect on hover */}
                    <h2 className="absolute top-0 left-0 font-display font-black text-[10vw] leading-[0.8] tracking-tighter text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        SAY HELLO.
                    </h2>
                 </a>
             </div>

             {/* Redesigned Clean Layout - No Giant Watermark */}
             <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between animate-on-scroll delay-100 pb-8 md:pb-12">

                {/* Column 1: Identity & Copyright */}
                <div className="md:w-1/3 flex flex-col justify-between h-full min-h-[80px] md:min-h-[120px]">
                   <div>
                       <h3 className="font-display font-bold text-xl md:text-2xl mb-2 md:mb-4 text-white">M. Eddarrazy</h3>
                       <p className="font-sans text-white/50 text-xs md:text-sm leading-relaxed max-w-xs">
                         Video Editor & Digital Creator.<br/>
                         Engineering attention through motion & design.
                       </p>
                   </div>
                   <div className="hidden md:block mt-8 font-mono text-[10px] text-white/20 uppercase tracking-widest">
                     © 2025 Mustapha Eddarrazy. All Rights Reserved.
                   </div>
                </div>

                {/* Column 2: Links */}
                <div className="md:w-1/3 flex gap-12 md:justify-center">
                   <div>
                      <h4 className="font-mono text-[10px] md:text-xs text-accent-orange uppercase tracking-widest mb-4 md:mb-6">Directory</h4>
                      <ul className="space-y-2 md:space-y-3 font-sans font-medium text-sm md:text-lg">
                         {['Work', 'Services', 'About'].map(item => (
                             <li key={item}>
                                 <Link to={`/${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                                     {item}
                                 </Link>
                             </li>
                         ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-mono text-[10px] md:text-xs text-accent-orange uppercase tracking-widest mb-4 md:mb-6">Socials</h4>
                       <ul className="space-y-2 md:space-y-3 font-sans font-medium text-sm md:text-lg">
                         <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
                         <li><a href="#" className="text-white/60 hover:text-white transition-colors">Instagram</a></li>
                         <li><a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a></li>
                      </ul>
                   </div>
                </div>

                 {/* Column 3: Contact & Back to Top */}
                 <div className="md:w-1/3 flex flex-col justify-between items-start md:items-end min-h-[80px] md:min-h-[120px]">
                    <div className="text-left md:text-right">
                       <h4 className="font-mono text-[10px] md:text-xs text-accent-orange uppercase tracking-widest mb-4 md:mb-6">Contact</h4>
                       <a href={`mailto:${SOCIAL_LINKS.email}`} className="font-display font-bold text-lg md:text-2xl hover:text-white/70 transition-colors block mb-2 break-all">
                         {SOCIAL_LINKS.email}
                       </a>
                       <span className="font-sans text-xs md:text-sm text-white/40">{SOCIAL_LINKS.location}</span>
                    </div>
                    
                    <button 
                          onClick={scrollToTop}
                          className="mt-8 md:mt-0 flex items-center gap-2 group text-white/30 hover:text-accent-orange transition-colors"
                      >
                          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">Back to top</span>
                          <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <div className="md:hidden mt-12 font-mono text-[10px] text-white/20 uppercase tracking-widest">
                        © 2025 Mustapha Eddarrazy. All Rights Reserved.
                    </div>
                 </div>

             </div>

         </div>
      </footer>
    </div>
  );
};

export default Footer;
