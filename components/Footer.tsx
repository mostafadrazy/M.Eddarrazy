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
    <div className="relative z-30 pt-0">
      
      {/* 1. Safe Area Constrained CTA Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-12 md:mb-16 animate-on-scroll">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/8] lg:aspect-[2.1/1] min-h-[280px] sm:min-h-[320px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-cinema-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group flex flex-col justify-between p-5 sm:p-8 md:p-12">
            
            {/* Background Image with Cinematic Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-cinema-black flex items-center justify-center">
                <img 
                    src={ASSETS.footerBanner} 
                    alt="Start a project" 
                    className="w-full h-full object-cover sm:object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out opacity-65 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 z-10"></div>
            </div>

            {/* Top Content Block */}
            <div className="relative z-20 flex flex-col items-start gap-2.5 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/20 w-fit">
                    <span className="font-mono text-[9px] sm:text-[10px] md:text-xs text-accent-red uppercase tracking-[0.25em] font-bold">
                        Start a Project
                    </span>
                </div>
                
                {/* Balanced Headline */}
                <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] md:leading-[0.9] tracking-tighter drop-shadow-2xl text-white preserve-white">
                    Let's Make It <br className="hidden sm:inline" /> Happen.
                </h2>
            </div>

            {/* Bottom Content Row */}
            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-5 mt-3 sm:mt-4 border-t border-white/10">
                <p className="font-sans text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
                    Have an upcoming project, brand narrative, or motion inquiry? Let's build something cinematic together.
                </p>

                {/* CTA Button */}
                <a 
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="group/btn bg-white/10 backdrop-blur-xl border border-white/25 hover:bg-accent-red hover:border-accent-red text-white preserve-white px-4 sm:pl-6 sm:pr-2 py-2.5 sm:py-2 rounded-full font-sans font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-between gap-3 sm:gap-4 shrink-0 shadow-lg hover:shadow-accent-red/20 w-full sm:w-fit"
                >
                    <span className="uppercase tracking-widest text-white">Start a conversation</span>
                    <span className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white text-black rounded-full flex items-center justify-center group-hover/btn:rotate-45 group-hover/btn:bg-black group-hover/btn:text-white transition-all duration-300">
                        <ArrowUpRight size={15} />
                    </span>
                </a>
            </div>
        </div>
      </div>

      {/* 2. Main Footer */}
      <footer id="contact" className={`relative z-20 pb-10 sm:pb-12 pt-8 sm:pt-10 border-t transition-colors duration-400 ${
        isLight ? 'bg-[#f0f0f4] text-black border-black/10' : 'bg-cinema-black text-white border-white/10'
      }`}>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative">

             {/* Redesigned Clean Layout */}
             <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between animate-on-scroll delay-100 pb-8 md:pb-10">

                {/* Column 1: Identity & Copyright */}
                <div className="md:w-1/3 flex flex-col justify-between">
                   <div>
                       <div className="flex items-center gap-3 mb-3">
                           <Logo className={`w-9 h-9 md:w-10 md:h-10 ${isLight ? 'text-black' : 'text-white'}`} />
                           <h3 className={`font-display font-bold text-xl ${isLight ? 'text-black' : 'text-white'}`}>M. Eddarrazy</h3>
                       </div>
                       <p className={`font-sans text-xs md:text-sm leading-relaxed max-w-xs ${isLight ? 'text-black/60' : 'text-white/50'}`}>
                         Video Editor & Digital Creator.<br/>
                         Engineering attention through motion & design.
                       </p>
                   </div>
                   <div className={`hidden md:block mt-8 font-mono text-[10px] uppercase tracking-widest ${isLight ? 'text-black/30' : 'text-white/20'}`}>
                     © {new Date().getFullYear()} Mustapha Eddarrazy. All Rights Reserved.
                   </div>
                </div>

                {/* Column 2: Links */}
                <div className="md:w-1/3 flex gap-12 md:justify-center">
                   <div>
                      <h4 className="font-mono text-[10px] md:text-xs text-accent-red uppercase tracking-widest mb-4">Directory</h4>
                      <ul className="space-y-2.5 font-sans font-medium text-sm md:text-base">
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
                      <h4 className="font-mono text-[10px] md:text-xs text-accent-red uppercase tracking-widest mb-4">Socials</h4>
                       <ul className="space-y-2.5 font-sans font-medium text-sm md:text-base">
                          <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className={`transition-colors ${isLight ? 'text-black/60 hover:text-accent-red' : 'text-white/60 hover:text-accent-red'}`}>LinkedIn</a></li>
                          <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className={`transition-colors ${isLight ? 'text-black/60 hover:text-accent-red' : 'text-white/60 hover:text-accent-red'}`}>GitHub</a></li>
                          {/* Instagram / X links hidden until real profile URLs are provided */}
                       </ul>
                   </div>
                </div>

                 {/* Column 3: Contact & Back to Top */}
                 <div className="md:w-1/3 flex flex-col justify-between items-start md:items-end">
                    <div className="text-left md:text-right">
                       <h4 className="font-mono text-[10px] md:text-xs text-accent-red uppercase tracking-widest mb-4">Contact</h4>
                       <a href={`mailto:${SOCIAL_LINKS.email}`} className={`font-display font-bold text-base md:text-xl transition-colors block mb-1 break-all ${
                         isLight ? 'text-black hover:text-accent-red' : 'text-white hover:text-accent-red'
                       }`}>
                         {SOCIAL_LINKS.email}
                       </a>
                       <span className={`font-sans text-xs md:text-sm ${isLight ? 'text-black/40' : 'text-white/40'}`}>{SOCIAL_LINKS.location}</span>
                    </div>
                    
                    <button 
                          onClick={scrollToTop}
                          className={`mt-8 flex items-center gap-2 group transition-colors cursor-pointer ${
                            isLight ? 'text-black/40 hover:text-accent-red' : 'text-white/30 hover:text-accent-red'
                          }`}
                      >
                          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">Back to top</span>
                          <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <div className={`md:hidden mt-8 font-mono text-[10px] uppercase tracking-widest ${
                      isLight ? 'text-black/30' : 'text-white/20'
                    }`}>
                        © {new Date().getFullYear()} Mustapha Eddarrazy. All Rights Reserved.
                    </div>
                 </div>

              </div>

         </div>
      </footer>
    </div>
  );
};

export default Footer;
