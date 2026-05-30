
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationProps {
    hideMenu?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ hideMenu = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Magnetic Button Logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.3;
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
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleNavigation = (href: string) => {
      setIsOpen(false);
      navigate(href);
  };

  return (
    <>
      {/* 1. Header (Sticky Top Bar) */}
      <nav className="fixed top-0 left-0 right-0 z-[1002] px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none w-full">
        <button 
            onClick={() => handleNavigation('/')}
            className="pointer-events-auto group relative z-50"
        >
           <span className="font-display font-black text-3xl tracking-tighter hover:text-accent-orange transition-colors duration-300">M.</span>
        </button>

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

      {/* 2. Minimal Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[1005] bg-[#050505] w-full h-[100dvh] transition-transform duration-700 cubic-bezier(0.76, 0, 0.24, 1) ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full w-full flex flex-col pt-6 md:pt-12 px-6 md:px-12">
            
            {/* Top Bar for Close button inside Modal */}
            <div className="flex justify-between items-center w-full min-h-[48px]">
               {/* Left spacer to align with logo */}
               <div className="w-12"></div>
               
               <button 
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 text-white hover:text-accent-orange transition-colors"
               >
                   <span className="font-mono text-xs uppercase tracking-widest hidden md:block group-hover:-translate-x-2 transition-transform">Close</span>
                   <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-accent-orange flex items-center justify-center transition-colors">
                       <X size={20} />
                   </div>
               </button>
            </div>

            {/* Central Navigation Links */}
            <div className="flex-1 flex flex-col justify-center items-center w-full">
                <ul className="flex flex-col items-center gap-6 md:gap-8 w-full">
                    {navItems.map((item, index) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <li key={item.label} className="overflow-hidden">
                                <button 
                                    onClick={() => handleNavigation(item.href)}
                                    className={`group flex items-center justify-center transition-transform duration-[800ms] cubic-bezier(0.76, 0, 0.24, 1) ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                                    style={{ transitionDelay: `${index * 50 + 200}ms` }}
                                >
                                    <span className={`font-display font-medium text-4xl md:text-6xl tracking-tight transition-colors duration-300 ${
                                        isActive ? 'text-accent-orange' : 'text-white hover:text-accent-orange'
                                    }`}>
                                        {item.label}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Bottom Footer Info */}
            <div className={`flex flex-col md:flex-row justify-between items-center w-full border-t border-white/10 pb-8 pt-6 gap-6 md:gap-0 transition-opacity duration-1000 delay-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-mono text-[10px] uppercase text-white/40 tracking-widest">Get in touch</span>
                    <a href="mailto:Mostafadrazy@gmail.com" className="font-display font-bold text-lg md:text-xl text-white hover:text-accent-orange transition-colors">
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
