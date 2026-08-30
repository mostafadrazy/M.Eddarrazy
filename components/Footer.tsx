import React from 'react';
import { SOCIAL_LINKS, ASSETS } from '../constants';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isLight } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative z-30">
      
      {/* 1. Independent Floating Card Container */}
      <div className="relative z-40 px-4 md:px-8 -mt-[15vh] md:-mt-[27.5vh] pointer-events-none animate-on-scroll">
        <div className="pointer-events-auto w-full max-w-[96%] mx-auto aspect-video min-h-[320px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative group bg-cinema-black border border-white/10">
            
            {/* Background Image */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
            <img 
                src={ASSETS.footerBanner} 
                alt="Start a project" 
                className="w-full h-full object-cover object-[75%_center] lg:object-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100 opacity-90"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10"></div>

            {/* Content Container - Flex Layout */}
            <div className="absolute inset-0 z-20 p-6 md:p-12 lg:p-16 flex flex-col justify-between">
                 
                 {/* Top Content Block */}
                 <div className="flex flex-col items-start gap-4 md:gap-6">
                    <div className="bg-white/15 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 w-fit">
                        <span className="font-mono text-[10px] md:text-xs text-accent-red uppercase tracking-[0.3em] font-bold">
                            Start a Project
                        </span>
                    </div>
                    
                    {/* Big Headline */}
                    <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter drop-shadow-2xl text-white preserve-white">
                        Let's <br/> Make It <br/> Happen.
                    </h2>
                 </div>

                 {/* Bottom Content Row */}
                 <div className="flex justify-end xl:mb-4">
                    
                    {/* CTA Button */}
                    <a 
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="group/btn bg-white/10 backdrop-blur-xl border border-white/25 hover:bg-accent-red hover:border-accent-red text-white preserve-white pl-6 pr-2 py-2 md:pl-8 rounded-full font-sans font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-between gap-4 md:gap-8 w-full md:w-fit shadow-2xl"
                    >
                        <span className="uppercase tracking-widest text-white">Start a conversation</span>
                        <span className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center group-hover/btn:rotate-45 group-hover/btn:bg-black group-hover/btn:text-white transition-all duration-300">
                            <ArrowUpRight size={18} />
                        </span>
                    </a>
                 </div>
            </div>
        </div>
      </div>

      {/* 2. Main Footer */}
      <footer id="contact" className={`relative z-30 -mt-[15vh] md:-mt-[27.5vh] pt-[20vh] md:pt-[35vh] pb-12 overflow-hidden transition-colors duration-400 ${
        isLight ? 'bg-[#f0f0f4] text-black border-t border-black/5' : 'bg-cinema-black text-white'
      }`}>
         
         <div className="container mx-auto px-6 md:px-12 relative">

             {/* Redesigned Clean Layout */}
             <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between animate-on-scroll delay-100 pb-8 md:pb-12">

                {/* Column 1: Identity & Copyright */}
                <div className="md:w-1/3 flex flex-col justify-between h-full min-h-[80px] md:min-h-[120px]">
                   <div>
                       <div className="flex items-center gap-3 mb-2 md:mb-4">
                           <Logo className={`w-10 h-10 md:w-12 md:h-12 ${isLight ? 'text-black' : 'text-white'}`} />
                           <h3 className={`font-display font-bold text-xl md:text-2xl ${isLight ? 'text-black' : 'text-white'}`}>M. Eddarrazy</h3>
                       </div>
                       <p className={`font-sans text-xs md:text-sm leading-relaxed max-w-xs ${isLight ? 'text-black/60' : 'text-white/50'}`}>
                         Video Editor & Digital Creator.<br/>
                         Engineering attention through motion & design.
                       </p>
                   </div>
                   <div className={`hidden md:block mt-8 font-mono text-[10px] uppercase tracking-widest ${isLight ? 'text-black/30' : 'text-white/20'}`}>
                     © 2025 Mustapha Eddarrazy. All Rights Reserved.
                   </div>
                </div>

                {/* Column 2: Links */}
                <div className="md:w-1/3 flex gap-12 md:justify-center">
                   <div>
                      <h4 className="font-mono text-[10px] md:text-xs text-accent-red uppercase tracking-widest mb-4 md:mb-6">Directory</h4>
                      <ul className="space-y-2 md:space-y-3 font-sans font-medium text-sm md:text-lg">
                         {['Work', 'About', 'Contact'].map(item => (
                             <li key={item}>
                                 <Link to={`/${item.toLowerCase()}`} className={`transition-colors ${
                                   isLight ? 'text-black/60 hover:text-accent-red' : 'text-white/60 hover:text-accent-red'
                                 }`}>
                                     {item}
                                 </Link>
                             </li>
                         ))}
                      </ul>
                   </div>
                   <div>
                      <h4 className="font-mono text-[10px] md:text-xs text-accent-red uppercase tracking-widest mb-4 md:mb-6">Socials</h4>
                       <ul className="space-y-2 md:space-y-3 font-sans font-medium text-sm md:text-lg">
                          <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className={`transition-colors ${isLight ? 'text-black/60 hover:text-accent-red' : 'text-white/60 hover:text-accent-red'}`}>LinkedIn</a></li>
                          <li><a href="#" className={`transition-colors ${isLight ? 'text-black/60 hover:text-accent-red' : 'text-white/60 hover:text-accent-red'}`}>Instagram</a></li>
                          <li><a href="#" className={`transition-colors ${isLight ? 'text-black/60 hover:text-accent-red' : 'text-white/60 hover:text-accent-red'}`}>Twitter</a></li>
                       </ul>
                   </div>
                </div>

                 {/* Column 3: Contact & Back to Top */}
                 <div className="md:w-1/3 flex flex-col justify-between items-start md:items-end min-h-[80px] md:min-h-[120px]">
                    <div className="text-left md:text-right">
                       <h4 className="font-mono text-[10px] md:text-xs text-accent-red uppercase tracking-widest mb-4 md:mb-6">Contact</h4>
                       <a href={`mailto:${SOCIAL_LINKS.email}`} className={`font-display font-bold text-lg md:text-2xl transition-colors block mb-2 break-all ${
                         isLight ? 'text-black hover:text-accent-red' : 'text-white hover:text-accent-red'
                       }`}>
                         {SOCIAL_LINKS.email}
                       </a>
                       <span className={`font-sans text-xs md:text-sm ${isLight ? 'text-black/40' : 'text-white/40'}`}>{SOCIAL_LINKS.location}</span>
                    </div>
                    
                    <button 
                          onClick={scrollToTop}
                          className={`mt-8 md:mt-0 flex items-center gap-2 group transition-colors ${
                            isLight ? 'text-black/40 hover:text-accent-red' : 'text-white/30 hover:text-accent-red'
                          }`}
                      >
                          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">Back to top</span>
                          <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <div className={`md:hidden mt-12 font-mono text-[10px] uppercase tracking-widest ${
                      isLight ? 'text-black/30' : 'text-white/20'
                    }`}>
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
