
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, ASSETS } from '../constants';

interface NavigationProps {
    currentView?: 'home' | 'work' | 'insights' | 'about' | 'services' | 'contact';
    onViewChange?: (view: 'home' | 'work' | 'insights' | 'about' | 'services' | 'contact') => void;
    hideMenu?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentView = 'home', onViewChange, hideMenu = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  // Magnetic Button Logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.3; // 0.3 factor limits the movement range
    const y = (e.clientY - (top + height / 2)) * 0.3;
    setButtonPos({ x, y });
  };

  const handleMouseLeave = () => {
    setButtonPos({ x: 0, y: 0 });
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { label: 'Work', href: '#work', img: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764377769/Screenshot_10-5-2025_193454_www.9adiya.site_v37yha.jpg", number: "01", isPage: true },
    { label: 'Services', href: '#services', img: ASSETS.heroImageDesktop, number: "02", isPage: true },
    { label: 'Insights', href: '#insights', img: "https://res.cloudinary.com/dmnqlruhl/image/upload/v1764373738/nano-banana_A_portrait_1with_dram_jlmfv8.png", number: "03", isPage: true },
    { label: 'About', href: '#about', img: IMAGES.about, number: "04", isPage: true },
    { label: 'Contact', href: '#contact', img: ASSETS.heroImagePortrait, number: "05", isPage: true }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
      setIsOpen(false);
      
      if (!onViewChange) return;

      if (item.label === 'Work') {
          onViewChange('work');
      } else if (item.label === 'Services') {
          onViewChange('services');
      } else if (item.label === 'Insights') {
          onViewChange('insights');
      } else if (item.label === 'About') {
          onViewChange('about');
      } else if (item.label === 'Contact') {
          onViewChange('contact');
      } else {
          // Home
          if (currentView !== 'home') {
              onViewChange('home');
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
          } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      }
  };

  return (
    <>
      {/* 1. Header (Sticky Top Bar) - High Z-Index to stay above Modal */}
      <nav className="fixed top-0 left-0 right-0 z-[1002] px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none w-full">
        
        {/* Logo - Always visible and clickable */}
        <button 
            onClick={() => handleNavigation({ label: 'Home', href: '#', img: '', number: '00', isPage: false })}
            className="pointer-events-auto group relative z-50"
        >
           <span className="font-display font-black text-3xl tracking-tighter hover:text-accent-orange transition-colors duration-300">M.</span>
        </button>

        {/* Menu Trigger - Magnetic - Hidden when hideMenu is true OR when menu is open */}
        <button 
            ref={buttonRef}
            onClick={() => setIsOpen(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)` }}
            className={`pointer-events-auto group flex items-center gap-4 z-50 transition-all duration-300 ease-out ${
                hideMenu || isOpen
                ? 'opacity-0 invisible pointer-events-none' 
                : 'opacity-100 visible pointer-events-auto'
            }`}
            aria-label="Open Menu"
        >
            <span className="hidden md:block font-mono text-xs font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">
                Menu
            </span>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:bg-accent-orange">
                <Menu size={20} strokeWidth={2.5} />
            </div>
        </button>
      </nav>

      {/* 2. Full Screen Cinematic Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#050505] w-full h-[100dvh] transition-all duration-[800ms] cubic-bezier(0.76, 0, 0.24, 1) ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        
        {/* BACKGROUND LAYER: Dynamic Images */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {navItems.map((item) => (
                <div 
                    key={`bg-${item.label}`}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${hoveredLink === item.label ? 'opacity-30' : 'opacity-0'}`}
                >
                    <img 
                        src={item.img} 
                        alt="" 
                        className="w-full h-full object-cover grayscale scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12">
            
            {/* Top Bar (Close) */}
            <div className="flex justify-end w-full">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 text-white hover:text-accent-orange transition-colors"
                >
                    <span className="font-mono text-xs uppercase tracking-widest hidden md:block group-hover:-translate-x-2 transition-transform">Close</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-accent-orange flex items-center justify-center transition-colors bg-black/50 backdrop-blur-sm">
                        <X size={20} />
                    </div>
                </button>
            </div>

            {/* Central Navigation List */}
            <div className="flex flex-col items-center justify-center flex-1">
                <ul className="flex flex-col items-center gap-2 md:gap-4">
                    {navItems.map((item, index) => (
                        <li key={item.label} className="relative overflow-hidden w-full text-center">
                            <button 
                                onClick={() => handleNavigation(item)}
                                onMouseEnter={() => setHoveredLink(item.label)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="group inline-block relative py-2 md:py-4 cursor-pointer"
                            >
                                {/* Mobile: Simple White Text */}
                                <span className="md:hidden font-display font-black text-4xl text-white uppercase tracking-tighter">
                                    {item.label}
                                </span>

                                {/* Desktop: Dual Layer Text for Crisp Stroke & Fill */}
                                <div className="hidden md:block relative">
                                    
                                    {/* Layer 1: Fill (Animates in) */}
                                    <span 
                                        className={`absolute inset-0 font-display font-black text-6xl md:text-8xl uppercase tracking-widest text-white transition-all duration-300 ease-out ${
                                            hoveredLink === item.label ? 'opacity-100' : 'opacity-0'
                                        } ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                    >
                                        {item.label}
                                    </span>

                                    {/* Layer 2: Stroke (Always Visible, sits on top to keep edges sharp) */}
                                    <span 
                                        className={`relative z-10 block font-display font-black text-6xl md:text-8xl uppercase tracking-widest text-transparent transition-all duration-300 ${
                                            hoveredLink && hoveredLink !== item.label 
                                                ? 'opacity-30 blur-[2px] scale-95' 
                                                : 'opacity-100 scale-100'
                                        } ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                                        style={{ 
                                            WebkitTextStroke: '1px #ffffff',
                                            transitionDelay: `${index * 50}ms`
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </div>

                                {/* Decorative Line */}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-accent-orange transition-all duration-500 ease-out ${hoveredLink === item.label ? 'w-full' : 'w-0'}`}></span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Footer Info */}
            <div className={`flex flex-col md:flex-row justify-between items-center md:items-end w-full border-t border-white/10 pt-8 gap-6 md:gap-0 transition-all duration-1000 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-mono text-[10px] uppercase text-white/40 tracking-widest">Get in touch</span>
                    <a href="mailto:Mostafadrazy@gmail.com" className="font-display font-bold text-xl md:text-2xl text-white hover:text-accent-orange transition-colors">
                        Mostafadrazy@gmail.com
                    </a>
                </div>

                <div className="flex gap-8">
                    {['LinkedIn', 'Behance', 'Instagram'].map((social) => (
                        <a key={social} href="#" className="font-sans text-xs md:text-sm uppercase tracking-wider text-white/60 hover:text-white transition-colors">
                            {social}
                        </a>
                    ))}
                </div>

            </div>

        </div>

      </div>
    </>
  );
};

export default Navigation;
